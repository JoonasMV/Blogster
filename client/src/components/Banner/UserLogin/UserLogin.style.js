import { inputCSS } from "css/InputCss.js"
import styled from "styled-components"
import { gray } from "css/Color.js"

export const Container = styled.div`
  position: absolute;
  background-color: ${gray};
  text-align: center;
  border-radius: 10px;
  padding: 0 1vw;
  width: 20vw;
  right: 5px;
  top: 65px;
  border: 2px solid white;
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

export const Sh3 = styled.h3`
  font-family: "Open Sans";
  text-align: center;
  margin-top: 5px;
  margin-bottom: 1vh;
`

export const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 15px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`
