import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  /* transform: translateX(100%); */
  transition: transform 0.3s ease-in-out;
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  transition: 1s;
  width: ${props => props.animate ? "100px" : "0px"};
`;