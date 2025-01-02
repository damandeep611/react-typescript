import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { navigationItems } from "../data/navigation";

export default function Navigation() {
  return (
    <header className="flex  items-center justify-between h-16 px-8">
      <div>
        <a href="#" className="uppercase text-xl tracking-widest font-semibold">
          Glasses.com
        </a>
      </div>
      <nav className="hidden  md:flex items-center justify-between  text-lg gap-8 ">
        {navigationItems.map((item) => (
          <a href={item.href}>{item.title}</a>
        ))}
      </nav>
      <div className="flex items-center justify-between gap-3">
        <span>
          <Search />
        </span>
        <span>
          <Heart />
        </span>
        <span>
          <User />
        </span>
        <span>
          <ShoppingBag />
        </span>
      </div>
    </header>
  );
}
