export type LandingPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  localNote: string;
  localNoteHeading: string;
  imageUrl: string;
  imageAlt: string;
  faqs: { question: string; answer: string }[];
};

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: "pine-straw-installation-bluffton-sc",
    title: "Pine Straw Installation in Bluffton, SC",
    description:
      "Professional pine straw installation for homes and businesses across Bluffton, SC. Clean edges, even coverage, full cleanup. Get a free quote.",
    eyebrow: "Bluffton, SC",
    heroTitle: "Pine Straw Installation in Bluffton, SC",
    heroSubtitle:
      "Full-service pine straw installation for homes and businesses across Bluffton, from Old Town to the May River corridor.",
    intro:
      "Our crew handles pine straw installation start to finish for Bluffton homeowners and property managers: bed prep, edging, placement, and cleanup. You come home to a finished yard instead of a weekend project.",
    localNoteHeading: "Built for Bluffton's Soil and Shade",
    localNote:
      "Bluffton's sandy soil and mature live oak canopy mean beds dry out and fade fast without a fresh layer of straw. We know which streets get full sun, which stay shaded most of the day, and roughly how much straw a typical Bluffton lot needs.",
    imageUrl: "/images/gallery/24-brick-ranch-paver-walkway.png",
    imageAlt: "A Bluffton home with a fresh pine straw bed along a brick paver walkway",
    faqs: [
      {
        question: "How much pine straw does a typical Bluffton yard need?",
        answer:
          "Most quarter-acre lots in Bluffton use 40 to 60 bales for a full refresh, though bed size, edging, and slope all change the number. Send us your address and approximate bed size and we'll give you a straightforward estimate.",
      },
      {
        question: "How often should pine straw be replaced in Bluffton's climate?",
        answer:
          "Most Bluffton yards look their best with a refresh once or twice a year. Pine straw holds its color longer than wheat straw, but our coastal humidity still breaks it down faster than it would inland.",
      },
    ],
  },
  {
    slug: "pine-straw-installation-hilton-head-sc",
    title: "Pine Straw Installation in Hilton Head Island, SC",
    description:
      "Pine straw installation for homeowners, HOAs, and rental properties across Hilton Head Island, SC. Guest-ready curb appeal year-round.",
    eyebrow: "Hilton Head Island, SC",
    heroTitle: "Pine Straw Installation in Hilton Head Island, SC",
    heroSubtitle:
      "Professional pine straw installation for homeowners, HOAs, and rental properties across Hilton Head Island.",
    intro:
      "Many Hilton Head neighborhoods have strict landscaping standards, and a fresh, evenly laid bed of pine straw is one of the simplest ways to meet them. Our crew installs pine straw the way island HOAs expect it: clean edges, consistent depth, and no stray straw on the lawn or street.",
    localNoteHeading: "Guest-Ready, Not Just Owner-Ready",
    localNote:
      "Hilton Head's rental market means a lot of yards need to look their best year-round, not just for the owner. We work around rental turnover schedules and can set up a recurring refresh so the yard never falls behind between guests.",
    imageUrl: "/images/gallery/35-hoa-median-palms.png",
    imageAlt: "A palm-lined HOA entrance median on Hilton Head Island with fresh pine straw",
    faqs: [
      {
        question: "Do you work with Hilton Head HOAs and property managers?",
        answer:
          "Yes. We're used to island HOA landscaping standards and can coordinate directly with a property manager or rental company if that's easier than going through the homeowner.",
      },
      {
        question: "Can you install pine straw on a recurring schedule for a rental property?",
        answer:
          "Yes, we can set up seasonal or year-round recurring visits so a rental property's curb appeal never lapses between bookings.",
      },
    ],
  },
  {
    slug: "pine-straw-delivery-bluffton-sc",
    title: "Pine Straw Delivery in Bluffton, SC",
    description:
      "Bulk pine straw delivered and staged right where you need it in Bluffton, SC. Spread it yourself, on your own schedule. Get a free quote.",
    eyebrow: "Bluffton, SC",
    heroTitle: "Pine Straw Delivery in Bluffton, SC",
    heroSubtitle:
      "Bulk pine straw delivered and staged right where you need it, so you can spread it on your own schedule.",
    intro:
      "If you'd rather do the spreading yourself, we'll source and deliver bulk pine straw directly to your Bluffton property, staged in your driveway or as close to the beds as we can get a truck. No trips to the garden center, no guessing on how many bales to buy.",
    localNoteHeading: "Delivery Across Bluffton",
    localNote:
      "We deliver throughout Bluffton, from Buckwalter to the historic district, and can tell you roughly how many bales your beds will need before the truck ever shows up.",
    imageUrl: "/images/gallery/26-driveway-island-bed.png",
    imageAlt: "A Bluffton driveway with a planting bed ready for a bulk pine straw delivery",
    faqs: [
      {
        question: "How many bales of pine straw will I need?",
        answer:
          "A good rule of thumb is one bale per 50 to 70 square feet of bed at a standard 2 to 3 inch depth. Tell us your approximate bed size and we'll confirm the count before delivery.",
      },
      {
        question: "Can you deliver if my driveway is hard to access?",
        answer:
          "Usually, yes. Let us know about gates, slopes, or tight turns when you request a quote and we'll figure out the best drop spot.",
      },
    ],
  },
  {
    slug: "wheat-straw-installation-bluffton-sc",
    title: "Wheat Straw Installation in Bluffton, SC",
    description:
      "Professional wheat straw installation for fresh beds, new plantings, and seasonal refreshes across Bluffton, SC. Get a free quote.",
    eyebrow: "Bluffton, SC",
    heroTitle: "Wheat Straw Installation in Bluffton, SC",
    heroSubtitle:
      "Professional wheat straw installation for fresh beds, new plantings, and seasonal refreshes across Bluffton.",
    intro:
      "Wheat straw has a lighter, golden look than pine straw and breaks down into the soil faster, which makes it a good fit for freshly planted beds or a seasonal refresh rather than a permanent cover. Our crew installs it the same way we install pine straw: clean edges, even depth, full cleanup.",
    localNoteHeading: "Pine or Wheat, We Carry Both",
    localNote:
      "We keep both pine straw and wheat straw on hand for Bluffton jobs, so if you're not sure which one fits your beds, we can walk you through it on-site or over the phone before you commit to either.",
    imageUrl: "/images/gallery/25-foundation-bed-ornamental-grasses.png",
    imageAlt: "A foundation bed with ornamental grasses suited to a lighter wheat straw ground cover",
    faqs: [
      {
        question: "What's the difference between pine straw and wheat straw?",
        answer:
          "Pine straw is longer-lasting and holds its color well into the season. Wheat straw is lighter and golden, and breaks down faster, which makes it better suited to new plantings or a short-term refresh.",
      },
      {
        question: "How long does wheat straw last before it needs replacing?",
        answer:
          "Wheat straw typically needs replacing more often than pine straw, often every few months depending on rain and foot traffic, since it breaks down faster by design.",
      },
    ],
  },
  {
    slug: "pine-straw-installation-palmetto-bluff-sc",
    title: "Pine Straw Installation in Palmetto Bluff, SC",
    description:
      "Pine straw installation suited to Palmetto Bluff's natural, conservation-minded landscaping style. Get a free quote.",
    eyebrow: "Palmetto Bluff, SC",
    heroTitle: "Pine Straw Installation in Palmetto Bluff, SC",
    heroSubtitle:
      "Pine straw installation suited to Palmetto Bluff's natural, low-impact landscaping style.",
    intro:
      "Palmetto Bluff's landscaping standards lean natural: mature live oaks, native plantings, and ground cover that looks like it belongs rather than like it was trucked in. Pine straw fits that look better than dyed mulch, and our crew installs it with the clean edges and even coverage the community expects.",
    localNoteHeading: "Working Around Mature Live Oaks",
    localNote:
      "Palmetto Bluff sits along the May River with heavy tree cover in most yards, so beds there often need a bit more straw to fill in around root systems and shaded soil than a typical open Bluffton lot.",
    imageUrl: "/images/gallery/31-tree-ring-mature-oak.png",
    imageAlt: "A neatly edged pine straw ring around a mature live oak, typical of Palmetto Bluff's tree canopy",
    faqs: [
      {
        question: "Does pine straw fit Palmetto Bluff's landscaping guidelines?",
        answer:
          "Pine straw is a natural, low-impact ground cover that fits well with Palmetto Bluff's conservation-minded landscaping style, though we'd always recommend checking your specific neighborhood's guidelines if you're unsure.",
      },
      {
        question: "Can you work around mature trees and root systems?",
        answer:
          "Yes. We regularly install around mature live oaks and established root systems, and we adjust bed prep and straw depth to work with the tree rather than against it.",
      },
    ],
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}
