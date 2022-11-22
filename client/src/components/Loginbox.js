import { useState } from "react"
import styled from "styled-components"
import loginService from "../services/loginService"

const Container = styled.div`
  padding: 2px;
  width: 25vh;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  border-radius: 10px;
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
  opacity: 0.7;
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

const Loginbox = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (event) => {
    event.preventDefault()
    const accessToken = await loginService.login(username, password)
    sessionStorage.setItem("accessToken", JSON.stringify(accessToken))
  }

  return (
    <>
      <Sh3>Login</Sh3>
      <Container>
        <StyledForm>
          Username
          <StyledInput
            type="text"
            value={username}
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
