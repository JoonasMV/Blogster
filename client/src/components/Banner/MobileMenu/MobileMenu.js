import React from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { Wrapper, ButtonWrapper, CloseIcon } from "./MobileMenu.style";
import { SButton, UsernameButton } from "css/ButtonCss";
import LoginPopUP from "./LoginPopUp.js/LoginPopUp";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ user, setUser, visible, setVisible }) => {
  const navigate = useNavigate();
  
  const logout = () => {
    sessionStorage.clear()
    setUser({ username: null, id: null })
  }

  const handleNewBlogNavigation = () => {
    navigate("/newBlog")
    setVisible(false)
  }

  const ref = useOutsideClick(() => setVisible(false));
  
  return (
    <Wrapper animate={visible} ref={ref}>
      <ButtonWrapper>
        {user.id ? (
          <>
            <CloseIcon onClick={() => setVisible(false)} />
            <UsernameButton>{user.username}</UsernameButton>
            <SButton onClick={handleNewBlogNavigation}>New blog</SButton>
            <SButton onClick={logout}>Log out</SButton>
          </>
        ) : (
          <>
            <LoginPopUP setUser={setUser} />
          </>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MobileMenu;
