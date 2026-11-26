{
const TYPES={agent:"KI-Agenten",flow:"Workflows",prompt:"Prompt-Pakete",kit:"Vorlagen",bundle:"Bundles"};
const TYPE1={agent:"KI-Agent",flow:"Workflow",prompt:"Prompt-Paket",kit:"Vorlage",bundle:"Bundle"};
const AREAS=["Marketing","Vertrieb","Entwicklung","Büro & Produktivität","Kundenservice","Recherche","Governance"];
const ACOL={"Marketing":"#c2571a","Vertrieb":"#1f5fa8","Entwicklung":"#334155","Büro & Produktivität":"#0b6f70","Kundenservice":"#6b46c1","Recherche":"#0f766e","Governance":"#0e1f2c"};
const MODELS={frei:"Kostenlos",einmal:"Einmalkauf",abo:"Abo (monatlich)"};
const ENVS=["No-Code","Browser","Python","Docker"];
const ACC={niedrig:"Niedrig",mittel:"Mittel",hoch:"Hoch"};
const P=[
["meeting","Meeting-Protokoll-Agent","agent","Büro & Produktivität",0,"frei",["Browser","Python"],"mittel","Nordlicht Labs","Macht aus einem Besprechungstranskript strukturierte Notizen, Entscheidungen und Aufgaben mit Verantwortlichen.",["Erkennt Entscheidungen und offene Punkte","Aufgaben mit Fälligkeit und Person","Export als Markdown und Tabelle"]],
["inbox","Postfach-Sortier-Agent","agent","Büro & Produktivität",6,"abo",["Browser"],"mittel","Klarwerk","Sortiert eingehende Mails in Antworten, Ablegen und Delegieren und schreibt Antwortentwürfe.",["Regeln in Alltagssprache","Entwürfe statt automatischer Versand","Tageszusammenfassung"]],
["review","Code-Review-Agent","agent","Entwicklung",19,"einmal",["Docker","Python"],"niedrig","Bitwerft","Prüft Code-Änderungen auf Fehler und riskante Stellen und schreibt konkrete Review-Kommentare.",["Liest nur, schreibt nie in das Repository","Kommentare mit Begründung","Eigene Prüfregeln möglich"]],
["ci","CI-Fehler-Detektiv","agent","Entwicklung",0,"frei",["Docker"],"niedrig","Bitwerft","Liest ein fehlgeschlagenes Build-Protokoll und benennt die wahrscheinliche Ursache mit Lösungsvorschlag.",["Unterstützt gängige Build-Protokolle","Ursache in einem Satz","Vorschlag als Patch-Entwurf"]],
["support","Kundenservice-Agent","agent","Kundenservice",29,"abo",["No-Code","Docker"],"mittel","Servio","Beantwortet Kundenfragen aus deiner Wissensdatenbank und übergibt unklare Fälle an Menschen.",["Antwortet nur aus freigegebenen Quellen","Übergabe mit Zusammenfassung","Wochenbericht zu offenen Themen"]],
["refund","Erstattungs-Prüfer","agent","Kundenservice",49,"einmal",["Python"],"niedrig","Servio","Prüft Erstattungsanfragen gegen deine Richtlinie und bereitet Entscheidungen zur Freigabe vor.",["Keine Auszahlung ohne Freigabe","Begründung je Fall","Prüfprotokoll für die Revision"]],
["seo","Technischer SEO-Audit-Agent","agent","Marketing",35,"einmal",["Docker"],"hoch","Rankwerk","Durchsucht eine Website und erstellt einen priorisierten Bericht mit Belegen für jeden Befund.",["Priorisiert nach Aufwand und Wirkung","Belege mit Fundstelle","Bericht als PDF-Vorlage"]],
["ads","Kampagnen-Analyst","agent","Marketing",15,"abo",["Browser","Python"],"niedrig","Rankwerk","Wertet Kampagnenzahlen aus und schlägt Änderungen an Budget und Geboten vor.",["Nur Lesezugriff auf Berichte","Vorschläge mit erwarteter Wirkung","Wöchentlicher Überblick"]],
["leads","Lead-Recherche-Agent","agent","Vertrieb",24,"abo",["Python","Docker"],"hoch","Pipeline Studio","Baut aus öffentlichen Quellen eine Liste passender Unternehmen nach deinen Zielkunden-Kriterien.",["Nur Firmendaten, keine Privatpersonen","Quellenangabe je Eintrag","Export als CSV"]],
["coldmail","Erstkontakt-Mail-Assistent","agent","Vertrieb",9,"abo",["No-Code"],"mittel","Pipeline Studio","Entwirft persönliche Erstkontakt-Mails aus einer Liste, die du bereitstellst, und plant Nachfassmails.",["Versand nur nach Freigabe","Ton anpassbar","Abmelde-Hinweis automatisch"]],
["markt","Marktbeobachtungs-Agent","agent","Recherche",0,"frei",["Browser"],"mittel","Lumen Research","Beobachtet Nachrichtenquellen zu deinen Stichwörtern und fasst Relevantes regelmäßig zusammen.",["Stichwortlisten je Thema","Zusammenfassung mit Quellen","Tägliche oder wöchentliche Mail"]],
["onboard","Onboarding-Workflow HR","flow","Büro & Produktivität",29,"einmal",["No-Code"],"mittel","Klarwerk","Automatisiert Checklisten, Zugänge und Begrüßungsmails für neue Mitarbeitende.",["Fertige Checkliste in 12 Schritten","Erinnerungen an Verantwortliche","Anpassbar ohne Programmierung"]],
["content","Content-Pipeline Social Media","flow","Marketing",39,"einmal",["No-Code"],"niedrig","Rankwerk","Vom Blogartikel zu fünf Social-Media-Beiträgen mit Freigabeschritt vor der Veröffentlichung.",["Freigabe durch Menschen eingebaut","Redaktionskalender als Tabelle","Varianten je Kanal"]],
["rechnung","Rechnungseingang-Workflow","flow","Büro & Produktivität",12,"abo",["No-Code","Python"],"mittel","Zahlwerk","Liest Rechnungen aus dem Postfach, prüft Pflichtangaben und legt sie zur Freigabe ab.",["Pflichtangaben-Prüfung","Ablage nach Lieferant","Nur Demo-Daten im Lieferumfang"]],
["crm","CRM-Pflege-Workflow","flow","Vertrieb",19,"abo",["No-Code"],"mittel","Pipeline Studio","Hält Kontaktdaten aktuell, findet Dubletten und erinnert an überfällige Nachfassaktionen.",["Dubletten-Vorschläge","Erinnerungen per Mail","Änderungsprotokoll"]],
["ticket","Ticket-Triage-Workflow","flow","Kundenservice",0,"frei",["No-Code"],"niedrig","Servio","Ordnet Support-Tickets nach Thema und Dringlichkeit und leitet sie ans richtige Team.",["Kategorien frei definierbar","Dringlichkeit in drei Stufen","Kein Zugriff auf Kundendaten nötig"]],
["pmanager","Prompt-Paket KI-Manager","prompt","Governance",14,"einmal",["Browser"],"niedrig","AIMN Redaktion","120 erprobte Prompts für Use-Case-Bewertung, Risikoanalyse, Schulungsplanung und Stakeholder-Kommunikation.",["120 Prompts in 8 Kapiteln","Mit Beispielausgaben","Deutsch und Englisch"]],
["pmarketing","Prompt-Paket Marketing","prompt","Marketing",9,"einmal",["Browser"],"niedrig","Rankwerk","Prompts für Zielgruppen, Kampagnenideen, Texte und Auswertungen mit Platzhaltern zum Ausfüllen.",["80 Prompts","Tonalitäts-Bausteine","Prüfliste gegen Übertreibungen"]],
["pdev","Prompt-Paket Entwicklung","prompt","Entwicklung",0,"frei",["Browser"],"niedrig","Bitwerft","Prompts für Code-Erklärungen, Tests, Fehlersuche und Dokumentation.",["60 Prompts","Für Einsteiger erklärt","Mit Gegenprüf-Prompts"]],
["policy","KI-Richtlinie Vorlage","kit","Governance",59,"einmal",["Browser"],"niedrig","AIMN Redaktion","Anpassbare Vorlage für eine unternehmensweite KI-Nutzungsrichtlinie mit Erläuterungen je Abschnitt.",["Vorlage mit 14 Abschnitten","Erläuterungen für die Abstimmung","Checkliste zur Einführung"]],
["risk","Risiko-Register für KI-Projekte","kit","Governance",45,"einmal",["Browser"],"niedrig","Lumen Research","Tabellenvorlage zur Bewertung von KI-Anwendungsfällen nach Risiko, Nutzen und Datenlage.",["Bewertungsmatrix","Beispiele für 10 Anwendungsfälle","Ampel-Übersicht für die Leitung"]],
["roi","ROI-Rechner KI-Einführung","kit","Recherche",0,"frei",["Browser"],"niedrig","Zahlwerk","Rechenvorlage für Zeitersparnis, Kosten und Amortisation eines KI-Projekts.",["Szenarien vorsichtig, mittel, optimistisch","Annahmen sichtbar","Grafik für Präsentationen"]],
["starter","Bundle: KI-Manager Starter","bundle","Governance",99,"einmal",["Browser","No-Code"],"niedrig","AIMN Redaktion","KI-Richtlinie, Risiko-Register und Prompt-Paket KI-Manager zusammen zum Vorteilspreis.",["Enthält 3 Produkte","Sparen gegenüber Einzelkauf","Einführungsfahrplan für 90 Tage"]],
["office","Bundle: Büro-Automatisierung","bundle","Büro & Produktivität",34,"abo",["No-Code","Browser"],"mittel","Klarwerk","Postfach-Agent, Rechnungseingang und Onboarding-Workflow in einem Monatspaket.",["Enthält 3 Produkte","Gemeinsame Einrichtungshilfe","Monatlich kündbar (Demo)"]]
].map((a,i)=>({id:a[0],name:a[1],type:a[2],area:a[3],cents:a[4]*100,model:a[5],env:a[6],access:a[7],vendor:a[8],desc:a[9],feat:a[10],order:i}));
const byId=Object.assign(Object.create(null),Object.fromEntries(P.map(p=>[p.id,p])));

/* Beispielausgaben je Produkt: zeigen, was das Werkzeug tatsächlich liefert */
const X={
meeting:["Transkript Jour fixe, 42 Min.","Entscheidung: Pilot startet am 3. Februar","Aufgabe: Datenschutz-Check, J. Weber, bis 20.01.","Offen: Budget für Schulungen klären"],
inbox:["38 neue E-Mails seit gestern","Antworten (7): Entwürfe liegen bereit","Delegieren (4): an Vertrieb und Buchhaltung","Ablegen (27): Newsletter, Benachrichtigungen"],
review:["Änderung #218, 14 Dateien","Hoch: Datenbankabfrage ohne Parameter in orders.py, Zeile 88","Mittel: Leere Liste wird nicht abgefangen","Hinweis: Funktion doppelt in utils.py"],
ci:["Build #1043 fehlgeschlagen","Ursache: Paketversion von date-utils nicht festgelegt","Betroffen: 3 von 212 Tests","Vorschlag: Version 2.4.1 festschreiben"],
support:["Frage: Wie ändere ich meine Rechnungsadresse?","Antwort aus Hilfeartikel »Konto und Rechnung«","Quelle verlinkt, Ton freundlich","Sicherheit hoch, keine Übergabe nötig"],
refund:["Anfrage #5531 über 89,00 €","Richtlinie »30 Tage« erfüllt","Empfehlung: erstatten, Freigabe durch Teamleitung","Begründung im Prüfprotokoll gespeichert"],
seo:["Prüfung von 312 Seiten","Hoch: 41 Seiten ohne Meta-Beschreibung","Mittel: 12 Weiterleitungsketten","Niedrig: 6 Bilder ohne Alternativtext"],
ads:["6 Kampagnen, Kalenderwoche 47","Budget von »Messe« zu »Webinar« verschieben","Gebot für »KI Schulung« senken","Anzeige B pausieren, Klickrate 0,4 %"],
leads:["Zielkunden: Maschinenbau, 50 bis 250 Beschäftigte","128 Unternehmen gefunden","Je Eintrag Branche, Größe und Quelle","Keine Daten zu Privatpersonen"],
coldmail:["Liste mit 40 Kontakten (selbst bereitgestellt)","40 Entwürfe mit je 90 bis 120 Wörtern","Nachfassmail nach 5 Werktagen geplant","Versand wartet auf deine Freigabe"],
markt:["Stichwörter: KI-Verordnung, Agenten","9 relevante Meldungen diese Woche","Top-Thema: neue Leitlinien zur KI-Verordnung","Zusammenfassung mit allen Quellen"],
onboard:["Neue Person im HR-System","Checkliste mit 12 Schritten anlegen","Zugänge bei der IT beantragen","Begrüßungsmail am ersten Tag"],
content:["Blogartikel veröffentlicht","Fünf Beiträge je Kanal entwerfen","Freigabe durch das Team","In den Redaktionskalender eintragen"],
rechnung:["Rechnung kommt im Postfach an","Pflichtangaben prüfen","Nach Lieferant ablegen","Zur Freigabe vorlegen"],
crm:["Jeden Morgen um 7 Uhr","Dubletten suchen","Daten abgleichen","Vertrieb an Nachfassaktion erinnern"],
ticket:["Neues Ticket geht ein","Thema erkennen","Dringlichkeit festlegen","An das passende Team leiten"],
pmanager:["Bewerte den folgenden KI-Anwendungsfall nach Nutzen, Risiko und Datenlage. Gib je Kriterium eine Note von 1 bis 5 und begründe sie in einem Satz: ","{Anwendungsfall}"],
pmarketing:["Beschreibe die Zielgruppe für ","{Produkt}"," in drei Personas mit je einem Problem, einem Ziel und einem Satz, der sie anspricht."],
pdev:["Erkläre diesen Code für Menschen ohne Programmierkenntnisse in höchstens fünf Sätzen und nenne eine mögliche Fehlerquelle: ","{Code}"],
policy:["1. Geltungsbereich","2. Erlaubte und verbotene Nutzung","3. Umgang mit personenbezogenen Daten","4. Freigabe neuer Werkzeuge"],
risk:["Chatbot im Kundenservice","Risiko 3 von 5","Nutzen 4 von 5","Ampel: gelb"],
roi:["Zeitersparnis pro Woche","6 Stunden","Kosten pro Jahr","2.400 €","Amortisation","5 Monate"],
starter:["policy","risk","pmanager"],
office:["inbox","rechnung","onboard"]};

const eur=new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"});
/* Geld: Beträge werden intern in ganzen Cent gerechnet und erst zur Anzeige als Euro formatiert */
const fmt=c=>eur.format(c/100);
const intl=new Intl.NumberFormat("de-DE");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $=id=>document.getElementById(id);
const ico=(n,c="ico")=>`<svg class="${c}"><use href="#${n.startsWith("t-")?n:"i-"+n}"/></svg>`;
const de=n=>String(n).replace(".",",");
const seed=id=>[...id].reduce((a,c)=>(a*31+c.charCodeAt(0))%100003,7);
const priceHTML=p=>p.model==="frei"?"Kostenlos":fmt(p.cents)+(p.model==="abo"?" <small>/ Monat</small>":"");
const accHTML=a=>`<span class="acc ${a}">Zugriff ${ACC[a].toLowerCase()}</span>`;
const appIcon=(p,s="")=>`<span class="app ${s}" style="background:${ACOL[p.area]}" aria-hidden="true"><svg><use href="#t-${p.type}"/></svg></span>`;
const bundleSave=p=>{if(p.type!=="bundle")return 0;const items=X[p.id].map(i=>byId[i]);if(items.some(i=>i.model!==p.model))return 0;return items.reduce((a,i)=>a+i.cents,0)-p.cents};

/* Vorschau: was das Werkzeug liefert */
function preview(p,view="out"){
  const x=X[p.id];
  if(p.type==="agent")return `<div class="pv"><div class="in">Eingabe <b>${esc(x[0])}</b></div><ul>${x.slice(1).map(l=>`<li><i></i><span>${esc(l)}</span></li>`).join("")}</ul></div>`;
  if(p.type==="flow")return `<div class="pv"><div class="in">Ablauf <b>${x.length} Schritte, automatisch</b></div><div class="steps">${x.map((s,i)=>`<div class="st"><span>${i+1}</span>${esc(s)}</div>`).join("")}</div></div>`;
  if(p.type==="prompt")return `<div class="pv"><div class="in">Beispiel-Prompt <b>1 von ${p.feat[0].match(/\d+/)[0]}</b></div><blockquote>${x.map(s=>s.startsWith("{")?`<mark>${esc(s)}</mark>`:esc(s)).join("")}</blockquote></div>`;
  if(p.type==="kit"){
    if(p.id==="roi")return `<div class="pv"><div class="in">Szenario <b>mittel</b></div><div class="kv">${[0,2,4].map(i=>`<span>${esc(x[i])}</span><b>${esc(x[i+1])}</b>`).join("")}</div></div>`;
    if(p.id==="risk")return `<div class="pv"><div class="in">Register <b>Beispielzeile 1 von 10</b></div><div class="kv">${[["Anwendungsfall",x[0]],["Risiko",x[1]],["Nutzen",x[2]],["Bewertung",x[3]]].map(([a,b])=>`<span>${a}</span><b>${esc(b)}</b>`).join("")}</div></div>`;
    return `<div class="pv"><div class="in">Inhalt <b>4 von 14 Abschnitten</b></div><div class="doc">${x.map(s=>`<b>${esc(s)}</b><em style="width:${70+seed(s)%30}%"></em>`).join("")}</div></div>`;
  }
  const s=bundleSave(p);
  return `<div class="pv"><div class="in">Enthält <b>3 Werkzeuge</b></div><div class="bun">${x.map(i=>`<div>${appIcon(byId[i],"sm")}<span>${esc(byId[i].name)}</span></div>`).join("")}</div>${s>0?`<span class="save">Du sparst ${fmt(s)} gegenüber dem Einzelkauf</span>`:""}</div>`;
}

/* Gemeinsamer Rahmen: Header, Navigation, Footer, Fenster und Symbole kommen aus dieser einen Stelle auf jede Seite */
const BASE=document.body.dataset.base||"";            /* "" auf der Startseite, "../" auf Produktseiten */
const HOME=!!document.getElementById("homeView");     /* true nur auf der Startseite */
const CARTPAGE=!!document.getElementById("cartPage"); /* true nur auf warenkorb.html */
const H0=HOME?"":BASE+"index.html";                   /* Präfix für Links zu Bereichen der Startseite */
const pageUrl=id=>`${BASE}produkte/${id}.html`;
function buildShell(){
const top=`
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></symbol>
  <symbol id="i-bag" viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></symbol>
  <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12 4.5 4.5L19 7"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-4"/></symbol>
  <symbol id="i-badge" viewBox="0 0 24 24"><path d="m12 3 2.2 1.6 2.7-.1.8 2.6 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-.8 2.6-2.7-.1L12 21l-2.2-1.6-2.7.1-.8-2.6-2.2-1.6.9-2.6-.9-2.6 2.2-1.6.8-2.6 2.7.1z"/><path d="m9 12 2 2 4-4"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>
  <symbol id="i-filter" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
  <symbol id="i-undo" viewBox="0 0 24 24"><path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/></symbol>
  <symbol id="i-alert" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h0"/></symbol>
  <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></symbol>
  <symbol id="i-moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></symbol>
  <symbol id="i-monitor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></symbol>
  <symbol id="i-lock" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></symbol>
  <symbol id="t-agent" viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="11" rx="3"/><path d="M12 7V4M9 12h0M15 12h0M9.5 15h5"/></symbol>
  <symbol id="t-flow" viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="12" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8.5 6H12a3 3 0 0 1 3 3v.5M8.5 18H12a3 3 0 0 0 3-3v-.5"/></symbol>
  <symbol id="t-prompt" viewBox="0 0 24 24"><path d="M5 5h14v10H9l-4 4z"/><path d="M9 9h6M9 12h4"/></symbol>
  <symbol id="t-kit" viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/></symbol>
  <symbol id="t-bundle" viewBox="0 0 24 24"><path d="m12 3 8 4-8 4-8-4z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/></symbol>
</svg>

<a class="skip" href="#start" id="skip" data-bg>Zum Inhalt springen</a>
<p class="sr" id="live" aria-live="polite" aria-atomic="true"></p>
<div class="util" data-bg><div class="wrap"><span><b>Demo-Shop</b> · Alle Produkte, Anbieter und Preise sind erfunden. Es fließt kein echtes Geld.</span><span>Testgutschein DEMO10 · Testkarte 4242 4242 4242 4242</span></div></div>
<header data-bg>
  <div class="wrap hbar">
    <a class="logo" href="${HOME?"#start":BASE+"index.html"}" id="home" aria-label="AIMN Tool Store, Startseite"><img src="${BASE}img/logo.png" alt=""><b>AIMN</b><span>Tool Store</span></a>
    <button class="btn menubtn" id="menuBtn" type="button" aria-expanded="false" aria-controls="mainnav">Menü</button>
    <nav class="mainnav" id="mainnav" aria-label="Hauptnavigation"><a href="${H0}#katalog">Katalog</a><a href="${H0}#sammlungen">Sammlungen</a><a href="${H0}#pruefung">So prüfen wir</a></nav>
    <form class="search" id="sform" role="search">
      <svg class="ico"><use href="#i-search"/></svg>
      <label class="sr" for="q">Produkte suchen</label>
      <input id="q" type="search" placeholder="Werkzeug, Aufgabe oder Anbieter suchen" maxlength="60" autocomplete="off">
      <kbd>Strg K</kbd>
    </form>
    <div class="hact">
      <div class="thm">
        <button class="iconbtn" id="thBtn" aria-haspopup="menu" aria-expanded="false" aria-controls="thMenu" aria-label="Darstellung wählen"><svg class="ico m-sun"><use href="#i-sun"/></svg><svg class="ico m-moon"><use href="#i-moon"/></svg></button>
        <div class="thmenu" id="thMenu" role="menu" aria-label="Darstellung" hidden>
          <p>Darstellung</p>
          <button role="menuitemradio" data-theme-pick="light"><svg class="ico"><use href="#i-sun"/></svg>Hell<small>Standard</small></button>
          <button role="menuitemradio" data-theme-pick="dark"><svg class="ico"><use href="#i-moon"/></svg>Dunkel</button>
          <button role="menuitemradio" data-theme-pick="system"><svg class="ico"><use href="#i-monitor"/></svg>Automatisch<small>wie System</small></button>
        </div>
      </div>
      <button class="iconbtn" id="openFav" aria-label="Merkliste öffnen"><svg class="ico"><use href="#i-heart"/></svg><span class="badge" id="favCnt"></span></button>
      <button class="iconbtn" id="openCart" aria-label="Warenkorb öffnen"><svg class="ico"><use href="#i-bag"/></svg><span class="badge" id="cnt">0</span></button>
    </div>
  </div>
</header>
`;
const bottom=`
<footer data-bg>
  <div class="wrap">
    <div class="fc">
      <div><a class="logo" href="#start" style="color:#fff"><img src="${BASE}img/logo.png" alt=""><b>AIMN</b></a><p style="margin-top:12px">AI Manager Network. Ein Übungsprojekt der Weiterbildung KI-Manager, kein echter Shop.</p>
        <form class="news" id="news"><label class="sr" for="nmail">E-Mail für Neuigkeiten</label><input id="nmail" type="email" placeholder="E-Mail für Neuigkeiten"><button class="btn buy" type="submit">Eintragen</button></form><p class="note" id="newsMsg" style="color:#a9bcc3;min-height:1.4em"></p></div>
      <div><h4>Store</h4><p><a href="${H0}#katalog">Alle Werkzeuge</a></p><p><a href="${H0}#sammlungen">Sammlungen</a></p><p><a href="${H0}#pruefung">So prüfen wir</a></p><p><a href="#impressum">Impressum</a></p></div>
      <div><h4>Hilfe (fiktiv)</h4><p>Widerruf: 14 Tage bei Einmalkäufen</p><p>Abos monatlich kündbar</p><p>hallo@aimn-demo.example</p></div>
      <div><h4>Datenschutz</h4><p>Gespeichert werden nur Warenkorb, Merkliste und zuletzt angesehene Produkte, lokal in deinem Browser. Eingaben in der Kasse verlassen die Seite nicht.</p></div>
      <div id="impressum"><h4>Impressum</h4><p>Platzhalter, alle Angaben sind erfunden: AIMN Demo GmbH (fiktiv), Musterstraße 1, 12345 Beispielstadt. Vertreten durch Erika Mustermann (fiktiv). Kontakt: hallo@aimn-demo.example</p></div>
    </div>
    <div class="bottom"><span>© 2026 AIMN · Musterstraße 1, 12345 Beispielstadt (fiktiv)</span><span>AIMN Tool Store V3.1 · Barrierefreiheit</span></div>
  </div>
</footer>
<div class="ov" id="ov"></div>
<section class="panel drawer" id="cart" role="dialog" aria-modal="true" aria-labelledby="cTitle"><div class="dh"><h2 id="cTitle">Warenkorb</h2><button class="x" data-close aria-label="Schließen"><svg class="ico"><use href="#i-x"/></svg></button></div><p class="cstatus note" id="cStatus" role="status" aria-live="polite"></p><div class="db" id="cBody"></div></section>
<section class="panel drawer" id="favs" role="dialog" aria-modal="true" aria-labelledby="fTitle"><div class="dh"><h2 id="fTitle">Merkliste</h2><button class="x" data-close aria-label="Schließen"><svg class="ico"><use href="#i-x"/></svg></button></div><div class="db" id="fBody"></div></section>
<section class="panel sheet" id="checkout" role="dialog" aria-modal="true" aria-labelledby="kTitle">
  <div class="dh"><a class="logo" href="#start" data-close><img src="${BASE}img/logo.png" alt=""><b>AIMN</b></a><h2 id="kTitle" style="font-size:17px;display:flex;gap:8px;align-items:center;color:var(--ink2)"><svg class="ico"><use href="#i-lock"/></svg>Demo-Kasse</h2><button class="x" data-close aria-label="Kasse schließen"><svg class="ico"><use href="#i-x"/></svg></button></div>
  <div class="db" style="padding:0"><div class="kwrap" id="kBody"></div></div>
</section>
<div class="toast" id="toast" role="status" aria-live="polite"><span id="toastMsg"></span><button id="toastAct" hidden>Rückgängig</button></div>
`;
document.body.insertAdjacentHTML("afterbegin",top);
document.body.insertAdjacentHTML("beforeend",bottom);
}
buildShell();

/* Zustand */
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},remove(k){try{localStorage.removeItem(k)}catch(e){}}};
/* Warenkorb im LocalStorage: nur Produkt-ID und Menge (1 bis 10), keine personenbezogenen Daten.
   Es wird erst beim Hinzufügen eines Artikels geschrieben und gelöscht, sobald der Warenkorb leer ist. */
