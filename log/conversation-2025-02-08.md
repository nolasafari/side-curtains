# Side Curtains — Development Log
## Session: February 8, 2025

---

### Project Concept Discussion

**Site Name:** Side Curtains
**Tagline:** "Getting back on the road again — one British roadster at a time"
**Subject:** Post-war British roadsters (1945–1980)
**Target Audience:** Enthusiast hobbyists and restorers
**Approach:** Community-driven forum, curated by owner
**Monetization:** None at this point
**Launch Strategy:** Private, lean launch — testing the waters

**Marques Covered:** MG, Triumph, Austin-Healey, Jaguar, Lotus, Morgan, Sunbeam, Jensen-Healey, TVR

**Tone:** Fun, happy, welcoming. Like a good pub conversation about cars. No snobbery.

---

### Name Discussion

Names considered:
- Side Curtains ✅ (chosen)
- On the Road Again
- Positive Earth
- The Open Road
- Sprung Knock-Offs
- Oil & Chrome

Final decision: **Side Curtains** with tagline "Getting back on the road again — one British roadster at a time"

---

### Phase 1 — Lean Launch (What We're Building)

1. **Home Page** — Hero, featured car of the month, latest blog posts, community CTA
2. **Blog** — Curated articles (history, tech tips, fun/humour)
3. **Gallery** — Photos organized by marque, filterable
4. **Forum** — Placeholder/coming soon (categories defined)
5. **About** — The story, what we cover, the spirit, contact

**Not building yet (Phase 2):** User profiles, events calendar, full classifieds, mobile app

---

### Design Direction

