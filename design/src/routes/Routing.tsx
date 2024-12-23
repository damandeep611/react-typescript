import { createBrowserRouter } from "react-router";
import App from "../App";
import SurfingIndex from "../pages/SurfingIndex";
import BentoGrid from "../pages/demos/BentoGrid";
import Landing from "@/pages/Home/Landing";
import FeatureParallax from "@/pages/demos/featureParllax/FeatureParallax";

const routes = [
  { path: "/", element: <App /> },
  { path: "/surf", element: <SurfingIndex /> },
  { path: "/grids/bentogrid", element: <BentoGrid /> },
  { path: "/motion-components", element: <Landing /> },
  { path: "/scroll/card-parallax", element: <FeatureParallax /> },
];

export const router = createBrowserRouter(routes);
