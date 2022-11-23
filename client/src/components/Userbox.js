import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  text-align: center;
  border: double 4px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#060613, #060613), radial-gradient(circle at top left, #f00,#3020ff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 1vh;
  padding-top: 0.5vh;
  width: 15vh;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: left;
  font-family: "Open Sans";
  color: lightpink;
`

const StyledButton = styled.button`
  width: 100%;
  padding: 5px 20px;
  padding-left: 7px;
  margin: 3px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 9px 0 9px;
`

const StyledGreet = styled.div`
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
  border-bottom: 2px solid transparent;
  background-image: linear-gradient(#060613, #060613), radial-gradient(circle at top left, #971c1c, #7820ff);
  background-origin: border-box;
  background-clip: padding-box, border-box;



  width: 100%;
  margin: auto;
  color: white;
`

const Userbox = ({ user }) => {
  return (
    <>
      <Container>
        <StyledGreet>{user.username}</StyledGreet>
        <StyledLink to="/newBlog">New blog</StyledLink>
        <div>
          <StyledButton>Log out</StyledButton>
        </div>
      </Container>
    </>
  )
}

export default Userbox
