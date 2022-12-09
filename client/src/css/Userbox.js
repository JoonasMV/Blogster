import styled from "styled-components";
import { inputCSS } from "./inputCss";
import { Link } from "react-router-dom";

export const TextButton = styled(Link)`
font-size: 15px;
text-align: left;
`

export const StyledInput = styled.input`
${inputCSS}
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
padding: 1vh;
padding-top: 0.5vh;
width: 14vw;
`

export const Sh3 = styled.h3`
font-family: "Open Sans";
text-align: center;
margin-top: 5px;
margin-bottom: 0;
margin-bottom: 1vh;
`

export const StyledTextArea = styled.textarea`
${inputCSS}
resize: none;
`

export const StyledForm = styled.form`
margin: 10px;
margin-top: 5px;
margin-bottom: 0;
`