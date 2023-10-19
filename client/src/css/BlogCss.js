import styled from 'styled-components';
import { mobileSize } from 'css/MediaQuery';

export const PageWrapper = styled.div`
  width: 50vw;
  margin: auto;
  
  text-align: center;
  font-family: "Open Sans";
  color: black;
  @media (max-width: ${mobileSize}) {
    width: 90vw;
  }
`;

export const ElementWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
  text-align: left;
`;

export const BlogContentWrapper = styled(ElementWrapper)`
  padding: 10px;
  margin: 0;
  box-sizing: border-box;

`;

export const BlogContent = styled.p`
  margin: 0;
`;

export const BlogTitle = styled.h3`
  font-size: 25px;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const BlogUsername = styled.h2`
  margin: 10px;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;