import { useState } from "react";
import { Link } from "react-router-dom";
import { Background, Title, Filler, BurgerMenu } from "./Banner.style";
import DesktopNavButtons from "./DesktopNavButtons/DesktopNavButtons";
import MobileMenu from "./MobileMenu/MobileMenu";

const Banner = ({ user, setUser }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <Background>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>Blogster</Title>
        </Link>
        <DesktopNavButtons user={user} setUser={setUser} />
        <div>
          <BurgerMenu onClick={() => setShowMobileMenu(!showMobileMenu)}>Asd</BurgerMenu>
          <MobileMenu visible={showMobileMenu} setVisible={setShowMobileMenu}/>
        </div>
      </Background>
      <Filler />
    </>
  );
};

export default Banner;
