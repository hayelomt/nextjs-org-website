import { ReactNode, useState } from 'react';
import Header from './components/Header';
import MobileFixedMenu from './components/MobileFixedMenu';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="main-container">
        <MobileFixedMenu
          showMenu={showMobileMenu}
          setShowMenu={setShowMobileMenu}
        />
        <div className="h-[100%] overflow-y-auto">
          <Header setShowMenu={setShowMobileMenu} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
