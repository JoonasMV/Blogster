import { useRef, useState } from "react"
import { StyledInput } from "../css/UserLogin"
import { StyledTextArea } from "../css/UserLogin"
import userService from "../services/userService"
import { CreateUserButton } from "../css/UserLogin"

const UserCreation = ({ username, password, setNewUser, setNotification }) => {
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const bioRef = useRef()

  const handleBio = (e) => {
    setBio(e.target.value)
    const textarea = bioRef.current
    textarea.style.height = ""
    textarea.style.height = textarea.scrollHeight + 2 + "px"
  }

  const createNewUser = async () => {
    const newUser = {
      username,
      password,
      email,
      bio,
    }

    const response = await userService.createNewUser(newUser)
    if (response.status === 201) {
      setNewUser(false)
      console.log("user creation successfull")
    } else {
      setNotification(response.data.error)
    }
  }

  return (
    <>
      e-mail
      <div>
        <StyledInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      bio
      <div>
        <StyledTextArea
          type="text"
          ref={bioRef}
          value={bio}
          onChange={handleBio}
        />
      </div>
        <CreateUserButton onClick={createNewUser}>Create user</CreateUserButton>
    </>
  )
}

export default UserCreation
