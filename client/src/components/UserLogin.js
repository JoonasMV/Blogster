import { useState } from "react"
import loginService from "../services/loginService"
import Notification from "./Notification"
import { StyledInput, isValid, Container, Sh3, StyledButton } from "../css/UserLogin"

const UserLogin = ({ setUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
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
      setNotification(error.response.data.error)
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
        <StyledButton onClick={handleLogin}>Sign in</StyledButton>
      </form>
    </Container>
  )
}

export default UserLogin
