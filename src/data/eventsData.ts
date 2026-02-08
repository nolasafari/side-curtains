export interface CalendarEvent {
  id: string;
  name: string;
  dateStart: string; // ISO date
  dateEnd?: string; // ISO date for multi-day events
  location: string;
  state: string;
  organizer: string;
  organizerUrl?: string;
  description: string;
  distance?: string; // approximate miles from New Orleans
  highlight?: boolean; // featured/nearby events
  category: "show" | "drive" | "social" | "tech" | "national";
}

export const events: CalendarEvent[] = [
  // ─── FEBRUARY 2026 ───
  {
    id: "bmcno-middendorfs-2026",
    name: "Annual Lunch at Middendorf's",
    dateStart: "2026-02-22",
    location: "Middendorf's, Manchac, LA",
    state: "LA",
    organizer: "BMCNO",
    organizerUrl: "https://www.bmcno.org",
    description:
      "BMCNO's beloved annual lunch gathering at the legendary Middendorf's restaurant on the shores of Lake Maurepas. Great food, great cars, great company. Arrive 10:45 AM.",
    distance: "40",
    highlight: true,
    category: "social",
  },
  {
    id: "emc-tech-vicksburg-2026",
    name: "Tech Session — Vicksburg",
    dateStart: "2026-02-14",
    location: "Cashman Residence, Vicksburg, MS",
    state: "MS",
    organizer: "English Motoring Club of Mississippi",
    organizerUrl: "https://www.msemc.org",
    description:
      "Hands-on wrenching at 11:00 AM, lunch at noon. Visiting car clubs welcome. Bring your tools and your appetite.",
    distance: "200",
    category: "tech",
  },
  {
    id: "emc-drive-soso-2026",
    name: "Drive to Soso, MS",
    dateStart: "2026-02-28",
    location: "Brandon to Soso, MS",
    state: "MS",
    organizer: "English Motoring Club of Mississippi",
    organizerUrl: "https://www.msemc.org",
    description:
      "76-mile scenic drive departing Ramey's Market Place in Brandon at 9:15 AM sharp. Comfort stop in Raleigh along the way.",
    distance: "175",
    category: "drive",
  },

  // ─── MARCH 2026 ───
  {
    id: "bmcno-breakfast-2026",
    name: "British Breakfast",
    dateStart: "2026-03-14",
    location: "Bill Nix's House, New Orleans area",
    state: "LA",
    organizer: "BMCNO",
    organizerUrl: "https://www.bmcno.org",
    description:
      "Start your Saturday the British way — with a proper breakfast and good conversation among fellow enthusiasts.",
    distance: "0",
    highlight: true,
    category: "social",
  },
  {
    id: "emc-rocky-springs-2026",
    name: "Tops Down — Rocky Springs on the Natchez Trace",
    dateStart: "2026-03-14",
    location: "Rocky Springs, MS (Natchez Trace Parkway)",
    state: "MS",
    organizer: "English Motoring Club of Mississippi",
    organizerUrl: "https://www.msemc.org",
    description:
      "Celebrate St. Patrick's Day a little early with a tops-down drive along the beautiful Natchez Trace. Depart Clinton Visitors Center at 10:00 AM.",
    distance: "200",
    category: "drive",
  },
  {
    id: "bmcno-festival-2026",
    name: "34th Annual British Motoring Festival",
    dateStart: "2026-03-27",
    dateEnd: "2026-03-28",
    location: "Covington Trailhead, Covington, LA",
    state: "LA",
    organizer: "BMCNO",
    organizerUrl: "https://www.bmcno.org",
    description:
      "BMCNO's signature event — held every spring since 1984. Over 100 British cars and motorcycles from across the country gather in beautiful Covington. Friday evening reception, Saturday show day. The premier British car event in the Gulf South.",
    distance: "50",
    highlight: true,
    category: "show",
  },

  // ─── APRIL 2026 ───
  {
    id: "natchez-concours-2026",
    name: "4th Annual Natchez Concours d'Elegance",
    dateStart: "2026-04-09",
    dateEnd: "2026-04-11",
    location: "Natchez Grand Hotel & Bluff, Natchez, MS",
    state: "MS",
    organizer: "Natchez Concours d'Elegance",
    organizerUrl: "https://natchezconcours.com",
    description:
      "A stunning weekend of automotive elegance overlooking the Mississippi River. Open to British and European cars over 20 years old, plus European exotics. Thursday evening social kicks things off, Saturday show on the bluff.",
    distance: "175",
    highlight: true,
    category: "show",
  },
  {
    id: "gof-south-2026",
    name: "60th Gathering of the Faithful (GOF South)",
    dateStart: "2026-04-14",
    dateEnd: "2026-04-17",
    location: "Cape Canaveral, FL",
    state: "FL",
    organizer: "Classic MG Club",
    description:
      "The 60th annual Gathering of the Faithful for MG owners. A multi-day celebration of all things MG — drives, shows, camaraderie, and a proper dose of MG spirit in sunny Florida.",
    distance: "600",
    category: "national",
  },
  {
    id: "brits-on-bay-2026",
    name: "31st Annual Brits on the Bay",
    dateStart: "2026-04-17",
    dateEnd: "2026-04-18",
    location: "Seville Square, Pensacola, FL",
    state: "FL",
    organizer: "Panhandle British Car Association",
    organizerUrl: "https://www.pbca1.com",
    description:
      "One of the Gulf Coast's finest British car shows, set in the shaded Seville Square just steps from the Gulf. 2026 features Bug-eyed Sprites as a highlighted marque. A wonderful destination event.",
    distance: "280",
    highlight: true,
    category: "show",
  },
  {
    id: "wheels-across-pond-2026",
    name: "Wheels Across the Pond",
    dateStart: "2026-04-04",
    location: "Carlin Park, Jupiter, FL",
    state: "FL",
    organizer: "Wheels Across the Pond",
    organizerUrl: "https://www.wheelsacrossthepond.com",
    description:
      "One of the largest British car and motorcycle shows in Florida, held Easter Saturday. 300+ British and European classics expected. Free spectator admission. Benefits the MiniMe Foundation and Busch Wildlife Sanctuary.",
    distance: "850",
    category: "national",
  },

  // ─── MAY 2026 ───
  {
    id: "allbritish-dfw-2026",
    name: "All British & European Car Day",
    dateStart: "2026-05-03",
    location: "Dallas/Fort Worth area, TX",
    state: "TX",
    organizer: "North Texas British Car Clubs",
    organizerUrl: "https://allbritishcarday.com",
    description:
      "Open to any British or European car or motorbike. Popular voting determines trophy winners. Participating clubs include Austin-Healey, Jaguar, Triumph, MG, and Rover groups.",
    distance: "500",
    category: "show",
  },
  {
    id: "emc-mclaren-2026",
    name: "McLaren Weekend Drive",
    dateStart: "2026-05-16",
    location: "Braxton, MS",
    state: "MS",
    organizer: "English Motoring Club of Mississippi",
    organizerUrl: "https://www.msemc.org",
    description:
      "A gathering at the McLaren residence in Braxton. Starts 11:00 AM, lunch at noon. A relaxed day out with fellow British car enthusiasts.",
    distance: "200",
    category: "social",
  },

  // ─── JUNE 2026 ───
  {
    id: "emc-tech-brandon-2026",
    name: "Tech Session — Brandon",
    dateStart: "2026-06-20",
    location: "Brandon, MS",
    state: "MS",
    organizer: "English Motoring Club of Mississippi",
    organizerUrl: "https://www.msemc.org",
    description:
      "Summer tech session. Wrenching at 11:00 AM, lunch at noon. A chance to tackle a project with friends who understand the peculiarities of British engineering.",
    distance: "175",
    category: "tech",
  },
  {
    id: "brits-at-post-2026",
    name: "Brits at the Post",
    dateStart: "2026-06-26",
    dateEnd: "2026-06-27",
    location: "Springfield, MO",
    state: "MO",
    organizer: "Greater Ozarks British Motoring Club",
    description:
      "A weekend gathering of British cars in the Ozarks. Hosted by the Greater Ozarks British Motoring Club in Springfield, Missouri.",
    distance: "575",
    category: "show",
  },

  // ─── JULY 2026 ───
  {
    id: "emc-clinton-summer-2026",
    name: "Summer Gathering — Lake Merganser",
    dateStart: "2026-07-18",
    location: "Clinton, MS",
    state: "MS",
    organizer: "English Motoring Club of Mississippi",
    organizerUrl: "https://www.msemc.org",
    description:
      "Beat the summer heat with good company at Will and Jennifer Duncan's home overlooking Lake Merganser. 11:00 AM start, noon lunch.",
    distance: "190",
    category: "social",
  },

  // ─── SEPTEMBER 2026 ───
  {
    id: "brits-on-bluff-2026",
    name: "29th Annual Brits on the Bluff",
    dateStart: "2026-09-18",
    dateEnd: "2026-09-19",
    location: "Natchez Bluff, Natchez, MS",
    state: "MS",
    organizer: "English Motoring Club of Mississippi",
    organizerUrl: "https://www.msemc.org",
    description:
      "One of the most scenic British car shows anywhere — set on the bluffs high above the Mississippi River in historic Natchez. Friday night party, Saturday show. Free for spectators, $25 to register a British car or motorcycle. A Gulf South tradition for nearly three decades.",
    distance: "175",
    highlight: true,
    category: "show",
  },

  // ─── OCTOBER 2026 ───
  {
    id: "euro-fest-2026",
    name: "19th Annual Renaissance Euro-Fest",
    dateStart: "2026-10-02",
    dateEnd: "2026-10-03",
    location: "Ridgeland, MS",
    state: "MS",
    organizer: "Renaissance Euro-Fest",
    description:
      "A celebration of classic European cars and motorcycles in the heart of Mississippi. British, Italian, German, and French marques all welcome. A growing show that draws entries from across the Southeast.",
    distance: "185",
    highlight: true,
    category: "show",
  },
  {
    id: "cruisin-coast-2026",
    name: "Vicari Auction at Cruisin' the Coast",
    dateStart: "2026-10-08",
    dateEnd: "2026-10-10",
    location: "Mississippi Coast Coliseum, Biloxi, MS",
    state: "MS",
    organizer: "Cruisin' the Coast / Vicari Auctions",
    description:
      "Part of the massive Cruisin' the Coast week on the Mississippi Gulf Coast. While not exclusively British, there are always interesting LBCs (Little British Cars) mixed in with the hot rods and muscle cars.",
    distance: "90",
    category: "show",
  },
  {
    id: "sabcc-festival-2026",
    name: "35th Annual South Alabama British Car Festival",
    dateStart: "2026-10-17",
    location: "Fairhope United Methodist Church, Fairhope, AL",
    state: "AL",
    organizer: "South Alabama British Car Club",
    organizerUrl: "https://sabcc.org",
    description:
      "35 years of celebrating British cars on the beautiful Eastern Shore of Mobile Bay. Registration 9:00–11:30 AM, show 11:30 AM–3:30 PM. Fairhope is a charming town worth the trip on its own.",
    distance: "200",
    highlight: true,
    category: "show",
  },
  {
    id: "brits-ozarks-2026",
    name: "Brits in the Ozarks",
    dateStart: "2026-10-22",
    dateEnd: "2026-10-24",
    location: "Fayetteville, AR",
    state: "AR",
    organizer: "Northwest Arkansas British Car Club",
    description:
      "A weekend of British cars in the scenic Arkansas Ozarks. Drives through beautiful hill country, car show, and plenty of socialising.",
    distance: "550",
    category: "show",
  },

  // ─── NOVEMBER 2026 ───
  {
    id: "emc-chili-bowl-2026",
    name: "Chili Bowl Tech Session",
    dateStart: "2026-11-07",
    location: "Ridgeland, MS",
    state: "MS",
    organizer: "English Motoring Club of Mississippi",
    organizerUrl: "https://www.msemc.org",
    description:
      "The perfect autumn combination: garage time and chili. Wrenching at 11:00 AM, chili lunch at noon. A great way to wind down the driving season.",
    distance: "185",
    category: "tech",
  },

  // ─── DECEMBER 2026 ───
  {
    id: "emc-holiday-2026",
    name: "EMC Holiday Party",
    dateStart: "2026-12-05",
    location: "Clinton, MS",
    state: "MS",
    organizer: "English Motoring Club of Mississippi",
    organizerUrl: "https://www.msemc.org",
    description:
      "End-of-year holiday celebration at the Duncan residence in Clinton. Good cheer, good friends, and stories from the year's adventures.",
    distance: "190",
    category: "social",
  },
];

