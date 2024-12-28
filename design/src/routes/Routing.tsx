import { createBrowserRouter } from "react-router";
import SurfingIndex from "../pages/demos/orbitMotion/SurfingIndex";
import Landing from "@/components/layout/Landing";
import FeatureParallax from "@/pages/demos/featureParllax/FeatureParallax";
import Components from "@/pages/componentsShowcase/Components";
import Grids from "@/components/showcase/Grids/Grids";
import Heros from "@/components/showcase/Hero/Heros";
import App from "@/App";
import Templates from "@/pages/TemplatesPage/Templates";

const routes = [
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Landing />,
      },
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
      {
        path: "/templates",
        element: <Templates />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
