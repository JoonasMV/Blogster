import styled, { css } from "styled-components";
import {
  BiHeart as emptyLike,
  BiSolidHeart as filledLike,
} from "react-icons/bi";
import { SButton } from "css/ButtonCss";

export const InfoWrapper = styled.div`
  display: flex;
`;

export const LeftWrapper = styled.div`
  flex-grow: 1;
  text-align: left;
  margin: 10px;
  > h2 {
    margin: 0px;
    margin-bottom: 10px;
  }
`;

export const LikeWrapper = styled.div`
  display: flex;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;

export const RightWrapper = styled.div`
  flex-grow: 1;
  text-align: right;
  margin: 10px;
`;

export const Sh2 = styled.h2`
  margin: 0;
  text-align: center;
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
  resize: none;
  box-sizing: border-box;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  font-size: 16px;
  :focus {
    outline: none;
  }
`;

const LikeButtonStyle = css`
  font-size: 30px;
  margin: 0;
  margin-right: 5px;
  :hover {
    cursor: pointer;
  }
  `;


export const EmptyLike = styled(emptyLike)`
  ${LikeButtonStyle}
`;

export const FilledLike = styled(filledLike)`
  ${LikeButtonStyle}
`;

export const PostButton = styled(SButton)`
  filter: none;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  margin: 10px;
`;