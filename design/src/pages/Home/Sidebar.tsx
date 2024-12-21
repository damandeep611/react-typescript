import { navigation } from "@/data/sideNavigation";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 bg-white px-3 py-6">
      <nav className="space-y-1">
        {navigation.map((section) => (
          <NavSection key={section.title} section={section} />
        ))}
      </nav>
    </aside>
  );
}
