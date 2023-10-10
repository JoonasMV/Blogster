import React from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { Wrapper, ButtonWrapper, CloseIcon } from "./MobileMenu.style";
import { SButton, UsernameButton } from "css/ButtonCss";

const MobileMenu = ({ user, visible, setVisible }) => {
  const ref = useOutsideClick(() => setVisible(false));

  return (
    <Wrapper animate={visible} ref={ref}>
      <ButtonWrapper>
        {user ? (
          <>
            <CloseIcon onClick={() => setVisible(false)} />
            <UsernameButton>{user.username}</UsernameButton>
            <SButton>New blog</SButton>
            <SButton>Log out</SButton>
          </>
        ) : (
          <>
            <SButton onClick={() => setVisible(false)}>Login</SButton>
            <SButton onClick={() => setVisible(false)}>Sign up</SButton>
          </>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MobileMenu;
