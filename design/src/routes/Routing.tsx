import { createBrowserRouter } from "react-router";
import App from "../App";
import SurfingIndex from "../pages/SurfingIndex";
import BentoGrid from "../pages/demos/BentoGrid";
import Landing from "@/pages/Home/Landing";
import FeatureParallax from "@/pages/demos/featureParllax/FeatureParallax";
import Components from "@/pages/Home/Components";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/components", element: <Components /> },
  { path: "/surf", element: <SurfingIndex /> },
  { path: "/grids/bentogrid", element: <BentoGrid /> },
  { path: "/motion-components", element: <Landing /> },
  { path: "/scroll/card-parallax", element: <FeatureParallax /> },
];

export const router = createBrowserRouter(routes);
