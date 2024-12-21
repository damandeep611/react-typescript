import { Aperture } from "lucide-react";
import { NavLink } from "react-router";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Surfing", href: "/surf" },
  { title: "Grids", href: "/bentogrid" },
  { title: "Download", href: "/" },
];

export default function Navigation() {
  return (
    <header className="absolute top-2 z-50 w-full flex items-center justify-center  ">
      <div className=" max-w-6xl flex items-center justify-between gap-8 bg-black text-white rounded-full p-1">
        <div className="flex items-center justify-between gap-1">
          <Aperture className="text-amber-600 h-8 w-8" />
          <span className="text-xl font-semibold">Supermi</span>
        </div>
        <nav className="flex items-center justify-between gap-4">
          {menuItems.map((items) => (
            <NavLink key={items.title} to={items.href}>
              {items.title}
            </NavLink>
          ))}
        </nav>
        <div>
          <button className="text-base font-semibold bg-white text-black p-2 px-4 shadow-lg rounded-full">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
