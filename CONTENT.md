# Kombinat Elektrosvyaz No.4 — Content Inventory

Every user-facing string in `index.html` and `script.js`, in page order, with a one-line note on where it lives.

## Document head

| Text | Where it fits |
|---|---|
| `Kombinat Elektrosvyaz No.4 — Official Internet Representation` | `<title>` — browser tab / bookmark title |
| `Official Internet page of OAO «Kombinat Elektrosvyaz No.4» — telecommunications equipment plant, Sverdlovsk Oblast. Est. 1961.` | `<meta name="description">` — search-engine snippet |

## Dial-up splash screen (`#dialup`)

| Text | Where it fits |
|---|---|
| `KE4-TERMINAL v1.2` | Splash box header, left side |
| `0%` → increments | Splash box header, right side (percent counter, generated in `script.js`) |
| `INITIALIZING MODEM «URAL-96» ... OK` | Splash line 1 (`script.js` `DIALUP_LINES`) |
| `DIALING +7 (343) 22-4-18 (LINE OF THE DEPARTMENT OF AUTOMATION) ...` | Splash line 2 |
| `CARRIER DETECTED. HANDSHAKE V.34 ...` | Splash line 3 |
| `CONNECTED AT 28800 BPS. QUALITY OF LINE: SUFFICIENT.` | Splash line 4 |
| `REQUESTING INDEX.HTM (41 KB) ...` | Splash line 5 |
| `LOADING PHOTOGRAPHS (PLEASE HAVE PATIENCE) ...` | Splash line 6 |
| `WELCOME TO THE INTERNET PAGE OF THE KOMBINAT.` | Splash line 7 (final line before the page reveals) |
| `CLICK ANYWHERE TO SKIP THE CONNECTION (NOT RECOMMENDED BY THE DEPARTMENT OF AUTOMATION)` | Small caption under the splash box |

## Top administrative bar

| Text | Where it fits |
|---|---|
| `OFFICIAL INTERNET REPRESENTATION OF OAO «KOMBINAT ELEKTROSVYAZ No.4»` | Left side of the thin black admin strip at the very top |
| `SVERDLOVSK OBLAST, RUSSIAN FEDERATION` | Right side of the admin strip |
| `EST. 1961` | Red tag, far right of the admin strip |

## Masthead (header)

| Text | Where it fits |
|---|---|
| `Kombinat Elektrosvyaz No.4 logo` | Alt text for the crest/logo image |
| `Kombinat Elektrosvyaz No.4` | Main wordmark (big black/red title next to the crest) |
| `КОМБИНАТ ЭЛЕКТРОСВЯЗЬ №4 · СВЕРДЛОВСКАЯ ОБЛАСТЬ` | Russian sub-line under the wordmark |
| `"Reliable connection for the state — now for the whole world."` | Italic motto under the wordmark |
| `JOINT-STOCK COMPANY` / `SINCE 1991` / `LICENSE MINSVYAZ RF` / `No. 004718` | Small info block, top-right of masthead |
| `WE SEEK FOREIGN PARTNERS` | Yellow badge, top-right of masthead |

## Navigation bar

| Text | Where it fits |
|---|---|
| `01 History` | Nav link → History section |
| `02 Restructuring` | Nav link → Restructuring section |
| `03 Product Catalog` + `NEW!` | Nav link → Catalog section, with blinking "NEW!" tag |
| `04 Foreign Partners` | Nav link → Partners section |
| `05 Directorate` | Nav link → Director section |
| `06 Contact` | Nav link → Contact section |
| `[ ENG ] · РУС — soon` | Language switcher, far right of nav bar |

## Scrolling marquee ticker

| Text | Where it fits |
|---|---|
| `*** ATTENTION *** NEW PRODUCT: MODEM «URAL-96» — 28,800 BITS PER SECOND *** THE KOMBINAT ACCEPTS ORDERS FROM FOREIGN DISTRIBUTORS *** PAYMENT ACCEPTED IN USD AND DM *** FAX: +7 (343) 22-4-17 *** 35 YEARS OF RELIABLE PRODUCTION ***` | Yellow scrolling ticker strip below the nav (duplicated twice in the markup for a seamless loop) |

## Hero section