let cart={},favs=[],recent=[],coupon=null;
function loadState(){
  cart=store.get("aimn-cart",{});if(!cart||typeof cart!=="object"||Array.isArray(cart))cart={};
  for(const k of Object.keys(cart)){if(!byId[k]||!(cart[k]>=1))delete cart[k];else cart[k]=Math.min(10,Math.floor(cart[k]))}
  /* Gutschein: nur der feste Demo-Code, nur solange der Warenkorb nicht leer ist */
  coupon=Object.keys(cart).length&&store.get("aimn-coupon",null)==="DEMO10"?"DEMO10":null;
  const ids=k=>{const l=store.get(k,[]);return (Array.isArray(l)?l:[]).filter(id=>typeof id==="string"&&byId[id])};
  favs=ids("aimn-fav");recent=ids("aimn-recent");
}
loadState();
const S={q:"",type:"alle",areas:new Set(),models:new Set(),envs:new Set(),acc:new Set(),max:250,sort:"order"};

/* Startseite */
const POP=["Protokoll","Richtlinie","Kundenservice","Rechnungen","Kostenlos"];
HOME&&$("popular").insertAdjacentHTML("beforeend",POP.map(w=>`<button type="button" data-pop="${w}">${w}</button>`).join(""));
HOME&&($("proof").innerHTML=[["badge",`${P.length} geprüfte Werkzeuge`],["shield","Rechte vor dem Kauf sichtbar"],["undo","14 Tage Widerruf (fiktiv)"]].map(([i,t])=>`<span>${ico(i)}${t}</span>`).join(""));
function renderFeature(){const p=byId.meeting;$("feature").innerHTML=`<div class="fh">${appIcon(p)}<div><b>${esc(p.name)}</b><small>Auswahl der Redaktion · ${esc(p.vendor)}</small></div><a class="btn" href="${pageUrl(p.id)}">Ansehen</a></div>${preview(p)}<div class="ff"><span class="meta">${accHTML(p.access)}</span><span class="price">${priceHTML(p)}</span><button class="add ${cart[p.id]?"in":""}" data-add="${p.id}">${cart[p.id]?"Im Warenkorb":"In den Warenkorb"}</button></div>`}
HOME&&renderFeature();
const COLL=[
 {k:"sicher",t:"Sicher starten",d:"Werkzeuge, die nur mit Daten arbeiten, die du ausdrücklich übergibst.",f:{acc:"niedrig"}},
 {k:"frei",t:"Kostenlos ausprobieren",d:"Ohne Kosten testen, ideal für einen ersten Pilot.",f:{models:"frei"}},
 {k:"gov",t:"Richtlinien und Governance",d:"Vorlagen und Prompts für eine geordnete KI-Einführung.",f:{areas:"Governance"}},
 {k:"buero",t:"Büro entlasten",d:"Postfach, Rechnungen, Protokolle und Onboarding automatisieren.",f:{areas:"Büro & Produktivität"}}];
