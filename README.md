# JavaScript – DOM Events Toggle

## Klasseøvelse

I denne klasseøvelse arbejder vi videre med **JavaScript DOM, events og conditionals**.

Vi skal arbejde med en knap, der skifter mellem to billeder. Samtidig ændrer vi teksten på knappen, så den passer til det billede, der kan vises ved næste klik.

Øvelsen gennemføres sammen på holdet, hvor underviseren gennemgår og skriver koden på storskærm. Du arbejder samtidig med projektet på din egen computer og følger øvelsen trin for trin.

---

# Fremgangsmåde – sådan kommer du i gang med projektet

I denne øvelse skal du bruge **GitHub Template-metoden**.

Du skal derfor **ikke downloade projektet som ZIP og ikke bruge Fork**.

Følg denne rækkefølge:

```text
GitHub Template
↓
Dit eget repository på GitHub.com
↓
GitHub Desktop
↓
Visual Studio Code
↓
Arbejd med øvelsen
↓
Commit
↓
Push
```

> Følg punkterne **ét ad gangen og i den viste rækkefølge**.

---

## 1. Opret dit eget repository på GitHub.com

Åbn det udleverede **template-repository** på GitHub.com.

Du skal være logget ind på din egen GitHub-konto.

Klik på:

**Use this template**

Vælg derefter:

**Create a new repository**

Vælg din egen GitHub-konto som ejer, og brug det repository-navn, som din underviser har angivet.

Klik derefter på:

**Create repository**

Vent et øjeblik, mens GitHub opretter dit nye repository.

### Kontrollér, at du er i dit eget repository

Når repositoryet er oprettet, skal du kontrollere navnet øverst på siden.

Det skal være **dit eget GitHub-brugernavn**, der står foran repositoryets navn.

Det kan fx se sådan ud:

```text
dit-brugernavn/js-dom-events-toggle-classex
```

> **Stop her og kontrollér dette, før du går videre.**

---

## 2. Hent dit repository ned på din computer

Nu ligger projektet på **GitHub.com**, men du skal også have det ned på din egen computer.

Åbn **GitHub Desktop**.

Vælg:

**File → Clone repository...**

Vælg fanebladet **GitHub.com**, og find det repository, du netop har oprettet.

Hvis repositoryet ikke vises, kan du i stedet vælge fanebladet **URL** og indsætte adressen til dit repository fra GitHub.com.

### Vælg, hvor projektet skal gemmes

I feltet **Local path** vælger du, hvor projektet skal ligge på din computer.

> **Local path** betyder den mappe på din computer, hvor projektets filer bliver gemt.

Klik derefter på:

**Clone**

Vent, mens GitHub Desktop henter projektet ned på din computer.

---

## 3. Åbn projektet i Visual Studio Code

Når projektet er klonet, vælg:

**Open in Visual Studio Code**

Du skal arbejde direkte i den projektmappe, som GitHub Desktop har klonet.

Kontrollér, at projektet har denne struktur:

```text
js-dom-events-toggle-classex/
│
├── index.html
├── css/
│   └── style.css
├── img/
│   ├── after.png
│   └── before.png
├── js/
│   └── script.js
└── README.md
```

---

# Klasseøvelsen

I øvelsen arbejder vi med disse filer:

- `index.html`
- `css/style.css`
- `js/script.js`

Læs kommentarerne i koden, inden du begynder at skrive.

---

## 4. Forbind JavaScript-filen med HTML-filen

Åbn:

```text
index.html
```

I filen finder du denne kommentar:

```html
<!-- Link til js/script.js herunder -->
```

Vi skal forbinde JavaScript-filen med HTML-dokumentet.

JavaScript-filen ligger i mappen:

```text
js/
```

og hedder:

```text
script.js
```

> **Vær opmærksom på filstien:** `script.js` ligger ikke i samme mappe som `index.html`, men i undermappen `js`.

Skriv det korrekte `<script>`-element på det angivne sted.

Gem derefter filen.

---

## 5. Åbn `js/script.js`

Start med at skrive:

```js
"use strict";
```

I filen er knappen og billedet allerede hentet fra DOM'en:

```js
const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");
```

