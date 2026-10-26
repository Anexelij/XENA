var CATS = ["All","Posters","Social Media Design","Motion Design","Video Editing","Websites","Landing Pages","Carousels","Presentation Designs"];
var PROJECTS = [
  {s:"3d-motion-study",d:"A short 3D motion study exploring depth, lighting and smooth camera moves. Placeholder details: replace with your own.",t:"3D Motion Study",c:"Motion Design",y:"2026",tone:"#5e46e2",r:"4/5"},
  {s:"ui-motion-concepts",d:"Interface motion concepts showing how screens, menus and micro-interactions can feel alive. Placeholder details.",t:"UI Motion Concepts",c:"Motion Design",y:"2025",tone:"#2b2160",r:"1/1"},
  {s:"promo-film",d:"A fast, rhythmic brand promo cut from raw footage, with sound design and motion titles. Placeholder details.",t:"Brand Promo Film",c:"Video Editing",y:"2026",tone:"#27272b",r:"16/10"},
  {s:"campaign-edit",d:"A social campaign edit made in several formats so one shoot could live across every platform. Placeholder details.",t:"Campaign Edit",c:"Video Editing",y:"2025",tone:"#7a66ec",r:"4/5"},
  {s:"aura",d:"A 3D portfolio website with immersive scenes, built with React and Three.js. Placeholder details.",t:"Aura 3D Portfolio",c:"Websites",y:"2026",tone:"#3c2eb0",r:"4/5"},
  {s:"316-tees",d:"A bold faith-inspired streetwear site for 316 TEES with a video hero, shop, lookbook, size guide and ordering through WhatsApp.",t:"316 TEES",c:"Websites",y:"2026",r:"4/5",img:"work/mock-tees.jpg",url:"https://316tees.vercel.app/#home"},
  {s:"chiaro-caffe",d:"A refined landing page for Chiaro Caff\u00e8 in Lekki, Lagos, with a collection grid, testimonials, a map and table reservations.",t:"Chiaro Caff\u00e8",c:"Landing Pages",y:"2026",r:"4/5",img:"work/mock-chiaro.jpg",url:"https://chiaro-caffe.vercel.app/"},
  {s:"footies-haven",d:"A friendly e-commerce site for a footwear brand, designed for quick browsing on phones. Placeholder details.",t:"Footies Haven",c:"Websites",y:"2025",tone:"#5e46e2",r:"1/1"},
  {s:"invite-lydia",d:"A dignified burial invitation in deep chocolate and cream, with a large portrait and clear service details.",t:"Celebration Of Life Invitation",c:"Posters",y:"2026",r:"4/5",img:"work/invite-lydia.jpg"},
  {s:"invite-angelina-tunmise",d:"A romantic wedding invitation with red roses, gold flourishes and a clear two-ceremony layout.",t:"Wedding Invitation, Angelina & Tunmise",c:"Posters",y:"2026",r:"4/5",img:"work/invite-angelina-tunmise.jpg"},
  {s:"invite-fadipe",d:"A golden invitation with silk ribbons, a wax seal and bold serif type.",t:"60th Birthday & Retirement Invitation",c:"Posters",y:"2026",r:"4/5",img:"work/invite-fadipe.jpg"},
  {s:"birthday-taiwo",d:"A cheerful portrait-led birthday poster with a chunky yellow name block and confetti.",t:"Birthday Poster, Taiwo",c:"Posters",y:"2026",r:"4/5",img:"work/birthday-taiwo.jpg"},
  {s:"newmonth-august",d:"A confident August greeting with oversized green type that wraps around the portrait.",t:"Happy New Month, August",c:"Posters",y:"2026",r:"4/5",img:"work/newmonth-august.jpg"},
  {s:"seat-for-you",d:"A church invitation built around a regal red throne and layered headline type.",t:"We Have A Seat For You",c:"Posters",y:"2026",r:"4/5",img:"work/seat-for-you.jpg"},
  {s:"easter-sunday",d:"A cinematic Easter poster with towering white type over an empty-tomb landscape.",t:"Easter Sunday",c:"Posters",y:"2026",r:"4/5",img:"work/easter-sunday.jpg"},
  {s:"birthday-olatunji",d:"A smart birthday post with a collage of portraits and a neat editorial layout.",t:"Birthday Post, Olatunji",c:"Social Media Design",y:"2026",r:"4/5",img:"work/birthday-olatunji.jpg"},
  {s:"birthday-chiso",d:"A warm birthday post with a triple-portrait row, script lettering and gold confetti.",t:"Birthday Post, Prof. Chiso",c:"Social Media Design",y:"2026",r:"4/5",img:"work/birthday-chiso.jpg"},
  {s:"matchday",d:"A Champions League matchday graphic with split team colours and bold headline type.",t:"Matchday, Arsenal vs PSG",c:"Social Media Design",y:"2026",r:"4/5",img:"work/matchday.jpg"},
  {s:"digging-deep",d:"A Bible study flyer with a fiery gradient headline and script overlay.",t:"Digging Deep",c:"Social Media Design",y:"2026",r:"4/5",img:"work/digging-deep.jpg"},
  {s:"share-testimony",d:"A moody call for testimonies with a phone mockup and stage lights.",t:"Share Your Testimony",c:"Social Media Design",y:"2026",r:"4/5",img:"work/share-testimony.jpg"},
  {s:"youth-sunday-teal",d:"A blocky teal-and-charcoal Youth Sunday flyer with hand-drawn arrows.",t:"Youth Sunday, Teal",c:"Social Media Design",y:"2026",r:"4/5",img:"work/youth-sunday-teal.jpg"},
  {s:"youth-sunday-purple",d:"A lively Youth Sunday flyer with purple type and a joyful group photo.",t:"Youth Sunday, Purple",c:"Social Media Design",y:"2026",r:"4/5",img:"work/youth-sunday-purple.jpg"},
  {s:"newmonth-september",d:"A bright, rounded photo-card layout for a September welcome.",t:"Happy New Month, September",c:"Social Media Design",y:"2026",r:"4/5",img:"work/newmonth-september.jpg"},
  {s:"welcome-september",d:"A bold red September post with a close-up portrait and oversized type.",t:"Welcome To September, Lovecue",c:"Social Media Design",y:"2026",r:"4/5",img:"work/welcome-september.jpg"},
  {s:"drive-experience",d:"A bold social media design for TheDriveTeam built around the line \u201cExperience is the new brand\u201d, mixing a striking portrait with hand-drawn type and a red-to-blue gradient.",t:"Experience Is The New Brand",c:"Social Media Design",y:"2026",r:"4/5",img:"work/drive-experience.jpg"},
  {s:"birthday-thedriveteam",d:"A warm birthday poster for a TheDriveTeam member, with a gold palette, a large vertical \u201chappy birthday\u201d headline and inset photos.",t:"Birthday Poster, TheDriveTeam",c:"Posters",y:"2026",r:"4/5",img:"work/birthday-thedriveteam.jpg"},
  {s:"birthday-cadef",d:"A bright birthday poster for CADEF in the foundation\u2019s blue, with an oversized vertical headline and a celebratory layout.",t:"Birthday Poster, CADEF",c:"Posters",y:"2026",r:"4/5",img:"work/birthday-cadef.jpg"},
  {s:"social-campaign",d:"A swipeable carousel series that tells a story across slides and keeps the brand voice consistent. Placeholder details.",t:"Social Campaign Carousel",c:"Carousels",y:"2026",tone:"#4a37c4",r:"1/1"},
  {s:"story-designs",d:"A set of Instagram story templates with a consistent look that is easy to reuse every week. Placeholder details.",t:"Instagram Story Set",c:"Carousels",y:"2025",tone:"#b7acf6",r:"4/5"},
  {s:"pitch-deck",d:"A clean, confident startup pitch deck with clear charts and a story the audience can follow. Placeholder details.",t:"Startup Pitch Deck",c:"Presentation Designs",y:"2026",tone:"#222222",r:"16/10"},
  {s:"corporate-report",d:"A corporate report laid out for easy reading, with strong hierarchy and data made simple. Placeholder details.",t:"Corporate Report",c:"Presentation Designs",y:"2025",tone:"#5e46e2",r:"4/5"}
];
var FEATURED = ["drive-experience","birthday-thedriveteam","316-tees"];
var EXPERTISE = [
  ["Poster","Posters, flyers and invitations with a clear point of view.","Posters","drive-experience"],
  ["Social Media Design","Scroll-stopping posts and campaigns built to fit your brand.","Social Media Design"],
  ["Motion Design","Kinetic type, UI motion and 3D studies that bring a brand to life.","Motion Design"],
  ["Video Editing","Promos, reels and campaign edits cut for rhythm and retention.","Video Editing"],
  ["Website Design & Development","Custom sites and landing pages built in React and Next.js, designed and coded by one person.","Websites"],
  ["Presentation Design","Pitch decks and reports that make complex ideas easy to follow.","Presentation Designs"],
  ["Brand Design","Identities, guidelines and packaging that make a business unmistakable.","Brand Design","welcome-september"]
];
var SKILLPILLS = ["Brand Identity","Pitch Deck","Posters","Social Media Design","Video Editing","Motion Design","Brand Guidelines","Packaging Design","Website Design","Landing Page","Carousels","AI Storytelling","Frontend Dev","UI/UX Design"];
var PILLARS = [
  ["Strategic Visual Identity","Designing high-contrast, pixel-perfect brand systems and interfaces that rely on precise grid alignments, clean geometric typography, and purposeful motion rather than superficial decoration."],
  ["Technical Performance & Interactivity","Engineering fast, responsive web experiences and interactive 3D environments using modern frontend stacks (Next.js, React, Three.js) to seamlessly transition static designs into living digital products."],
  ["User-Centric Architecture","Bridging empirical user research, structured wireframing, and robust component logic to build intuitive, scalable digital products that solve concrete problems."],
  ["End-to-End Craftsmanship","Owning the complete lifecycle of digital creation\u2014from initial brand strategy and motion art direction to high-fidelity prototyping and final frontend deployment\u2014ensuring the technical execution perfectly matches the creative vision."]
];
var INFO = {
  Engineering:["React","Next.js","Three.js","Tailwind CSS","Framer Motion","JavaScript"],
  Design:["Figma","Motion Design","Video Editing","Brand Identity","Presentation Design"],
  "AI Tools":["Midjourney","Xena Graphics"]
};
var FAQ = [
  ["How much do projects cost?","Pricing depends on scope. Brand flyers and carousels start small, full websites and motion pieces are quoted per project. Share your budget in the contact form and I'll propose the right fit."],
  ["What does your process look like?","Discovery call, concept and wireframes, design, build, review, launch. You see work in progress at every stage, so there are no surprises at the end."],
  ["How long does a typical project take?","A project\u2019s timeline relies entirely on its specific scope, technical complexity, and final deliverables. Because every client's needs are unique, providing a single timeframe is difficult, but general estimates can help set the right expectations. For example; A brand Identity design make take between 1-2 weeks for completion and a Poster & Social Media Design can take between 2-5 hours depending on the scope."],
  ["Do you handle both design and development?","Yes. One person owns the idea from first sketch to shipped code, so nothing gets lost in handoff."]
];
var SKILLS = {
  "Engineering":["React","Next.js","Three.js","Tailwind CSS","Framer Motion","JavaScript"],
  "Design":["Figma","Motion Design","Video Editing","Brand Identity","Presentation Design"],
  "AI Tools":["Midjourney","Xena Graphics"]
};
var TYPES = ["Website","Motion Design","Video Editing","Flyers","Carousels","Presentation Design","Other"];
var BUDGETS = ["Under $500","$500 – $2,000","$2,000 – $5,000","$5,000+"];

