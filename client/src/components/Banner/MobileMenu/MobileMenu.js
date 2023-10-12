import React, { useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { Wrapper, ButtonWrapper, CloseIcon } from "./MobileMenu.style";
import { SButton, UsernameButton } from "css/ButtonCss";
import LoginPopUP from "./LoginPopUp.js/LoginPopUp";

const MobileMenu = ({ user, setUser, visible, setVisible }) => {
  const [showLogin, setShowLogin] = useState(false);
  
  const ref = useOutsideClick(() => setVisible(false));
  
  return (
    <Wrapper animate={visible} ref={ref}>
      <ButtonWrapper>
        {user.id ? (
          <>
            <CloseIcon onClick={() => setVisible(false)} />
            <UsernameButton>{user.username}</UsernameButton>
            <SButton>New blog</SButton>
            <SButton >Log out</SButton>
          </>
        ) : (
          <>
            {/* <SButton onClick={() => setShowLogin(!showLogin)}>Login</SButton> */}
            <LoginPopUP setUser={setUser} />
            {/* {showLogin && <UserLogin />} */}
            {/* <SButton onClick={() => setVisible(false)}>Sign up</SButton> */}
          </>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MobileMenu;
