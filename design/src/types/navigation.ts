export interface NavItem {
  title: string;
  href?: string;
  icon?: string;
  isActive?: boolean;
  children?: NavItem[];
}

export interface NavSectionItems {
  title: string;
  items: NavItem[];
}

export interface Tutorial {
  id: string;
  title: string;
  image: string;
  href: string;
}
