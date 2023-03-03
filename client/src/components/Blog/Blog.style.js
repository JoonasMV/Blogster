import styled from "styled-components"

export const Container = styled.div`
  padding: 5vh 25% 0 25%;
  @media (max-width: 1000px) {
    padding: 0;
  }
`

export const CommentBox = styled.textarea`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  width: 100%;
  resize: none;
  line-height: 20px;
  min-height: 40px;
  display: inherit;
  color: black;
  &:focus {
    outline: none;
  }
  &::selection {
    background-color: gray;
  }
`

export const PostButton = styled.button`
  border-radius: 15px;
  font-size: 15px;
  height: 45px;
  width: 120px;
  margin: 10px 0;
  margin-bottom: 1rem;
`

export const CommentHeader = styled.h2`
  margin: 15px 0 10px;
`

export const Shr = styled.hr`
  margin: 1rem 0;
`
