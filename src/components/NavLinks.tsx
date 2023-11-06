import { NavItem } from '../data/navigation';
import Link from './Link';

interface NavLinksProps {
  navItems: NavItem[];
  onNavigated?: () => void;
}

const NavLinks = ({ navItems = [], onNavigated }: NavLinksProps) => {
  return (
    <>
      {navItems.map((navItem) => (
        <Link key={navItem.key} href={navItem.link}>
          <div onClick={onNavigated}>{navItem.title}</div>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
