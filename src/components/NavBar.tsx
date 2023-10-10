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
    <div className="u-sticky u-top-0 u-w-full u-z-10">
      <nav className="u-relative u-shadow-lg u-z-10 u-transition-shadow hover:u-shadow-xl">
        <div className="u-bg-zinc-950 u-absolute u-inset-0 u-opacity-50"></div>

        <div className="u-p-2 u-relative sm:u-p-5">
          <div className="u-flex u-flex-row-reverse sm:u-hidden">
            <button
              className="u-py-2 u-px-4 u-border-none"
              onClick={toggleDrawer}
            >
              {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
              <FontAwesomeIcon icon={['fas', 'bars']} />
            </button>
          </div>

          <div className="u-hidden sm:u-flex sm:u-gap-4">
            <NavLinks navItems={navItems} onNavigated={onNavigated}></NavLinks>
          </div>
        </div>
      </nav>

      {isDrawerOpened && (
        <div className="u-absolute u-top-0 u-w-screen u-h-screen sm:u-hidden">
          <div className="u-absolute u-inset-0 u-bg-zinc-950 u-opacity-50"></div>

          <div className="u-relative u-w-full u-h-full u-py-16 u-px-5 u-text-start u-flex u-flex-col u-gap-3">
            <NavLinks navItems={navItems}></NavLinks>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
