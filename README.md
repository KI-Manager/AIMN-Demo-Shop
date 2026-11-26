# AIMN Demo-Shop (V3.1)

> **Demo-Hinweis:** Dies ist ein reines Lern- und Demonstrationsprojekt. Alle Produkte, Anbieter, Preise, Firmen- und Kundendaten sind **erfunden**. Es gibt **keine echten Bestellungen und keine echten Zahlungen**. Bitte keine echten persönlichen Daten eingeben, verwende nur Testdaten (z. B. Max Mustermann).

Der AIMN Tool Store ist ein Demo-Online-Shop für fiktive KI-Werkzeuge (Agenten, Workflows, Prompt-Pakete, Vorlagen). Er entstand im Rahmen einer Weiterbildung zur KI-gestützten Webentwicklung.

## Funktionsumfang
- **Startseite** mit Suche, Filtern (Einsatzbereich, Preismodell, Zugriffsrechte, Umgebung, Preis), Sortierung und Sammlungen
- **24 eigene Produktseiten** mit Bild (Symbolbild), Beschreibung, technischen Daten und Mengenwahl
- **Warenkorb** als Fenster und als eigene Seite (`warenkorb.html`), synchron: Menge 1 bis 10, Entfernen mit „Rückgängig“, Testgutschein `DEMO10`
- **Preisberechnung in ganzen Cent** mit deutscher Formatierung, Einzelpreis, Zeilensumme, Gesamtsumme und enthaltener MwSt.
- **Simulierte Kasse** (Kontakt, Zahlung, Prüfen, Bestätigung), ohne echte Zahlung
- **Merkliste** ohne Konto
- **Hell-/Dunkelmodus**, responsive Darstellung (ab 320 px) und Barrierefreiheit (Tastaturbedienung, Statusmeldungen für Screenreader)

## Datenschutz
Es werden keine Daten an Server gesendet. Im Browser (LocalStorage) liegen nur Produkt-ID und Menge des Warenkorbs, die Merkliste, die zuletzt angesehenen Produkte, der Testgutschein und die Farbwahl. Eingaben in der Kasse werden nie gespeichert.

## Technologien
HTML, CSS und JavaScript ohne Frameworks und ohne externe Server oder CDNs. Die Schrift *Schibsted Grotesk* liegt lokal in `fonts/` (Lizenz: SIL Open Font License, siehe `fonts/OFL.txt`).

## Projektstruktur
```
index.html        Startseite
warenkorb.html    Warenkorb-Seite
produkte/         eine Seite je Produkt
css/style.css     gemeinsames Design
js/app.js         gemeinsame Logik (Kopfzeile, Fußzeile, Warenkorb, Kasse)
js/theme-init.js  Hell-/Dunkelmodus
img/  fonts/      Bilder und lokale Schrift
```

## Lokal ausprobieren
`index.html` über einen lokalen Webserver öffnen (z. B. `http://localhost:8000/`). Eine Installation ist nicht nötig.
