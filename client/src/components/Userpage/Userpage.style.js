import { BlogContentWrapper, ElementWrapper } from "css/BlogCss";
import { SquareButton } from "css/ButtonCss";
import styled from "styled-components";

export const Sh2 = styled.h2`
  font-size: 40px;
`;

export const BlogPreview = styled.div`
  text-align: left;
  overflow: hidden;
  text-overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SBlogContentWrapper = styled(BlogContentWrapper)`
  margin-bottom: 20px;
`;

export const BioWrapper = styled(ElementWrapper)`
  padding: 10px 0;
`;

export const BioTextArea = styled.textarea`
  font-size: 20px;
  width: 100%;
  resize: none;
  box-sizing: border-box;
  border: none;
  background: rgba(0, 0, 255, 0.1);
  padding: 10px;
  padding-bottom: 0;
  :focus {
    outline: none;
  }
`;

export const EditBioButton = styled(SquareButton)`
  width: 100px;
  height: 30px;
  margin: 10px;
  margin-bottom: 0;
`;