import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  background-color: rgba(179, 255, 240, 0.5);
  color: black;
  border-radius: 10px;
  padding: 10px;
  padding-top: 5px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: left;
  font-family: "Open Sans";
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
  background-color: #b3fff0;
`

const StyledGreet = styled.div`
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
`


const Userbox = ({user}) => {
  
  return (
    <>
      <Container>
        <StyledGreet>{user.username}</StyledGreet>
        <StyledLink to="/newBlog">New blog</StyledLink>
        <div><StyledButton>Log out</StyledButton></div>
      </Container>
    </>
  )
}

export default Userbox