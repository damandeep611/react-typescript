import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    to: "/home",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Pricing",
    to: "/pricing",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 px-6">
      <div className="flex items-center gap-1 border-2 p-2  rounded-full">
        <img
          src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/50/external-tools-plumbing-icongeek26-linear-colour-icongeek26.png"
          alt=""
          width={20}
          height={20}
        />
        <a href="#" className="text-2xl font-bold text-main ">
          Prodmast
        </a>
      </div>
      <nav>
        <ul className="flex items-center justify-between gap-8 ">
          {navigation.map((item, index) => (
            <Link key={index} to={item.to} className="text-base font-semibold">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div>
        <button className="bg-slate-900 text-white p-2 px-6 rounded-full">
          Sign Up
        </button>
      </div>
    </header>
  );
}
