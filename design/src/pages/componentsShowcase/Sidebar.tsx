import { navigation } from "@/data/sideNavigation";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <aside className="  hidden lg:block left-0 top-16  w-64 border-r   px-3 py-6">
      <nav className="space-y-1">
        {navigation.map((section) => (
          <NavSection key={section.title} section={section} />
        ))}
      </nav>
    </aside>
  );
}
