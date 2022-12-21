import styled from "styled-components"

const NotificationDiv = styled.div`
  border: 2px solid white;
  border-radius: 10px;
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
