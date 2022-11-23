import { useState } from "react"
import styled from "styled-components"
import loginService from "../services/loginService"

export const Container = styled.div`
  text-align: center;
  border: double 4px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#060613, #060613), radial-gradient(circle at top left, #f00,#3020ff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 1vh;
  padding-top: 0.5vh;
  width: 25vh;
`
const StyledForm = styled.form`
  margin: 10px;
  margin-top: 5px;
`
const Sh3 = styled.h3`
  font-family: "Open Sans";
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0;
  margin-bottom: 1vh;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 20px;
  padding-left: 7px;
  margin: 3px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 9px 0 9px;
`

const Loginbox = ({ setUser }) => {
  const [loginUsername, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (event) => {
    event.preventDefault()
    const { accessToken, username } = await loginService.login(
      loginUsername,
      password
    )
    setUser({ username })
    sessionStorage.setItem("accessToken", JSON.stringify(accessToken))
    sessionStorage.setItem("username", JSON.stringify(username))
  }

  return (
    <>
      <Sh3>Login</Sh3>
      <Container>
        <StyledForm>
          Username
          <StyledInput
            type="text"
            value={loginUsername}
            onChange={(e) => setUsername(e.target.value)}
          />
          Password
          <StyledInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </StyledForm>
      </Container>
    </>
  )
}

export default Loginbox
