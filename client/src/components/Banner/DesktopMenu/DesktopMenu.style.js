import { SButton, UsernameButton } from "css/ButtonCss";
import { mobileSize } from "css/MediaQuery";
import styled from "styled-components";

export const PopUpWrapper = styled.div`
  margin: 10px 10px 10px auto;
  display: flex;
  @media (max-width: ${mobileSize}) {
    display: none;
  }
`;

export const ButtonWrapper = styled(PopUpWrapper)`
  gap: 10px;
`;

//Merge button styles
export const NavButton = styled(SButton)`
  width: 120px;
`;

export const UserButton = styled(UsernameButton)`
  width: 120px;
`;
