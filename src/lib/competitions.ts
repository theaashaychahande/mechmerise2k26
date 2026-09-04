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
  /** Sponsor / partner label for the top-left badge */
  partnerBadge?: string;
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
    partnerBadge: "PRESENTED BY · [PARTNER TBC]",
    prizePool: "₹ 15,000",
    fee: "₹ 150 / team",
    teamSize: "2 – 4 members",
    oneLiner:
      "Race-against-the-clock multi-room mechanical escape challenge. Solve the puzzles, defuse the engine, escape the pit wall.",

    about:
      "EscapeX 2.0 is MECHMERISE 2K26's flagship mechanical puzzle experience — a fully themed pit-wall escape room where teams crack lever, gear, and fluid-mechanics puzzles under a live countdown. Every round gets a new, harder layout, and only the fastest crews make the podium.",
    structure: [
      "Round 1 — Qualifier (30 mins): 4 standard puzzles, top 16 teams advance.",
      "Round 2 — Quarter-final (25 mins): Themed mechanical chamber + bonus chest.",
      "Round 3 — Semi-final (20 mins): Harder puzzle set with zero hints.",
      "Final — Podium Decider (18 mins): Custom chamber, live audience, fastest time wins.",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["10:00 Registrations open", "14:00 Round 1 Qualifier", "18:00 Qualifier results"] },
      { day: "DAY 2 · FEB 22", items: ["10:00 Quarters", "14:00 Semis", "19:00 Grand Final · Live"] },
    ],
    rules: [
      "Team size strictly 2–4. No mid-event substitutions.",
      "Use of mobile phones is strictly prohibited inside the chamber.",
      "Any tampering with props leads to immediate disqualification.",
      "Hints cost 30 seconds each — choose wisely.",
      "Judges' decision is final and binding.",
    ],
    faqs: [
      { q: "Do we need any prerequisites?", a: "No, just a sharp eye and quick thinking." },
      { q: "Is there on-the-spot registration?", a: "Yes, subject to availability — pre-register online to guarantee your slot." },
    ],
    coordinators: [
      { name: "[COORD 01]", role: "Event Head", phone: "[PHONE TBC]", email: "[EMAIL TBC]" },
      { name: "[COORD 02]", role: "Event Co-head", phone: "[PHONE TBC]", email: "[EMAIL TBC]" },
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
    partnerBadge: "POWERED BY · [CAD TOOL TBC]",
    prizePool: "₹ 20,000",
    fee: "₹ 100 / participant",
    teamSize: "Individual · 1",
    oneLiner:
      "3-hour drafting war on CAD. Model a given mechanical assembly to spec with zero tolerance for error.",

    about:
      "CAD Clash is the precision design challenge where every millimeter counts. Participants model a never-before-seen mechanical assembly from an engineering drawing in a race against the clock — scored on accuracy, feature-tree hygiene, and time.",
    structure: [
      "Prelims — 2D drafting (90 mins) — top 20 go through.",
      "Finals — 3D parametric assembly (3 hrs) — full engineering drawing provided.",
      "Scoring: Geometric Accuracy (60%) · Clean Feature Tree (20%) · Time (20%).",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["09:00 Software brief", "10:00 Prelim 2D round", "16:00 Shortlist"] },
      { day: "DAY 2 · FEB 22", items: ["10:00 Final 3D round", "15:00 Jury review", "18:00 Results"] },
    ],
    rules: [
      "Only software provided on lab PCs may be used (no personal laptops in prelims).",
      "No USB drives / cloud access inside the hall.",
      "Units must strictly follow the engineering drawing.",
      "Save files exactly as instructed — wrong naming = zero marks.",
    ],
    faqs: [
      { q: "Which software is used?", a: "Will be announced 1 week before the event — industry-standard tooling." },
      { q: "Do I need to bring anything?", a: "Your college ID. Nothing else." },
    ],
    coordinators: [
      { name: "[COORD 01]", role: "Event Head", phone: "[PHONE TBC]", email: "[EMAIL TBC]" },
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
    partnerBadge: "IN ASSOCIATION · [AUTOMOTIVE TBC]",
    prizePool: "₹ 25,000",
    fee: "₹ 300 / team",
    teamSize: "3 – 5 members",
    oneLiner:
      "Build your own 1:10 scale EV RC racer. Fastest 3-lap qualifying + endurance round takes the trophy.",

    about:
      "Race Ready is MECHMERISE's biggest automotive showdown. Teams build and tune their own battery-powered RC car from a standard kit over two days, then put it through qualifying laps and a 20-minute endurance race on a custom-built indoor track.",
    structure: [
      "Tech Inspection — car spec + weight + dimensions check.",
      "Qualifying — 3 flying laps each, best time sets grid.",
      "Feature Race — 20 min endurance, mandatory pit stop, team driver swap allowed.",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["09:00 Kit handout + build", "17:00 Tech inspection"] },
      { day: "DAY 2 · FEB 22", items: ["10:00 Qualifying", "14:00 Feature Race (20 min)", "17:00 Podium"] },
    ],
    rules: [
      "Only parts from the official kit + listed spares may be used.",
      "Battery voltage capped at 7.4V LiPo (provided).",
      "Pit stop must consume a minimum of 15 seconds (timed).",
      "Any car deemed unsafe during inspection will not be allowed to race.",
    ],
    faqs: [
      { q: "Do we get a kit or bring our own?", a: "Standard kits are provided — no custom chassis allowed." },
      { q: "Are spare parts available?", a: "Yes, at the on-site pit counter (separate cost)." },
    ],
    coordinators: [
      { name: "[COORD 01]", role: "Race Director", phone: "[PHONE TBC]", email: "[EMAIL TBC]" },
      { name: "[COORD 02]", role: "Tech Inspector", phone: "[PHONE TBC]", email: "[EMAIL TBC]" },
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
    partnerBadge: "BUILT WITH · [WORKSHOP TBC]",
    prizePool: "₹ 18,000",
    fee: "₹ 200 / team",
    teamSize: "2 – 3 members",
    oneLiner:
      "Two days, one build brief. Fabricate a fully functional mechanism from raw stock using the workshop.",

    about:
      "Builder's Lab is the on-site fabrication gauntlet. Teams receive a sealed build brief + raw materials on day 1, machine, weld, and assemble in the college workshop for 48 hours straight, and present a fully working mechanism to a jury of industry experts on day 3.",
    structure: [
      "Sealed-brief reveal · Material handout.",
      "Build window (48 hrs) · overnight supervised workshop access.",
      "Demo + Jury viva (15 mins per team).",
      "Jury: Functionality (50%) · Aesthetics (20%) · Viva (30%).",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["09:00 Brief reveal + material handout", "10:00 Build begins"] },
      { day: "DAY 2 · FEB 22", items: ["09:00 Build continues (overnight allowed)", "22:00 Build freeze"] },
      { day: "DAY 3 · FEB 23", items: ["10:00 Demo + Jury viva", "17:00 Results"] },
    ],
    rules: [
      "Only tools + materials provided by the organizing committee may be used.",
      "No pre-fabricated / 3D-printed parts — everything from raw stock.",
      "All team members must complete the mandatory safety briefing.",
      "Closed shoes + lab coat are compulsory inside the workshop.",
    ],
    faqs: [
      { q: "Is prior workshop experience required?", a: "Not mandatory, but helpful. Volunteers are on duty to help first-timers." },
      { q: "Can we leave the workshop overnight?", a: "Yes — sealed bays, organizers guard the area." },
    ],
    coordinators: [
      { name: "[COORD 01]", role: "Build Master", phone: "[PHONE TBC]", email: "[EMAIL TBC]" },
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
    partnerBadge: "ROBO BATTLE · [PARTNER TBC]",
    prizePool: "₹ 30,000",
    fee: "₹ 400 / bot",
    teamSize: "1 – 3 members",
    oneLiner:
      "Weight-class robot combat in a closed polycarbonate cage. Last bot standing wins the belt.",

    about:
      "Endo-Arena is our flagship bot-wars tournament — 2 kg weight-class, fully enclosed combat cage. Teams battle single-elimination style for the championship belt, with strict RnR and safety rules enforced on-site.",
    structure: [
      "Tech + Safety Inspection (mandatory for every bot — 2 chances).",
      "Seeding Round · 1v1 (3 rounds of 3 mins).",
      "Knockout Bracket · single elimination → Championship Final.",
    ],
    timeline: [
      { day: "DAY 2 · FEB 22", items: ["09:00 Inspection slot bookings", "12:00 Seeding rounds begin"] },
      { day: "DAY 3 · FEB 23", items: ["10:00 Quarters → Semis", "15:00 Championship Final", "17:30 Belt Ceremony"] },
    ],
    rules: [
      "Weight strictly 2.000 kg (± 50 g) — overweight bots are disqualified.",
      "No weapon systems using active pyrotechnics, hydraulics, or pneumatics.",
      "3-count knockout = win. Failure to engage = 10-point penalty.",
      "All batteries must be LiPo with hard casing + XT-60 connectors.",
    ],
    faqs: [
      { q: "Can we test on the arena?", a: "Yes — 10 min practice slots available day before." },
      { q: "Is a failsafe radio mandatory?", a: "Yes. Every bot must have a working failsafe." },
    ],
    coordinators: [
      { name: "[COORD 01]", role: "Arena Referee", phone: "[PHONE TBC]", email: "[EMAIL TBC]" },
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
    partnerBadge: "CAMPUS RUN · [SPONSOR TBC]",
    prizePool: "₹ 12,000",
    fee: "₹ 120 / team",
    teamSize: "2 members",
    oneLiner:
      "Mechanical-themed cryptic clues spread across the SVPCET campus. Fastest checkpoint run wins.",

    about:
      "Our beloved campus-wide cryptic treasure hunt is back with a full mechanical-engineering twist. Teams decode clue chains on a printed map, sprint between SVPCET checkpoints, stamp their checkpoint cards — and the fastest crew with the most correct stamps bags the prize.",
    structure: [
      "Wave starts every 15 mins (heats of 10 teams each).",
      "Fixed course of 12 checkpoints, minimum 8 required to qualify.",
      "Tiebreaker: fewer penalties wins, then time.",
    ],
    timeline: [
      { day: "DAY 1 · FEB 21", items: ["15:00 Map & briefing", "16:00 Wave starts (heats)", "19:00 Award ceremony"] },
    ],
    rules: [
      "Maximum 2 per team — no extra runners allowed.",
      "Any form of transport other than walking/running = DQ.",
      "Do not damage / remove any clue — reported tampering = DQ + blacklist.",
      "Volunteers at each checkpoint stamp your card — show ID.",
    ],
    faqs: [
      { q: "Do we need a smartphone?", a: "Yes, one per team — to scan checkpoint QR codes." },
      { q: "Can first-years participate?", a: "Absolutely — all years welcome." },
    ],
    coordinators: [
      { name: "[COORD 01]", role: "Course Designer", phone: "[PHONE TBC]", email: "[EMAIL TBC]" },
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
    partnerBadge: "LAN ARENA · [GAMING TBC]",
    prizePool: "₹ 16,000",
    fee: "₹ 80 / seat",
    teamSize: "Various (per game)",
    oneLiner:
      "Two-day LAN arena: racing sims + competitive multiplayer. Top 3 per title take podium.",

    about:
      "Battle Verse is our all-nighter LAN gaming zone. Titles include a racing sim championship + two popular competitive shooters (exact TBA on registration). All setups provided — bring only your college ID and fastest reflexes.",
    structure: [
      "Game 1 · Racing Sim Championship — hot-lap + head-to-head.",
      "Game 2 · Competitive FPS — 5v5 single elimination.",
      "Game 3 · Fighter bracket — 1v1 double elimination.",
    ],
    timeline: [
      { day: "DAY 2 · FEB 22", items: ["12:00 LAN opens", "13:00 Racing sims start", "18:00 FPS brackets"] },
      { day: "DAY 3 · FEB 23", items: ["02:00 All-nighter finals", "10:00 Podiums + closing"] },
    ],
    rules: [
      "Use of any macro, cheat, or trainer = instant DQ + event blacklist.",
      "Own peripherals allowed, but must pass volunteer check before each match.",
      "Rage-quitting a game = round loss, repeated = DQ.",
      "Tournament rulesets shared 24 hrs before event.",
    ],
    faqs: [
      { q: "Which games exactly?", a: "3 titles — announced on Instagram @mechmerise2k26 one week before." },
      { q: "Can I sign up for multiple?", a: "Yes! Register a separate ticket per title." },
    ],
    coordinators: [
      { name: "[COORD 01]", role: "LAN Admin", phone: "[PHONE TBC]", email: "[EMAIL TBC]" },
    ],
  },
];

export const getEventBySlug = (slug: string) =>
  COMPETITIONS.find((e) => e.slug === slug) ?? null;
