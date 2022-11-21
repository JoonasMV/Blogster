import styled from "styled-components"

const Background = styled.div`
  background-color: #b3fff0;
  height: 20vh;
  line-height: 17vh;
  text-align: center;
  `
  const Title = styled.h1`
  margin: 0;
  font-family: 'Pacifico', cursive;
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
