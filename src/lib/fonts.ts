export interface Font {
  id: string;
  name: string;
  family: string;
  category: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "elegant",
    name: "Elegant",
    slug: "elegant",
    description: "Sophisticated serif fonts for a classic and timeless look.",
    icon: "Sparkles",
  },
  {
    id: "modern",
    name: "Modern",
    slug: "modern",
    description: "Clean and minimalist sans-serif fonts for contemporary designs.",
    icon: "Smartphone",
  },
  {
    id: "creative",
    name: "Creative",
    slug: "creative",
    description: "Bold and unique display fonts that stand out from the crowd.",
    icon: "Palette",
  },
  {
    id: "handwritten",
    name: "Handwritten",
    slug: "handwritten",
    description: "Personal and organic script fonts that feel human-made.",
    icon: "PenTool",
  },
  {
    id: "professional",
    name: "Professional",
    slug: "professional",
    description: "Technical and precise monospace fonts for a structured feel.",
    icon: "Code",
  },
];

export const FONTS: Font[] = [
  // Elegant (Serif)
  { id: "e1", name: "Playfair Display", family: "'Playfair Display', serif", category: "elegant" },
  { id: "e2", name: "Merriweather", family: "'Merriweather', serif", category: "elegant" },
  { id: "e3", name: "Libre Baskerville", family: "'Libre Baskerville', serif", category: "elegant" },
  { id: "e4", name: "Lora", family: "'Lora', serif", category: "elegant" },
  { id: "e5", name: "Cinzel", family: "'Cinzel', serif", category: "elegant" },
  { id: "e6", name: "Cormorant Garamond", family: "'Cormorant Garamond', serif", category: "elegant" },
  { id: "e7", name: "EB Garamond", family: "'EB Garamond', serif", category: "elegant" },
  { id: "e8", name: "Bodoni Moda", family: "'Bodoni Moda', serif", category: "elegant" },
  { id: "e9", name: "Prata", family: "'Prata', serif", category: "elegant" },
  { id: "e10", name: "Old Standard TT", family: "'Old Standard TT', serif", category: "elegant" },
  { id: "e11", name: "Crimson Text", family: "'Crimson Text', serif", category: "elegant" },
  { id: "e12", name: "Spectral", family: "'Spectral', serif", category: "elegant" },
  { id: "e13", name: "Cardo", family: "'Cardo', serif", category: "elegant" },
  { id: "e14", name: "Gilda Display", family: "'Gilda Display', serif", category: "elegant" },
  { id: "e15", name: "Sorts Mill Goudy", family: "'Sorts Mill Goudy', serif", category: "elegant" },
  { id: "e16", name: "DM Serif Display", family: "'DM Serif Display', serif", category: "elegant" },
  { id: "e17", name: "PT Serif", family: "'PT Serif', serif", category: "elegant" },
  { id: "e18", name: "Arvo", family: "'Arvo', serif", category: "elegant" },
  { id: "e19", name: "Neuton", family: "'Neuton', serif", category: "elegant" },
  { id: "e20", name: "Vollkorn", family: "'Vollkorn', serif", category: "elegant" },

  // Modern (Sans-serif)
  { id: "m1", name: "Inter", family: "'Inter', sans-serif", category: "modern" },
  { id: "m2", name: "Montserrat", family: "'Montserrat', sans-serif", category: "modern" },
  { id: "m3", name: "Raleway", family: "'Raleway', sans-serif", category: "modern" },
  { id: "m4", name: "Poppins", family: "'Poppins', sans-serif", category: "modern" },
  { id: "m5", name: "Open Sans", family: "'Open Sans', sans-serif", category: "modern" },
  { id: "m6", name: "Roboto", family: "'Roboto', sans-serif", category: "modern" },
  { id: "m7", name: "Lato", family: "'Lato', sans-serif", category: "modern" },
  { id: "m8", name: "Oswald", family: "'Oswald', sans-serif", category: "modern" },
  { id: "m9", name: "Ubuntu", family: "'Ubuntu', sans-serif", category: "modern" },
  { id: "m10", name: "Nunito", family: "'Nunito', sans-serif", category: "modern" },
  { id: "m11", name: "Work Sans", family: "'Work Sans', sans-serif", category: "modern" },
  { id: "m12", name: "Quicksand", family: "'Quicksand', sans-serif", category: "modern" },
  { id: "m13", name: "Josefin Sans", family: "'Josefin Sans', sans-serif", category: "modern" },
  { id: "m14", name: "Fira Sans", family: "'Fira Sans', sans-serif", category: "modern" },
  { id: "m15", name: "Titillium Web", family: "'Titillium Web', sans-serif", category: "modern" },
  { id: "m16", name: "Archivo", family: "'Archivo', sans-serif", category: "modern" },
  { id: "m17", name: "Manrope", family: "'Manrope', sans-serif", category: "modern" },
  { id: "m18", name: "Be Vietnam Pro", family: "'Be Vietnam Pro', sans-serif", category: "modern" },
  { id: "m19", name: "Lexend", family: "'Lexend', sans-serif", category: "modern" },
  { id: "m20", name: "Plus Jakarta Sans", family: "'Plus Jakarta Sans', sans-serif", category: "modern" },

  // Creative (Display)
  { id: "c1", name: "Bebas Neue", family: "'Bebas Neue', display", category: "creative" },
  { id: "c2", name: "Abril Fatface", family: "'Abril Fatface', display", category: "creative" },
  { id: "c3", name: "Lobster", family: "'Lobster', display", category: "creative" },
  { id: "c4", name: "Righteous", family: "'Righteous', display", category: "creative" },
  { id: "c5", name: "Comfortaa", family: "'Comfortaa', display", category: "creative" },
  { id: "c6", name: "Alumni Sans", family: "'Alumni Sans', display", category: "creative" },
  { id: "c7", name: "Alfa Slab One", family: "'Alfa Slab One', display", category: "creative" },
  { id: "c8", name: "Permanent Marker", family: "'Permanent Marker', display", category: "creative" },
  { id: "c9", name: "Bungee", family: "'Bungee', display", category: "creative" },
  { id: "c10", name: "Monoton", family: "'Monoton', display", category: "creative" },
  { id: "c11", name: "Spicy Rice", family: "'Spicy Rice', display", category: "creative" },
  { id: "c12", name: "Titan One", family: "'Titan One', display", category: "creative" },
  { id: "c13", name: "Fredoka One", family: "'Fredoka One', display", category: "creative" },
  { id: "c14", name: "Chango", family: "'Chango', display", category: "creative" },
  { id: "c15", name: "Piedra", family: "'Piedra', display", category: "creative" },
  { id: "c16", name: "Faster One", family: "'Faster One', display", category: "creative" },
  { id: "c17", name: "Creepster", family: "'Creepster', display", category: "creative" },
  { id: "c18", name: "Metal Mania", family: "'Metal Mania', display", category: "creative" },
  { id: "c19", name: "Special Elite", family: "'Special Elite', display", category: "creative" },
  { id: "c20", name: "UnifrakturMaguntia", family: "'UnifrakturMaguntia', display", category: "creative" },

  // Handwritten (Script)
  { id: "h1", name: "Dancing Script", family: "'Dancing Script', cursive", category: "handwritten" },
  { id: "h2", name: "Pacifico", family: "'Pacifico', cursive", category: "handwritten" },
  { id: "h3", name: "Caveat", family: "'Caveat', cursive", category: "handwritten" },
  { id: "h4", name: "Satisfy", family: "'Satisfy', cursive", category: "handwritten" },
  { id: "h5", name: "Indie Flower", family: "'Indie Flower', cursive", category: "handwritten" },
  { id: "h6", name: "Shadows Into Light", family: "'Shadows Into Light', cursive", category: "handwritten" },
  { id: "h7", name: "Great Vibes", family: "'Great Vibes', cursive", category: "handwritten" },
  { id: "h8", name: "Alex Brush", family: "'Alex Brush', cursive", category: "handwritten" },
  { id: "h9", name: "Sacramento", family: "'Sacramento', cursive", category: "handwritten" },
  { id: "h10", name: "Homemade Apple", family: "'Homemade Apple', cursive", category: "handwritten" },
  { id: "h11", name: "Yellowtail", family: "'Yellowtail', cursive", category: "handwritten" },
  { id: "h12", name: "Cookie", family: "'Cookie', cursive", category: "handwritten" },
  { id: "h13", name: "Kaushan Script", family: "'Kaushan Script', cursive", category: "handwritten" },
  { id: "h14", name: "Allura", family: "'Allura', cursive", category: "handwritten" },
  { id: "h15", name: "Rock Salt", family: "'Rock Salt', cursive", category: "handwritten" },
  { id: "h16", name: "Reenie Beanie", family: "'Reenie Beanie', cursive", category: "handwritten" },
  { id: "h17", name: "Nothing You Could Do", family: "'Nothing You Could Do', cursive", category: "handwritten" },
  { id: "h18", name: "Amatic SC", family: "'Amatic SC', cursive", category: "handwritten" },
  { id: "h19", name: "Patrick Hand", family: "'Patrick Hand', cursive", category: "handwritten" },
  { id: "h20", name: "Handlee", family: "'Handlee', cursive", category: "handwritten" },

  // Professional (Monospace)
  { id: "p1", name: "Fira Code", family: "'Fira Code', monospace", category: "professional" },
  { id: "p2", name: "JetBrains Mono", family: "'JetBrains Mono', monospace", category: "professional" },
  { id: "p3", name: "Source Code Pro", family: "'Source Code Pro', monospace", category: "professional" },
  { id: "p4", name: "Roboto Mono", family: "'Roboto Mono', monospace", category: "professional" },
  { id: "p5", name: "Inconsolata", family: "'Inconsolata', monospace", category: "professional" },
  { id: "p6", name: "Ubuntu Mono", family: "'Ubuntu Mono', monospace", category: "professional" },
  { id: "p7", name: "Courier Prime", family: "'Courier Prime', monospace", category: "professional" },
  { id: "p8", name: "Space Mono", family: "'Space Mono', monospace", category: "professional" },
  { id: "p9", name: "IBM Plex Mono", family: "'IBM Plex Mono', monospace", category: "professional" },
  { id: "p10", name: "Anonymous Pro", family: "'Anonymous Pro', monospace", category: "professional" },
  { id: "p11", name: "PT Mono", family: "'PT Mono', monospace", category: "professional" },
  { id: "p12", name: "Major Mono Display", family: "'Major Mono Display', monospace", category: "professional" },
  { id: "p13", name: "Overpass Mono", family: "'Overpass Mono', monospace", category: "professional" },
  { id: "p14", name: "Cutive Mono", family: "'Cutive Mono', monospace", category: "professional" },
  { id: "p15", name: "Share Tech Mono", family: "'Share Tech Mono', monospace", category: "professional" },
  { id: "p16", name: "Nova Mono", family: "'Nova Mono', monospace", category: "professional" },
  { id: "p17", name: "VT323", family: "'VT323', monospace", category: "professional" },
  { id: "p18", name: "Nanum Gothic Coding", family: "'Nanum Gothic Coding', monospace", category: "professional" },
  { id: "p19", name: "B612 Mono", family: "'B612 Mono', monospace", category: "professional" },
  { id: "p20", name: "Oxygen Mono", family: "'Oxygen Mono', monospace", category: "professional" },
];

