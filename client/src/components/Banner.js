import styled from "styled-components"

const Background = styled.div`
  background-color: #b3fff0;
  height: 5vh;
  margin-bottom: 15vh;
  line-height: 18vh;
  text-align: center;
  box-shadow: 0px 0px 65px 130px #b3fff0;
`
const Title = styled.h1`
  margin: 0;
  font-family: "Pacifico", cursive;
  font-size: 110px;
  color: #000080;
`

const Banner = () => {
  return (
    <Background>
      <Title>Blogster</Title>
    </Background>
  )
}

export default Banner
