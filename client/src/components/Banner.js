import styled from "styled-components"

const Background = styled.div`
  background-color: #b3fff0;
  /* height: 5vh; */
  margin-bottom: 4rem;
  line-height: 18vh;
  text-align: center;
  box-shadow: 0px 0px 45px 50px #b3fff0;
  @media (max-width: 1000px) {
    box-shadow: 0px 0px 40px 55px #b3fff0;
  }
  `
const Title = styled.h1`
  margin: 0;
  font-family: "Pacifico", cursive;
  font-size: 110px;
  color: #060613;
  @media (max-width: 1000px) {
    font-size: 70px;
    line-height: 90px;
  }
`

const Banner = () => {
  return (
    <Background>
      <Title>Blogster</Title>
    </Background>
  )
}

export default Banner
