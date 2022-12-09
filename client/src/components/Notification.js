import styled from "styled-components"
import { redFadeBox } from "../css/divCss"


const NotificationDiv = styled.div`
  ${redFadeBox}
`

const Notification = ({ message, setMessage }) => {
  
  if (message) {
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }

  if (!message) return null
  return (
  <NotificationDiv>
    {message}
  </NotificationDiv>)
}

export default Notification
