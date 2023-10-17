import styled from "styled-components";
import { mobileSize } from "css/MediaQuery";

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
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Sh2 = styled.h2`
  font-size: 40px;
`;

export const BlogPreview = styled.div`
  text-align: left;
  padding: 1rem;
  overflow: hidden;
  text-overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (max-width: ${mobileSize}) {
    padding: 0.5rem;
  }
`;

export const BlogWrapper = styled(ElementWrapper)`
  padding: 10px;
`;

export const BlogContent = styled.p`
  margin: 0;
`;

export const BlogTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;
