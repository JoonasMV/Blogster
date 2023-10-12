import styled from "styled-components";
import { SlideInAnimation, SlideOutAnimation } from "./SlideAnimation.style";
import { magentaRed, skyBlue, teal } from "css/Color";
import { CgClose } from "react-icons/cg";
import { mobileSize } from "css/MediaQuery";

export const Wrapper = styled.div`
  z-index: 2;
  display: ${props => props.animate == null ? "none" : ""}; //Stops animation from playing on load
  padding: 10px;
  position: fixed;
  right: 0;
  height: 100vh;
  box-sizing: border-box;
  width: 70vw;
  background: linear-gradient(140deg, ${magentaRed}E6, ${skyBlue}E6, ${teal}E6);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  ${(props) => (props.animate ? SlideInAnimation : SlideOutAnimation)};
  @media (min-width: ${mobileSize}) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  gap: 10px;
`;

export const CloseButtonWrapper = styled.div`
  margin-right: 10px;
`;

export const CloseIcon = styled(CgClose)`
  float: right;
  font-size: 50px;
`;