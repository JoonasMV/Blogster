import { useRef, useState } from "react"
import styled, { css } from "styled-components"
import loginService from "../services/loginService"
import userService from "../services/userService"
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
  &:focus {
    outline: none;
  }
`

const StyledTextArea = styled.textarea`
  ${inputCSS}
  resize: none;
`

const StyledButton = styled(Link)`
  font-size: 15px;
  text-align: left;
`

const isValid = {
  outline: "3px solid red"
}

const Loginbox = ({ setUser }) => {
  const [loginUsername, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [newUser, setNewUser] = useState(false)
  const bioRef = useRef()

  const handleBio = (e) => {
    setBio(e.target.value)
    const textarea = bioRef.current
    textarea.style.height = ""
    textarea.style.height = (textarea.scrollHeight+2) + "px"
  }
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
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

  const createNewUser = async (e) => {
    e.preventDefault()

    const newUser = {
      username: loginUsername,
      password: password,
      email: email,
      bio: bio
    }

    const response = await userService.createNewUser(newUser)
    console.log(response.status)
    if (response.status === 201) {
      console.log("user creation successfull")
    } else {
      console.log("user creation unsuccessfull")
    }
  }

  return (
    <>
      <Sh3>Login</Sh3>
      <Container>
        <StyledForm>
          Username
          <StyledInput style={!(loginUsername.match(/^[a-zA-Z0-9]+$/)) ? isValid : null}
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
        <StyledInput style={!(email.match(/\S+@\S+\.\S+/)) ? isValid : null}
          type="email"
          value={email}
          onChange={handleEmail}
          />

        Bio
        <StyledTextArea 
          type="text"
          ref={bioRef}
          onChange={handleBio}
          value={bio}
        />
          </>
          }
          {newUser 
          ? <button onClick={createNewUser}>Create new user</button>
          : <button onClick={handleLogin}>Login</button>
        }
        </StyledForm>
        <div style={{textAlign: "left"}}>
          <StyledButton onClick={() => setNewUser(prev => !prev)}>{newUser ? "Cancel" : "Create account"}</StyledButton>
        </div>
      </Container>
    </>
  )
}

export default Loginbox
