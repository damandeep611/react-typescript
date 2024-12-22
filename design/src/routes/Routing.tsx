import { createBrowserRouter } from "react-router";
import App from "../App";
import SurfingIndex from "../pages/SurfingIndex";
import BentoGrid from "../pages/demos/BentoGrid";
import Landing from "@/pages/Home/Landing";

const routes = [
  { path: "/", element: <App /> },
  { path: "/surf", element: <SurfingIndex /> },
  { path: "/grids/bentogrid", element: <BentoGrid /> },
  { path: "/motion-components", element: <Landing /> },
];

export const router = createBrowserRouter(routes);