- **Colour palette:** British Racing Green (#004225), cream/ivory (#FFF8E7), leather brown (#8B4513), chrome
- **Typography:** Clean, readable with slight vintage character
- **Layout:** Clean, simple — the cars are the stars
- **Responsive:** Mobile and desktop

---

### Tech Stack

- **Framework:** Next.js (React, TypeScript)
- **Styling:** Tailwind CSS with custom BRG theme
- **Target deployment:** AWS (EC2, S3, CloudFront, RDS)
- **Local testing first**

---

### Build Log

1. ✅ Installed Node.js via Homebrew (v25.6.0)
2. ✅ Created Next.js project with TypeScript + Tailwind
3. ✅ Built custom colour theme (BRG, cream, leather, chrome)
4. ✅ Created Navbar component (responsive, mobile menu)
5. ✅ Created Footer component (marques, navigation, Lucas joke)
6. ✅ Built Home page (hero, featured car spotlight, blog previews, CTA)
7. ✅ Built Blog listing page with category filters
8. ✅ Built individual Blog post pages with 4 sample articles:
   - "Welcome to Side Curtains" (featured)
   - "Top 5 Excuses for Buying Another Parts Car"
   - "A Beginner's Guide to Lucas Electrics (and Prayer)"
   - "A Love Letter to the MG T-Series"
9. ✅ Built Gallery page with 12 car entries, filterable by marque
10. ✅ Built Forum placeholder with planned categories and ground rules
11. ✅ Built About page (story, marques, spirit, contact)
12. ✅ Dev server running on localhost:3000

---

### Sample Content Created

**Blog Posts (all original content):**
- Welcome post introducing the site
- Humorous "5 excuses" list piece
- Technical intro to Lucas electrics
- Historical appreciation of MG T-Series

**Gallery Entries (placeholder images, descriptions are original):**
- 3 MG models (MGA 1600, MGB Roadster, MG TD)
- 3 Triumph models (TR6, TR4A, Spitfire Mk3)
- 2 Austin-Healey models (3000 Mk III, Bugeye Sprite)
- 2 Jaguar models (XK140 Roadster, E-Type Series 1)
- 1 Lotus (Elan S3)
- 1 Morgan (Plus 4)

**Forum Categories Defined:**
- General Chat, MG, Triumph, Austin-Healey, Jaguar, Other Marques, Workshop & Tech, For Sale/Wanted

---

### Session 2 Updates (Feb 8, continued)

**Bugeye Sprite Photo Added:**
- [x] Downloaded CC0 Public Domain photo from Wikimedia Commons
- Photographer: Alf van Beem (Nationaal Oldtimer Festival Zandvoort, 2014)
- License: CC0 1.0 Universal — Public Domain Dedication
- Attribution included on site even though not legally required
- Replaced emoji placeholder on home page with real photo using Next.js Image component

**Copyright Audit Completed:**
- [x] Full audit of all 9 source files
- All blog post content confirmed original
- All page UI/editorial text confirmed original
- One image (Bugeye Sprite) properly licensed CC0

**Issues Found & Fixed:**
- [x] FIXED: "The Standard of the World" was Cadillac's slogan, wrongly used for Triumph → Changed to "From TR2 to Spitfire and beyond"
- [x] FIXED: Enzo Ferrari E-Type quote presented as fact when disputed → Changed to "reportedly called"
- [x] FIXED: MG TD dates said 1949-1953, should be 1950-1953
- NOTED: "Safety Fast!" (MG), "Grace, Space, and Pace" (Jaguar), "Simplify, then add lightness" (Lotus) — these are trademarked/attributed slogans used in descriptive editorial context, which is acceptable. Consider adding attribution notes in future.

---

### Session 3 Updates (Feb 8, continued)

**Events Calendar Page Built:**
- [x] New `/events` page added with full 2026 regional calendar
- [x] Navigation updated (Navbar + Footer) to include Events link
- [x] Created `src/data/eventsData.ts` with events data and regional club listings

**Research Conducted:**
- BMCNO.org reviewed — incorporated their 2026 British Motoring Festival (March 28, Covington) and other events
- English Motoring Club of Mississippi (msemc.org) — full 2026 calendar incorporated
- South Alabama British Car Club (sabcc.org) — Fairhope festival included
- Panhandle British Car Association (pbca1.com) — Brits on the Bay included
- Texas All British Car Days, DFW All British & European Car Day included
- Natchez Concours d'Elegance included
- Wheels Across the Pond (Jupiter, FL) included

**Events Calendar Features:**
- 20+ events across LA, MS, AL, FL, TX, AR, MO
- Filter by month and event type (shows, drives, social, tech, national)
- Distance from New Orleans shown for each event
- Featured/highlighted events for nearby & major shows
- BMCNO spotlight banner with link to bmcno.org
- Regional British Car Clubs directory (6 clubs listed with descriptions & links)
- State color-coded badges (LA=green, MS=blue, AL=red, FL=orange, TX=amber)
- "Know of an Event?" call-to-action at bottom

**Event Categories:**
- Car Shows: BMCNO Festival, Brits on the Bluff, Brits on the Bay, Fairhope, Euro-Fest, DFW, TX ABCD, Natchez Concours, Brits in the Ozarks
- Drives: Natchez Trace, Soso MS scenic drive
- Social: Middendorf's lunch, British Breakfast, McLaren Weekend, Lake Merganser, Holiday Party
- Tech Sessions: Vicksburg, Brandon, Chili Bowl
- National/Major: GOF South, Wheels Across the Pond

**Regional Clubs Listed:**
1. BMCNO (New Orleans, LA) — featured
2. English Motoring Club of Mississippi (Jackson, MS)
3. South Alabama British Car Club (Fairhope/Mobile Bay, AL)
4. Panhandle British Car Association (Pensacola, FL)
5. Hill Country Triumph Club (Austin/Hill Country, TX)
6. North Alabama British Motoring Society (Huntsville, AL)

---

### Session 4 Updates (Feb 8, continued)

**Hero Background Photo — Iteration Process:**

Three hero images were tried before finding the right one:

1. **"Vintage Racing Cars"** (CC0, Toby Parsons) — Red Lenham GT / MG Midget-based race cars in the rain. Saved as `hero-vintage-racing.jpg`. User felt it wasn't vibrant enough.

2. **Austin-Healey BN7 / Triumph Spitfire scene** (CC0) — Saved as `hero-healey-triumph-racing-web.jpg`. Also not vibrant enough — user wanted wheel-to-wheel racing on track.

3. **Goodwood Revival race start** (CC BY-SA 2.0, Nigel Cox) ✅ — Packed grid of vintage sports cars (E-Types, Cobras, Astons, etc.) at the Goodwood Revival. Saved as `hero-goodwood-race-web.jpg` (resized to 2400px wide, 812KB).
   - Source: Wikimedia Commons — Nigel Cox photograph
   - License: CC BY-SA 2.0 — attribution and credit included on site
   - Photo credit displayed in lower-right corner of hero section

**Hero Image Tuning:**
- [x] Initial crop showed crowd/grandstands instead of cars — fixed with `object-bottom` to anchor crop to the cars on the starting grid
- [x] Initial BRG-tinted overlay was too dark and gave sky a green cast — replaced with neutral black gradient overlay (`from-black/35 via-black/15 to-black/50`) for true colours and better brightness
- [x] Final result: vibrant field of vintage race cars with crowd visible in background, text remains readable over the lighter overlay

**Images in `/public/images/`:**
- `bugeye-sprite-featured.jpg` — CC0, Alf van Beem (used on home page Featured Car)
- `hero-vintage-racing.jpg` — CC0, Toby Parsons (alternate, not currently used)
- `hero-healey-triumph-racing-web.jpg` — CC0 (alternate, not currently used)
- `hero-goodwood-race-web.jpg` — CC BY-SA 2.0, Nigel Cox (current hero background)

---

### Outstanding / Next Steps

- [ ] Add real photos (copyright-free) to remaining gallery placeholders
- [ ] Set up forum functionality (Discourse or built-in)
- [ ] User authentication system
- [ ] AWS deployment
- [ ] Domain registration (sidecurtains.com)
- [ ] Email setup (hello@sidecurtains.com)
- [ ] Consider adding attribution notes to marque slogans
- [ ] Keep events calendar updated as 2026 dates are confirmed
- [ ] Add Texas All British Car Days (Oct, Marble Falls) when 2026 dates announced

---

### Notes

- Port 3000 initially occupied; resolved by killing stale process
- All blog content is original — written for this project
- All descriptions and copy are original
- Images used: Bugeye Sprite (CC0, Alf van Beem), Goodwood Revival race start (CC BY-SA 2.0, Nigel Cox)
- Site is responsive and tested locally on macOS
- Copyright audit passed — no infringing material on site
- Events data sourced from official club websites (bmcno.org, msemc.org, sabcc.org, pbca1.com, etc.)
- Some 2026 dates are estimated based on historical patterns — marked for verification

---

### Source URLs Referenced for Events

- https://www.bmcno.org — British Motoring Club New Orleans
- https://www.msemc.org — English Motoring Club of Mississippi
- https://sabcc.org — South Alabama British Car Club
- https://www.pbca1.com — Panhandle British Car Association
- https://www.hillcountrytriumphclub.org — Hill Country Triumph Club / TX ABCD
- https://allbritishcarday.com — All British & European Car Day (DFW)
- https://natchezconcours.com — Natchez Concours d'Elegance
- https://www.wheelsacrossthepond.com — Wheels Across the Pond (Jupiter, FL)
- https://www.nabms.org — North Alabama British Motoring Society

---

*Log generated: February 8, 2025*
*Log updated: February 8, 2025 — Session 4 (Hero Image)*
*Project location: ~/side-curtains/*
