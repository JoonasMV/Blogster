import React, { useState } from "react";
import Userbox from "components/Userbox/Userbox";
import UserLogin from "../UserLogin/UserLogin";
import CreateAccount from "../CreateAccount/CreateAccount";
import ToggleVisible from "components/ToggleVisibility/ToggleVisible";
import { ButtonWrapper } from "./DesktopNavButtons.style";
import { SButton } from "css/ButtonCss";

const DesktopNavButtons = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateAcc, setCreateAcc] = useState(false);

  const handleShowLogin = () => {
    setShowLogin((showLogin) => !showLogin);
    if (showCreateAcc) {
      setCreateAcc(false);
    }
  };

  const handleShowCreateAcc = () => {
    setCreateAcc((showCreateAcc) => !showCreateAcc);
    if (showLogin) {
      setShowLogin(false);
    }
  };

  return (
    <ButtonWrapper>
      {!user.id && (
        <>
          <SButton onClick={handleShowLogin}> Login </SButton>
          <SButton onClick={handleShowCreateAcc}> Sign up </SButton>
        </>
      )}
      {user.id && <Userbox user={user} setUser={setUser} />}
      <ToggleVisible visible={showLogin}>
        {!user.id && (
          <UserLogin setUser={setUser} setShowLogin={setShowLogin} />
        )}
      </ToggleVisible>
      <ToggleVisible visible={showCreateAcc}>
        <CreateAccount setUser={setUser} setBoxVisibility={setCreateAcc} />{" "}
      </ToggleVisible>
    </ButtonWrapper>
  );
};

export default DesktopNavButtons;
