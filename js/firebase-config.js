// ===== FIREBASE KONFIGURASJON =====
// 1. Gå til https://console.firebase.google.com
// 2. Opprett et nytt prosjekt (eller bruk eksisterende)
// 3. Gå til Prosjektinnstillinger > Generelt > Dine apper
// 4. Legg til en web-app
// 5. Kopier konfigurasjonsverdiene under her:


const firebaseConfig = {
  apiKey: "AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",
  authDomain: "henryshus.firebaseapp.com",
  projectId: "henryshus",
  storageBucket: "henryshus.firebasestorage.app",
  messagingSenderId: "877597619520",
  appId: "1:877597619520:web:61e33ff74b9f03aa45f6a5",
  measurementId: "G-ESKWZ556XM"
};

// ===== IKKE ENDRE UNDER DENNE LINJEN =====

(function () {
  if (firebaseConfig.apiKey === "DIN_API_KEY") {
    document.documentElement.innerHTML =
      '<div style="padding:40px;font-family:-apple-system,sans-serif;text-align:center;max-width:480px;margin:0 auto;margin-top:80px">' +
      '<h1 style="color:#b81c1c;font-size:1.5rem;">Mangler Firebase-konfigurasjon</h1>' +
      '<p style="color:#666;margin-top:16px;line-height:1.6;">' +
      'Oppdater Firebase-konfigurasjonen i <code>js/firebase-config.js</code><br>' +
      'med dine egne verdier fra Firebase Console.</p>' +
      '<p style="color:#999;margin-top:24px;font-size:0.875rem;">Se README.md for steg-for-steg veiledning.</p>' +
      '</div>';
    throw new Error("Firebase not configured");
  }

  firebase.initializeApp(firebaseConfig);

  window.db = firebase.firestore();
  window.auth = firebase.auth();

  console.log("Firebase initialisert:", firebaseConfig.projectId);
})();