| Text | Where it fits |
|---|---|
| `DOCUMENT: INDEX.HTM · REVISION 3 · 14.11.1996` | Small mono "document header" line above the hero title |
| `Telecommunication equipment` + `since 1961` | Big hero headline (the "since 1961" part is highlighted) |
| `For thirty-five years the Kombinat has manufactured switchboards, telephone exchanges and relay systems of the highest state category of quality. Today our production is available to partners of all countries.` | Hero lede paragraph, under the headline |

### Stats strip (bottom of hero)

| Number | Label | Where it fits |
|---|---|---|
| `1961` | `YEAR OF FOUNDATION BY STATE DECREE` | Stat tile 1 |
| `2,410` | `WORKERS AND ENGINEERS OF THE COLLECTIVE — PEAK, 1985` | Stat tile 2 |
| `14,000` | `SWITCHBOARD UNITS PER ANNUM — PLAN 104% FULFILLED, 1985` | Stat tile 3 |
| `28.8k` | `BITS/SEC — MODEM «URAL-96», NOW IN PRODUCTION` | Stat tile 4 (highlighted red) |

## Section 01 — History

| Text | Where it fits |
|---|---|
| `01` | Section number chip |
| `History of the Kombinat` | Section title |
| `ИСТОРИЯ КОМБИНАТА` | Russian tag next to the title |
| `Factory building, 1963` | Alt text for the history photo |
| `Main production hall of the Kombinat, constructed 1961–1963 from reinforced concrete panels according to standard design 1-468.` | Caption under the history photo |
| **1961 — Foundation**: `The Kombinat is founded by decree of the Ministry of Communications of the USSR as State Plant p/ya A-3771, a target figure of the Seven-Year Plan (1959–1965) for the development of the Union's communications industry. First production hall erected in eleven months.` | Timeline row 1 |
| **1966 — First quota fulfilled ahead of schedule**: `Opening year of the Eighth Five-Year Plan: annual quota of 8,000 crossbar switchboard units and the first automatic telephone exchanges (ATS) of Kombinat manufacture fulfilled by 7 November. The collective receives the challenge red banner of the oblast.` | Timeline row 2 |
| **1975 — Relay systems programme**: `Launch of the RS series of relay blocks for inter-city telephone exchanges, closing the Ninth Five-Year Plan. Deliveries to all fifteen republics of the Union.` | Timeline row 3 |
| **1985 — Peak of production**: `14,000 switchboard units per annum. 2,410 workers. The Kombinat's best result, at the close of the Eleventh Five-Year Plan. The Kombinat operates its own kindergarten, sanatorium and house of culture.` | Timeline row 4 |
| **1991 — Transformation**: `In connection with the known events, the plant is reorganized into the open joint-stock company OAO «Kombinat Elektrosvyaz No.4». See section 02.` | Timeline row 5 |
| **1996 — Entry into the INTERNET**: `The Kombinat opens the present World Wide Web page, that our achievements may be known also to partners and investors beyond the borders of the Russian Federation — among the first industrial enterprises of the oblast to do so.` | Timeline row 6 |

## Section 02 — Restructuring & Reorganization

| Text | Where it fits |
|---|---|
| `02` | Section number chip |
| `Restructuring & Reorganization` | Section title |
| `1991 — PRESENT DAY` | Tag next to the title |
| `In connection with the known events of 1991, the Kombinat was transformed by decision of the labour collective into an open joint-stock company. This transition was accomplished in an orderly manner and, in the main, without interruption of production.` | Paragraph 1 |
| `The enterprise has successfully reoriented itself toward the demands of the market economy. Where previously the Kombinat fulfilled the state plan, today it fulfils the wishes of the customer — with the same discipline and the same concrete.` | Paragraph 2 |
| `NOTE OF THE EXPORT DEPARTMENT: All certificates of the former state quality mark (Знак качества СССР) remain physically attached to our equipment and, in our opinion, remain deserved.` | Callout note |
| `Before 1991` / `PRODUCTION BY STATE PLAN`, `CUSTOMER: MINISTRY OF COMMUNICATIONS USSR`, `OUTPUT: MILITARY-GRADE SWITCHBOARDS`, `MOTIVATION: HONOUR OF THE COLLECTIVE` | Left comparison card |
| `After 1991` / `PRODUCTION BY MARKET DEMAND`, `CUSTOMER: ANY SOLVENT ORGANIZATION OR CITIZEN`, `OUTPUT: MODEMS, CONSUMER TELEPHONY`, `MOTIVATION: HONOUR OF THE COLLECTIVE (UNCHANGED)` | Right comparison card |