var view = document.getElementById("view");
var activeFilter = "Selection";

function card(p) {
  var ext = p.url ? 'a' : 'article';
  var attrs = p.url ? 'href="' + p.url + '" target="_blank" rel="noopener noreferrer"' : 'data-open="' + p.s + '"';
  return '<' + ext + ' class="card" ' + attrs + '><div class="thumb" data-cursor="View Project" style="aspect-ratio:' + p.r + '">' +
    (p.img ? '<img src="' + p.img + '" alt="' + p.t + '" loading="lazy">' : '<div class="fill" style="background:radial-gradient(120% 90% at 20% 10%,' + p.tone + ',#27272b 140%)"></div>') +
    '<div class="over"><span>' + p.t + '</span></div></div>' +
    '<div class="meta"><h3>' + p.t + '</h3><small>' + p.c + ' · ' + p.y + (p.url ? ' · Visit site \u2197' : '') + '</small></div></' + ext + '>';
}
function byslug(s) { return PROJECTS.filter(function (p) { return p.s === s; })[0]; }

var CLIENTS = [["c1.png",300],["c2.png",300],["c3.png",300],["c4.png",98],["c5.png",99],["c6.png",300]];
var REVIEWS = [
  ["Total game changer.","Elijah took a loose idea and turned it into a brand we are proud to show off. Fast, calm and ridiculously talented.","Amaka N.","Founder, Studio Placeholder"],
  ["Felt like a teammate.","From the first call to launch he cared about the result as much as we did. The site and the visuals just work together.","Tolu A.","Director, Company Name"],
  ["Sharp eye, clean code.","Rare to find someone who designs beautifully and also ships it properly. Zero handoff headaches.","David O.","Co-Founder, Brand Name"],
  ["Our socials finally pop.","The carousels and flyers lifted our engagement within weeks. We now send him every campaign.","Ife K.","Marketing Lead, Business Name"],
  ["Would hire again, twice.","Clear communication, quick revisions and a result that looked even better than the brief.","Samuel B.","Owner, Company Name"]
];
function mqRow(n) { var h = ""; for (var k = 0; k < n; k++) h += CLIENTS.map(function (c) { return '<img src="logos/' + c[0] + '" alt="" width="' + Math.round(c[1] * .45) + '">'; }).join(""); return h; }
var SHAPES = [
  ['<svg viewBox="0 0 100 100"><path d="M50 2 C54 34 66 46 98 50 C66 54 54 66 50 98 C46 66 34 54 2 50 C34 46 46 34 50 2Z" fill="#ff6a2b"/></svg>',"top:17%;left:11%;width:84px",14,"0s"],
  ['<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="#f7f3ef" stroke-width="7"/></svg>',"top:20%;right:13%;width:96px",-22,"1s"],
  ['<svg viewBox="0 0 160 60"><path d="M4 30 Q24 -4 44 30 T84 30 T124 30 T156 30" fill="none" stroke="#ff9f6e" stroke-width="8" stroke-linecap="round"/></svg>',"bottom:26%;right:9%;width:150px",10,"2s"],
  ['<svg viewBox="0 0 100 100"><path d="M42 8h16v34h34v16H58v34H42V58H8V42h34z" fill="#f7f3ef"/></svg>',"top:11%;left:46%;width:44px",-8,"0.5s"],
  ['<svg viewBox="0 0 100 60"><path d="M0 60a50 50 0 0 1 100 0z" fill="#5e46e2"/></svg>',"bottom:24%;left:8%;width:110px",-14,"1.5s"],
  ['<svg viewBox="0 0 100 100"><g stroke="#ff6a2b" stroke-width="9" stroke-linecap="round"><path d="M50 8v84M8 50h84M20 20l60 60M80 20L20 80"/></g></svg>',"bottom:15%;right:27%;width:70px",20,"2.5s"],
  ['<svg viewBox="0 0 100 90"><path d="M50 6L94 84H6z" fill="none" stroke="#ff6a2b" stroke-width="8" stroke-linejoin="round"/></svg>',"top:34%;left:27%;width:62px",-12,"3s"],
  ['<svg viewBox="0 0 80 80"><g fill="#f7f3ef"><circle cx="10" cy="10" r="5"/><circle cx="40" cy="10" r="5"/><circle cx="70" cy="10" r="5"/><circle cx="10" cy="40" r="5"/><circle cx="40" cy="40" r="5"/><circle cx="70" cy="40" r="5"/><circle cx="10" cy="70" r="5"/><circle cx="40" cy="70" r="5"/><circle cx="70" cy="70" r="5"/></g></svg>',"top:30%;right:30%;width:60px",0,"1.2s"],
  ['<svg viewBox="0 0 100 100"><path d="M50 2 C54 34 66 46 98 50 C66 54 54 66 50 98 C46 66 34 54 2 50 C34 46 46 34 50 2Z" fill="#f7f3ef"/></svg>',"bottom:34%;left:20%;width:40px",30,"2s"]
];
function shapesHTML() {
  return '<div class="shapes" aria-hidden="true">' + SHAPES.map(function (x, n) {
    return '<span class="sh" data-d="' + (n % 3 + 1) + '" style="' + x[1] + '"><span class="sh-in" style="--r:' + x[2] + 'deg;animation-delay:' + x[3] + '">' + x[0] + '</span></span>';
  }).join("") + '</div>';
}
function homeHTML() {
  var feat = FEATURED.map(byslug).map(card).join("");
  var faq = FAQ.map(function (f, i) {
    return '<li class="' + (i === 0 ? "open" : "") + '"><button type="button" aria-expanded="' + (i === 0) + '"><span>' + f[0] + '</span><span class="plus">+</span></button>' +
      '<div class="ans"><div><p>' + f[1] + '</p></div></div></li>';
  }).join("");
  var exp = EXPERTISE.map(function (e) { return '<li class="rv" data-cat="' + e[2] + '"' + (e[3] ? ' data-prev="' + e[3] + '"' : '') + '><h3>' + e[0] + '</h3><p>' + e[1] + '</p></li>'; }).join("");
  var rev = REVIEWS.map(function (r, n) {
    return '<article class="rcard" data-i="' + n + '"><span class="av">' + r[2].charAt(0) + '</span><h3>' + r[0] + '</h3><p>' + r[1] + '</p><footer><b>' + r[2] + '</b><span>' + r[3] + '</span></footer></article>';
  }).join("");
  var tile = function (cls) { return '<div class="tg ' + cls + '"><span>Design Dreams</span><i>✦</i><span>Design Dreams</span><i>✦</i><span>Design Dreams</span></div>'; };
  return '<div class="view">' +
    '<div class="blk d herob"><section class="hero hero2"><video class="bgvideo" src="hero.mp4" poster="hero-poster.jpg" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video><div class="shade"></div>' + shapesHTML() +
      '<div class="hero-c"><h1 class="dd"><span>Design</span> <span>Dreams</span></h1><a class="btn indigo" href="#work" data-route="work">See my works</a></div></section>' +
      '</div>' +
    '<div class="blk"><section class="pad wrap intro"><div class="intro-txt"><p class="bracket rv">[Introduction]</p><p class="statement rv">A bridge between <em>emotion</em> and <em>function</em>.</p>' +
      '<p class="lede rv">I design the look and write the code. Motion, video, brand visuals and full websites, all shaped by one point of view so the idea arrives intact, from first sketch to shipped product.</p></div>' +
      '<div class="intro-img rv"><img src="intro.webp" alt="A hand moving a chess piece" loading="lazy"></div></section></div>' +
    '<div class="blk t"><section class="wrap feat"><div class="sec-head rv"><h2>Featured<br>Projects</h2></div>' +
      '<div class="grid feat-grid">' + feat + '</div><div class="center rv"><a class="btn" href="#work" data-route="work">View all work</a></div></section></div>' +
    '<div class="blk"><section class="wrap exp"><p class="bracket rv">[Expertise and Services]</p><div class="exp-cols"><ul class="exp-list">' + exp + '</ul>' +
      '<aside class="exp-side rv"><h3>The Hybrid <em>Architect</em></h3><p>Blending high-fidelity visual aesthetics with clean front-end architecture, I build immersive, user-centered digital experiences enhanced by generative AI.</p>' +
      '<video class="exp-vid" src="expertise.mp4" poster="expertise-poster.jpg" autoplay muted loop playsinline preload="metadata" aria-label="Showreel"></video><a class="btn" href="#about" data-route="about">Read my story</a></aside></div></section></div>' +
    '<div class="blk clients"><section class="wrap"><h2 class="rv">Clients</h2><div class="cgrid">' + CLIENTS.map(function (c, n) { return '<div class="cl rv" style="transition-delay:' + (n * 70) + 'ms"><img src="logos/' + c[0] + '" alt="Client logo ' + (n + 1) + '"></div>'; }).join("") + '</div></section></div>' +
    '<div class="blk free t reviews"><section class="rsec"><div class="wrap rhead rv"><h2>How people<br>view us</h2></div><div class="rscroll"><div class="rtrack">' + rev + '</div></div></section></div>' +
    '<div class="blk d"><section class="dark"><div class="faq-bg"><video src="good.mp4" autoplay muted loop playsinline preload="metadata" aria-hidden="true"></video><div class="faq-shade"></div></div><div class="wrap faq-cols" style="padding-block:clamp(56px,9vw,120px)"><div><h2 class="rv" style="font-size:clamp(2.6rem,6vw,5rem);margin-bottom:40px">Good to know</h2><ul class="faq rv">' + faq + '</ul></div></div></section></div>' +
    '<div class="blk orange"><section class="pad wrap cta"><h2 class="rv">Have a project in mind?</h2><a class="btn" href="#contact" data-route="contact">Let\'s work together</a></section>' +
      '</div>' +
  '</div>';
}

