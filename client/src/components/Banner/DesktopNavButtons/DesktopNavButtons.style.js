import styled from "styled-components";
import { mobileSize } from "css/MediaQuery";

export const ButtonWrapper = styled.div`
  margin-left: auto;
  padding-right: 10px;
  margin-top: auto;
  display: ${(props) => props.visible};
  @media (max-width: ${mobileSize}) {
    display: none;
  }
`;