## Blueprint divider

| Text | Where it fits |
|---|---|
| `Principal schematic KE-40M, sheet 3` | Alt text for the blueprint strip image |
| `FIG. 1 — FROM THE TECHNICAL ARCHIVE OF THE KOMBINAT (DECLASSIFIED 1992)` | Caption under the blueprint image |

## Section 03 — Product Catalog

| Text | Where it fits |
|---|---|
| `03` | Section number chip |
| `Product Catalog` + `NEW!` | Section title with blinking tag |
| `CATALOGUE No. KE4-96/11` | Tag next to the title |
| **Product 1** — `POS. 01 · ART. KE-40` | Card eyebrow label |
| `Switchboard KE-40M` | Product name |
| `Crossbar switchboard of the highest reliability category. Formerly of military designation; now available to all. Practically indestructible.` | Product description |
| `CAPACITY: 40 LINES`, `MASS: 212 KG`, `SERVICE LIFE: 40 YEARS MIN.`, `IN PRODUCTION SINCE: 1964`, `PRICE ON REQUEST → FAX` | Spec sheet rows |
| **Product 2** — `POS. 02 · ART. RS-7M` | Card eyebrow label |
| `Relay block RS-7M` | Product name |
| `Electromechanical relay block for telephone exchanges of inter-city class. The characteristic clicking sound is a sign of the correct operation.` | Product description |
| `RELAYS PER BLOCK: 56 PCS`, `SWITCHING TIME: 18 MS`, `MASS: 34 KG`, `IN PRODUCTION SINCE: 1975`, `PRICE ON REQUEST → FAX` | Spec sheet rows |
| **Product 3** — `POS. 03 · ART. URAL-96` + `NEW!` | Card eyebrow label, with "new" chip |
| `Modem URAL-96` | Product name |
| `Our newest achievement: a modem for the citizens and the offices. Connects the personal computer to the INTERNET by the ordinary telephone line.` | Product description |
| `SPEED: 28,800 BIT/S`, `PROTOCOL: V.34`, `MASS: 2.8 KG (LIGHTEST EVER MADE HERE)`, `IN PRODUCTION SINCE: 1996`, `PRICE ON REQUEST → FAX` | Spec sheet rows |
| `SECTION «SPARE PARTS AND ACCESSORIES» IS UNDER CONSTRUCTION. THE WEBMASTER APOLOGIZES AND IS WORKING WITH ALL SPEED.` | "Under construction" notice below the product grid |

## Section 04 — For Foreign Partners & Distributors

| Text | Where it fits |
|---|---|
| `04` | Section number chip |
| `For Foreign Partners & Distributors` | Section title |
| `Dear foreign friend! The Kombinat is open for the mutually profitable cooperation.` | Heading of the copy block |
| `Our Export Division «ELSVYAZ-EXPORT» is created specially in 1993 for work with partners of all countries. We propose: official distribution agreements, OEM manufacture of telecom hardware, and delivery by rail or by air from Ekaterinburg. Documentation is available in English language upon the request.` | Lede paragraph |
| `PAYMENT: USD`, `PAYMENT: DM`, `BARTER: CONSIDERED`, `LETTER OF CREDIT: PREFERRED` | Terms chips row |
| `How to become the partner` | Steps list title |
| `1. Send the fax to the Export Division with description of your organization and serious intentions.` | Step 1 |
| `2. Receive from us the catalogue, price list and certificate copies (in English language).` | Step 2 |
| `3. Conclude the distribution agreement. Our lawyer, formerly of the ministry, prepares all documents.` | Step 3 |
| `4. Receive the equipment by rail or air from Ekaterinburg. Delivery is always on schedule — this we have practised since 1961.` | Step 4 |

## Section 05 — Message from the General Director

| Text | Where it fits |
|---|---|
| `05` | Section number chip |
| `Message from the General Director` | Section title |
| `General Director V. P. Gribov` | Alt text for director photo |
| `V. P. GRIBOV`, `GENERAL DIRECTOR`, `ENGINEER-ELECTRICIAN, 1ST CLASS`, `AT THE KOMBINAT SINCE 1968` | Caption under director photo |
| `«Respected visitor of our Internet page! You see before you the enterprise which for thirty-five years has not once failed to deliver a connection. In the old time, we connected the ministries. Now we wish to connect with you.` | Quote paragraph 1 |
| `Some say that a factory of concrete cannot change. We answer: concrete is the most honest material — it does not pretend. And neither do we. Our modems are perhaps not the most beautiful in the world, but they will work also in the year 2020, of this I am certain.` | Quote paragraph 2 |
| `I invite you to study our catalogue and to send us the fax.»` | Quote paragraph 3 (closing) |
| `V. Gribov` | Signature |
| `ОАО КЭС-4` / `★` / `APPROVED` | Approval stamp graphic text |

