import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { magentaRed, skyBlue, teal } from "css/Color";
import { mobileSize } from "css/MediaQuery";

export const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  margin-top: 10px;
  @media (max-width: ${mobileSize}) {
    margin-top: 0;
    background-image: linear-gradient(
      to left top,
      ${magentaRed},
      ${skyBlue}, 
      ${teal}
      );
      mix-blend-mode: hide;
      height: 100vh;
      clip-path: inset(0px 0px calc(100% - 75px) 0px);
  }
  `;

export const Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-size: 60px;
  color: white;
  text-shadow: 2px 2px 2px black;
`;

export const MenuIcon = styled(CgMenu)`
  margin: 10px;
  position: absolute;
  right: 0;
  font-size: 50px;
  filter: drop-shadow(2px 2px 2px black);  
  @media (min-width: 1000px) {
    display: none;
  }
`;