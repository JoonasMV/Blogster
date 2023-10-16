import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Background, Title, MenuIcon } from "./Banner.style";
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import { mobileSize } from "css/MediaQuery";

const Banner = ({ user, setUser }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(null);

  const parsedMobileSize = parseInt(mobileSize.slice(0, -2));
  // The menu keeps popping open when resizing without this
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > parsedMobileSize) {
        setShowMobileMenu(null);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); //eslint-disable-line

  return (
    <>
      <Background>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>Blogster</Title>
        </Link>
        <DesktopMenu user={user} setUser={setUser} />
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
