import { useRef, useState } from "react"
import styled, { css } from "styled-components"
import loginService from "../services/loginService"
import { Link } from "react-router-dom"

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
  margin-bottom: 0;
`
const Sh3 = styled.h3`
  font-family: "Open Sans";
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0;
  margin-bottom: 1vh;
`

const inputCSS = css`
  width: 100%;
  padding: 5px 20px;
  padding-left: 7px;
  margin: 3px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 9px 0 9px;
`

const StyledInput = styled.input`
  ${inputCSS}
`

const StyledTextArea = styled.textarea`
  ${inputCSS}
  resize: none;
`

const CreateUser = styled(Link)`
  font-size: 15px;
  text-align: left;
`

const Loginbox = ({ setUser }) => {
  const [loginUsername, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [newUser, setNewUser] = useState(false)
  const bioRef = useRef()

  const handleResize = () => {
    console.log("test")
    const textarea = bioRef.current
    textarea.style.height = ""
    textarea.style.height = (textarea.scrollHeight+2) + "px"
  }
  

  const handleLogin = async (event) => {
    event.preventDefault()
    const { accessToken, username, id } = await loginService.login(
      loginUsername,
      password
    )
    setUser({ username })
    sessionStorage.setItem("accessToken", JSON.stringify(accessToken))
    sessionStorage.setItem("username", JSON.stringify(username))
    sessionStorage.setItem("id", JSON.stringify(id))
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
        {newUser && 
        <>
        E-mail
        <StyledInput
          type="email"
          />

        Bio
        <StyledTextArea 
          type="text"
          ref={bioRef}
          onChange={handleResize}
        />
          </>
          }
          <button onClick={handleLogin}>{newUser ? "Create user" : "Login"}</button>
        </StyledForm>
        <div style={{textAlign: "left"}}>
          <CreateUser onClick={() => setNewUser(prev => !prev)}>{newUser ? "Cancel" : "Create account"}</CreateUser>
        </div>
      </Container>
    </>
  )
}

export default Loginbox
