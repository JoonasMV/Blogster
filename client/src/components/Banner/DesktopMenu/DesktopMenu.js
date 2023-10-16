import React from "react";
import { ButtonWrapper, PopUpWrapper, UserButton, NavButton } from "./DesktopMenu.style";
import LoginPopUP from "../MobileMenu/LoginPopUp.js/LoginPopUp";

const DesktopMenu = ({ user, setUser }) => {
  return (
    <>
      {user.id ? (
        <ButtonWrapper>
          <UserButton>{user.username}</UserButton>
          <NavButton>New Blog</NavButton>
          <NavButton>Log out</NavButton>
        </ButtonWrapper>
      ) : (
        <>
          <PopUpWrapper>
            <LoginPopUP setUser={setUser} />
          </PopUpWrapper>
        </>
      )}
    </>
  );
};

export default DesktopMenu;
