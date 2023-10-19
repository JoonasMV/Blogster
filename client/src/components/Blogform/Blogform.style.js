import { SButton } from "css/ButtonCss";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const inputCSS = css`
  width: 100%;
  resize: none;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  font-size: 20px;
  color: black;
  text-align: center;
  :focus {
    outline: none;
  }
`;

export const NewBlogH2 = styled.h2`
  margin: 0;
  text-align: center;
  margin-bottom: 20px;
`;

export const BlogTitle = styled.input`
  ${inputCSS}
  padding: 10px;
`;

export const BlogTextArea = styled.textarea`
  padding: 5px;
  ${inputCSS}
`;

export const TitleWrapper = styled.div`
  margin-bottom: 10px;
`;

export const FormButton = styled(SButton)`
  filter: none;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  margin: 10px;
`;
