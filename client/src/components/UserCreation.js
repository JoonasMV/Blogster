import { useRef, useState } from "react"
import { StyledInput } from "../css/Userbox"
import { StyledTextArea } from "../css/Userbox"
import userService from "../services/userService"

const UserCreation = ({ username, password, setNewUser }) => {
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
      console.log("user creation failed")
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
      <div>
        <button onClick={createNewUser}>Create user</button>
      </div>
    </>
  )
}

export default UserCreation
