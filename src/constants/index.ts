const navLinks = [
  { label: "Home" },
  { label: "Features" },
  { label: "Contact" },
];

interface Feature {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/feat-1.svg",
    title: "OpenType features",
    subtitle: "Variable fonts",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    icon: "/feat-2.svg",
    title: "Design with real data",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    icon: "/feat-3.svg",
    title: "Fastest way to",
    subtitle: "take action",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
];

// ...existing code...

interface FooterSection {
  title: string;
  links: string[];
}

interface ContactInfo {
  icon: string;
  text: string;
  type: "address" | "phone";
}

const footerSections: FooterSection[] = [
  {
    title: "Pages",
    links: ["Home", "Product", "Pricing", "About", "Contact"],
  },
  {
    title: "Tomothy",
    links: [
      "Eleanor Edwards",
      "Ted Robertson",
      "Annette Russell",
      "Jennie Mckinney",
      "Gloria Richards",
    ],
  },
  {
    title: "Jane Black",
    links: [
      "Philip Jones",
      "Product",
      "Colleen Russell",
      "Marvin Hawkins",
      "Bruce Simmons",
    ],
  },
];

const mobileFooterSections: FooterSection[] = [
  {
    title: "Annette Steward",
    links: [
      "Jennie Cooper",
      "Julie Henry",
      "Johnny Murphy",
      "Gregory Mccoy",
      "Marvin Mckinney",
    ],
  },
];

const contactInfo: ContactInfo[] = [
  {
    icon: "map-pin",
    text: "7480 Mockingbird Hill undefined",
    type: "address",
  },
  {
    icon: "phone",
    text: "(239) 555-0108",
    type: "phone",
  },
];

export {
  navLinks,
  features,
  footerSections,
  mobileFooterSections,
  contactInfo,
};
