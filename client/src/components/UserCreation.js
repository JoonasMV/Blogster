import { StyledInput } from "./Loginbox"
import styled from "styled-components"
import {inputCSS} from "../css/inputCss"
import { isValid } from "./Loginbox"
import { useRef } from "react"

const StyledTextArea = styled.textarea`
  ${inputCSS}
  resize: none;
`

const UserCreation = ({ email, setEmail, bio ,setBio }) => {
  const bioRef = useRef()

  const handleBio = (e) => {
    setBio(e.target.value)
    const textarea = bioRef.current
    textarea.style.height = ""
    textarea.style.height = textarea.scrollHeight + 2 + "px"
  }

  return (
    <>
    E-mail
    <StyledInput
      style={!email.match(/\S+@\S+\.\S+/) && email ? isValid : null}
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    Bio
    <StyledTextArea
      type="text"
      ref={bioRef}
      onChange={handleBio}
      value={bio}
    />
  </>
  )

}

export default UserCreation