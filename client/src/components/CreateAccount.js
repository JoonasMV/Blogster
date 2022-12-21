import { useState, useRef } from "react"
import { Container, StyledInput, StyledTextArea, StyledButton } from "../css/CreateAccount"
import { isValid } from "../css/UserLogin"
import userService from "../services/userService"
import Notification from "./Notification"

const CreateAccount = () => {
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

  const createNewUser = async (e) => {
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
        <StyledButton onClick={createNewUser}>Create user</StyledButton>
      </form>
    </Container>
  )
}

export default CreateAccount