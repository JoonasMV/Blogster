import { css, keyframes } from "styled-components";

const SlideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
`;

const SlideOut = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const SlideInAnimation = css`
  animation: ${SlideIn} 0.3s ease-in-out forwards;
`;

export const SlideOutAnimation = css`
  animation: ${SlideOut} 0.3s ease-in-out forwards;
`;