function workHTML() {
  var tabs = ["Selection", "All"].concat(CATS.slice(1));
  var chips = tabs.map(function (c) { return '<button type="button" class="btn sm outline chip' + (c === activeFilter ? " on" : "") + '" data-f="' + c + '">' + c + '</button>'; }).join("");
  return '<div class="view"><section class="wrap work-top">' +
    '<p class="bracket">[Work]</p><h1 class="page-title">Work</h1><p class="work-intro">One standout from each discipline. Pick a category to see everything I\'ve made in it, and click a project for the details.</p>' +
    '<div class="filter"><div class="chips">' + chips + '</div></div>' +
    '<div class="grid four wk" id="wgrid"></div></section></div>';
}
function workItems() {
  if (activeFilter === "All") return PROJECTS;
  if (activeFilter === "Selection") return CATS.slice(1).map(function (c) {
    var l = PROJECTS.filter(function (p) { return p.c === c; }); return l.filter(function (p) { return p.img; })[0] || l[0];
  }).filter(Boolean);
  return PROJECTS.filter(function (p) { return p.c === activeFilter; });
}
function fillGrid() {
  document.getElementById("wgrid").innerHTML = workItems().map(function (p, n) {
    return card(p).replace(/^<(article|a) class="card"/, '<$1 class="card" style="--d:' + (n * 80) + 'ms"');
  }).join("");
}