Her bruger vi:

```text
document.getElementById()
```

til at hente bestemte HTML-elementer via deres `id`.

---

## 6. Arbejd med `addEventListener()`

I `script.js` er event listeneren allerede startet:

```js
changeImgBtn.addEventListener("click", function() {

    // Din kode skal skrives her

});
```

`addEventListener()` lytter efter en bestemt handling.

Her lytter vi efter:

```text
click
```

Når brugeren klikker på knappen, bliver den anonyme function kørt.

---

## 7. Skriv `if/else`-strukturen

Du skal selv skrive en `if/else`-struktur inde i event listeneren.

Du skal undersøge knappens aktuelle tekst med:

```js
this.textContent
```

Her refererer `this` til den knap, der blev klikket på.

Hvis knappens tekst er:

```text
Before
```

skal du:

- ændre billedets `src` til `img/before.png`
- ændre knappens tekst til `After`

Ellers skal du:

- ændre billedets `src` til `img/after.png`
- ændre knappens tekst til `Before`

Du skal arbejde med:

```text
this.textContent
getImage.src
```

---

## 8. Test billedskiftet i browseren

Åbn `index.html` med **Live Server**.

Klik på knappen flere gange og kontrollér:

- at billedet skifter til `before.png`, når knappen viser **Before**
- at knappens tekst ændres til **After**
- at billedet skifter tilbage til `after.png` ved næste klik
- at knappens tekst ændres tilbage til **Before**

Hvis noget ikke virker:

1. Åbn browserens Developer Tools.
2. Gå til **Console** og læs eventuelle fejlmeddelelser.
3. Kontrollér din `if/else`-struktur.
4. Kontrollér brugen af `this.textContent`.
5. Kontrollér brugen af `getImage.src`.
6. Kontrollér stierne til `img/before.png` og `img/after.png`.
7. Gem filerne og test igen.

---

## 9. Arbejd progressivt med commits

Du skal ikke vente med at committe, til hele øvelsen er færdig.

Lav commits løbende, når du har afsluttet en tydelig del af arbejdet.

Du kan eksempelvis lave commits efter:

```text
Forbundet JavaScript med index.html
```

```text
Tilføjet use strict
```

```text
Arbejdet med DOM-elementer
```

```text
Tilføjet if else til billedskift
```

```text
Testet Before og After toggle
```

Skriv selv korte og meningsfulde commit-beskeder, der beskriver, hvad du har ændret.

> Formålet er, at din Git-historik viser, hvordan du har arbejdet med øvelsen trin for trin.

---

## 10. Push til GitHub.com

Når du har lavet et commit i GitHub Desktop, skal du huske at klikke på:

**Push origin**

På den måde bliver dine ændringer sendt fra din computer til dit repository på GitHub.com.

Gå gerne ind på GitHub.com bagefter og kontrollér, at dine seneste commits kan ses.

---

# Når øvelsen er færdig

Kontrollér følgende:

- [ ] Jeg har oprettet mit eget repository med **Use this template**
- [ ] Jeg arbejder i mit eget repository
- [ ] Jeg har klonet projektet med GitHub Desktop
- [ ] Projektet er åbnet i Visual Studio Code
- [ ] `js/script.js` er forbundet korrekt med `index.html`
- [ ] Jeg har skrevet `"use strict";`
- [ ] Jeg har arbejdet med `document.getElementById()`
- [ ] Jeg har arbejdet med `addEventListener()`
- [ ] Jeg har skrevet en `if/else`-struktur
- [ ] Jeg har arbejdet med `this.textContent`
- [ ] Jeg har ændret billedets `src` via JavaScript
- [ ] Billedet skifter mellem `before.png` og `after.png`
- [ ] Knappens tekst skifter mellem **Before** og **After**
- [ ] Jeg har testet løsningen i browseren
- [ ] Jeg har lavet løbende commits
- [ ] Jeg har pushet mine commits til GitHub.com

> **Husk:** Formålet er både at træne **JavaScript DOM, events, conditionals og ændring af HTML-elementers egenskaber via JavaScript** og at øve workflowet mellem **GitHub.com → GitHub Desktop → Visual Studio Code → Commit → Push**.
