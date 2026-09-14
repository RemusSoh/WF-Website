import {
  Award,
  Building2,
  ClipboardCheck,
  HardHat,
  Medal,
  ShieldCheck,
  Trophy,
  Wrench,
} from "lucide-react";

export const services = [
  {
    title: "Structural & Civil Works",
    description:
      "End-to-end delivery for structural and civil components, including concrete, steel, drainage, reinstatement, and site works.",
    icon: Building2,
    image: "/images/service-structural.jpg",
    capabilities: [
      "Structural works and extensions",
      "Concrete and steel coordination",
      "Drainage, reinstatement, and civil works",
      "Site sequencing and supervision",
    ],
  },
  {
    title: "General Building Construction",
    description:
      "Coordinated construction delivery for commercial, industrial, and functional building environments.",
    icon: HardHat,
    image: "/images/service-building.jpg",
    capabilities: [
      "Commercial and industrial construction",
      "Trade coordination",
      "Project planning and scheduling",
      "Site quality control",
    ],
  },
  {
    title: "Renovation & Upgrading",
    description:
      "Office, retail, and industrial unit renovation, upgrading of existing spaces, additions, and fit-out works.",
    icon: Wrench,
    image: "/images/service-renovation.jpg",
    capabilities: [
      "Office, retail, and industrial renovation",
      "Upgrading and addition works",
      "Interior fit-out coordination",
      "Works around operating premises",
    ],
  },
  {
    title: "Safety & Compliance",
    description:
      "Site safety processes that keep projects moving properly with clear communication, planning, and supervision.",
    icon: ShieldCheck,
    image: "/images/service-safety.jpg",
    capabilities: [
      "Site safety supervision",
      "Documentation support",
      "Compliance-minded work methods",
      "Clear communication with stakeholders",
    ],
  },
];

export const projects = [
  {
    title: "Industrial Warehouse Extension",
    category: "Industrial Construction",
    location: "Singapore",
    image: "/images/project-warehouse.jpg",
    description:
      "Extension works for an industrial warehouse, planned around practical site access, safety, and phased delivery.",
  },
  {
    title: "Office Renovation & Fit-Out",
    category: "Commercial Renovation",
    location: "Singapore",
    image: "/images/project-office-fitout.jpg",
    description:
      "Full renovation and interior fit-out for a corporate office, including finishes, coordination, and handover readiness.",
  },
  {
    title: "Factory Upgrading Works",
    category: "Factory Upgrading",
    location: "Singapore",
    image: "/images/project-factory-upgrading.jpg",
    description:
      "Structural strengthening and upgrading of existing production floors for new machinery loads and operational needs.",
  },
];

export const placeholderStats = [
  {
    label: "Years of Experience",
    value: 10,
    suffix: "+",
    note: "Placeholder - replace with verified WF2 figure",
  },
  {
    label: "Projects Completed",
    value: 50,
    suffix: "+",
    note: "Placeholder - replace with verified WF2 figure",
  },
  {
    label: "Client Relationships",
    value: 25,
    suffix: "+",
    note: "Placeholder - replace with verified WF2 figure",
  },
];

export const achievements = [
  {
    title: "Safety-Minded Site Delivery",
    description:
      "A strong focus on site safety and compliance across active construction environments.",
    icon: ShieldCheck,
  },
  {
    title: "Industrial & Commercial Track Record",
    description:
      "Project experience across industrial and commercial construction, renovation, and upgrading works.",
    icon: Trophy,
  },
  {
    title: "Reliable Planning & Coordination",
    description:
      "Clear communication before work starts, practical sequencing, and dependable supervision on site.",
    icon: ClipboardCheck,
  },
  {
    title: "Award & Certificate Ready",
    description:
      "Dedicated spaces are prepared for real award, certificate, and ceremony photography.",
    icon: Award,
  },
];

export const achievementPhotos = [
  {
    title: "Owner Receiving Award",
    image: "/images/award-owner.jpg",
    icon: Medal,
  },
  {
    title: "Certificates & Recognition",
    image: "/images/award-certificate.jpg",
    icon: Award,
  },
  {
    title: "Team Achievement",
    image: "/images/award-team.jpg",
    icon: HardHat,
  },
];

export const contactDetails = {
  phone: "+65 1234 5678",
  email: "info@wf2engineering.com",
  office: "Singapore",
  hours: "Monday to Friday, 9:00 AM - 6:00 PM",
};