## Section 06 — Contact the Directorate

| Text | Where it fits |
|---|---|
| `06` | Section number chip |
| `Contact the Directorate` | Section title |
| `Postal address` | Column label |
| `624090, RUSSIAN FEDERATION`, `SVERDLOVSK OBLAST`, `g. VERKHNYAYA TURA`, `ul. ZAVODSKAYA, 1`, `OAO «KOMBINAT ELEKTROSVYAZ No.4»` | Postal address lines |
| `Telecommunication` | Column label |
| `TEL: +7 (343) 22-4-16`, `FAX: +7 (343) 22-4-17 (PREFERRED)`, `TELEX: 721 445 ELSV SU`, `E-MAIL: kombinat4@sovam.net`, `(THE E-MAIL IS CHECKED EACH TUESDAY)` | Phone/fax/telex/email lines |
| `Reception hours of the Directorate` | Column label |
| `MON–FRI: 08:00–17:00`, `LUNCH: 12:00–13:00 (STRICT)`, `SAT, SUN: THE KOMBINAT RESTS` | Office hours lines |
| `GUESTBOOK — UNDER CONSTRUCTION. PLEASE SEND YOUR OPINION BY FAX INSTEAD.` | Small note under office hours |

### Fax order form

| Text | Where it fits |
|---|---|
| `Blank of the fax order` | Fax card title |
| `FORM KE4-F1 · APPROVED BY DIRECTORATE` | Fax card sub-label |
| `Your organization` / placeholder `e.g. ACME TELECOM GMBH` | Form field 1 |
| `Country` / placeholder `e.g. GERMANY` | Form field 2 |
| `Position of interest` — options: `POS. 01 — SWITCHBOARD «KE-40M»`, `POS. 02 — RELAY BLOCK «RS-7M»`, `POS. 03 — MODEM «URAL-96» (NEW!)`, `ALL POSITIONS (SERIOUS INTENTIONS)` | Form field 3 (dropdown) |
| `Quantity, pcs` / placeholder `MINIMUM ORDER: 10` | Form field 4 |
| `THE FORM WILL BE TRANSMITTED TO FAX +7 (343) 22-4-17. TRANSMISSION TAKES 40–90 SECONDS.` | Note above the submit button |
| `Send the fax ▶` | Submit button |
| `DIALING +7 (343) 22-4-17 ...` + block progress bar + `TRANSMITTING PAGE 1 OF 1 ...` | "Sending" state, shown after submit (`script.js` `initFax`) |
| `*** TRANSMISSION REPORT ***`, `DATE: 14.11.1996  TIME: 10:47`, `FAX No.: +7 (343) 22-4-17  RESULT: OK`, `PAGES: 1  DURATION: 00:58`, `THE KOMBINAT THANKS YOU FOR THE SERIOUS INTENTIONS.`, `ANSWER WILL BE PREPARED BY THE EXPORT DIVISION WITHIN 5 WORKING DAYS.` | "Done" confirmation report |
| `Send another fax` | Reset button on the confirmation screen |

## Footer

| Text | Where it fits |
|---|---|
| `VISITORS SINCE 01.09.1996:` + counter digits | Visitor counter, footer left (counter value generated in `script.js` `initCounter`) |
| `BEST VIEWED IN NETSCAPE NAVIGATOR 3.0 · 800×600` | Retro browser badge, footer left |
| `© 1996 OAO «KOMBINAT ELEKTROSVYAZ No.4». ALL RIGHTS ARE RESERVED.` | Footer right, line 1 |
| `PAGE IS MADE BY THE DEPARTMENT OF AUTOMATION (COMRADE S. LOBOV) IN PROGRAM «NOTEPAD».` | Footer right, line 2 |
| `LAST UPDATE: 14.11.1996 · PAGE WEIGHT: 41 KB — OPTIMIZED FOR THE SLOW CONNECTION.` | Footer right, line 3 |
