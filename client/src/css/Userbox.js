import styled from "styled-components"
import { buttonCSS } from "./buttonCss"
import { Link } from "react-router-dom"

export const Container = styled.div`
  text-align: center;
  border: double 4px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#060613, #060613),
    radial-gradient(circle at top left, #f00, #3020ff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 5px;
  width: 14vw;
  @media (max-width: 1000px) {
   width: 100%;
}
`

export const StyledButton = styled.button`
${buttonCSS}
/* width: 100%;
padding: 5px 20px;
padding-left: 7px;
margin: 3px 0;
box-sizing: border-box;
border: none;
border-bottom: 2px solid black;
border-radius: 9px 0 9px; */
`
export const NewBlog = styled(Link)`
text-decoration: none;
text-align: left;
font-family: "Open Sans";
color: white;
`

export const LinkWrapper = styled.div`
  margin: 5px 0;
`