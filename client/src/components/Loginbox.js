import { useRef, useState } from "react"
import styled, { css } from "styled-components"
import loginService from "../services/loginService"
import userService from "../services/userService"
import { Link } from "react-router-dom"
import UserCreation from "./UserCreation"
import { inputCSS } from "../css/inputCss"

export const Container = styled.div`
  text-align: center;
  border: double 4px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#060613, #060613),
    radial-gradient(circle at top left, #f00, #3020ff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 1vh;
  padding-top: 0.5vh;
  width: 14vw;
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

export const StyledInput = styled.input`
  ${inputCSS}
  &:focus {
    outline: none;
  }
`

const StyledButton = styled(Link)`
  font-size: 15px;
  text-align: left;
`

export const isValid = {
  outline: "3px solid red",
}

const Loginbox = ({ setUser }) => {
  const [loginUsername, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [newUser, setNewUser] = useState(false)
  

  const handleLogin = async (event) => {
    event.preventDefault()
    const { accessToken, username, id } = await loginService.login(
      loginUsername,
      password
    )
    setUser({ username, id })
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
      bio: bio,
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
          <div>
            <StyledInput
              style={
                !loginUsername.match(/^[a-zA-Z0-9]+$/) && loginUsername
                  ? isValid
                  : null
              }
              type="text"
              value={loginUsername}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          Password
          <div>
            <StyledInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {newUser && 
          <UserCreation 
            email={email} 
            setEmail={setEmail} 
            bio={bio}
            setBio={setBio}/>}
          {newUser ? (
            <button onClick={createNewUser}>Create new user</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </StyledForm>
        <div style={{ textAlign: "left" }}>
          <StyledButton onClick={() => setNewUser((prev) => !prev)}>
            {newUser ? "Cancel" : "Create account"}
          </StyledButton>
        </div>
      </Container>
    </>
  )
}

export default Loginbox
