import styled from "styled-components"
import { buttonCSS } from "../../css/ButtonCss"

export const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  @media (max-width: 1000px) {
    position: relative;
  }
  `
export const Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-size: 60px;
  color: white;
  text-shadow: 2px 2px 2px black;
`

export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-right: 10px;
  display: ${props => props.visible};
`

export const StyledButton = styled.button`
  ${buttonCSS}
  height: 50px;
  width: 100px;
  margin-left: 10px;
  font-size: 19px;
  font-family: "Open Sans";
  font-weight: 600;
`

export const Filler = styled.div`
  height: 30px;
  @media (max-width: 1000px) {
    height: 0;
  }
`