HOME&&($("colls").innerHTML=COLL.map(c=>{const [k,v]=Object.entries(c.f)[0];const items=P.filter(p=>k==="acc"?p.access===v:k==="models"?p.model===v:p.area===v);return `<button class="coll" data-coll="${c.k}"><h3>${c.t}</h3><p>${c.d}</p><span class="stack">${items.slice(0,4).map(p=>appIcon(p,"sm")).join("")}<small>${items.length} Werkzeuge</small></span></button>`}).join(""));
function renderRecent(){$("recentSec").hidden=!recent.length;$("recent").innerHTML=recent.map(id=>{const p=byId[id];return `<a href="${pageUrl(id)}">${appIcon(p,"sm")}<span><b style="display:block;font-size:15px">${esc(p.name)}</b><span class="note">${priceHTML(p)}</span></span></a>`}).join("")}

/* Filter */
function renderCats(){const c=t=>t==="alle"?P.length:P.filter(p=>p.type===t).length;$("cats").innerHTML=["alle",...Object.keys(TYPES)].map(t=>`<button data-type="${t}" aria-pressed="${S.type===t}">${t==="alle"?"Alle":TYPES[t]}<span class="n">${c(t)}</span></button>`).join("")}
const box=(name,val,label,n)=>`<label><input type="checkbox" data-f="${name}" value="${esc(val)}"> ${esc(label)} <span class="n">${n}</span></label>`;
HOME&&($("fArea").innerHTML=AREAS.map(a=>box("areas",a,a,P.filter(p=>p.area===a).length)).join(""));
HOME&&($("fModel").innerHTML=Object.keys(MODELS).map(m=>box("models",m,MODELS[m],P.filter(p=>p.model===m).length)).join(""));
HOME&&($("fEnv").innerHTML=ENVS.map(e=>box("envs",e,e,P.filter(p=>p.env.includes(e)).length)).join(""));
HOME&&($("fAccess").innerHTML=Object.keys(ACC).map(a=>box("acc",a,ACC[a],P.filter(p=>p.access===a).length)).join(""));
function syncFilterInputs(){document.querySelectorAll("#filters input[data-f]").forEach(c=>c.checked=S[c.dataset.f].has(c.value));$("maxp").value=S.max;$("q").value=S.q}

