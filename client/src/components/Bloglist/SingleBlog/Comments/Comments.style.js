import styled from "styled-components";
import { ElementWrapper } from "css/BlogCss";
import { CommentTextArea, PostButton } from "../SingleBlog.style";

export const ResponseTextArea = styled(CommentTextArea)`
  background: rgba(255, 255, 255, 0.5);
`;

export const ResButton = styled(PostButton)`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  margin-left: 0;
`;

export const ReponseFormWrapper = styled.div`
`;

export const CommentWrapper = styled(ElementWrapper)`
  padding-left: 10px;
  margin-bottom: 10px;
`;
