import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLinks from './NavLinks';
import { NavItem } from '../data/navigation';

interface NavBarProps {
  navItems: NavItem[];
}

const NavBar = ({ navItems = [] }: NavBarProps) => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  function toggleDrawer() {
    setIsDrawerOpened((isOpened) => !isOpened);
  }

  function onNavigated() {
    setIsDrawerOpened(false);
  }

  return (
    <div className="u-sticky u-top-0 u-inset-x-0 u-z-10">
      <nav className="u-relative u-p-2 u-bg-zinc-950/70 u-shadow-lg u-z-10 u-transition hover:u-shadow-xl hover:u-bg-zinc-950/90 sm:u-py-5 sm:u-px-10">
        <div className="u-flex u-flex-row-reverse sm:u-hidden">
          <button
            className="u-py-2 u-px-4 u-border-none"
            onClick={toggleDrawer}
          >
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </button>
        </div>

        <div className="u-hidden sm:u-flex sm:u-gap-4">
          <NavLinks navItems={navItems} onNavigated={onNavigated}></NavLinks>
        </div>
      </nav>

      <div
        className={`u-absolute u-top-0 u-right-0 u-bg-zinc-950/70 u-overflow-hidden u-transition-all sm:u-hidden ${
          isDrawerOpened ? 'u-w-full' : 'u-w-0'
        }`}
      >
        <div className="u-py-16 u-px-5 u-w-screen u-h-screen u-text-start u-flex u-flex-col u-gap-3 u-transition-transform u-delay-300">
          <NavLinks navItems={navItems}></NavLinks>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