function aboutHTML() {
  var pills = SKILLPILLS.map(function (x, n) { return '<li class="rv" style="transition-delay:' + (n * 40) + 'ms">' + x + '</li>'; }).join("");
  return '<div class="view">' +
    '<section class="wrap info-top"><h1 class="page-title">My Story</h1>' +
      '<div class="info-grid"><div class="portrait rv"><img src="about.webp" alt="Elijah Adebayo"></div>' +
      '<div class="info-copy">' +
        '<p class="big-p rv">Hello, I\'m Elijah Adebayo a multidisciplinary creative designer and frontend developer based in Lagos, Nigeria.</p>' +
        '<p class="rv">Great digital experiences don\u2019t happen by accident\u2014they are engineered through deliberate visual hierarchy, deep empathy for the user, and meticulous execution.</p>' +
        '<p class="rv">My foundation is rooted in graphic design, brand strategy, and motion. Along the way, pushing static designs into living digital mediums led me straight into frontend engineering. Today, I work across the entire lifecycle of a project: researching user behavior, establishing distinctive visual tokens, prototyping high-fidelity interactions, and developing responsive web applications.</p>' +
        '<p class="rv">Across brand identity rollouts, advocacy campaigns, and custom web products, I focus on building things that perform as flawlessly as they look. I believe the best work happens when aesthetic rigor meets rock-solid technical execution.</p>' +
        '</div></div></section>' +
    '<section class="svc"><video class="svc-bg" src="service.mp4" autoplay muted loop playsinline preload="metadata" aria-hidden="true"></video><div class="svc-shade"></div>' +
      '<div class="wrap svc-in"><p class="bracket rv">[Skills and Services]</p><ul class="pills">' + pills + '</ul><div class="svc-cta rv"><a class="btn" href="#contact" data-route="contact">Get in touch</a></div></div></section>' +
    '<section class="wrap pillars"><h2 class="rv">Four pillars<br>of my works</h2><div class="pgrid">' + PILLARS.map(function (p, n) { return '<article class="pil rv" style="transition-delay:' + (n * 90) + 'ms"><span class="pn">0' + (n + 1) + '</span><h3>' + p[0] + '</h3><p>' + p[1] + '</p></article>'; }).join("") + '</div></section>' +
  '</div>';
}

