import { createBrowserRouter } from "react-router";
import SurfingIndex from "../pages/SurfingIndex";
import Landing from "@/pages/Home/Landing";
import FeatureParallax from "@/pages/demos/featureParllax/FeatureParallax";
import Components from "@/pages/Home/Components";
import Grids from "@/components/showcase/Grids/Grids";
import Heros from "@/components/showcase/Hero/Heros";

const routes = [
  { path: "/", element: <Landing /> },
  {
    path: "/components",
    element: <Components />,
    children: [
      { path: "surf", element: <SurfingIndex /> },
      { path: "bentogrid", element: <Grids /> },
      { path: "motion-components", element: <Landing /> },
      { path: "card-parallax", element: <FeatureParallax /> },
      { path: "heros", element: <Heros /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
