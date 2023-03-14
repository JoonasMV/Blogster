import { useState, useRef } from "react"
import { Container, StyledInput, StyledTextArea, StyledButton } from "./CreateAccount.style"
import { isValid } from "../../UserLogin/UserLogin.style"
import loginService from "../../../services/loginService"
import userService from "../../../services/userService"
import Notification from "../../UserLogin/Notification/Notification"

const CreateAccount = ({ setUser, setBoxVisibility }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [notification, setNotification] = useState("")
  const bioRef = useRef()

  const handleBio = (e) => {
    setBio(e.target.value)
    const textarea = bioRef.current
    textarea.style.height = ""
    textarea.style.height = textarea.scrollHeight + 2 + "px"
  }

  const handleCreateNewUser = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      password,
      email,
      bio,
    }

    const response = await userService.createNewUser(newUser)
    if (response.status === 201) {
      console.log("user creation successfull")
      const logged = await loginService.login(
        username,
        password
      )
      setUser({ username, id: logged.id })
      setBoxVisibility(false)
      sessionStorage.setItem("accessToken", JSON.stringify(logged.accessToken))
      sessionStorage.setItem("username", JSON.stringify(logged.username))
      sessionStorage.setItem("id", JSON.stringify(logged.id))
    } else {
      setNotification(response.data.error)
    }
  }

  return (
    <Container>
      <Notification message={notification} setMessage={setNotification} />
      <form>
        Username
        <StyledInput
          style={
              !username.match(/^[a-zA-Z0-9]+$/) && username ? isValid : null
          }
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
        E-mail
        <StyledInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Bio
        <StyledTextArea 
          type="text"
          ref={bioRef}
          value={bio}
          onChange={handleBio}
        />
        <StyledButton onClick={handleCreateNewUser}>Create user</StyledButton>
      </form>
    </Container>
  )
}

export default CreateAccount