function contactHTML() {
  var t = TYPES.map(function (x) { return "<option>" + x + "</option>"; }).join("");
  var b = BUDGETS.map(function (x) { return "<option>" + x + "</option>"; }).join("");
  return '<div class="view"><section class="wrap" style="padding-top:clamp(112px,12vw,150px);padding-bottom:clamp(56px,9vw,120px)">' +
    '<h1 style="font-size:clamp(2rem,6vw,4.6rem)">Let\'s Work Together</h1>' +
    '<a class="mail" href="mailto:xena.grafix@gmail.com" target="_blank" rel="noopener noreferrer">xena.grafix@gmail.com</a>' +
    '<div class="contact-line"><a class="wa" href="https://wa.me/2349024878403" target="_blank" rel="noopener noreferrer">WhatsApp +234 902 487 8403</a><div class="socials on-light" data-socials></div></div>' +
    '<div id="formslot"><form id="cform">' +
      '<div class="two-col"><input class="f" id="c-name" required placeholder="Name" aria-label="Name"><input class="f" id="c-email" type="email" required placeholder="Email" aria-label="Email"></div>' +
      '<div class="two-col"><select class="f" id="c-type" required aria-label="Project type"><option value="" disabled selected>Project type</option>' + t + '</select>' +
      '<select class="f" id="c-budget" aria-label="Budget"><option value="" disabled selected>Budget</option>' + b + '</select></div>' +
      '<textarea class="f" id="c-msg" rows="5" required placeholder="Tell me about your project" aria-label="Message"></textarea>' +
      '<div><button class="btn" type="submit">Send inquiry</button></div></form></div>' +
  '</section></div>';
}

