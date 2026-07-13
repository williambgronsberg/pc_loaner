// ===== DATABASE OPERASJONER =====

function subscribeWorkstations(callback) {
  return window.db.collection("workstations").onSnapshot(
    function (snapshot) {
      var list = [];
      snapshot.forEach(function (doc) {
        var data = doc.data();
        data.id = doc.id;
        list.push(data);
      });
      list.sort(function (a, b) {
        return (a.name || "").localeCompare(b.name || "", "nb");
      });
      callback(list);
    },
    function (error) {
      console.error("Feil ved lytting til workstations:", error);
    }
  );
}

function subscribeActiveBorrows(callback) {
  return window.db.collection("borrowRecords")
    .where("returnedAt", "==", null)
    .onSnapshot(
      function (snapshot) {
        var list = [];
        snapshot.forEach(function (doc) {
          var data = doc.data();
          data.id = doc.id;
          list.push(data);
        });
        list.sort(function (a, b) {
          var ta = a.borrowedAt ? a.borrowedAt.toMillis() : 0;
          var tb = b.borrowedAt ? b.borrowedAt.toMillis() : 0;
          return tb - ta;
        });
        callback(list);
      },
      function (error) {
        console.error("Feil ved lytting til aktive lån:", error);
      }
    );
}

function borrowWorkstation(workstationId, borrowerName) {
  var batch = window.db.batch();
  var recordRef = window.db.collection("borrowRecords").doc();

  var wsRef = window.db.collection("workstations").doc(workstationId);
  batch.update(wsRef, {
    status: "borrowed",
    borrower: borrowerName,
    borrowedAt: firebase.firestore.FieldValue.serverTimestamp(),
    currentBorrowRecord: recordRef.id
  });

  batch.set(recordRef, {
    workstation: workstationId,
    borrower: borrowerName,
    borrowedAt: firebase.firestore.FieldValue.serverTimestamp(),
    returnedAt: null
  });

  return batch.commit().then(function () {
    return recordRef.id;
  });
}

function returnWorkstation(workstationId) {
  var wsRef = window.db.collection("workstations").doc(workstationId);

  return wsRef.get().then(function (doc) {
    if (!doc.exists) return;
    var data = doc.data();
    var recordId = data.currentBorrowRecord;

    var batch = window.db.batch();
    batch.update(wsRef, {
      status: "available",
      borrower: null,
      borrowedAt: null,
      currentBorrowRecord: null
    });

    if (recordId) {
      var recordRef = window.db.collection("borrowRecords").doc(recordId);
      batch.update(recordRef, {
        returnedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    return batch.commit();
  });
}

function getHistory(limitCount, lastDoc) {
  limitCount = limitCount || 20;
  var query = window.db.collection("borrowRecords")
    .orderBy("borrowedAt", "desc")
    .limit(limitCount);

  if (lastDoc) {
    query = query.startAfter(lastDoc);
  }

  return query.get().then(function (snapshot) {
    var records = [];
    var lastVisible = null;
    snapshot.forEach(function (doc) {
      var data = doc.data();
      data.id = doc.id;
      records.push(data);
      lastVisible = doc;
    });
    return { records: records, lastVisible: lastVisible };
  });
}

function addWorkstation(name, keyboard, mouse) {
  return window.db.collection("workstations").doc(name).set({
    name: name,
    keyboard: keyboard || "",
    mouse: mouse || "",
    status: "available",
    borrower: null,
    borrowedAt: null,
    currentBorrowRecord: null
  });
}

function removeWorkstation(name) {
  return window.db.collection("workstations").doc(name).delete();
}

function seedDefaultWorkstations() {
  return window.db.collection("workstations").limit(1).get()
    .then(function (snapshot) {
      if (snapshot.empty) {
        var defaults = [
          { name: "PC 1", keyboard: "Keyboard 1", mouse: "Mouse 1" },
          { name: "PC 2", keyboard: "Keyboard 2", mouse: "Mouse 2" },
          { name: "PC 3", keyboard: "Keyboard 3", mouse: "Mouse 3" }
        ];
        var promises = defaults.map(function (ws) {
          return window.db.collection("workstations").doc(ws.name).set({
            name: ws.name,
            keyboard: ws.keyboard,
            mouse: ws.mouse,
            status: "available",
            borrower: null,
            borrowedAt: null,
            currentBorrowRecord: null
          });
        });
        return Promise.all(promises);
      }
    });
}
