import styled from "styled-components";
import { inputCSS } from "css/InputCss";
import { UsernameButton } from "css/ButtonCss";
import { mobileSize } from "css/MediaQuery";

export const LoginPopUpWrapper = styled.div`
  padding: 10px;
  /* display: flex; */
  /* flex-direction: column; */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  /* width: 50%; */
  font-family: "Open Sans";
  margin: auto;
  @media (min-width: ${mobileSize}) {
    width: 100%;
  }
`;

export const Sh3 = styled.h3`
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  ${inputCSS}
  display: block;
  font-size: 25px;
  width: 75%;
  margin: auto;
  margin-bottom: 10px;
  color: white;
  box-sizing: border-box;
  ::placeholder {
    color: #bcbcbc;
    font-style: italic;
  }
  &:focus {
    outline: none;
  }
`;

export const SpanWrapper = styled.div`
  text-align: center;
`;

export const SSpan = styled.span`
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

export const LoginButton = styled(UsernameButton)`
  box-shadow: 1px 1px 1px black;
  font-size: 20px;
  height: 2rem;
  :hover{
    box-shadow: none;
  }
`;

export const LoginWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  width: 75%;
`;