import styled from "styled-components"
import { buttonCSS } from "./buttonCss"

export const Sh2 = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
`

export const BlogText = styled.p`
  margin: 0;
  padding: 0;
  white-space: pre-line;
  font-family: "Open Sans";
  line-height: 120%;
`

export const Date = styled.div``

export const Time = styled.div`
  font-size: 16px;
`

export const Timestamp = styled.div`
  margin-bottom: 0.1rem;
  margin-top: 1rem;
`
export const EditButton = styled.button`
  ${buttonCSS}
  border-radius: 8px;
  float: right;
  margin-right: 4px;
  padding: 2px 4px 2px 4px;
`

export const Editarea = styled.textarea`
  margin: 0;
  width: 100%;
  padding: 2px 5px;
  box-sizing: border-box;
  resize: none;
  font-family: "Open Sans";
  font-size: 20px;
  background: none;
  color: white;
  border: 3px white dashed;
  line-height: 120%;
  vertical-align: top;
  &:focus {
    outline: none;
  }
`

export const BlogWrapper = styled.div`
  background-color: #343a40;
  padding: 1rem;
  border-radius: 15px;
`

export const Sh3 = styled.h3`
  margin: 0;
`
