# Fuel & Holding — C208 in-flight fuel calculator

Phase Deck (in-flight hold / return / alternate decisions, alternate check), Day Plan (multi-sector fuel ladder, sector burn calculator, pre-flight minimum, saved days, PNR / CP), Descent Planning (TOD, profile and configuration gates), Glance (decision numbers, large), Hold Clock (live countdown to each decision while holding, with FOB re-sync), Recall (departure setup, AAI, approach configurations, missed approach, radar altimeter, transponder and TAWS memory aid from Part A §6.65–6.66 and FCOM §8.5.4–8.5.7), Radio (call sequence and content by situation — AIP ENR 1.1 §2/§6, Part 91 MOS ch 21 via CASA AC 91-10, CASA AC 91-35 Radiotelephony Manual) and More (bright-sun theme, copy-as-text summary), built to the company method in FOM Part A §6.4 and FCOM §7.1.1.

Install on an iPad: open the GitHub Pages address in **Safari** → Share → **Add to Home Screen**. After the first open it runs fully offline and autosaves on the device. Planning aid only — verify against aircraft indications and the current manuals.

Files: `index.html` (the app), `sw.js` (offline cache), `manifest.webmanifest` + icons (home-screen app). To ship an update, replace `index.html` and bump the cache name in `sw.js`. On the iPad the app shows a "NEW VERSION DOWNLOADED — TAP HERE TO RELOAD" banner once the update has been fetched (it checks each time the app comes to the foreground with a connection); the version tag next to "Autosaved" shows which build is running.

Aerodrome positions built into the DESCENT tab's GPS feature come from the OurAirports public-domain dataset (Australian Y-code aerodromes); they are a convenience only and must be checked against ERSA.
