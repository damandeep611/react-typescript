import { createBrowserRouter } from "react-router";
import App from "../App";
import SurfingIndex from "../pages/SurfingIndex";
import BentoGrid from "../pages/demos/BentoGrid";

const routes = [
  { path: "/", element: <App /> },
  { path: "/surf", element: <SurfingIndex /> },
  { path: "/bentogrid", element: <BentoGrid /> },
];

export const router = createBrowserRouter(routes);
