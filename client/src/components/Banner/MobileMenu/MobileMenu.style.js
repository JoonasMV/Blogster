import styled from "styled-components";
import { SlideInAnimation, SlideOutAnimation } from "./SlideAnimation.style";
import { magentaRed, skyBlue, teal } from "css/Color";
import { CgClose } from "react-icons/cg";

export const Wrapper = styled.div`
  padding: 10px;
  position: fixed;
  right: 0;
  height: 100vh;
  width: 70vw;
  background: linear-gradient(140deg, ${magentaRed}E6, ${skyBlue}E6, ${teal}E6);
  ${(props) => (props.animate ? SlideInAnimation : SlideOutAnimation)};
  @media (min-width: 1000px) {
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