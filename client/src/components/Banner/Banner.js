import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Background, Title, MenuIcon } from "./Banner.style";
import DesktopNavButtons from "./DesktopNavButtons/DesktopNavButtons";
import MobileMenu from "./MobileMenu/MobileMenu";

const Banner = ({ user, setUser }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(null);

  // The menu keeps popping open when resizing without this
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1000) {
        setShowMobileMenu(null);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Background>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>Blogster</Title>
        </Link>
        <DesktopNavButtons user={user} setUser={setUser} />
        {!showMobileMenu && (
          <MenuIcon
            size={50}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        )}
        <MobileMenu
          user={user}
          setUser={setUser}
          visible={showMobileMenu}
          setVisible={setShowMobileMenu}
        />
      </Background>
    </>
  );
};

export default Banner;
