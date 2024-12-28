import { Nav } from "./components/layout/Nav";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className=" bg-gray-50">
      <Nav />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