/* Katalog */
function filtered(){
  const q=S.q.trim().toLowerCase();
  const r=P.filter(p=>(S.type==="alle"||p.type===S.type)&&(!S.areas.size||S.areas.has(p.area))&&(!S.models.size||S.models.has(p.model))&&(!S.envs.size||p.env.some(e=>S.envs.has(e)))&&(!S.acc.size||S.acc.has(p.access))&&p.cents<=S.max*100
    &&(!q||[p.name,p.desc,p.vendor,p.area,TYPES[p.type],MODELS[p.model],...p.feat,...(p.type==="bundle"?[]:X[p.id])].join(" ").toLowerCase().includes(q)));
  const f={order:(a,b)=>a.order-b.order,asc:(a,b)=>a.cents-b.cents||a.order-b.order,desc:(a,b)=>b.cents-a.cents||a.order-b.order}[S.sort];
  return r.sort(f);
}
const cardHTML=p=>`<article class="card">
  <a class="thumb" href="${pageUrl(p.id)}" aria-label="Details zu ${esc(p.name)}" tabindex="-1">${preview(p)}</a>
  <div class="ch">${appIcon(p)}<div><h3><a href="${pageUrl(p.id)}">${esc(p.name)}</a></h3><span class="by">${esc(p.vendor)}${ico("badge")}</span></div><button class="fav" data-fav="${p.id}" aria-pressed="${favs.includes(p.id)}" aria-label="${esc(p.name)} merken">${ico("heart")}</button></div>
  <p>${esc(p.desc)}</p>
  <div class="meta">${accHTML(p.access)}</div>
  <div class="buyrow"><span class="price">${priceHTML(p)}</span><button class="add ${cart[p.id]?"in":""}" data-add="${p.id}" aria-label="${esc(p.name)} in den Warenkorb legen${cart[p.id]?", bereits "+cart[p.id]+" im Warenkorb":""}">${cart[p.id]?`${ico("check")} Im Warenkorb`:"In den Warenkorb"}</button></div>
</article>`;
let lastSig=null,liveT;
function announce(m){clearTimeout(liveT);liveT=setTimeout(()=>{$("live").textContent="";setTimeout(()=>$("live").textContent=m,30)},350)}
const motion=()=>window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth";
function render(){
  renderCats();
  const r=filtered();
  $("rtitle").textContent=(S.type==="alle"?"Alle Werkzeuge":TYPES[S.type])+" ("+r.length+")";
  const sig=JSON.stringify([S.q,S.type,[...S.areas],[...S.models],[...S.envs],[...S.acc],S.max,S.sort]);if(lastSig!==null&&sig!==lastSig)announce(r.length?`${r.length} ${r.length===1?"Werkzeug":"Werkzeuge"} gefunden`:"Keine Treffer");lastSig=sig;
  $("maxv").textContent=S.max>=250?"beliebig":fmt(S.max*100);
  const chips=[];
  if(S.q)chips.push(["q","",`Suche: „${S.q}“`]);
  for(const k of ["areas","models","envs","acc"])for(const v of S[k])chips.push([k,v,k==="models"?MODELS[v]:k==="acc"?"Zugriff "+ACC[v].toLowerCase():v]);
  if(S.max<250)chips.push(["max","",`bis ${fmt(S.max*100)}`]);
  $("chips").innerHTML=chips.map(([k,v,l])=>`<button class="chip" data-chip="${k}" data-v="${esc(v)}" aria-label="Filter entfernen: ${esc(l)}">${esc(l)} ×</button>`).join("")+(chips.length>1?`<button class="rm" data-resetall>Alle entfernen</button>`:"");
  $("grid").innerHTML=r.length?r.map(cardHTML).join(""):`<div class="empty"><h3>Keine Treffer</h3><p class="note" id="emptyMsg"></p><button class="btn dark" data-resetall>Filter und Suche zurücksetzen</button></div>`;
  if(!r.length)$("emptyMsg").textContent=S.q?`Für „${S.q}“ gibt es mit diesen Filtern kein Werkzeug. Versuche einen allgemeineren Begriff.`:"Mit diesen Filtern gibt es kein Werkzeug.";
  $("ftoggle").innerHTML=ico("filter")+"Filter"+(chips.length?" ("+chips.length+")":"");
}
function resetAll(){Object.assign(S,{q:"",type:"alle",max:250});["areas","models","envs","acc"].forEach(k=>S[k].clear());$("q2").value="";syncFilterInputs();render()}