/* routing */
var routes = { home: homeHTML, work: workHTML, about: aboutHTML, contact: contactHTML };
function current() {
  var h = (location.hash || "").replace("#", "").split("/")[0];
  return routes[h] ? h : "home";
}
function openSlug() { var m = (location.hash || "").match(/^#work\/(.+)$/); return m ? m[1] : null; }
var pv = document.getElementById("pv");
function showPV(slug) {
  var p = byslug(slug); if (!p) return hidePV();
  pv.querySelector(".pic").innerHTML = p.img ? '<img src="' + p.img + '" alt="' + p.t + '">' : '<div style="position:absolute;inset:0;background:radial-gradient(120% 90% at 20% 10%,' + p.tone + ',#27272b 140%)"></div>';
  pv.querySelector(".info").innerHTML = '<h3>' + p.t + '</h3><small>' + p.c + ' · ' + p.y + '</small><p class="pd">' + (p.d || "") + '</p><a class="btn light sm" href="#contact" data-route="contact">Start a similar project</a>';
  pv.classList.add("open"); document.body.style.overflow = "hidden";
  var el = view.querySelector('[data-open="' + slug + '"]'); if (el) el.scrollIntoView({ block: "center" });
}
function hidePV() { pv.classList.remove("open"); if (!menuEl.classList.contains("open")) document.body.style.overflow = ""; }
pv.addEventListener("click", function (e) {
  if (e.target === pv || e.target.closest("[data-close]")) { if (openSlug()) location.hash = "work"; else hidePV(); }
});
function render() {
  var r = current();
  view.innerHTML = routes[r]();
  window.scrollTo(0, 0);
  document.querySelectorAll("#menu a[data-route]").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-route") === r); });
  initStack(r);
  fillSocials(view);
  heroVideo();
  fitName();
  fitDD();
  setupReviews();
  tickReviews();
  if (r === "work") { if (openSlug()) activeFilter = "All"; fillGrid(); }
  wire(r);
  setupReveal();
  hidePV();
  if (r === "work" && openSlug()) showPV(openSlug());
}
function go(r) {
  if (current() === r && view.firstChild) { render(); return; }
  location.hash = r === "home" ? "" : r;
  if (!location.hash) render();
}
window.addEventListener("hashchange", function () {
  if (current() === "work" && view.querySelector("#wgrid")) { var s = openSlug(); if (s) showPV(s); else hidePV(); }
  else render();
});
document.addEventListener("click", function (e) {
  var oc = e.target.closest("[data-open]");
  if (oc) {
    var sl = oc.getAttribute("data-open");
    if (current() === "work") { location.hash = "work/" + sl; } else { location.hash = "work/" + sl; }
    return;
  }
  var a = e.target.closest("[data-route]");
  if (a) { e.preventDefault(); setMenu(false); go(a.getAttribute("data-route")); return; }
  if (e.target.closest("[data-noop]")) e.preventDefault();
});

function g0(n) { return String(n).replace(/[<>&"]/g, ""); }
function wire(r) {
  if (r === "home") {
    view.querySelectorAll(".faq button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var li = btn.parentNode, open = li.classList.contains("open");
        view.querySelectorAll(".faq li").forEach(function (x) { x.classList.remove("open"); x.querySelector("button").setAttribute("aria-expanded", "false"); });
        if (!open) { li.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
      });
    });
  }
  if (r === "work") {
    view.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () {
        activeFilter = c.getAttribute("data-f");
        view.querySelectorAll(".chip").forEach(function (x) { x.classList.toggle("on", x === c); });
        fillGrid();
      });
    });
  }
  if (r === "contact") {
    document.getElementById("cform").addEventListener("submit", function (e) {
      e.preventDefault();
      var g = function (id) { return document.getElementById(id).value; };
      var subj = "Project inquiry from " + g("c-name");
      var body = "Name: " + g("c-name") + "\nEmail: " + g("c-email") + "\nProject type: " + g("c-type") + "\nBudget: " + (g("c-budget") || "n/a") + "\n\n" + g("c-msg");
      var to = "xena.grafix@gmail.com", enc = encodeURIComponent;
      var done = function () {
        document.getElementById("formslot").innerHTML = '<div class="thanks"><p>Thank you, ' + g0(g("c-name")) + '. Your message is ready to send. Choose how you want to send it:</p><div class="row">' +
          '<a class="btn" target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=' + to + '&su=' + enc(subj) + '&body=' + enc(body) + '">Send with Gmail</a>' +
          '<a class="btn outline" target="_blank" rel="noopener noreferrer" href="mailto:' + to + '?subject=' + enc(subj) + '&body=' + enc(body) + '">Open my email app</a>' +
          '<button class="btn outline" type="button" id="copymsg">Copy message</button></div><p style="margin-top:16px">Or write to <a target="_blank" rel="noopener noreferrer" href="mailto:' + to + '">' + to + '</a> directly.</p></div>';
        var cp = document.getElementById("copymsg");
        cp.addEventListener("click", function () {
          var t = "To: " + to + "\nSubject: " + subj + "\n\n" + body;
          try { navigator.clipboard.writeText(t).then(function () { cp.textContent = "Copied"; }, function () { cp.textContent = "Copy not allowed"; }); } catch (x) { cp.textContent = "Copy not allowed"; }
        });
      };
      done();
    });
  }
}

