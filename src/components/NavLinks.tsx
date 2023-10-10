import { NavItem } from '../data/navigation';

interface NavLinksProps {
  navItems: NavItem[];
  onNavigated?: () => void;
}

const NavLinks = ({ navItems = [], onNavigated }: NavLinksProps) => {
  return (
    <>
      {navItems.map(navItem => (
        <a key={navItem.key} href={navItem.link}>
          <div onClick={onNavigated}>{navItem.title}</div>
        </a>
      ))}
    </>
  );
}

export default NavLinks;
