import React from "react";
import { useState } from "react";
import { Wrapper, ButtonWrapper } from "./MobileMenu.style";

const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <button onClick={() => setVisible(!visible)}>Menu</button>
      <ButtonWrapper animate={visible}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MobileMenu;
