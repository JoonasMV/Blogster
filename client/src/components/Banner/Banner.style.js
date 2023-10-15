import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { mobileSize } from "css/MediaQuery";
import { magentaRed, skyBlue, teal } from "css/Color";

export const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  margin-top: 10px;
  @media (max-width: ${mobileSize}) {
    margin-top: 0;
    background: linear-gradient(to left top, ${magentaRed}, ${skyBlue}, ${teal});
    background-size: 100vw 100vh;
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