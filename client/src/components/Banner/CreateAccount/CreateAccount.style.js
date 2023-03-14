import styled from "styled-components";
import { gray } from "../../../css/Color";
import { inputCSS } from "../../../css/InputCss";

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

export const StyledTextArea = styled.textarea`
  ${inputCSS}
  resize: none;
  padding: 2px;
  box-sizing: border-box;
  width: 100%;
`

export const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 15px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`