// ─── Clubs in the region ───
export const regionalClubs = [
  {
    name: "British Motoring Club New Orleans (BMCNO)",
    location: "New Orleans, LA",
    url: "https://www.bmcno.org",
    description:
      "Founded 1977. Social club dedicated to appreciating, preserving and driving British motor vehicles. Hosts the annual British Motoring Festival in Covington, LA. Members span from Dallas to Pensacola.",
    featured: true,
  },
  {
    name: "English Motoring Club of Mississippi (EMC)",
    location: "Jackson, MS area",
    url: "https://www.msemc.org",
    description:
      "Over 40 years of enjoying and preserving fine British vehicles. Hosts Brits on the Bluff in Natchez and numerous drives, tech sessions, and social events throughout the year.",
  },
  {
    name: "South Alabama British Car Club (SABCC)",
    location: "Fairhope / Mobile Bay, AL",
    url: "https://sabcc.org",
    description:
      "Hosts the annual British Car Festival in charming Fairhope, Alabama — 35 years strong. Located on the beautiful Eastern Shore of Mobile Bay.",
  },
  {
    name: "Panhandle British Car Association (PBCA)",
    location: "Pensacola, FL",
    url: "https://www.pbca1.com",
    description:
      "Home of the beloved Brits on the Bay show in Seville Square, Pensacola. An active club with regular drives and events along the Gulf Coast.",
  },
  {
    name: "Hill Country Triumph Club",
    location: "Austin / Hill Country, TX",
    url: "https://www.hillcountrytriumphclub.org",
    description:
      "Hosts Texas All British Car Days in Marble Falls — the largest all-British car show in Texas. Open to all marques despite the Triumph name.",
  },
  {
    name: "North Alabama British Motoring Society (NABMS)",
    location: "Huntsville, AL",
    url: "https://www.nabms.org",
    description:
      "Founded 1985. Hosts the annual EuroBrit car show in Huntsville, now in its 30th year. Enthusiasts of British and European cars and motorcycles.",
  },
];
