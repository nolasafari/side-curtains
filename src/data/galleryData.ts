export interface GalleryImage {
  id: string;
  marque: string;
  model: string;
  year?: string;
  description: string;
  color: string; // placeholder color since we don't have real images yet
  emoji: string;
}

export const marques = [
  { id: "mg", name: "MG", tagline: "Safety Fast!" },
  { id: "triumph", name: "Triumph", tagline: "From TR2 to Spitfire and beyond" },
  { id: "austin-healey", name: "Austin-Healey", tagline: "The Big Healeys and the Sprites" },
  { id: "jaguar", name: "Jaguar", tagline: "Grace, Space, and Pace" },
  { id: "lotus", name: "Lotus", tagline: "Simplify, then add lightness" },
  { id: "morgan", name: "Morgan", tagline: "Still hand-built in Malvern" },
  { id: "other", name: "Other Marques", tagline: "Sunbeam, Jensen-Healey, TVR, and friends" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    marque: "mg",
    model: "MGA 1600",
    year: "1960",
    description: "A beautifully restored MGA in Old English White, ready for a Sunday drive.",
    color: "#C41E3A",
    emoji: "🔴",
  },
  {
    id: "2",
    marque: "mg",
    model: "MGB Roadster",
    year: "1967",
    description: "Chrome bumper MGB in British Racing Green. The quintessential British sports car.",
    color: "#004225",
    emoji: "🟢",
  },
  {
    id: "3",
    marque: "mg",
    model: "MG TD",
    year: "1952",
    description: "A charming TD in Ivory, complete with the original tool kit.",
    color: "#FFFFF0",
    emoji: "⚪",
  },
  {
    id: "4",
    marque: "triumph",
    model: "TR6",
    year: "1973",
    description: "Pimento Red TR6 — the last of the hairy-chested Triumphs.",
    color: "#C41E3A",
    emoji: "🔴",
  },
  {
    id: "5",
    marque: "triumph",
    model: "TR4A",
    year: "1966",
    description: "Surrey top TR4A in Signal Red. IRS makes all the difference.",
    color: "#FF2400",
    emoji: "🔴",
  },
  {
    id: "6",
    marque: "triumph",
    model: "Spitfire Mk3",
    year: "1969",
    description: "A friendly little Spitfire in Royal Blue. Perfect first British car.",
    color: "#002366",
    emoji: "🔵",
  },
  {
    id: "7",
    marque: "austin-healey",
    model: "3000 Mk III",
    year: "1965",
    description: "The Big Healey in Healey Blue over Ivory. The sound of that exhaust...",
    color: "#4169E1",
    emoji: "🔵",
  },
  {
    id: "8",
    marque: "austin-healey",
    model: "Bugeye Sprite",
    year: "1959",
    description: "The happiest car ever made. You can't look at it without smiling.",
    color: "#FFD700",
    emoji: "🟡",
  },
  {
    id: "9",
    marque: "jaguar",
    model: "XK140 Roadster",
    year: "1955",
    description: "An XK140 in Cream — elegant, powerful, and impossibly beautiful.",
    color: "#FFFDD0",
    emoji: "⚪",
  },
  {
    id: "10",
    marque: "jaguar",
    model: "E-Type Series 1",
    year: "1963",
    description: "Enzo Ferrari reportedly called it the most beautiful car ever made. Hard to disagree.",
    color: "#8B0000",
    emoji: "🔴",
  },
  {
    id: "11",
    marque: "lotus",
    model: "Elan S3",
    year: "1966",
    description: "Chapman's masterpiece. Light, nimble, and utterly thrilling to drive.",
    color: "#FFD700",
    emoji: "🟡",
  },
  {
    id: "12",
    marque: "morgan",
    model: "Plus 4",
    year: "1962",
    description: "A Morgan Plus 4 — because some things are worth waiting 10 years for.",
    color: "#004225",
    emoji: "🟢",
  },
];
