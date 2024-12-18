import { createBrowserRouter } from "react-router";
import App from "../App";
import SurfingIndex from "../pages/SurfingIndex";

const routes = [
  { path: "/", element: <App /> },
  { path: "/surf", element: <SurfingIndex /> },
];

export const router = createBrowserRouter(routes);
