# Røde Kors Utstyrssystem

Et gratis iPad-basert utlånssystem for Røde Kors resepsjoner. Sporer utlån av PC-er og annet utstyr.

**Kostnad:** 0 NOK/måned  
**Plattform:** GitHub Pages + Firebase Free Tier  
**Språk:** Norsk (bokmål)

---

## Slik kommer du i gang

### 1. Opprett et Firebase-prosjekt

1. Gå til [Firebase Console](https://console.firebase.google.com)
2. Klikk **"Legg til prosjekt"** (eller velg eksisterende)
3. Skriv inn et prosjektnavn (f.eks. `rode-kors-utstyr`)
4. Deaktiver **Google Analytics** (valgfritt)
5. Klikk **"Opprett prosjekt"**

### 2. Aktiver Firestore Database

1. I Firebase Console, gå til **"Firestore Database"**
2. Klikk **"Opprett database"**
3. Velg **"Start i testmodus"** (vi oppdaterer reglene senere)
4. Velg en region (f.eks. `europe-west1`)
5. Klikk **"Ferdig"**

### 3. Aktiver Authentication

1. I Firebase Console, gå til **"Authentication"** → **"Start"**
2. Velg **"E-post/passord"** som påloggingsmetode
3. Aktiver **"E-post/passord"**
4. Klikk **"Lagre"**

### 4. Opprett en admin-bruker

1. I Firebase Console, gå til **"Authentication"** → **"Brukere"**-fanen
2. Klikk **"Legg til bruker"**
3. Skriv inn e-post (f.eks. `admin@rodkors.no`) og et sikkert passord
4. Klikk **"Legg til bruker"**

### 5. Legg til en web-app i Firebase

1. I Firebase Console, gå til **"Prosjektinnstillinger"** (tannhjulet øverst)
2. Under **"Dine apper"**, klikk **"Legg til app"** → **"Web"**
3. Skriv inn et app-navn (f.eks. `Røde Kors Utstyr`)
4. **Ikke** merk av for "Firebase Hosting"
5. Kopier **firebaseConfig**-objektet som vises
6. Klikk **"Registrer app"**

### 6. Oppdater Firebase-konfigurasjonen

1. Åpne filen `js/firebase-config.js`
2. Erstatt verdiene med dine egne fra Firebase Console:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "ditt-prosjekt.firebaseapp.com",
  projectId: "ditt-prosjekt-id",
  storageBucket: "ditt-prosjekt.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### 7. Oppdater Firestore-sikkerhetsregler

1. I Firebase Console, gå til **"Firestore Database"** → **"Regler"**
2. Kopier innholdet fra filen `firestore.rules` og lim inn
3. Klikk **"Publiser"**

### 8. Publiser på GitHub Pages

1. Opprett et nytt repository på [GitHub](https://github.com/new)
2. Last opp alle filene til repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DITT_BRUKERNAVN/DITT_REPO.git
git push -u origin main
```

3. Gå til repository på GitHub → **"Settings"** → **"Pages"**
4. Under **"Branch"**, velg `main` og `/ (root)`
5. Klikk **"Save"**
6. Vent noen minutter, så er siden tilgjengelig på:
   `https://DITT_BRUKERNAVN.github.io/DITT_REPO/`

### 9. Installer som app på iPad

1. Åpne Safari og gå til GitHub Pages-URLen
2. Trykk på **Del-knappen** (firkant med pil opp)
3. Scroll ned og trykk **"Legg til på Hjem-skjerm"**
4. Trykk **"Legg til"** øverst til høyre
5. Appen vises nå som et ikon på iPad-skjermen

---

## Bruk

### For besøkende (låntakere)

1. Åpne appen
2. Skriv inn navnet ditt
3. Trykk på en tilgjengelig enhet (grønn)
4. Bekreft lånet

### For resepsjonen (admin)

1. Trykk **"Admin"** øverst til høyre
2. Logg inn med e-post og passord
3. **Utlån**: Se aktive lån og returner utstyr
4. **Historikk**: Se alle tidligere lån
5. **Enheter**: Legg til eller fjern utstyr

---

## Data som lagres

Kun nødvendig informasjon lagres:

- **Låntakers navn** (frivillig å oppgi)
- **Enhets-ID** (f.eks. "PC 1")
- **Tidspunkt for utlån og retur"

Ingen personopplysninger som adresse, telefonnummer eller fødselsdato lagres.

---

## Firebase Free Tier-grenser

Firebase Spark-plan (gratis) inkluderer:

| Ressurs | Grense |
|---|---|
| Firestore-lesinger | 50 000/dag |
| Firestore-skrivinger | 20 000/dag |
| Firestore-lagring | 1 GB totalt |
| Authentication-brukere | 10 000/måned |

For et resepsjonssystem med normal bruk vil dette være mer enn nok.

---

## Teknisk oversikt

- **HTML/CSS/JS** — ren frontend, ingen rammeverk
- **Firebase Firestore** — database med sanntidsoppdateringer
- **Firebase Authentication** — admin-pålogging
- **GitHub Pages** — vert for nettsiden
- **PWA** — kan installeres som app på iPad

---

## Lisens

Dette prosjektet er laget for Røde Kors og er fritt tilgjengelig.
