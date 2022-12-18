import styled from "styled-components"
import { Link } from "react-router-dom"

const Background = styled.div`
  background-color: #0d0d1a;
  border-bottom: 1px solid rgba(255, 255, 255, .15);
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  `
const Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-size: 60px;
  color: white;
`

const ButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-right: 10px;
`

const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 15px;
  height: 45px;
  width: 80px;
  margin-left: 10px;
`


const Banner = () => {
  return (
    <Background>
      <Link to="/" style={{textDecoration: "none"}}><Title>Blogster</Title></Link>
      <ButtonWrapper>
        <StyledButton>Login</StyledButton>
        <StyledButton>Sign up</StyledButton>
      </ButtonWrapper>
    </Background>
  )
}

export default Banner
