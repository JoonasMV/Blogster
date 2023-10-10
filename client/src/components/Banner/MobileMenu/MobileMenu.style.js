import styled from "styled-components";
import { SlideInAnimation, SlideOutAnimation } from "./SlideAnimation.style";

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  overflow: hidden;
  height: 100vh;
  width: 70vw;
  background: red;
  ${props => props.animate ? SlideInAnimation : SlideOutAnimation};
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  gap: 10px;
`;

export const SButton = styled.button`
  width: 100%;
`;