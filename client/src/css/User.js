import styled from "styled-components"
import { fadeBoxCss } from "./divCss"

export const Blogs = styled.div`
  ${fadeBoxCss}
  padding: 2vh;
  padding-top: 0;
  margin-top: 1rem;
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
  ${fadeBoxCss}
  width: 25%;
  text-align: center;
  margin-right: 1rem;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export const BioBox = styled.div`
  ${fadeBoxCss}
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
