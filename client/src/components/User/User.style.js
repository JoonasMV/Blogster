import styled, { css } from "styled-components"
import { gray } from "../../css/Color"
import { Link } from "react-router-dom"

const borderCSS = css`
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 15px 0;
`

export const Blogs = styled.div`
  ${borderCSS}
  padding: 2vh;
  padding-top: 0;
  margin-top: 1rem;
  background-color: ${gray};
`

export const BlogPreview = styled.div`
  overflow: hidden;
  text-overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const UserInfo = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const UserWrapper = styled.div`
  ${borderCSS}
  background-color: ${gray};
  width: 25%;
  text-align: center;
  margin-right: 1rem;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export const BioBox = styled.div`
  ${borderCSS}
  background-color: ${gray};
  width: 75%;
  text-align: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const BioWrapper = styled.div`
  margin-bottom: 1rem;
`

export const Sh2 = styled.h2`
  margin-bottom: 0;
  margin-top: 1rem;
`
export const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-shadow: 1px 1px 2px white;
    text-decoration: underline;
  }
`

export const Sh3 = styled.h3`
  display: inline-block;
`

export const Wrapper = styled.div`
  padding: 0 25%;
  @media (max-width: 768px) {
    padding: 0;
  }
`
