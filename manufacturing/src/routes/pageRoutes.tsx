import App from "@/App";
import Pricing from "@/pages/Pricing";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
];

export const router = createBrowserRouter(routes);