export const GOOGLE_FONTS_URL = "https://fonts.googleapis.com/css2?family=Playfair+Display&family=Merriweather&family=Libre+Baskerville&family=Lora&family=Cinzel&family=Cormorant+Garamond&family=EB+Garamond&family=Bodoni+Moda&family=Prata&family=Old+Standard+TT&family=Crimson+Text&family=Spectral&family=Cardo&family=Gilda+Display&family=Sorts+Mill+Goudy&family=DM+Serif+Display&family=PT+Serif&family=Arvo&family=Neuton&family=Vollkorn&family=Inter&family=Montserrat&family=Raleway&family=Poppins&family=Open+Sans&family=Roboto&family=Lato&family=Oswald&family=Ubuntu&family=Nunito&family=Work+Sans&family=Quicksand&family=Josefin+Sans&family=Fira+Sans&family=Titillium+Web&family=Archivo&family=Manrope&family=Be+Vietnam+Pro&family=Lexend&family=Plus+Jakarta+Sans&family=Bebas+Neue&family=Abril+Fatface&family=Lobster&family=Righteous&family=Comfortaa&family=Alumni+Sans&family=Alfa+Slab+One&family=Permanent+Marker&family=Bungee&family=Monoton&family=Spicy+Rice&family=Titan+One&family=Fredoka+One&family=Chango&family=Piedra&family=Faster+One&family=Creepster&family=Metal+Mania&family=Special+Elite&family=UnifrakturMaguntia&family=Dancing+Script&family=Pacifico&family=Caveat&family=Satisfy&family=Indie+Flower&family=Shadows+Into+Light&family=Great+Vibes&family=Alex+Brush&family=Sacramento&family=Homemade+Apple&family=Yellowtail&family=Cookie&family=Kaushan+Script&family=Allura&family=Rock+Salt&family=Reenie+Beanie&family=Nothing+You+Could+Do&family=Amatic+SC&family=Patrick+Hand&family=Handlee&family=Fira+Code&family=JetBrains+Mono&family=Source+Code+Pro&family=Roboto+Mono&family=Inconsolata&family=Ubuntu+Mono&family=Courier+Prime&family=Space+Mono&family=IBM+Plex+Mono&family=Anonymous+Pro&family=PT+Mono&family=Major+Mono+Display&family=Overpass+Mono&family=Cutive+Mono&family=Share+Tech+Mono&family=Nova+Mono&family=VT323&family=Nanum+Gothic+Coding&family=B612+Mono&family=Oxygen+Mono&display=swap";
