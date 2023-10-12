import styled from "styled-components";
import { inputCSS } from "css/InputCss";

export const LoginPopUpWrapper = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  width: 65%;
`;

export const Sh3 = styled.h3`
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
  /* margin-bottom: 10px; */
`;

export const StyledInput = styled.input`
  ${inputCSS}
  display: block;
  font-size: 30px;
  width: 75%;
  margin: auto;
  margin-bottom: 20px;
  color: white;
  &:focus {
    outline: none;
  }
`;