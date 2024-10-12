import { FaChartLine, FaDatabase, FaMobile } from "react-icons/fa";
import { Fa1, Fa2, Fa3, Fa4 } from "react-icons/fa6";
import { MdDraw } from "react-icons/md";


// projects data
export const projects = [
  {
    id: 1,
    title: "PT Zwanenburg",
    image: "/customer-logo/ptzwanenburg.png",
    category: "Webdesign",
  },
  {
    id: 2,
    title: "UI/UX Designing",
    image: "/customer-logo/drogistcare.png",
    category: "Webdesign",
  },
  {
    id: 3,
    title: "Verkeersschool Kharmich ",
    image: "/customer-logo/kharmichv.png",
    category: "Webdesign",
  },
  {
    id: 4,
    title: "Dvagi",
    image: "/customer-logo/dvagi.png",
    category: "Webdesign",
  },
];

// testimonials data
export const testimonialsData = [
  {
    id: 1,
    name: "Ilias",
    image: "/reviews/review-1.jpg",
    role: "PT Zwanenburg",
    url: "https://www.personaltrainingzwanenburg.nl",
    quote:
      "Samenwerking ging super vlot, het team schakelt snel en ze weten precies wat ze moeten doen. Super tevreden en zeker een aanrader!",
  },
  {
    id: 2,
    name: "Karima",
    image: "/reviews/review-2.jpg",
    role: "Drogistcare",
    url: "https://www.drogistcare.nl",
    quote:
      "Seweb heeft mij volledig ontzorg in het opzetten van een webshop. Ik hoefde alleen een product catalogs aan te leveren en binnen no time had ik een draaiende webshop!",
  },
  {
    id: 3,
    name: "Bram",
    image: "/reviews/review-3.jpg",
    role: "Verkeersschool Kharmich",
    url: "https://www.verkeersschoolkharmich.nl",
    quote:
      "Ik was op zoek naar een website voor mijn rijschool. Via via kwam ik uit bij seweb en ik moet zeggen top werk! Alles wordt goed gecommuniceerd en er wordt pro-actief meegedacht!",
  },
  {
    id: 4,
    name: "Espressofix",
    image: "/reviews/review-5.jpg",
    role: "Espressofix",
    url: "https://www.espressofix.nl",
    quote:
      "Ik ben super tevreden bij seweb. Sinds ik mijn website en webshop bij hun in beheer heb kan ik mij volledig op mijn winkel focussen.",
  },
];

// blog data
export const blogsData = [
  {
    id: 1,
    title: "Hoe kan ik mijn wordpress plugins updaten?",
    slug: "hoe-kan-ik-mijn-wordpress-plugin-updaten",
    author: "seweb",
    publishAt: "March 21",
    day: "21",
    month: "March",
    year: "2024",
    category: "Wordpress",
    image: "/blogs/blog-1.jpg",
  },
  {
    id: 2,
    title: "Webshop starten? Tips voor een vliegende start!",
    slug: "webshop-starten-tips-voor-een-vliegende-start",
    author: "seweb",
    publishAt: "June 23",
    day: "23",
    month: "June",
    year: "2024",
    category: "Webshop",
    image: "/blogs/blog-2.jpg",
  },
  {
    id: 3,
    title: "Wat houdt website beheer precies in?",
    slug: "wat-houdt-website-beheer-precies-in",
    author: "seweb",
    publishAt: "May 27",
    day: "27",
    month: "May",
    year: "2024",
    category: "Website",
    image: "/blogs/blog-3.jpg",
  },
];

// hero
export const herosDataHome4 = [
  {
    id: 1,
    title: "De plek voor uw website en SEO diensten",
    cover: "/hero/hero-bg-1.jpg",
  }
];



