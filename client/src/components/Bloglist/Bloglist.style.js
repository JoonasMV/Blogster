import styled from "styled-components"
import { Link } from "react-router-dom"

export const BlogContent = styled.div`
  color: white;
  background-color: #343a40;
  padding: 1rem;
  border-radius: 5px;
  @media (max-width: 768px){
    border-radius: 0;
  }
`

export const Sh2 = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  text-align: left;
  color: white;
`

export const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const TopBar = styled.div`
  background-color: #343a40;
  margin-bottom: 1rem;
`

export const Container = styled.div`
  margin-top: 2rem;
  box-sizing: border-box;
`

export const PageWrapper = styled.div`
  padding: 0 25%;
  @media (max-width: 768px) {
    padding: 0;
  }
`