/* social icons */
var ICON = {
  Instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/>',
  TikTok: '<path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>',
  Pinterest: '<path fill="currentColor" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>',
  LinkedIn: '<path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
  Behance: '<text x="12" y="16.5" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" font-family="Arial, Helvetica, sans-serif" letter-spacing="-0.5">Bē</text>',
  WhatsApp: '<path d="M3 21l1.65-4.9A9 9 0 1 1 8 19.4L3 21z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" fill="currentColor"/>'
};
var SOCIALS = [
  ["Instagram","https://www.instagram.com/xenagrafix_ai/?hl=en"],
  ["TikTok","https://www.tiktok.com/@xena_graphics"],
  ["Pinterest","https://www.pinterest.com/xenagrafix_ai/"],
  ["LinkedIn","https://www.linkedin.com/in/elijah-adebayo-7a95a6237/"],
  ["Behance","https://www.behance.net/adebayoelijah4"],
  ["WhatsApp","https://wa.me/2349024878403"]
];
function fillSocials(root) {
  (root || document).querySelectorAll("[data-socials]").forEach(function (el) {
    if (el.childNodes.length) return;
    el.innerHTML = SOCIALS.map(function (x) {
      return '<a href="' + x[1] + '" target="_blank" rel="noopener noreferrer" aria-label="' + x[0] + '" title="' + x[0] + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + ICON[x[0]] + '</svg></a>';
    }).join("");
  });
}
fillSocials();

/* hero video: start muted (markup set via innerHTML), honour reduced motion */
function heroVideo() {
  var v = view.querySelector(".bgvideo");
  if (!v) return;
  v.muted = true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { v.pause(); return; }
  var pr = v.play(); if (pr && pr.catch) pr.catch(function () {});
}

/* expertise hover preview */
var xp = document.getElementById("xprev"), xx = 0, xy = 0, cx2 = 0, cy2 = 0;
document.addEventListener("mouseover", function (e) {
  var li = e.target.closest && e.target.closest(".exp-list li, .wrow");
  if (!li) { xp.classList.remove("on"); xp.style.transform = "scale(.85)"; return; }
  var cat = li.getAttribute("data-cat"), sg = li.getAttribute("data-slug");
  xp.classList.toggle("big", !!sg);
  var pr = li.getAttribute("data-prev");
  var p = pr ? byslug(pr) : sg ? byslug(sg) : PROJECTS.filter(function (q) { return q.c === cat; }).sort(function (a, b) { return (b.img ? 1 : 0) - (a.img ? 1 : 0); })[0];
  if (!p) { xp.classList.remove("on"); return; }
  xp.innerHTML = (p.img ? '<img src="' + p.img + '" alt="">' : '<div style="position:absolute;inset:0;background:radial-gradient(120% 90% at 20% 10%,' + p.tone + ',#27272b 140%)"></div>') + '';
  xp.classList.add("on"); xp.style.transform = "scale(1)";
});
document.addEventListener("mousemove", function (e) { xx = e.clientX + 24; xy = e.clientY - 110; xp.style.left = xx + "px"; xp.style.top = xy + "px"; });

/* colour variant toggle */
function applyTheme(alt, save) {
  if (alt) document.documentElement.setAttribute("data-theme", "alt"); else document.documentElement.removeAttribute("data-theme");
  var b = document.getElementById("themeBtn");
  b.setAttribute("aria-checked", String(alt)); document.getElementById("themeLbl").textContent = alt ? "Indigo" : "Orange";
  if (save) { try { localStorage.setItem("xena-theme", alt ? "alt" : "default"); } catch (e) {} }
}
document.getElementById("themeBtn").addEventListener("click", function () { applyTheme(document.documentElement.getAttribute("data-theme") !== "alt", true); });
applyTheme(document.documentElement.getAttribute("data-theme") === "alt", false);

/* menu */
var menuEl = document.getElementById("menu"), menuBtn = document.getElementById("menuBtn");
function setMenu(o) {
  menuEl.classList.toggle("open", o); menuBtn.classList.toggle("open", o);
  menuBtn.setAttribute("aria-expanded", String(o)); menuBtn.setAttribute("aria-label", o ? "Close menu" : "Open menu");
  menuEl.setAttribute("aria-hidden", String(!o)); document.body.style.overflow = o ? "hidden" : "";
}
menuBtn.addEventListener("click", function () { setMenu(!menuEl.classList.contains("open")); });
document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

/* logo roll: split letters into two stacked copies */
document.querySelectorAll(".roll").forEach(function (el) {
  var t = el.textContent.trim(); el.setAttribute("aria-label", t);
  el.innerHTML = t.split("").map(function (ch, i) { return '<span class="c" aria-hidden="true" style="--i:' + i + '"><i>' + ch + '</i><i>' + ch + '</i></span>'; }).join("");
});

/* stacking sections */
var stackItems = [], reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function initStack(r) { stackItems = r === "home" ? [].slice.call(view.querySelectorAll(".blk")) : []; tickStack(); }
function tickStack() {
  var vh = window.innerHeight;
  stackItems.forEach(function (el, i) {
    if (i === stackItems.length - 1 || el.classList.contains("free")) return;
    el.style.top = Math.min(0, vh - el.offsetHeight) + "px";
    if (reduceMotion) return;
    var c = Math.min(1, Math.max(0, 1 - stackItems[i + 1].getBoundingClientRect().top / vh));
    var inner = el.firstElementChild;
    inner.style.transform = "scale(" + (1 - 0.06 * c) + ")";
    inner.style.filter = "brightness(" + (1 - 0.45 * c) + ")";
  });
}
window.addEventListener("scroll", tickStack, { passive: true });
window.addEventListener("resize", tickStack);

