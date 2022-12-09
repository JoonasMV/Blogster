import { useState } from "react"
import loginService from "../services/loginService"
import UserCreation from "./UserCreation"
import Notification from "./Notification"
import { TextButton, StyledInput, isValid, Container, Sh3, StyledButton } from "../css/UserLogin"

const UserLogin = ({ setUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [newUser, setNewUser] = useState(false)
  const [notification, setNotification] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const logged = await loginService.login(
        username,
        password
      )
      setUser({ username, id: logged.id })
      sessionStorage.setItem("accessToken", JSON.stringify(logged.accessToken))
      sessionStorage.setItem("username", JSON.stringify(logged.username))
      sessionStorage.setItem("id", JSON.stringify(logged.id))
    } catch (error) {
      setNotification(error.error.message)
    }
  }

  return (
    <Container>
      <Sh3>Login</Sh3>
      <Notification message={notification} setMessage={setNotification} />
      <form>
        Username
        <div>
          <StyledInput
            style={
              !username.match(/^[a-zA-Z0-9]+$/) && username ? isValid : null
            }
            type="text"
            value={username}
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
        {!newUser && <StyledButton onClick={handleLogin}>Login</StyledButton>}
      </form>

      {newUser && <UserCreation username={username} password={password} setNewUser={setNewUser} setNotification={setNotification}/>}

      <TextButton onClick={() => setNewUser((prev) => !prev)}>
        {newUser ? "Cancel" : "Create account"}
      </TextButton>
    </Container>
  )
}

export default UserLogin
