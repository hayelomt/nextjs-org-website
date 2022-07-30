import { ReactNode, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MobileFixedMenu from './components/MobileFixedMenu';

type LayoutProps = {
  children: ReactNode;
  showHeaderShadow?: boolean;
};

const Layout = ({ children, showHeaderShadow = false }: LayoutProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="main-container bg-white">
        <MobileFixedMenu
          showMenu={showMobileMenu}
          setShowMenu={setShowMobileMenu}
        />
        <div className="h-[100%] overflow-y-auto">
          <Header
            setShowMenu={setShowMobileMenu}
            showShadow={showHeaderShadow}
          />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
