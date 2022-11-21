import { useState } from "react"
import styled from "styled-components"
import loginService from "../services/loginService"

const Container = styled.div`
  width: 25vh;
  border: 2px solid red;
  background-color: wheat;
  color: black;
  border-radius: 10px;
`
const StyledForm = styled.form`
  margin: 10px;
  margin-top: 5px;
`
const Sh3 = styled.h3`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0;
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

const Userbox = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleLogin = (event) => {
    event.preventDefault()
    loginService.login(username, password)
  }

  return (
    <Container>
      <Sh3>Login</Sh3>
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
  )
}

export default Userbox