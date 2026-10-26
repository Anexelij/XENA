export const CATEGORIES = [
  "All",
  "Posters",
  "Social Media Design",
  "Motion Design",
  "Video Editing",
  "Websites",
  "Landing Pages",
  "Carousels",
  "Presentation Designs",
];

// Placeholder projects: replace titles, tags and media later.
// `tone` drives the placeholder thumbnail colour. Add `image: "/work/file.jpg"` to show real artwork instead.
export const PROJECTS = [
  { slug: "3d-motion-study", description: "A short 3D motion study exploring depth, lighting and smooth camera moves. Placeholder details: replace with your own.", title: "3D Motion Study", category: "Motion Design", year: "2026", tone: "#5e46e2", ratio: "4/5" },
  { slug: "ui-motion-concepts", description: "Interface motion concepts showing how screens, menus and micro-interactions can feel alive. Placeholder details.", title: "UI Motion Concepts", category: "Motion Design", year: "2025", tone: "#2b2160", ratio: "1/1" },
  { slug: "promo-film", description: "A fast, rhythmic brand promo cut from raw footage, with sound design and motion titles. Placeholder details.", title: "Brand Promo Film", category: "Video Editing", year: "2026", tone: "#27272b", ratio: "16/10" },
  { slug: "campaign-edit", description: "A social campaign edit made in several formats so one shoot could live across every platform. Placeholder details.", title: "Campaign Edit", category: "Video Editing", year: "2025", tone: "#7a66ec", ratio: "4/5" },
  { slug: "aura", description: "A 3D portfolio website with immersive scenes, built with React and Three.js. Placeholder details.", title: "Aura 3D Portfolio", category: "Websites", year: "2026", tone: "#3c2eb0", ratio: "4/5" },
  { slug: "316-tees", description: "A bold faith-inspired streetwear site for 316 TEES with a video hero, shop, lookbook, size guide and ordering through WhatsApp.", title: "316 TEES", category: "Websites", year: "2026", ratio: "4/5", image: "/work/mock-tees.jpg", url: "https://316tees.vercel.app/#home" },
  { slug: "chiaro-caffe", description: "A refined landing page for Chiaro Caffè in Lekki, Lagos, with a collection grid, testimonials, a map and table reservations.", title: "Chiaro Caffè", category: "Landing Pages", year: "2026", ratio: "4/5", image: "/work/mock-chiaro.jpg", url: "https://chiaro-caffe.vercel.app/" },
  { slug: "footies-haven", description: "A friendly e-commerce site for a footwear brand, designed for quick browsing on phones. Placeholder details.", title: "Footies Haven", category: "Websites", year: "2025", tone: "#5e46e2", ratio: "1/1" },
  { slug: "invite-lydia", description: "A dignified burial invitation in deep chocolate and cream, with a large portrait and clear service details.", title: "Celebration Of Life Invitation", category: "Posters", year: "2026", ratio: "4/5", image: "/work/invite-lydia.jpg" },
  { slug: "invite-angelina-tunmise", description: "A romantic wedding invitation with red roses, gold flourishes and a clear two-ceremony layout.", title: "Wedding Invitation, Angelina & Tunmise", category: "Posters", year: "2026", ratio: "4/5", image: "/work/invite-angelina-tunmise.jpg" },
  { slug: "invite-fadipe", description: "A golden invitation with silk ribbons, a wax seal and bold serif type.", title: "60th Birthday & Retirement Invitation", category: "Posters", year: "2026", ratio: "4/5", image: "/work/invite-fadipe.jpg" },
  { slug: "birthday-taiwo", description: "A cheerful portrait-led birthday poster with a chunky yellow name block and confetti.", title: "Birthday Poster, Taiwo", category: "Posters", year: "2026", ratio: "4/5", image: "/work/birthday-taiwo.jpg" },
  { slug: "newmonth-august", description: "A confident August greeting with oversized green type that wraps around the portrait.", title: "Happy New Month, August", category: "Posters", year: "2026", ratio: "4/5", image: "/work/newmonth-august.jpg" },
  { slug: "seat-for-you", description: "A church invitation built around a regal red throne and layered headline type.", title: "We Have A Seat For You", category: "Posters", year: "2026", ratio: "4/5", image: "/work/seat-for-you.jpg" },
  { slug: "easter-sunday", description: "A cinematic Easter poster with towering white type over an empty-tomb landscape.", title: "Easter Sunday", category: "Posters", year: "2026", ratio: "4/5", image: "/work/easter-sunday.jpg" },
  { slug: "birthday-olatunji", description: "A smart birthday post with a collage of portraits and a neat editorial layout.", title: "Birthday Post, Olatunji", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/birthday-olatunji.jpg" },
  { slug: "birthday-chiso", description: "A warm birthday post with a triple-portrait row, script lettering and gold confetti.", title: "Birthday Post, Prof. Chiso", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/birthday-chiso.jpg" },
  { slug: "matchday", description: "A Champions League matchday graphic with split team colours and bold headline type.", title: "Matchday, Arsenal vs PSG", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/matchday.jpg" },
  { slug: "digging-deep", description: "A Bible study flyer with a fiery gradient headline and script overlay.", title: "Digging Deep", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/digging-deep.jpg" },
  { slug: "share-testimony", description: "A moody call for testimonies with a phone mockup and stage lights.", title: "Share Your Testimony", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/share-testimony.jpg" },
  { slug: "youth-sunday-teal", description: "A blocky teal-and-charcoal Youth Sunday flyer with hand-drawn arrows.", title: "Youth Sunday, Teal", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/youth-sunday-teal.jpg" },
  { slug: "youth-sunday-purple", description: "A lively Youth Sunday flyer with purple type and a joyful group photo.", title: "Youth Sunday, Purple", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/youth-sunday-purple.jpg" },
  { slug: "newmonth-september", description: "A bright, rounded photo-card layout for a September welcome.", title: "Happy New Month, September", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/newmonth-september.jpg" },
  { slug: "welcome-september", description: "A bold red September post with a close-up portrait and oversized type.", title: "Welcome To September, Lovecue", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/welcome-september.jpg" },
  { slug: "drive-experience", description: "A bold social media design for TheDriveTeam built around the line “Experience is the new brand”, mixing a striking portrait with hand-drawn type and a red-to-blue gradient.", title: "Experience Is The New Brand", category: "Social Media Design", year: "2026", ratio: "4/5", image: "/work/drive-experience.jpg" },
  { slug: "birthday-thedriveteam", description: "A warm birthday poster for a TheDriveTeam member, with a gold palette, a large vertical “happy birthday” headline and inset photos.", title: "Birthday Poster, TheDriveTeam", category: "Posters", year: "2026", ratio: "4/5", image: "/work/birthday-thedriveteam.jpg" },
  { slug: "birthday-cadef", description: "A bright birthday poster for CADEF in the foundation’s blue, with an oversized vertical headline and a celebratory layout.", title: "Birthday Poster, CADEF", category: "Posters", year: "2026", ratio: "4/5", image: "/work/birthday-cadef.jpg" },
  { slug: "social-campaign", description: "A swipeable carousel series that tells a story across slides and keeps the brand voice consistent. Placeholder details.", title: "Social Campaign Carousel", category: "Carousels", year: "2026", tone: "#4a37c4", ratio: "1/1" },
  { slug: "story-designs", description: "A set of Instagram story templates with a consistent look that is easy to reuse every week. Placeholder details.", title: "Instagram Story Set", category: "Carousels", year: "2025", tone: "#b7acf6", ratio: "4/5" },
  { slug: "pitch-deck", description: "A clean, confident startup pitch deck with clear charts and a story the audience can follow. Placeholder details.", title: "Startup Pitch Deck", category: "Presentation Designs", year: "2026", tone: "#303034", ratio: "16/10" },
  { slug: "corporate-report", description: "A corporate report laid out for easy reading, with strong hierarchy and data made simple. Placeholder details.", title: "Corporate Report", category: "Presentation Designs", year: "2025", tone: "#5e46e2", ratio: "4/5" },
];

export const FEATURED = ["drive-experience", "birthday-thedriveteam", "316-tees"];

export const EXPERTISE = [
  ["Poster", "Posters, flyers and invitations with a clear point of view.", "Posters", "drive-experience"],
  ["Social Media Design", "Scroll-stopping posts and campaigns built to fit your brand.", "Social Media Design"],
  ["Motion Design", "Kinetic type, UI motion and 3D studies that bring a brand to life.", "Motion Design"],
  ["Video Editing", "Promos, reels and campaign edits cut for rhythm and retention.", "Video Editing"],
  ["Website Design & Development", "Custom sites and landing pages built in React and Next.js, designed and coded by one person.", "Websites"],
  ["Presentation Design", "Pitch decks and reports that make complex ideas easy to follow.", "Presentation Designs"],
  ["Brand Design", "Identities, guidelines and packaging that make a business unmistakable.", "Brand Design", "welcome-september"],
];

// Capability pills on the About page.
export const PILLS = ["Brand Identity", "Pitch Deck", "Posters", "Social Media Design", "Video Editing", "Motion Design", "Brand Guidelines", "Packaging Design", "Website Design", "Landing Page", "Carousels", "AI Storytelling", "Frontend Dev", "UI/UX Design"];

export const FAQ = [
  { q: "How much do projects cost?", a: "Pricing depends on scope. Brand flyers and carousels start small, full websites and motion pieces are quoted per project. Share your budget in the contact form and I'll propose the right fit." },
  { q: "What does your process look like?", a: "Discovery call, concept and wireframes, design, build, review, launch. You see work in progress at every stage, so there are no surprises at the end." },
  { q: "How long does a typical project take?", a: "A project\u2019s timeline relies entirely on its specific scope, technical complexity, and final deliverables. Because every client's needs are unique, providing a single timeframe is difficult, but general estimates can help set the right expectations. For example; A brand Identity design make take between 1-2 weeks for completion and a Poster & Social Media Design can take between 2-5 hours depending on the scope." },
  { q: "Do you handle both design and development?", a: "Yes. That's the point. One person owns the idea from first sketch to shipped code, so nothing gets lost in handoff." },
];

export const SKILLS = {
  Engineering: ["React", "Next.js", "Three.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
  Design: ["Figma", "Motion Design", "Video Editing", "Brand Identity", "Presentation Design"],
  "AI Tools": ["Midjourney", "Xena Graphics"],
};

export const CLIENT_LOGOS = ["c1", "c2", "c3", "c4", "c5", "c6"];

export const PILLARS = [
  ["Strategic Visual Identity", "Designing high-contrast, pixel-perfect brand systems and interfaces that rely on precise grid alignments, clean geometric typography, and purposeful motion rather than superficial decoration."],
  ["Technical Performance & Interactivity", "Engineering fast, responsive web experiences and interactive 3D environments using modern frontend stacks (Next.js, React, Three.js) to seamlessly transition static designs into living digital products."],
  ["User-Centric Architecture", "Bridging empirical user research, structured wireframing, and robust component logic to build intuitive, scalable digital products that solve concrete problems."],
  ["End-to-End Craftsmanship", "Owning the complete lifecycle of digital creation\u2014from initial brand strategy and motion art direction to high-fidelity prototyping and final frontend deployment\u2014ensuring the technical execution perfectly matches the creative vision."],
];
