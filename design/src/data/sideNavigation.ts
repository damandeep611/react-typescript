import { NavSectionItems } from "@/types/navigation";

export const navigation: NavSectionItems[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/introduction",
        isActive: true,
      },
      {
        title: "Gallery",
        href: "/gallery",
      },
    ],
  },
  {
    title: "Pattern Animations",
    items: [{ title: "Orbital motion", href: "/components/surf" }],
  },
  {
    title: "Hero",
    items: [
      {
        title: "Text Animation Hero",
        href: "/components/heros",
      },
      {
        title: "Next Page Transition Guide",
        href: "/pageguide",
      },
    ],
  },
  {
    title: "Scroll",
    items: [
      {
        title: "Card section parallax effect",
        href: "/components/card-parallax",
      },
      {
        title: "Background Image Parallax",
        href: "/components/motion-components",
      },
      {
        title: "Text Parallax",
        href: "scroll/text-parallax",
      },
      {
        title: "Sticky Footer",
        href: "scroll/sticky-footer",
      },
      {
        title: "Perscpectiev Section Transition",
        href: "scroll/perspective",
      },
    ],
  },
  {
    title: "Grids",
    items: [
      {
        title: "BentoGrid",
        href: "/components/bentogrid",
      },
    ],
  },
];
