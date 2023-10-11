import { useState } from "react";
import { Link } from "react-router-dom";
import { Background, Title, Filler, MenuIcon } from "./Banner.style";
import DesktopNavButtons from "./DesktopNavButtons/DesktopNavButtons";
import MobileMenu from "./MobileMenu/MobileMenu";

const Banner = ({ user, setUser }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(null);

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
          visible={showMobileMenu}
          setVisible={setShowMobileMenu}
        />
      </Background>
      <Filler />
    </>
  );
};

export default Banner;
