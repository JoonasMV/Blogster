import styled from "styled-components"
import { inputCSS } from "./inputCss"
import { buttonCSS } from "./buttonCss"
import { Link } from "react-router-dom"

export const TextButton = styled(Link)`
  font-size: 15px;
  text-align: left;
`

export const StyledInput = styled.input`
  ${inputCSS}
  width: 100%;
  &:focus {
    outline: none;
  }
`

export const isValid = {
  outline: "3px solid red",
}

export const Container = styled.div`
  text-align: center;
  border: double 4px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#060613, #060613),
    radial-gradient(circle at top left, #f00, #3020ff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 0 1vw;
  margin-right: 2vw;
`

export const Sh3 = styled.h3`
  font-family: "Open Sans";
  text-align: center;
  margin-top: 5px;
  margin-bottom: 1vh;
`

export const StyledTextArea = styled.textarea`
  ${inputCSS}
  resize: none;
  padding: 2px;
  box-sizing: border-box;
  width: 100%;
`

export const StyledButton = styled.button`
  ${buttonCSS}
  margin-top: 5px;
`

export const CreateUserButton = styled.button`
  ${buttonCSS}
  margin-bottom: 5px;
  margin-right: 15px;
`