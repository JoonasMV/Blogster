import { Link } from "react-router-dom";
import { Background, Title, Filler } from "./Banner.style";
import DesktopNavButtons from "./DesktopNavButtons/DesktopNavButtons";
import MobileMenu from "./MobileMenu/MobileMenu";

const Banner = ({ user, setUser }) => {
  return (
    <>
      <Background>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>Blogster</Title>
        </Link>
        <DesktopNavButtons user={user} setUser={setUser} />
        <MobileMenu />
      </Background>
      <Filler />
    </>
  );
};

export default Banner;
