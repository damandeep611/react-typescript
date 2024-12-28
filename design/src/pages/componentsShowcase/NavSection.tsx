import { NavSectionItems } from "@/types/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export function NavSection({ section }: { section: NavSectionItems }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-2 py-1 text-sm font-medium text-gray-900 hover:text-blue-600"
      >
        {section.title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="mt-1 space-y-1">
          {section.items.map((item) => (
            <li>
              <NavLink
                to={item.href || "#"}
                className={`block px-4 py-1.5 text-sm ${
                  item.isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