/* Produktseiten: Der Inhalt steht im HTML der jeweiligen Seite (produkte/<id>.html). Hier liegt nur die Bedienung. */
const PRODUCT=document.getElementById("product");
let seats=1;
function updateSeats(){
  if(!PRODUCT)return;const p=byId[PRODUCT.dataset.id];
  document.querySelectorAll(".seats button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.seat===seats));
  $("seatN").textContent=seats;$("seatW").textContent=seats>1?"Plätze":"Platz";
  $("seatTot").textContent=fmt(p.cents*seats)+(p.model==="abo"?" / Monat":"");
}
function showView(v){
  document.querySelectorAll("#gmain [data-view]").forEach(d=>{d.hidden=d.dataset.view!==v});
  document.querySelectorAll("[data-gview]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.gview===v));
}
/* Zustand der Schaltflächen auf Produktseiten und in den Karten "Passt dazu" an Warenkorb und Merkliste angleichen */
function syncPage(){
  document.querySelectorAll("#product button.add[data-add]").forEach(b=>{const id=b.dataset.add,p=byId[id],n=cart[id]||0;
    b.classList.toggle("in",!!n);b.innerHTML=n?`${ico("check")} Im Warenkorb`:"In den Warenkorb";
    b.setAttribute("aria-label",`${p.name} in den Warenkorb legen${n?", bereits "+n+" im Warenkorb":""}`)});
  document.querySelectorAll("#product button.fav[data-fav]").forEach(b=>b.setAttribute("aria-pressed",favs.includes(b.dataset.fav)));
  if(PRODUCT){const id=PRODUCT.dataset.id,n=cart[id]||0;
    $("dAdd").textContent=n?"Weitere hinzufügen":"In den Warenkorb";
    const ic=$("inCart");ic.hidden=!n;ic.innerHTML=n?`${ico("check")} Bereits ${n} im Warenkorb · <a href="#" data-cartlink>ansehen</a>`:""}
}
/* Startseite: Sprungziele; alte Adressen (#produkt-ID) führen auf die neuen Produktseiten */
function route(){
  const m=location.hash.match(/^#produkt-([a-z0-9]+)$/);
  if(m&&byId[m[1]]){location.replace(pageUrl(m[1]));return}
  if(!HOME)return;
  renderRecent();
  const t=location.hash.slice(1);const el=t&&document.getElementById(t);if(el&&$("homeView").contains(el))el.scrollIntoView();
}

/* Warenkorb, Merkliste */
/* Zähler im Kopf (mit Text für Screenreader) – schreibt nichts in den Speicher */
function cartCount(){const n=Object.values(cart).reduce((a,b)=>a+b,0);$("cnt").textContent=n;$("cnt").dataset.n=n;
  $("openCart").setAttribute("aria-label",n?`Warenkorb öffnen, ${n} ${n>1?"Plätze":"Platz"} enthalten`:"Warenkorb öffnen")}
function favCount(){$("favCnt").textContent=favs.length||"";$("favCnt").dataset.n=favs.length;
  $("openFav").setAttribute("aria-label",favs.length?`Merkliste öffnen, ${favs.length} gemerkt`:"Merkliste öffnen")}
/* Speichern: nur bei Änderungen durch Nutzende; ein leerer Warenkorb entfernt den Eintrag ganz */
function save(){const has=Object.keys(cart).length;if(has)store.set("aimn-cart",cart);else{store.remove("aimn-cart");coupon=null}
  if(coupon)store.set("aimn-coupon",coupon);else store.remove("aimn-coupon");cartCount()}
function saveFav(){if(favs.length)store.set("aimn-fav",favs);else store.remove("aimn-fav");favCount()}
/* Rechnung in ganzen Cent: Zeilensumme, 10 % Gutschein (kaufmännisch gerundet), enthaltene MwSt. 19 % */
function totals(){const items=Object.entries(cart).map(([id,q])=>({p:byId[id],q,line:byId[id].cents*q}));
  const sub=items.reduce((a,i)=>a+i.line,0);
  const disc=coupon?Math.floor((sub+5)/10):0;
  const total=sub-disc;
  const vat=Math.round(total*19/119);
  return {items,sub,disc,total,vat,abo:items.some(i=>i.p.model==="abo")}}
const unitText=p=>fmt(p.cents)+(p.model==="abo"?" pro Monat":"")+" je Platz";
const platz=n=>`${n} ${n>1?"Plätze":"Platz"}`;
/* Statusmeldung im Warenkorb-Fenster: sichtbar und per Screenreader (role="status") */
function cartStatus(m){const els=[$("cStatus"),$("cpStatus")].filter(Boolean);els.forEach(el=>{el.textContent=""});setTimeout(()=>{els.forEach(el=>{el.textContent=m})},30)}
/* Warenkorb zeigen: auf der Warenkorb-Seite ist er schon da, sonst öffnet sich das Fenster */
function showCart(){renderCart();if(CARTPAGE){$("dTitle").focus();return}$("cStatus").textContent="";openPanel("cart")}
let undo=null;
function add(id,q=1){const cur=cart[id]||0;if(cur+q>10){toast("Höchstens 10 Plätze je Werkzeug");return}cart[id]=cur+q;save();refresh();toast(`„${byId[id].name}“ liegt im Warenkorb (${platz(cart[id])})`,null,"Ansehen",showCart)}
function setQty(id,q){
  if(q>10){cartStatus("Höchstens 10 Plätze je Werkzeug.");return}
  if(q<1){cartStatus("Mindestens 1 Platz. Zum Entfernen „Entfernen“ wählen.");return}
  cart[id]=q;save();refresh();
  cartStatus(`Menge geändert: ${byId[id].name}, ${platz(q)}, ${fmt(byId[id].cents*q)}. Gesamtsumme ${fmt(totals().total)}.`)}
function removeItem(id){delete cart[id];save();refresh()}
function toggleFav(id){const on=favs.includes(id);favs=on?favs.filter(x=>x!==id):[id,...favs];saveFav();refresh();toast(on?"Von der Merkliste entfernt":"Auf der Merkliste gespeichert, ohne Konto")}
function focusKey(el){if(!el||el===document.body)return null;const scope=el.closest("#product,#grid,#feature,#cBody,#cpBody,#fBody");if(!scope)return el.id?"#"+el.id:null;for(const a of ["fav","add","seat","gview","qty","rm"]){if(el.dataset[a]!==undefined)return `#${scope.id} [data-${a}="${CSS.escape(el.dataset[a])}"]${el.dataset.d?`[data-d="${el.dataset.d}"]`:""}`}return el.id?"#"+el.id:null}
function keepFocus(fn){const k=focusKey(document.activeElement);fn();const lost=!document.activeElement||document.activeElement===document.body||!document.activeElement.isConnected;if(k&&lost){const n=document.querySelector(k);if(n&&n.getClientRects().length)n.focus({preventScroll:true})}}
function refresh(){keepFocus(refreshNow)}
function refreshNow(){if(HOME){render();renderFeature()}syncPage();if(CARTPAGE||$("cart").classList.contains("open"))renderCart();if($("favs").classList.contains("open"))renderFavs()}
function sumTable(t){return `<table class="sum"><tr><td>Zwischensumme</td><td class="price">${fmt(t.sub)}</td></tr>${t.disc?`<tr><td>Gutschein DEMO10 (−10 %)</td><td class="price">−${fmt(t.disc)}</td></tr>`:""}<tr><td>Lieferung</td><td>digital, kostenlos</td></tr><tr class="tot"><td>Gesamtsumme (heute fällig)</td><td class="price">${fmt(t.total)}</td></tr><tr><td class="note">enthält 19 % MwSt.</td><td class="note price">${fmt(t.vat)}</td></tr></table>${t.abo?'<p class="note">Abo-Preise gelten pro Platz und Monat. In der Summe ist der erste Monat enthalten; danach fiele der Abo-Preis monatlich an, hier nur simuliert.</p>':""}`}
/* Eine Funktion für beide Ansichten: Auf warenkorb.html füllt sie die Seite (#cpBody), sonst das Fenster (#cBody).
   So gibt es immer nur eine Ansicht mit diesen Bedienelementen und keine doppelten IDs. */
function renderCart(){
  const t=totals(),box=CARTPAGE?$("cpBody"):$("cBody");
  const more=CARTPAGE?`<a class="btn ghost" href="${BASE}index.html#katalog">Weiter einkaufen</a>`:`<button class="btn ghost" data-close>Weiter einkaufen</button>`;
  if(!t.items.length){box.innerHTML=`<div style="padding:32px 0;text-align:center"><p style="font-weight:600;margin:0 0 6px">Dein Warenkorb ist leer.</p><p class="note">Stöbere im Katalog oder starte mit einem kostenlosen Werkzeug.</p><div style="margin-top:8px">${more.replace('btn ghost','btn dark')}</div></div>`;return}
  box.innerHTML=t.items.map(({p,q,line})=>`<div class="line">${appIcon(p)}<div><h4><a href="${pageUrl(p.id)}">${esc(p.name)}</a></h4><span class="note">${MODELS[p.model]} · Einzelpreis ${unitText(p)} × ${platz(q)}</span><div class="row"><span class="qty"><button data-qty="${p.id}" data-d="-1"${q<=1?' aria-disabled="true"':""} aria-label="Ein Platz weniger (mindestens 1)">−</button><span>${q}</span><button data-qty="${p.id}" data-d="1"${q>=10?' aria-disabled="true"':""} aria-label="Ein Platz mehr (höchstens 10)">+</button></span><button class="rm" data-rm="${p.id}">Entfernen</button></div></div><b class="price"><span class="sr">Zeilensumme </span>${fmt(line)}</b></div>`).join("")
  +`<div class="coupon"><label class="sr" for="cpn">Gutscheincode</label><input id="cpn" aria-describedby="cpnErr" placeholder="Gutscheincode" maxlength="20" value="${coupon?"DEMO10":""}" ${coupon?"disabled":""}><button class="btn" id="cpnBtn" type="button">${coupon?"Entfernen":"Einlösen"}</button></div><span class="err" id="cpnErr" aria-live="polite"></span>`
  +sumTable(t)+`<button class="btn buy cta" id="toCheckout">Zur Kasse</button>${more}`+(CARTPAGE?"":`<a class="btn ghost" href="${BASE}warenkorb.html">Warenkorb als eigene Seite öffnen</a>`);
}
function renderFavs(){
  $("fBody").innerHTML=favs.length?favs.map(id=>{const p=byId[id];return `<div class="line">${appIcon(p)}<div><h4><a href="${pageUrl(id)}">${esc(p.name)}</a></h4><span class="note">${priceHTML(p)}</span><div class="row"><button class="btn" data-add="${id}" style="min-height:40px">${cart[id]?"Noch einmal hinzufügen":"In den Warenkorb"}</button><button class="rm" data-fav="${id}">Entfernen</button></div></div><span></span></div>`}).join("")+`<p class="note">Deine Merkliste wird nur in diesem Browser gespeichert. Ein Konto ist nicht nötig.</p>`
  :`<div style="padding:32px 0;text-align:center"><p style="font-weight:600;margin:0 0 6px">Noch nichts gemerkt.</p><p class="note">Tippe auf das Herz bei einem Werkzeug, um es hier zu sammeln.</p></div>`;
}

/* Overlays */
let lastFocus=null;
function setInert(on){document.querySelectorAll("[data-bg]").forEach(el=>{if(on)el.setAttribute("inert","");else el.removeAttribute("inert")})}
function openPanel(id){if(id==="cart")$("cStatus").textContent="";closePanels(true);setInert(true);$("toast").classList.remove("show");lastFocus=document.activeElement;$("ov").classList.add("open");$(id).classList.add("open");document.body.style.overflow="hidden";$(id).querySelector(".x").focus()}
function closePanels(keep){document.querySelectorAll(".panel.open").forEach(p=>p.classList.remove("open"));setInert(false);$("ov").classList.remove("open");document.body.style.overflow="";if(!keep&&lastFocus&&lastFocus.focus&&document.contains(lastFocus))lastFocus.focus()}

/* Kasse */
const K={step:1,data:{},pay:"rechnung"};
const FIELDS=[["first","Vorname","given-name"],["last","Nachname","family-name"],["email","E-Mail","email","full"],["company","Firma (optional)","organization","full"],["street","Straße und Hausnummer","street-address","full"],["zip","PLZ","postal-code"],["city","Ort","address-level2"]];
function validate(d){const e={};const nm=/^[\p{L} .'-]{2,40}$/u;
  if(!nm.test(d.first||""))e.first="Bitte Vornamen angeben (2 bis 40 Buchstaben).";
  if(!nm.test(d.last||""))e.last="Bitte Nachnamen angeben.";
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email||""))e.email="Bitte eine gültige E-Mail-Adresse angeben, z. B. max@beispiel.de.";
  if((d.company||"").length>60)e.company="Höchstens 60 Zeichen.";
  if(!/^.{3,60}$/.test(d.street||""))e.street="Bitte Straße und Hausnummer angeben.";
  if(!/^\d{5}$/.test(d.zip||""))e.zip="PLZ hat 5 Ziffern.";
  if(!nm.test(d.city||""))e.city="Bitte Ort angeben.";
  return e}
const luhn=n=>{let s=0,alt=false;for(let i=n.length-1;i>=0;i--){let d=+n[i];if(alt){d*=2;if(d>9)d-=9}s+=d;alt=!alt}return s%10===0};
const free=()=>totals().total===0;
function stepsHTML(){return `<ol class="ksteps" aria-label="Fortschritt der Bestellung">${["Kontakt","Zahlung","Prüfen","Fertig"].map((s,i)=>`<li class="${K.step===i+1?"on":K.step>i+1?"past":""}"${K.step===i+1?' aria-current="step"':""}>${i+1}. ${s}${K.step>i+1?'<span class="sr"> (erledigt)</span>':""}</li>`).join("")}</ol>`}
function renderCheckout(){
  const t=totals();
  const side=`<aside><h3>Deine Bestellung</h3>${t.items.map(({p,q,line})=>`<div class="oi">${appIcon(p,"sm")}<span>${q} × ${esc(p.name)} <small class="note">(${unitText(p)})</small></span><b class="price">${fmt(line)}</b></div>`).join("")}${sumTable(t)}</aside>`;
  let main="";
  if(K.step===1){
    main=`<h2 class="kh" tabindex="-1" style="font-size:26px;margin-bottom:6px">Kontakt und Rechnungsadresse</h2><p class="note" style="margin:0 0 16px">Kein Konto nötig. Pflichtfelder sind mit * markiert.</p><div class="alert">${ico("alert")}<span>Bitte nur erfundene Testdaten eingeben, z. B. Max Mustermann.</span></div><form class="f" id="addr" novalidate>${FIELDS.map(([k,l,ac,full])=>`<div class="${full?"full":""}"><label for="k_${k}">${l}${k==="company"?"":" *"}</label><input id="k_${k}" name="${k}" autocomplete="${ac}" ${k==="email"?'type="email"':k==="zip"?'inputmode="numeric" maxlength="5"':'maxlength="60"'} value="${esc(K.data[k]||"")}" aria-describedby="e_${k}" ${k==="company"?"":'aria-required="true"'}><span class="err" id="e_${k}" aria-live="polite"></span></div>`).join("")}<div class="full"><button class="btn buy cta" type="submit">${free()?"Weiter zur Prüfung":"Weiter zur Zahlung"}</button></div></form>`;
  }else if(K.step===2){
    main=`<h2 class="kh" tabindex="-1" style="font-size:26px;margin-bottom:16px">Zahlungsart</h2><div class="alert">${ico("alert")}<span>Simulation: Es wird keine Zahlung ausgeführt und nichts übertragen.</span></div><form id="payf" novalidate><div class="pay">
    <label><input type="radio" name="pay" value="rechnung" ${K.pay==="rechnung"?"checked":""}><span>Rechnung<small>Zahlbar in 14 Tagen (Demo)</small></span></label>
    <label><input type="radio" name="pay" value="karte" ${K.pay==="karte"?"checked":""}><span>Kreditkarte<small>Nur die Testkarte wird angenommen</small></span></label>
    <label><input type="radio" name="pay" value="wallet" ${K.pay==="wallet"?"checked":""}><span>AIMN Demo-Wallet<small>Fiktives Guthaben</small></span></label></div>
    <div id="cardf" class="f" style="margin-top:16px;${K.pay==="karte"?"":"display:none"}">${K.last4?'<p class="note full" style="margin:0">Kartendaten werden nicht zwischengespeichert. Bitte erneut eingeben.</p>':""}<div class="full"><label for="k_card">Kartennummer *</label><input id="k_card" aria-describedby="e_card" aria-required="true" inputmode="numeric" autocomplete="off" maxlength="19" placeholder="4242 4242 4242 4242"><span class="err" id="e_card"></span></div><div><label for="k_exp">Gültig bis (MM/JJ) *</label><input id="k_exp" aria-describedby="e_exp" aria-required="true" inputmode="numeric" autocomplete="off" maxlength="5" placeholder="12/29"><span class="err" id="e_exp"></span></div><div><label for="k_cvc">Prüfziffer *</label><input id="k_cvc" aria-describedby="e_cvc" aria-required="true" inputmode="numeric" autocomplete="off" maxlength="4" placeholder="123"><span class="err" id="e_cvc"></span></div></div>
    <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap"><button type="button" class="btn" id="back" style="flex:1">Zurück</button><button class="btn buy" type="submit" style="flex:2;min-height:50px">Weiter zur Prüfung</button></div></form>`;
  }else if(K.step===3){
    const d=K.data;
    main=`<h2 class="kh" tabindex="-1" style="font-size:26px">Bestellung prüfen</h2><div class="rev"><h3>Rechnungsadresse <button class="rm" data-goto="1">Ändern</button></h3><p>${esc(d.first)} ${esc(d.last)}${d.company?"<br>"+esc(d.company):""}<br>${esc(d.street)}<br>${esc(d.zip)} ${esc(d.city)}<br>${esc(d.email)}</p>
    <h3>Zahlung ${free()?"":'<button class="rm" data-goto="2">Ändern</button>'}</h3><p>${free()?"Keine Zahlung nötig, alles kostenlos":K.pay==="karte"?"Testkarte, endet auf "+esc(K.last4):K.pay==="wallet"?"AIMN Demo-Wallet":"Rechnung"}</p></div>
    <label class="check"><input type="checkbox" id="agb" aria-describedby="e_agb" aria-required="true"> Ich habe die fiktiven AGB, die Widerrufsbelehrung und die Datenschutzhinweise gelesen. Mir ist klar, dass dies eine Demo ist.</label><span class="err" id="e_agb"></span>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button type="button" class="btn" id="back" style="flex:1">Zurück</button><button class="btn buy" id="place" style="flex:2;min-height:52px;font-size:17px">${free()?"Jetzt kostenlos bestellen":"Zahlungspflichtig bestellen"} (Demo)</button></div>`;
  }else{
    $("kBody").innerHTML=stepsHTML()+`<div class="done"><span class="ok">${ico("check")}</span><h2 class="kh" tabindex="-1">Danke, ${esc(K.data.first)}. Deine Demo-Bestellung ist eingegangen.</h2><p>Bestellnummer <b class="num">${K.order}</b> · Gesamt <b class="price">${fmt(K.paid)}</b></p><p class="note">Es wurde keine echte Zahlung ausgelöst und keine E-Mail versendet. In einem echten Shop stünden deine Werkzeuge jetzt in deinem Konto bereit.</p><button class="btn dark" id="again" style="margin-top:12px">Weiter einkaufen</button></div>`;
    return;
  }
  $("kBody").innerHTML=stepsHTML()+`<div class="co"><div>${main}</div>${side}</div>`;
}
function focusStep(){const h=document.querySelector("#kBody .kh");if(h)h.focus()}
function startCheckout(){if(!Object.keys(cart).length)return;K.step=1;renderCheckout();openPanel("checkout")}

/* Ereignisse */
document.addEventListener("click",e=>{
  const t=e.target.closest("button,a");if(!t)return;
  const ds=t.dataset;
  if(ds.add){add(ds.add);return}
  if(ds.fav){toggleFav(ds.fav);return}
  if(ds.seat){seats=+ds.seat;updateSeats();return}
  if(ds.gview){showView(ds.gview);return}
  if(ds.type){S.type=ds.type;render();if(t.tagName==="A"){e.preventDefault();location.hash="katalog";route()}return}
  if(ds.pop){S.q=ds.pop==="Kostenlos"?"":ds.pop;if(ds.pop==="Kostenlos"){S.models.add("frei")}syncFilterInputs();render();$("katalog").scrollIntoView({behavior:motion()});return}
  if(ds.coll){resetAll();const c=COLL.find(x=>x.k===ds.coll);const [k,v]=Object.entries(c.f)[0];S[k].add(v);syncFilterInputs();render();$("katalog").scrollIntoView({behavior:motion()});return}
  if(ds.chip){const k=ds.chip,v=ds.v;if(k==="q")S.q="";else if(k==="max")S.max=250;else S[k].delete(v);syncFilterInputs();render();return}
  if(t.hasAttribute("data-resetall")){resetAll();return}
  if(t.hasAttribute("data-cartlink")){e.preventDefault();showCart();return}
  if(t.hasAttribute("data-close")){if(t.tagName==="A")e.preventDefault();closePanels();return}
  if(ds.qty){setQty(ds.qty,(cart[ds.qty]||0)+ +ds.d);return}
  if(ds.rm){const id=ds.rm,q=cart[id],n=byId[id].name;removeItem(id);toast(`„${n}“ entfernt`,null,"Rückgängig",()=>{cart[id]=q;save();refresh()});return}
  if(ds.goto){K.step=+ds.goto;renderCheckout();focusStep();return}
  switch(t.id){
    case "home":if(!HOME)break;e.preventDefault();closePanels();resetAll();history.pushState(null,"",location.pathname+location.search);route();window.scrollTo(0,0);break;
    case "openCart":showCart();break;
    case "openFav":renderFavs();openPanel("favs");break;
    case "toCheckout":startCheckout();break;
    case "dAdd":{add(PRODUCT.dataset.id,seats);break}
    case "cpnBtn":{if(coupon){coupon=null;save();renderCart();break}const v=$("cpn").value.trim().toUpperCase();if(v==="DEMO10"){coupon="DEMO10";save();renderCart();toast("Gutschein eingelöst: 10 % Rabatt")}else{$("cpnErr").textContent="Dieser Code ist ungültig. Zum Testen: DEMO10"}break}
    case "reset":resetAll();break;
    case "ftoggle":{const o=$("filters").classList.toggle("show");t.setAttribute("aria-expanded",o);break}
    case "back":K.step=K.step===3&&free()?1:K.step-1;renderCheckout();focusStep();break;
    case "place":{if(!$("agb").checked){$("e_agb").textContent="Bitte bestätige die Hinweise.";$("agb").focus();break}
      K.paid=totals().total;K.order="AIMN-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+String(Math.floor(Math.random()*9000)+1000);
      t.disabled=true;t.textContent="Bestellung wird simuliert …";
      setTimeout(()=>{cart={};coupon=null;save();refresh();K.step=4;K.last4="";renderCheckout();focusStep();announce("Demo-Bestellung abgeschlossen. Es wurde nichts bezahlt. Dein Warenkorb ist jetzt leer.")},800);break}
    case "again":closePanels();break;
    case "toastAct":if(undo){undo();undo=null}$("toast").classList.remove("show");break;
  }
});
$("ov").addEventListener("click",()=>closePanels());
$("skip").addEventListener("click",e=>{e.preventDefault();($("homeH1")||$("dTitle")).focus()});
/* Menü-Schaltfläche (unter 1020 px) */
function mainMenu(open,focusBtn){$("mainnav").classList.toggle("open",open);$("menuBtn").setAttribute("aria-expanded",open);if(!open&&focusBtn)$("menuBtn").focus()}
$("menuBtn").addEventListener("click",()=>mainMenu(!$("mainnav").classList.contains("open")));
$("mainnav").addEventListener("click",e=>{if(e.target.closest("a"))mainMenu(false)});
if(window.matchMedia)matchMedia("(min-width:1021px)").addEventListener("change",e=>{if(e.matches)mainMenu(false)});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&$("mainnav").classList.contains("open")){mainMenu(false,true);return}
  if(e.key==="Escape"&&!$("thMenu").hidden){thMenu(false);$("thBtn").focus();return}
  if(e.key==="Escape"&&document.querySelector(".panel.open"))closePanels();
  const op=document.querySelector(".panel.open");
  if(e.key==="Tab"&&op){const f=[...op.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select,[tabindex]:not([tabindex="-1"])')].filter(x=>x.getClientRects().length);if(!f.length)return;const first=f[0],last=f[f.length-1];
    if(e.shiftKey&&(document.activeElement===first||!op.contains(document.activeElement))){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&(document.activeElement===last||!op.contains(document.activeElement))){e.preventDefault();first.focus()}}
  if(!$("thMenu").hidden&&(e.key==="ArrowDown"||e.key==="ArrowUp")){e.preventDefault();const it=[...document.querySelectorAll("[data-theme-pick]")];let i=it.indexOf(document.activeElement);i=(i+(e.key==="ArrowDown"?1:-1)+it.length)%it.length;it[i].focus()}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("q").focus();$("q").select()}
});
document.addEventListener("submit",e=>{
  e.preventDefault();const id=e.target.id;
  if(id==="sform"||id==="hform"){const v=(id==="hform"?$("q2"):$("q")).value.slice(0,60).trim();
    if(!HOME){location.href=`${BASE}index.html?q=${encodeURIComponent(v)}#katalog`;return}
    S.q=v;$("q").value=S.q;render();$("katalog").scrollIntoView({behavior:motion()});return}
  if(id==="news"){const v=$("nmail").value.trim();$("newsMsg").textContent=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)?"Danke. In der Demo wird nichts gespeichert oder versendet.":"Bitte eine gültige E-Mail-Adresse eingeben.";if(/@/.test(v))$("nmail").value="";return}
  if(id==="addr"){
    const d={};FIELDS.forEach(([k])=>d[k]=$("k_"+k).value.trim());
    const er=validate(d);FIELDS.forEach(([k])=>{$("e_"+k).textContent=er[k]||"";$("k_"+k).setAttribute("aria-invalid",!!er[k])});
    K.data=d;if(Object.keys(er).length){$("k_"+Object.keys(er)[0]).focus();return}
    K.step=free()?3:2;renderCheckout();focusStep();return}
  if(id==="payf"){
    if(K.pay==="karte"){
      const n=$("k_card").value.replace(/\s/g,""),x=$("k_exp").value.trim(),c=$("k_cvc").value.trim();let ok=true;
      const m=x.match(/^(0[1-9]|1[0-2])\/(\d{2})$/);const now=new Date();const future=m&&(2000+ +m[2]>now.getFullYear()||(2000+ +m[2]===now.getFullYear()&&+m[1]>=now.getMonth()+1));
      const set=(k,msg)=>{$("e_"+k).textContent=msg;$("k_"+k).setAttribute("aria-invalid",!!msg);if(msg)ok=false};
      set("card",!/^\d{16}$/.test(n)||!luhn(n)?"Diese Kartennummer ist ungültig.":n!=="4242424242424242"?"Nur die Testkarte 4242 4242 4242 4242 ist erlaubt.":"");
      set("exp",future?"":"Bitte im Format MM/JJ und in der Zukunft.");
      set("cvc",/^\d{3,4}$/.test(c)?"":"3 oder 4 Ziffern.");
      if(!ok)return;K.last4=n.slice(-4);
    }
    K.step=3;renderCheckout();focusStep();return}
});
document.addEventListener("change",e=>{
  const t=e.target;
  if(t.dataset.f){t.checked?S[t.dataset.f].add(t.value):S[t.dataset.f].delete(t.value);render()}
  else if(t.name==="pay"){K.pay=t.value;$("cardf").style.display=K.pay==="karte"?"":"none"}
  else if(t.id==="sort"){S.sort=t.value;render()}
});
document.addEventListener("input",e=>{
  const t=e.target;
  if(t.id==="maxp"){S.max=+t.value;render()}
  if(t.id==="q"&&HOME){S.q=t.value.slice(0,60);render()}
  if(t.id==="k_card"){t.value=t.value.replace(/\D/g,"").slice(0,16).replace(/(\d{4})(?=\d)/g,"$1 ")}
  if(t.id==="k_exp"){let v=t.value.replace(/\D/g,"").slice(0,4);if(v.length>2)v=v.slice(0,2)+"/"+v.slice(2);t.value=v}
});
let tt;
function toast(m,_,act,fn){const el=$("toast");$("toastMsg").textContent=m;const b=$("toastAct");b.hidden=!act;if(act)b.textContent=act;undo=fn||null;el.classList.remove("show");void el.offsetWidth;el.classList.add("show");clearTimeout(tt);toastMs=act?8000:3000;tt=setTimeout(()=>el.classList.remove("show"),toastMs)}
let toastMs=3000;
["mouseenter","focusin"].forEach(ev=>$("toast").addEventListener(ev,()=>clearTimeout(tt)));
["mouseleave","focusout"].forEach(ev=>$("toast").addEventListener(ev,()=>{clearTimeout(tt);tt=setTimeout(()=>$("toast").classList.remove("show"),toastMs)}));
HOME&&window.addEventListener("hashchange",route);
/* Darstellung: Hell (Standard), Dunkel, Automatisch */
const mq=window.matchMedia?matchMedia("(prefers-color-scheme: dark)"):null;
function applyTheme(pref,persist){
  if(pref!=="dark"&&pref!=="system")pref="light";
  const dark=pref==="dark"||(pref==="system"&&!!mq&&mq.matches);
  const r=document.documentElement;r.dataset.mode=dark?"dark":"light";r.dataset.pref=pref;
  if(persist){try{localStorage.setItem("aimn-theme",pref)}catch(e){}}
  document.querySelectorAll("[data-theme-pick]").forEach(b=>b.setAttribute("aria-checked",b.dataset.themePick===pref));
  $("thBtn").setAttribute("aria-label",`Darstellung wählen, aktuell ${pref==="system"?"automatisch ("+(dark?"dunkel":"hell")+")":dark?"dunkel":"hell"}`);
}
function thMenu(open){$("thMenu").hidden=!open;$("thBtn").setAttribute("aria-expanded",open);if(open)(document.querySelector('[data-theme-pick][aria-checked="true"]')||document.querySelector("[data-theme-pick]")).focus()}
$("thBtn").addEventListener("click",e=>{e.stopPropagation();thMenu($("thMenu").hidden)});
$("thMenu").addEventListener("click",e=>{const b=e.target.closest("[data-theme-pick]");if(!b)return;e.stopPropagation();applyTheme(b.dataset.themePick,true);thMenu(false);$("thBtn").focus()});
document.addEventListener("click",e=>{if(!$("thMenu").hidden&&!e.target.closest(".thm"))thMenu(false)},true);
if(mq){const h=()=>{if(document.documentElement.dataset.pref==="system")applyTheme("system",false)};mq.addEventListener?mq.addEventListener("change",h):mq.addListener(h)}
window.addEventListener("storage",e=>{if(e.key==="aimn-theme")applyTheme(e.newValue,false);if(e.key===null||e.key==="aimn-cart"||e.key==="aimn-fav"||e.key==="aimn-coupon"){loadState();cartCount();favCount();refreshNow()}});
/* "Zurück"/"Vorwärts" aus dem Browser-Zwischenspeicher: Warenkorb und Merkliste neu aus dem Speicher lesen */
window.addEventListener("pageshow",e=>{if(e.persisted){loadState();cartCount();favCount();refreshNow();if(HOME)renderRecent()}});
applyTheme(document.documentElement.dataset.pref,false);
/* Startseite: Suchbegriff und Produktart aus der Adresse übernehmen (?q=…&typ=…), z. B. von Produktseiten */
if(HOME){const ps=new URLSearchParams(location.search);const q0=(ps.get("q")||"").slice(0,60).trim();
  if(q0){S.q=q0;$("q").value=q0}
  const t0=ps.get("typ");if(t0&&Object.hasOwn(TYPES,t0))S.type=t0}
/* Produktseite: Ansicht merken ("zuletzt angesehen") */
if(PRODUCT&&byId[PRODUCT.dataset.id]){const id=PRODUCT.dataset.id;recent=[id,...recent.filter(x=>x!==id)].slice(0,6);store.set("aimn-recent",recent)}
cartCount();favCount();if(HOME)render();if(CARTPAGE)renderCart();route();syncPage();
}
