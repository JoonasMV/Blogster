import styled from "styled-components"

const Background = styled.div`
  background-color: #b3fff0;
  height: 22vh;
  line-height: 18vh;
  text-align: center;
  mask-image: linear-gradient(
    rgba(0, 0, 0, 1), transparent
  );
`
const Title = styled.h1`
  margin: 0;
  font-family: "Pacifico", cursive;
  font-size: 110px;
  color: #000066;
`

const Banner = () => {
  return (
    <Background>
      <Title>Blogster</Title>
    </Background>
  )
}

export default Banner
