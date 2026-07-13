// ===== AUTENTISERING =====

var currentUser = null;
var authListeners = [];

function onAuthStateChanged(callback) {
  authListeners.push(callback);
  if (currentUser !== null) {
    callback(currentUser);
  }
}

window.auth.onAuthStateChanged(function (user) {
  currentUser = user;
  authListeners.forEach(function (cb) {
    cb(user);
  });
});

function login(email, password) {
  return window.auth.signInWithEmailAndPassword(email, password);
}

function logout() {
  return window.auth.signOut();
}

function getCurrentUser() {
  return currentUser;
}

function isAdmin() {
  return currentUser !== null;
}