// services
export const services = [
  {
    id: 1,
    title: "Website Design",
    slug:"website-design",
    label: "Website Design",
    descr: "Wij kunnen voor u een website ontwikkelen of uw huidige website upgraden.",
    Icon: MdDraw,
    image: "/services/service-1.jpg",
  },
  {
    id: 2,
    title: "Applicatie Security",
    slug:"applicatie-security",
    label: "Applicatie Security",
    descr: "Wij kunnen uw website scannen op beveiligingsproblemen en dit ook verhelpen.",
    Icon: FaDatabase,
    image: "/services/service-2.jpg",
  },
  {
    id: 3,
    title: "SEO & SEA",
    slug:"seo-sea",
    label: "SEO & SEA",
    descr: "Een mooie website is waardeloos zonder een goede SEO en SEA strategie en uitvoering.",
    Icon: FaChartLine,
    image: "/services/service-3.jpg",
  },
  {
    id: 4,
    title: "App Development",
    slug:"app-development",
    label: "App Development",
    descr: "Wij kunnen voor u web applicaties of mobiele applicaties bouwen naar wens.",
    Icon: FaMobile,
    image: "/services/service-4.jpg",
  },
];

// process
export const process = [
  {
    id: 1,
    title: "Wensen identificeren",
    text: "Na de ontvangst van uw bestelling beginnen we met het in kaart brengen van uw wensen. Daarmee gaan we voor u aan de slag.",
    Icon: Fa1
  },
  {
    id: 2,
    title: "Project Management",
    text: "Regelmatig geven we u een stand van zake. Onze projectmanager is daarbij uw aanspreekpunt voor alle vragen. Er bestaan geen domme vragen, dus maak gebruik van zijn kennis, hij is er voor u!",
    Icon: Fa2
  },
  {
    id: 3,
    title: "Project Oplevering",
    text: "Op een afgesproken moment wordt de website opgeleverd. Wij nemen dan alles uitgebreid met u door. Ook bij de oplevering kunnen we nog tegen onvolkomenheden aanlopen. Tijd voor de laatste aanpassingen.",
    Icon: Fa3
  },
  {
    id: 4,
    title: "Monitoren",
    text: "Na de oplevering kunt u gewoon op ons blijven rekenen. U kunt een onderhoudscontract bij ons afsluiten zodat we uw website blijvend monitoren. Voor dat net beetje meer veiligheid!",
    Icon: Fa4
  },
];

// faq
export const faq = [
  {
    id: 1,
    question: "In welke programmeertalen ontwikkelen jullie?",
    answer: "Wij kunnen voor u een website bouwen met Wordpress, HTML, MERN Stack, php en nog veel meer!",
  },
  {
    id: 2,
    question: "Hoe lang duurt het om een website te bouwen?",
    answer: "Afhankelijk van de eisen en wensen duurt dit gemiddeld 4-8 weken. Voor complexe omgevingen op maat kunt u het beste contact met ons opnemen.",
  },
  {
    id: 3,
    question: "Heb ik een support abonnement nodig?",
    answer: "Het is niet verplicht om een abonnement af te nemen. Wij raden dat in de meeste gevallen wel aan, aangezien na het ontwikkelen van een website onderhoud en beheer nodig is om uw website veilig en draaiende te houden.",
  },
  {
    id: 4,
    question: "Bieden jullie ook andere diensten aan?",
    answer: "Wij bieden verschillende diensten aan. Bent u op zoek naar iets wat er niet tussen staat? Scroom dan niet om contact met ons op te nemen!",
  },
  {
    id: 5,
    question: "Maken jullie ook webshops?",
    answer: "Wij kunnen ook voor u een webshop bouwen met verschillende oplossingen. Denk hierbij aan Shopify, Wordpress Woocommerce of een webshop op maat!",
  },
  {
    id: 6,
    question: "Kan ik bij technische problemen bij seweb terecht?",
    answer: "Als u al een seweb klant bent dan is support in uw abonnement inbegrepen. Voor niet klanten kunt u het best contact met ons opnemen naar de mogelijkheden.",
  },
];