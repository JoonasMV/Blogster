import { css } from "styled-components"

const fadeBoxCss = css`
  border: double 4px transparent;
  border-radius: 10px 0px;
  background-image: linear-gradient(#060613, #060613),
    radial-gradient(circle at top left, #96dfd0, #1f15ad);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: white;
  box-sizing: border-box;
`
const redFadeBox = css`
  text-align: center;
  border: double 4px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#060613, #060613),
    radial-gradient(circle at top left, #f00, #3020ff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-sizing: border-box;
`

export { fadeBoxCss, redFadeBox }
