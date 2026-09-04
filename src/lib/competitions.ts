export type EventCoord = {
  name: string;
  role: string;
  phone?: string;
  email?: string;
};

export type CompetitionEvent = {
  slug: string;
  name: string;
  shortTagline: string;
  /** Racing-themed accent to use for frame/bars */
  accent: "racing-red" | "circuit-blue" | "pit-amber" | "titanium";
  /** Key art URL (generic racing-adjacent imagery, no real F1 branding) */
  heroUrl: string;
  /** Event logo asset (transparent PNG preferred). Falls back to crest placeholder. */
  logoUrl?: string;
  /** Full event poster asset. Falls back to the hero key art. */
  posterUrl?: string;
  /** Prize pool display text (₹ X,XXX) at bottom strip */
  prizePool?: string;
  /** Registration fee text */
  fee?: string;
  /** Team size text */
  teamSize?: string;
  /** Short one-line preview description */
  oneLiner: string;

  /* DETAIL PAGE (Step 5 pre-populated) */
  about: string;
  structure: string[];
  timeline: { day: string; items: string[] }[];
  rules: string[];
  faqs: { q: string; a: string }[];
  coordinators: EventCoord[];
};

export const COMPETITIONS: CompetitionEvent[] = [
  {
    slug: "escapex-2-0",
    name: "EscapeX 2.0",
    shortTagline: "Pit Wall Escape Room",
    accent: "racing-red",
    heroUrl:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20dark%20escape%20room%20with%20circuit%20boards%20gears%20levers%20dramatic%20spotlight%20racing%20helmet%20on%20table%20red%20emergency%20lighting%20mechanical%20puzzles%20no%20logos%20no%20text&image_size=landscape_16_9",
    logoUrl: "/logo/escapex%20logo.png",
    posterUrl: "/posters/escape%20x.png",
    fee: "₹ 70 Solo / ₹ 120 Duo",
    teamSize: "1 – 2 members",
    oneLiner:
      "A mysterious glitch has corrupted the Minecraft world across four biomes. Solve riddles, complete challenges, and collect keys to progress. Conquer all four biomes, defeat the glitch, and save the world!",

    about:
      "EscapeX 2.0 is a Minecraft-themed escape challenge where teams navigate four corrupted biomes, solving riddles and completing tasks to collect keys. Conquer every biome, defeat the glitch, and save the world!",
    structure: [
      "Round 1 — Biome Entry: Solve opening riddle to unlock the first biome.",
      "Round 2 — Biome Challenges: Complete tasks and collect keys across four biomes.",
      "Round 3 — Glitch Boss: Final challenge to defeat the corruption.",
      "Results — Fastest team to clear all biomes wins.",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["10:00 Registrations open", "14:00 Round 1 begins", "18:00 Results"] },
      { day: "DAY 2 · FEB 22", items: ["10:00 Semi-finals", "14:00 Grand Final", "17:00 Podium"] },
    ],
    rules: [
      "Solo or duo participation — no team substitutions mid-event.",
      "No outside help or internet access during the challenge.",
      "Any form of cheating leads to immediate disqualification.",
      "Judges' decision is final and binding.",
    ],
    faqs: [
      { q: "Do we need prior Minecraft experience?", a: "Basic knowledge helps, but riddles are solvable by anyone." },
      { q: "Can we register on the spot?", a: "Yes, subject to availability." },
    ],
    coordinators: [
      { name: "Karnika A. Rangari", role: "Event Head", phone: "8087471403" },
    ],
  },
  {
    slug: "cad-clash",
    name: "CAD Clash",
    shortTagline: "Design · Draft · Dominate",
    accent: "circuit-blue",
    heroUrl:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close%20up%20of%20CAD%20software%20on%20screens%20mechanical%203d%20gear%20assembly%20blueprint%20layers%20circuit%20blue%20hologram%20engineers%20workstation%20dark%20moody%20lighting%20no%20logos%20no%20software%20brands&image_size=landscape_16_9",
    logoUrl: "/logo/cad%20clash%20logo.png",
    posterUrl: "/posters/CAD.png",
    fee: "₹ 100 / participant",
    teamSize: "Individual · 1",
    oneLiner:
      "CAD Clash is a two-day technical event featuring an AutoCAD workshop followed by a CAD competition. Learn 1D & 2D AutoCAD and compete in a time-based design challenge.",

    about:
      "CAD Clash is a two-day technical event featuring an AutoCAD workshop followed by a CAD competition. Participants will learn 1D & 2D AutoCAD and compete in a time-based design challenge. Winners will be judged on accuracy, speed, and performance.",
    structure: [
      "Day 1 — AutoCAD Workshop: Learn 1D & 2D drafting fundamentals.",
      "Day 2 — CAD Competition: Time-based design challenge on provided stations.",
      "Scoring: Accuracy (40%) · Speed (30%) · Performance (30%).",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["09:00 Workshop registration", "10:00 AutoCAD workshop begins", "16:00 Workshop ends"] },
      { day: "DAY 2 · FEB 22", items: ["10:00 CAD competition starts", "15:00 Judging", "18:00 Results"] },
    ],
    rules: [
      "Only software provided on lab PCs may be used.",
      "No USB drives or cloud access inside the hall.",
      "Units must strictly follow the engineering drawing.",
      "Save files exactly as instructed — wrong naming = zero marks.",
    ],
    faqs: [
      { q: "Which software is used?", a: "AutoCAD — provided on lab PCs." },
      { q: "Do I need to bring anything?", a: "Your college ID. Nothing else." },
    ],
    coordinators: [
      { name: "Vaishnavi Nipane", role: "Event Head", phone: "7447254497" },
    ],
  },
  {
    slug: "race-ready",
    name: "Race Ready",
    shortTagline: "RC · Endurance · Lap Time",
    accent: "pit-amber",
    heroUrl:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=low%20angle%20generic%20rc%20racing%20car%20on%20track%20motion%20blur%20amber%20pit%20lighting%20checkered%20flag%20bokeh%20no%20logos%20no%20f1%20liveries%20carbon%20track%20curbs%20dramatic&image_size=landscape_16_9",
    logoUrl: "/logo/race%20ready%20logo.png",
    posterUrl: "/posters/Race%20ready.png",
    fee: "₹ 150 Solo / ₹ 250 Duo",
    teamSize: "1 – 2 members",
    oneLiner:
      "An F1 racing simulator challenge where participants experience driving an F1 car virtually. Fastest valid lap time wins!",

    about:
      "Race Ready is an F1 racing simulator challenge where participants get a chance to experience driving an F1 car virtually. Each participant gets a fixed amount of time or a specific number of laps on a selected F1 circuit. Their fastest valid lap time will be recorded and displayed on the leaderboard.",
    structure: [
      "Practice Laps — Get familiar with the simulator and circuit.",
      "Timed Session — Fixed laps, best valid lap counts.",
      "Leaderboard — Fastest lap times displayed live.",
      "Podium — Top 3 fastest lap times win.",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["10:00 Registrations open", "14:00 Practice sessions", "18:00 Timed session begins"] },
      { day: "DAY 2 · FEB 22", items: ["10:00 Final timed sessions", "15:00 Leaderboard freeze", "17:00 Podium"] },
    ],
    rules: [
      "Each participant gets a fixed time window or lap count.",
      "Only valid lap times are counted — track limits enforced.",
      "No external controllers or peripherals allowed.",
      "Simulator settings cannot be changed by participants.",
    ],
    faqs: [
      { q: "Do I need racing experience?", a: "No, just basic gaming skills." },
      { q: "Can I practice before my slot?", a: "A short practice window is provided before the timed session." },
    ],
    coordinators: [
      { name: "Chaitanya Bhurande", role: "Event Head", phone: "8010777176" },
    ],
  },
  {
    slug: "builders-lab",
    name: "Builder's Lab",
    shortTagline: "Workshop · Fabrication · Build",
    accent: "titanium",
    heroUrl:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=hands%20working%20in%20a%20mechanical%20workshop%20sparks%20arc%20welding%20steel%20metal%20scrap%20industrial%20vice%20tools%20titanium%20silver%20lighting%20no%20brands%20no%20faces%20cinematic&image_size=landscape_16_9",
    logoUrl: "/logo/builders%20lab.png",
    posterUrl: "/posters/builders%20lab.png",
    fee: "₹ 100 Solo / ₹ 250 Team",
    teamSize: "1 – 4 members",
    oneLiner:
      "A two-day event — Day 1 is a hands-on workshop to build real software using AI tools, Day 2 is a live build challenge with prizes for the strongest builds.",

    about:
      "Builder's Lab is a two-day, department-hosted technical event. Day One is a hands-on workshop where students learn to build real software using AI tools, from zero prior experience. Day Two is a live build challenge where students apply what they learned to a given problem statement, with prizes for the strongest builds.",
    structure: [
      "Day 1 — AI Tools Workshop: Learn to build software with AI assistance.",
      "Day 2 — Live Build Challenge: Apply skills to a given problem statement.",
      "Demo + Presentation: Showcase your build to the judges.",
      "Results — Judged on functionality, creativity, and presentation.",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["09:00 Workshop registration", "10:00 AI tools workshop", "16:00 Workshop ends"] },
      { day: "DAY 2 · FEB 22", items: ["09:00 Build challenge begins", "16:00 Demo presentations", "18:00 Results"] },
    ],
    rules: [
      "No prior coding experience required.",
      "All tools must be provided or approved by organizers.",
      "Submissions must be original work done during the event.",
      "Presentation time is strictly 5 minutes per team.",
    ],
    faqs: [
      { q: "Do I need coding experience?", a: "No, the workshop covers everything from scratch." },
      { q: "What do I bring?", a: "Your college ID and a laptop (if available)." },
    ],
    coordinators: [
      { name: "Aashay Chanhade", role: "Event Head", phone: "7507666700" },
    ],
  },
  {
    slug: "endo-arena",
    name: "Endo-Arena",
    shortTagline: "Robo-War · Combat Arena",
    accent: "racing-red",
    heroUrl:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=robotic%20combat%20arena%20dark%20generic%20battlebots%20in%20cage%20sparks%20flying%20red%20stadium%20lights%20impact%20smoke%20dramatic%20crowd%20silhouette%20no%20logos%20no%20brands&image_size=landscape_16_9",
    logoUrl: "/logo/endo%20arena%20logo.png",
    posterUrl: "/posters/endo%20arena.png",
    fee: "₹ 70 – 75 / person",
    teamSize: "Individual",
    oneLiner:
      "A surprise bodyweight fitness challenge testing strength, stamina, and speed. Judged on form and completion time. Overall Performer Wins!",

    about:
      "Endo-Arena is a surprise bodyweight fitness challenge testing strength, stamina, and speed. Participants are judged on form and completion time. The overall best performer wins!",
    structure: [
      "Round 1 — Warm-up Challenge: Basic fitness assessment.",
      "Round 2 — Strength Round: Bodyweight exercises judged on form.",
      "Round 3 — Speed Round: Timed circuit completion.",
      "Final — Overall Performer: Combined scores determine the winner.",
    ],
    timeline: [
      { day: "DAY 2 · FEB 22", items: ["09:00 Registrations open", "12:00 Challenge begins"] },
      { day: "DAY 3 · FEB 23", items: ["10:00 Finals", "15:00 Winner announcement"] },
    ],
    rules: [
      "Individual participation only.",
      "Proper form is mandatory — poor form results in point deductions.",
      "Any injury during the challenge results in immediate disqualification.",
      "Judges' decision is final.",
    ],
    faqs: [
      { q: "Do I need to be an athlete?", a: "No, anyone with basic fitness can participate." },
      { q: "What should I wear?", a: "Comfortable sportswear and athletic shoes." },
    ],
    coordinators: [
      { name: "Girish Gade", role: "Event Head", phone: "8767914359" },
    ],
  },
  {
    slug: "treasure-hunt",
    name: "Treasure Hunt",
    shortTagline: "Campus · Clues · Sprint",
    accent: "circuit-blue",
    heroUrl:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=mysterious%20campus%20treasure%20hunt%20flashlight%20beams%20checkered%20marker%20flag%20clues%20on%20mechanical%20parts%20gears%20compass%20map%20night%20cinematic%20blue%20lighting%20no%20logos&image_size=landscape_16_9",
    logoUrl: "/logo/treasure%20hunt%20logo.png",
    posterUrl: "/posters/Treasure%20hunt.png",
    fee: "₹ 60 Duo / ₹ 100 Squad",
    teamSize: "2 – 4 members",
    oneLiner:
      "A duo and squad-based challenge where participants follow clues, solve puzzles, complete fun tasks, and explore different locations around the college campus.",

    about:
      "Treasure Hunt is a duo and squad-based challenge in which participants follow a series of clues, solve puzzles, complete fun tasks, and explore different locations around the college campus.",
    structure: [
      "Registration & Briefing: Team formation and rule explanation.",
      "Clue Round 1: First set of clues distributed.",
      "Clue Round 2: Intermediate challenges and tasks.",
      "Final Sprint: Last clue leading to the treasure location.",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["15:00 Map & briefing", "16:00 Wave starts (heats)", "19:00 Award ceremony"] },
    ],
    rules: [
      "Duo or squad participation — no solo entries.",
      "No damage to clue stations — reported tampering = DQ.",
      "Volunteers at each checkpoint stamp your card — show ID.",
      "Fastest team with most correct stamps wins.",
    ],
    faqs: [
      { q: "Do we need a smartphone?", a: "Yes, one per team — to scan checkpoint QR codes." },
      { q: "Can first-years participate?", a: "Absolutely — all years welcome." },
    ],
    coordinators: [
      { name: "Om Tidke", role: "Event Head", phone: "7774816201" },
    ],
  },
  {
    slug: "battle-verse",
    name: "Battle Verse",
    shortTagline: "Gaming · Esports · LAN",
    accent: "pit-amber",
    heroUrl:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=esports%20gaming%20arena%20neon%20amber%20lights%20multiple%20screens%20generic%20racing%20game%20faux%20keyboard%20mouse%20controllers%20silhouette%20crowd%20no%20logos%20no%20software%20brands%20cinematic&image_size=landscape_16_9",
    logoUrl: "/logo/battle%20verse%20logo.png",
    posterUrl: "/posters/battle%20verse.png",
    fee: "₹ 75 Duo / ₹ 140 Squad",
    teamSize: "2 – 4 members",
    oneLiner:
      "Battlegrounds Mobile India (BGMI) multiplayer battle royale. Up to 100 players fight to be the last one standing. Quick reflexes, strategy, and team coordination win.",

    about:
      "Battle Verse is a BGMI multiplayer online battle royale tournament. Up to 100 players parachute onto an island, scavenge for weapons and equipment, and fight to be the last one standing. The game requires quick reflexes, strategic planning, and perfect team coordination.",
    structure: [
      "Round 1 — Qualifier: Classic battle royale match, top squads advance.",
      "Round 2 — Semi-final: Increased difficulty, smaller play zone.",
      "Final — Grand Royale: Last squad standing wins.",
    ],
    timeline: [
      { day: "DAY 2 · FEB 22", items: ["12:00 LAN opens", "13:00 Qualifier matches", "18:00 Semi-finals"] },
      { day: "DAY 3 · FEB 23", items: ["10:00 Grand Final", "14:00 Podium ceremony"] },
    ],
    rules: [
      "No macros, cheats, or trainers — instant DQ + blacklist.",
      "Own peripherals allowed, must pass volunteer check.",
      "Rage-quitting = round loss, repeated = DQ.",
      "Tournament rulesets shared 24 hrs before event.",
    ],
    faqs: [
      { q: "Which game exactly?", a: "BGMI — Battlegrounds Mobile India." },
      { q: "Can I sign up for multiple teams?", a: "No, one team per participant only." },
    ],
    coordinators: [
      { name: "Himanshu Chaple", role: "Event Head", phone: "9322489598" },
    ],
  },
];

export const getEventBySlug = (slug: string) =>
  COMPETITIONS.find((e) => e.slug === slug) ?? null;
