import styled from "styled-components"

const Background = styled.div`
  background-color: red;
  height: 20vh;
  line-height: 20vh;
  text-align: center;
  `
  const Title = styled.h1`
  margin: 0;
`

const Banner = () => {
  return (
    <Background>
      <Title>Hello</Title>
    </Background>
  )
}

export default Banner
