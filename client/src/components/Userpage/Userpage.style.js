import { BlogContentWrapper } from "css/BlogCss";
import styled from "styled-components";

export const Sh2 = styled.h2`
  font-size: 40px;
`;

export const BlogPreview = styled.div`
  text-align: left;
  overflow: hidden;
  text-overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SBlogContentWrapper = styled(BlogContentWrapper)`
  margin-bottom: 20px;
`;