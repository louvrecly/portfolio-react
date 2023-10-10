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
    <div className="tw-sticky tw-top-0 tw-w-full tw-z-10">
      <nav className="tw-relative tw-shadow-lg tw-z-10 tw-transition-shadow hover:tw-shadow-xl">
        <div className="tw-bg-zinc-950 tw-absolute tw-inset-0 tw-opacity-50"></div>

        <div className="tw-p-2 tw-relative sm:tw-p-5">
          <div className="tw-flex tw-flex-row-reverse sm:tw-hidden">
            <button
              className="tw-py-2 tw-px-4 tw-border-none"
              onClick={toggleDrawer}
            >
              {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
              <FontAwesomeIcon icon={['fas', 'bars']} />
            </button>
          </div>

          <div className="tw-hidden sm:tw-flex sm:tw-gap-4">
            <NavLinks navItems={navItems} onNavigated={onNavigated}></NavLinks>
          </div>
        </div>
      </nav>

      {isDrawerOpened && (
        <div className="tw-absolute tw-top-0 tw-w-screen tw-h-screen sm:tw-hidden">
          <div className="tw-absolute tw-inset-0 tw-bg-zinc-950 tw-opacity-50"></div>

          <div className="tw-relative tw-w-full tw-h-full tw-py-16 tw-px-5 tw-text-start tw-flex tw-flex-col tw-gap-3">
            <NavLinks navItems={navItems}></NavLinks>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
