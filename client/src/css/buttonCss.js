import styled, { css } from "styled-components"

export const buttonCSS = css`
  border-radius: 15px;
  font-size: 15px;
  margin: 0;
  border: none;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: transparent;
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

export const SButton = styled.button`
  width: 100%;
  ${buttonCSS}
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 20px;
  height: 50px;
  margin-bottom: 10px;
`;

export const UsernameButton = styled(SButton)`
  color: white;
  background-color: transparent;
  border: 2px solid white;
  &:hover {
    color: black;
    background-color: white;
  }
`;