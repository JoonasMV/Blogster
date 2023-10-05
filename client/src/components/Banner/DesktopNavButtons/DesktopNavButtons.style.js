import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-right: 10px;
  display: ${(props) => props.visible};
  @media (max-width: 1000px) {
    display: none;
  }
`;
