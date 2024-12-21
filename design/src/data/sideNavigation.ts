import { NavSection } from "@/types/navigation";

export const navigation: NavSection[] = [
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
    title: "Courses",
    items: [{ title: "Web Animation Course", href: "/courses/web-animation" }],
  },
  {
    title: "Article",
    items: [
      {
        title: "Placeholder Guide using Next",
        href: "/placeholder",
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
        title: "Mask section Transistion",
        href: "scroll/mask-transition",
      },
      {
        title: "Background Image Parallax",
        href: "scroll/parallax",
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
];
