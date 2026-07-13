// ===== APP =====

(function () {
  var state = {
    selectedWorkstation: null,
    selectedBorrower: "",
    workstations: [],
    workstationsUnsub: null,
    activeBorrowsUnsub: null,
    historyLastDoc: null,
    viewingHistory: false
  };

  // ===== HELPERS =====

  function $(id) { return document.getElementById(id); }

  function showView(viewId) {
    document.querySelectorAll(".view").forEach(function (v) {
      v.classList.remove("active");
    });
    $(viewId).classList.add("active");
  }

  function formatTime(timestamp) {
    if (!timestamp) return "—";
    var d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    var day = String(d.getDate()).padStart(2, "0");
    var month = String(d.getMonth() + 1).padStart(2, "0");
    var hours = String(d.getHours()).padStart(2, "0");
    var mins = String(d.getMinutes()).padStart(2, "0");
    return day + "." + month + " " + hours + ":" + mins;
  }

  function formatDate(timestamp) {
    if (!timestamp) return "—";
    var d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    var day = String(d.getDate()).padStart(2, "0");
    var month = String(d.getMonth() + 1).padStart(2, "0");
    var year = d.getFullYear();
    var hours = String(d.getHours()).padStart(2, "0");
    var mins = String(d.getMinutes()).padStart(2, "0");
    return day + "." + month + "." + year + " " + hours + ":" + mins;
  }

  function showLoading(show) {
    $("loading-overlay").classList.toggle("hidden", !show);
  }

  function showToast(message, type) {
    type = type || "info";
    var container = $("toast-container");
    var toast = document.createElement("div");
    toast.className = "toast " + type;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s";
      setTimeout(function () { toast.remove(); }, 300);
    }, 3000);
  }

  function showError(message) {
    showToast(message, "error");
  }

  // ===== STUDENT VIEW =====

  function renderWorkstations(workstations) {
    var list = $("workstations-list");

    if (!workstations || workstations.length === 0) {
      list.innerHTML = '<p class="empty-state">Ingen enheter tilgjengelig</p>';
      return;
    }

    var html = "";
    workstations.forEach(function (ws) {
      var isAvailable = ws.status === "available";
      var isBorrowed = ws.status === "borrowed";
      var statusClass = isAvailable ? "available" : "borrowed";
      var details = [ws.keyboard, ws.mouse].filter(Boolean).join(", ");

      html +=
        '<div class="workstation-item ' + statusClass + '" data-id="' + escapeHtml(ws.id) + '" data-available="' + isAvailable + '">' +
          '<span class="status-dot ' + statusClass + '"></span>' +
          '<div class="workstation-info">' +
            '<div class="workstation-name">' + escapeHtml(ws.name) + "</div>" +
            (details ? '<div class="workstation-details">' + escapeHtml(details) + "</div>" : "") +
            (isBorrowed && ws.borrower ? '<div class="workstation-borrower">Lånt av: ' + escapeHtml(ws.borrower) + "</div>" : "") +
          "</div>" +
        "</div>";
    });
    list.innerHTML = html;

    list.querySelectorAll(".workstation-item").forEach(function (el) {
      el.addEventListener("click", function () {
        var id = el.dataset.id;
        var available = el.dataset.available === "true";
        if (available) {
          handleWorkstationSelect(id);
        }
      });
    });
  }

  function escapeHtml(text) {
    if (!text) return "";
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  function handleWorkstationSelect(id) {
    var name = $("borrower-name").value.trim();
    if (!name) {
      $("borrower-name").focus();
      showToast("Vennligst skriv inn navnet ditt først", "error");
      return;
    }
    state.selectedWorkstation = id;
    state.selectedBorrower = name;
    showConfirmation(id);
  }

  function showConfirmation(workstationId) {
    var overlay = $("confirmation");
    if (!overlay) return;

    var name = $("borrower-name").value.trim();
    var details = $("confirmation-details");

    // Get workstation data from DOM or refetch
    var wsRef = window.db.collection("workstations").doc(workstationId);
    wsRef.get().then(function (doc) {
      if (!doc.exists) {
        showError("Enheten finnes ikke lenger");
        return;
      }
      var data = doc.data();
      if (data.status !== "available") {
        showError("Denne enheten er allerede lånt ut");
        overlay.classList.add("hidden");
        return;
      }

      var items = [data.name];
      if (data.keyboard) items.push(data.keyboard);
      if (data.mouse) items.push(data.mouse);

      details.innerHTML = items.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("");

      // Add borrower to details
      var oldBorrower = overlay.querySelector(".dynamic-borrower");
      if (oldBorrower) oldBorrower.remove();
      var borrowerEl = document.createElement("p");
      borrowerEl.className = "dynamic-borrower";
      borrowerEl.style.cssText = "margin-top:12px;font-size:0.9375rem;color:var(--gray-600);";
      borrowerEl.innerHTML = "<strong>Låntaker:</strong> " + escapeHtml(name);
      details.parentNode.insertBefore(borrowerEl, details.nextSibling);

      overlay.classList.remove("hidden");
    }).catch(function (err) {
      console.error(err);
      showError("Kunne ikke laste enhetsinformasjon");
    });
  }

  function handleConfirmBorrow() {
    if (!state.selectedWorkstation) return;

    showLoading(true);
    borrowWorkstation(state.selectedWorkstation, state.selectedBorrower)
      .then(function () {
        showLoading(false);
        $("confirmation").classList.add("hidden");
        showToast("Du låner " + state.selectedWorkstation + " — God bruk!", "success");
        $("borrower-name").value = "";
        state.selectedWorkstation = null;
        state.selectedBorrower = "";
      })
      .catch(function (err) {
        showLoading(false);
        console.error(err);
        showError("Kunne ikke fullføre lånet. Prøv igjen.");
      });
  }

  function handleCancelBorrow() {
    var overlay = $("confirmation");
    var dynamicEl = overlay.querySelector(".dynamic-borrower");
    if (dynamicEl) dynamicEl.remove();
    overlay.classList.add("hidden");
    state.selectedWorkstation = null;
    state.selectedBorrower = "";
  }

  // ===== ADMIN VIEW =====

  function renderActiveBorrows(records) {
    var list = $("active-borrows-list");

    if (!records || records.length === 0) {
      list.innerHTML = '<p class="empty-state">Ingen utlånt utstyr</p>';
      return;
    }

    var html = "";
    records.forEach(function (rec) {
      html +=
        '<div class="borrow-card" data-id="' + escapeHtml(rec.id) + '">' +
          '<div class="borrow-card-info">' +
            '<h4>' + escapeHtml(rec.workstation) + "</h4>" +
            '<p>Lånt av: ' + escapeHtml(rec.borrower) + "</p>" +
            '<div class="borrow-card-time">' + formatTime(rec.borrowedAt) + "</div>" +
          "</div>" +
          '<button class="btn btn-danger btn-sm return-btn" data-workstation="' + escapeHtml(rec.workstation) + '">Returner</button>' +
        "</div>";
    });
    list.innerHTML = html;

    list.querySelectorAll(".return-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var ws = btn.dataset.workstation;
        handleReturn(ws);
      });
    });
  }

  function handleReturn(workstationId) {
    if (!confirm("Returner " + workstationId + "?")) return;
    showLoading(true);
    returnWorkstation(workstationId)
      .then(function () {
        showLoading(false);
        showToast(workstationId + " er returnert", "success");
      })
      .catch(function (err) {
        showLoading(false);
        console.error(err);
        showError("Kunne ikke returnere. Prøv igjen.");
      });
  }

  function loadHistory(append) {
    showLoading(true);
    var startAfter = append ? state.historyLastDoc : null;

    getHistory(20, startAfter)
      .then(function (result) {
        showLoading(false);
        state.historyLastDoc = result.lastVisible;

        var list = $("history-list");

        if (!append) {
          list.innerHTML = "";
        }

        if (result.records.length === 0 && !append) {
          list.innerHTML = '<p class="empty-state">Ingen historikk</p>';
          $("load-more-history-btn").classList.add("hidden");
          return;
        }

        var html = "";
        result.records.forEach(function (rec) {
          var status = rec.returnedAt ? "Returnert" : "Aktiv";
          var statusColor = rec.returnedAt ? "var(--green)" : "var(--red)";

          html +=
            '<div class="borrow-card">' +
              '<div class="borrow-card-info">' +
                '<h4>' + escapeHtml(rec.workstation) + "</h4>" +
                '<p>Lånt av: ' + escapeHtml(rec.borrower) + "</p>" +
                '<div class="borrow-card-time">' +
                  "Lånt: " + formatDate(rec.borrowedAt) +
                  (rec.returnedAt ? " | Returnert: " + formatDate(rec.returnedAt) : "") +
                "</div>" +
              "</div>" +
              '<span style="font-size:0.8125rem;font-weight:600;color:' + statusColor + ';">' + status + "</span>" +
            "</div>";
        });

        if (append) {
          list.insertAdjacentHTML("beforeend", html);
        } else {
          list.innerHTML = html;
        }

        $("load-more-history-btn").classList.toggle("hidden", result.records.length < 20);
      })
      .catch(function (err) {
        showLoading(false);
        console.error(err);
        showError("Kunne ikke laste historikk");
      });
  }

  // ===== MANAGE WORKSTATIONS =====

  function renderManageWorkstations(workstations) {
    var list = $("workstation-manage-list");

    if (!workstations || workstations.length === 0) {
      list.innerHTML = '<p class="empty-state">Ingen enheter</p>';
      return;
    }

    var html = "";
    workstations.forEach(function (ws) {
      var isAvailable = ws.status === "available";
      var statusText = isAvailable ? "Ledig" : "Utlånt";
      html +=
        '<div class="workstation-manage-item">' +
          '<div>' +
            '<div class="ws-name">' + escapeHtml(ws.name) + "</div>" +
            '<div class="ws-status">' + statusText + "</div>" +
          "</div>" +
          (isAvailable
            ? '<button class="btn-text remove-ws-btn" data-id="' + escapeHtml(ws.id) + '">Fjern</button>'
            : "") +
        "</div>";
    });
    list.innerHTML = html;

    list.querySelectorAll(".remove-ws-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.dataset.id;
        if (confirm("Fjern " + id + "?")) {
          showLoading(true);
          removeWorkstation(id)
            .then(function () {
              showLoading(false);
              showToast(id + " er fjernet", "success");
            })
            .catch(function (err) {
              showLoading(false);
              console.error(err);
              showError("Kunne ikke fjerne enheten");
            });
        }
      });
    });
  }

  // ===== SUBSCRIPTIONS =====

  function startStudentSubscriptions() {
    if (state.workstationsUnsub) state.workstationsUnsub();
    state.workstationsUnsub = subscribeWorkstations(function (workstations) {
      state.workstations = workstations;
      renderWorkstations(workstations);
      if ($("tab-manage-content").classList.contains("active")) {
        renderManageWorkstations(workstations);
      }
    });
  }

  function startAdminSubscriptions() {
    if (state.activeBorrowsUnsub) state.activeBorrowsUnsub();
    state.activeBorrowsUnsub = subscribeActiveBorrows(function (records) {
      renderActiveBorrows(records);
    });
  }

  function stopSubscriptions() {
    if (state.workstationsUnsub) {
      state.workstationsUnsub();
      state.workstationsUnsub = null;
    }
    if (state.activeBorrowsUnsub) {
      state.activeBorrowsUnsub();
      state.activeBorrowsUnsub = null;
    }
  }

  // ===== TABS =====

  function switchTab(tabName) {
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
      btn.classList.remove("active");
    });
    document.querySelectorAll(".tab-content").forEach(function (content) {
      content.classList.remove("active");
    });

    $("tab-" + tabName).classList.add("active");
    $("tab-" + tabName + "-content").classList.add("active");

    if (tabName === "borrows") {
      // Already listening via subscription
    } else if (tabName === "history") {
      state.historyLastDoc = null;
      loadHistory(false);
    } else if (tabName === "manage") {
      renderManageWorkstations(state.workstations);
    }
  }

  // ===== EVENT LISTENERS =====

  function setupEventListeners() {
    // Admin login button
    $("admin-login-btn").addEventListener("click", function () {
      showView("login-view");
    });

    // Back to student view
    $("back-to-student-btn").addEventListener("click", function () {
      showView("student-view");
    });

    // Login form
    $("login-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var email = $("login-email").value.trim();
      var password = $("login-password").value;
      var errorEl = $("login-error");

      errorEl.classList.add("hidden");
      showLoading(true);

      login(email, password)
        .then(function () {
          showLoading(false);
          $("login-email").value = "";
          $("login-password").value = "";
          showView("admin-view");
          startAdminSubscriptions();
        })
        .catch(function (err) {
          showLoading(false);
          var message = "Feil e-post eller passord";
          if (err.code === "auth/user-not-found") message = "Bruker ikke funnet";
          if (err.code === "auth/wrong-password") message = "Feil passord";
          if (err.code === "auth/invalid-email") message = "Ugyldig e-post";
          if (err.code === "auth/too-many-requests") message = "For mange forsøk. Prøv igjen senere.";
          errorEl.textContent = message;
          errorEl.classList.remove("hidden");
        });
    });

    // Logout
    $("logout-btn").addEventListener("click", function () {
      logout();
      stopSubscriptions();
      showView("student-view");
      showToast("Logget ut", "info");
    });

    // Borrow confirmation
    $("confirm-borrow-btn").addEventListener("click", handleConfirmBorrow);
    $("cancel-borrow-btn").addEventListener("click", handleCancelBorrow);

    // Close confirmation on overlay click
    $("confirmation").addEventListener("click", function (e) {
      if (e.target === this) {
        handleCancelBorrow();
      }
    });

    // Borrower name - submit on Enter
    $("borrower-name").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        // Focus first available workstation
        var firstAvail = document.querySelector(".workstation-item.available");
        if (firstAvail) {
          firstAvail.scrollIntoView({ behavior: "smooth", block: "center" });
          firstAvail.focus();
        }
      }
    });

    // Tabs
    $("tab-borrows").addEventListener("click", function () { switchTab("borrows"); });
    $("tab-history").addEventListener("click", function () { switchTab("history"); });
    $("tab-manage").addEventListener("click", function () { switchTab("manage"); });

    // Load more history
    $("load-more-history-btn").addEventListener("click", function () {
      loadHistory(true);
    });

    // Seed default workstations
    $("seed-workstations-btn").addEventListener("click", function () {
      if (!confirm("Sett inn standardenheter (PC 1, PC 2, PC 3)?")) return;
      showLoading(true);
      seedDefaultWorkstations()
        .then(function () {
          showLoading(false);
          showToast("Standardenheter er lagt til", "success");
        })
        .catch(function (err) {
          showLoading(false);
          console.error(err);
          showError("Kunne ikke sette inn enheter. Er du logget inn som admin?");
        });
    });

    // Add workstation
    $("add-workstation-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("new-workstation-name").value.trim();
      var keyboard = $("new-workstation-keyboard").value.trim();
      var mouse = $("new-workstation-mouse").value.trim();

      if (!name) return;

      showLoading(true);
      addWorkstation(name, keyboard, mouse)
        .then(function () {
          showLoading(false);
          showToast(name + " er lagt til", "success");
          $("new-workstation-name").value = "";
          $("new-workstation-keyboard").value = "";
          $("new-workstation-mouse").value = "";
        })
        .catch(function (err) {
          showLoading(false);
          console.error(err);
          if (err.code === "aborted") {
            showError("Enheten finnes allerede");
          } else {
            showError("Kunne ikke legge til enheten");
          }
        });
    });
  }

  // ===== AUTH STATE =====

  function setupAuth() {
    onAuthStateChanged(function (user) {
      if (user) {
        // User is logged in - but stay on student view unless admin view was active
        // Auth state changes also handle logout
      } else {
        // User logged out - ensure student view
        if ($("admin-view").classList.contains("active")) {
          showView("student-view");
        }
      }
    });
  }

  // ===== INIT =====

  function init() {
    setupEventListeners();
    setupAuth();
    startStudentSubscriptions();
  }

  // Start app when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
