export interface NavItem {
  key: string;
  title: string;
  link: string;
}

export const navItems: NavItem[] = [
  { key: 'home', title: 'Home', link: '#home' },
  { key: 'about', title: 'About', link: '#about' },
  { key: 'skills', title: 'Tools & Skills', link: '#skills' },
  { key: 'projects', title: 'Projects', link: '#projects' },
  { key: 'contact', title: 'Contact', link: '#contact' },
];