/* scroll reveal: only elements below the first screen start hidden */
function setupReveal() {
  var els = view.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.remove("pre"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -80px 0px" });
  els.forEach(function (el) {
    var top = el.getBoundingClientRect().top;
    if (top > window.innerHeight) { el.classList.add("pre"); io.observe(el); }
  });
}

/* scroll progress */
var bar = document.getElementById("progress");
function prog() {
  var h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ")";
}
window.addEventListener("scroll", prog, { passive: true });

/* cursor */
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  var dot = document.getElementById("cur-dot"), ring = document.getElementById("cur-ring"), rlabel = ring.firstChild;
  document.body.classList.add("has-cursor");
  var cx = -100, cy = -100, tx = -100, ty = -100;
  document.addEventListener("mousemove", function (e) {
    tx = e.clientX; ty = e.clientY;
    document.body.classList.add("cur-live");
    dot.style.transform = "translate(" + tx + "px," + ty + "px)";
    var t = e.target.closest ? e.target : e.target.parentNode;
    var p = t.closest("[data-cursor]"), l = t.closest("a, button, select, input, textarea, .mbtn");
    document.body.classList.toggle("cur-proj", !!p);
    document.body.classList.toggle("cur-link", !p && !!l);
    if (p) rlabel.textContent = p.getAttribute("data-cursor");
  });
  document.addEventListener("mouseleave", function () { document.body.classList.remove("cur-live"); });
  (function loop() {
    cx += (tx - cx) * .18; cy += (ty - cy) * .18;
    ring.style.transform = "translate(" + cx + "px," + cy + "px)";
    requestAnimationFrame(loop);
  })();
}

/* hero headline: fit "DESIGN DREAMS" on one line, centred, whatever font is loaded */
function fitDD() {
  var d = view.querySelector(".dd"); if (!d) return;
  d.style.fontSize = "100px"; d.style.width = "max-content"; d.style.maxWidth = "none";
  var w = d.getBoundingClientRect().width, target = window.innerWidth * (window.innerWidth < 860 ? 0.78 : 0.72);
  d.style.fontSize = Math.min(100 * target / w, window.innerWidth < 860 ? 190 : 230) + "px";
}
window.addEventListener("resize", fitDD);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitDD);

/* hero name: one row of letters, sized to span the width (capped so it never swallows the hero) */
function fitName() {
  var nm = document.getElementById("nm");
  if (!nm) return;
  var box = nm.parentNode, cw = box.clientWidth - parseFloat(getComputedStyle(box).paddingLeft) - parseFloat(getComputedStyle(box).paddingRight);
  nm.style.justifyContent = "flex-start"; nm.style.width = "max-content"; nm.style.fontSize = "100px";
  var nw = nm.getBoundingClientRect().width;
  nm.style.width = ""; nm.style.justifyContent = "";
  var fs = Math.min(100 * cw / nw, window.innerHeight * 0.5 / 0.86);
  nm.style.fontSize = Math.max(40, fs) + "px";
}
window.addEventListener("resize", fitName);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitName);

/* loader: logo animates in, counts up, then wipes away */
(function () {
  var L = document.getElementById("loader");
  if (!L) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { L.classList.add("gone"); return; }
  document.body.classList.add("loading");
  var pct = document.getElementById("lpct"), t0 = performance.now(), D = 2100;
  (function step(t) {
    var p = Math.min(1, (t - t0) / D); pct.textContent = Math.round(p * p * (3 - 2 * p) * 100) + "%";
    if (p < 1) requestAnimationFrame(step);
  })(t0);
  setTimeout(function () { L.classList.add("out"); }, D + 250);
  setTimeout(function () { L.classList.add("gone"); document.body.classList.remove("loading"); }, D + 1500);
})();

/* testimonials: the row slides sideways as the section scrolls past (initial effect);
   visitors can also scroll/drag it left-right at any time, and the page still scrolls up/down over it */
var rManual = false;
function tickReviews() {
  var sec = view.querySelector(".reviews"); if (!sec) return;
  var sc = sec.querySelector(".rscroll"), track = sc.firstElementChild, vh = window.innerHeight, r = sec.getBoundingClientRect();
  if (!rManual) {
    var p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
    sc.scrollLeft = Math.max(0, sc.scrollWidth - sc.clientWidth) * p;
  }
  var mid = window.innerWidth / 2;
  track.querySelectorAll(".rcard").forEach(function (c, n) {
    var b = c.getBoundingClientRect(), d = Math.max(-1, Math.min(1, (b.left + b.width / 2 - mid) / window.innerWidth));
    c.style.transform = "translateY(" + ((n % 2 ? 38 : -10) + Math.abs(d) * 34) + "px) rotate(" + (d * 4) + "deg)";
  });
}
function setupReviews() {
  rManual = false;
  var sc = view.querySelector(".rscroll"); if (!sc) return;
  var down = false, sx = 0, sl = 0;
  var manual = function () { rManual = true; };
  sc.addEventListener("wheel", function (e) { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) manual(); }, { passive: true });
  sc.addEventListener("touchstart", manual, { passive: true });
  sc.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; down = true; sx = e.clientX; sl = sc.scrollLeft; manual(); sc.classList.add("drag"); });
  window.addEventListener("pointerup", function () { down = false; sc.classList.remove("drag"); });
  window.addEventListener("pointermove", function (e) { if (down) sc.scrollLeft = sl - (e.clientX - sx); });
  sc.addEventListener("scroll", tickReviews, { passive: true });
}
window.addEventListener("scroll", tickReviews, { passive: true });
window.addEventListener("resize", tickReviews);

/* hero shapes: gentle mouse parallax */
document.addEventListener("mousemove", function (e) {
  var h = view.querySelector(".hero2"); if (!h) return;
  var x = (e.clientX / window.innerWidth - .5), y = (e.clientY / window.innerHeight - .5);
  h.style.setProperty("--mx", x.toFixed(3)); h.style.setProperty("--my", y.toFixed(3));
});

render();
