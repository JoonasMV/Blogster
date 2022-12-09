import styled from "styled-components"
import { Link } from "react-router-dom"
import { Container, StyledButton, NewBlog, LinkWrapper } from "../css/Userbox"





const StyledGreet = styled.div`
  font-family: "Open Sans";
  font-weight: 600;
  border-bottom: 2px solid transparent;
  background-image: linear-gradient(#060613, #060613),
    radial-gradient(circle at top left, #971c1c, #7820ff);
  background-clip: padding-box, border-box;
  color: white;
`

const Userbox = ({ user, setUser }) => {
  const logout = () => {
    sessionStorage.clear()
    setUser({ username: null, id: null })
  }

  return (
    <>
      <Container>
        <Link to={`user/${user.id}`} style={{textDecoration: "none"}}>
          <StyledGreet>{user.username}</StyledGreet>
        </Link>
        <LinkWrapper><NewBlog to="/newBlog">New blog</NewBlog></LinkWrapper>
        <div>
          <StyledButton onClick={logout}>Log out</StyledButton>
        </div>
      </Container>
    </>
  )
}

export default Userbox
