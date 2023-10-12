import React, { useState } from "react";
import loginService from "services/loginService.js";
import { LoginPopUpWrapper, Sh3, StyledInput } from "./LoginPopUp.style";

const LoginPopUP = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const logged = await loginService.login(username, password);
      setUser({ username, id: logged.id });
      // setShowLogin(false)
      sessionStorage.setItem("user", JSON.stringify(logged));
    } catch (error) {
      // setNotification(error.response.data.error)
    }
  };

  return (
    <LoginPopUpWrapper>
      <Sh3>Login</Sh3>
      <form onSubmit={handleLogin}>
          <StyledInput
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
      </form>
    </LoginPopUpWrapper>
  );
};

export default LoginPopUP;
