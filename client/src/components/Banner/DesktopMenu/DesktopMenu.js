import React from "react";
import {
  ButtonWrapper,
  PopUpWrapper,
  UserButton,
  NavButton,
} from "./DesktopMenu.style";
import LoginPopUP from "../LoginPopUp.js/LoginPopUp";
import { useNavigate } from "react-router-dom";

const DesktopMenu = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    setUser({ username: null, id: null });
  };

  return (
    <>
      {user?.id ? (
        <ButtonWrapper>
          <UserButton onClick={() => navigate(`/user/${user.id}`)}>{user.username}</UserButton>
          <NavButton onClick={() => navigate("/newBlog")}>New Blog</NavButton>
          <NavButton onClick={logout}>Log out</NavButton>
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
