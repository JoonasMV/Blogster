import React from "react";
import {
  Wrapper,
  ButtonWrapper,
  SButton,
} from "./MobileMenu.style";

const MobileMenu = ({ visible, setVisible }) => {
  return (
    <Wrapper animate={visible}>
      <ButtonWrapper>
        <SButton onClick={() => setVisible(false)}>1</SButton>
        <SButton onClick={() => setVisible(false)}>2</SButton>
        <SButton onClick={() => setVisible(false)}>3</SButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MobileMenu;
