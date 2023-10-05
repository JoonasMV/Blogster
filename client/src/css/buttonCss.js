import styled, { css } from "styled-components"
import { darkPurple } from "./Color"

export const buttonCSS = css`
  border-radius: 15px;
  font-size: 15px;
  margin: 0;
  /* border: 2px solid ${darkPurple}; */
  border: none;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${darkPurple};
    border: 2px solid white;
  }
`

export const BasicButton = styled.button`
  ${buttonCSS}
`

export const SmallButton = styled(BasicButton)`
  border-radius: 8px;
  margin-right: 4px;
  padding: 2px 4px 2px 4px;
`

export const blueButton = css`
  padding: 2px 5px;
  border: double 4px transparent;
  border-radius: 10px 0px;
  background-image: linear-gradient(#060613, #060613),
    radial-gradient(circle at top left, #96dfd0, #1f15ad);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: white;
`