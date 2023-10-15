import React, { useState } from "react";
import loginService from "services/loginService.js";
import userService from "services/userService";
import {
  LoginButton,
  LoginPopUpWrapper,
  LoginWrapper,
  SSpan,
  Sh3,
  SpanWrapper,
  StyledInput,
} from "./LoginPopUp.style";

const LoginPopUP = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const logged = await loginService.login(username, password);
      setUser({ username, id: logged.id });
      sessionStorage.setItem("user", JSON.stringify(logged));
    } catch (error) {
      // setNotification(error.response.data.error)
    }
  };

  const handleUserCreation = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      password,
      email,
    }

    const response = await userService.createNewUser(newUser)
    if (response.status === 201) {
      const user = await loginService.login(
        username,
        password
      )
      setUser({ username, id: user.id })
      // setBoxVisibility(false)
      sessionStorage.setItem("accessToken", JSON.stringify(user.accessToken))
      sessionStorage.setItem("username", JSON.stringify(user.username))
      sessionStorage.setItem("id", JSON.stringify(user.id))
    } else {
      // setNotification(response.data.error)
    }
  };

  return (
    <LoginPopUpWrapper>
      <Sh3>Login</Sh3>
      <form onSubmit={showSignUp ? handleUserCreation : handleLogin}>
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
        <LoginWrapper>
          <LoginButton>Log in</LoginButton>
        </LoginWrapper>
        <SignUpPopUp
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
          setEmail={setEmail}
        />
      </form>
    </LoginPopUpWrapper>
  );
};

const SignUpPopUp = ({ showSignUp, setShowSignUp, setEmail }) => {

  return (
    <>
      {showSignUp ? (
        <>
          <StyledInput
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <SpanWrapper>
            <SSpan onClick={() => setShowSignUp(!showSignUp)}>Cancel</SSpan>
          </SpanWrapper>
        </>
      ) : (
        <SpanWrapper>
          Not a user{" "}
          <SSpan onClick={() => setShowSignUp(!showSignUp)}>
            create an account
          </SSpan>
        </SpanWrapper>
      )}
    </>
  );
};

export default LoginPopUP;
