import { css } from "styled-components"

const fadeBoxCss = css`
  border: double 4px transparent;
  border-radius: 10px 0px;
  background-image: linear-gradient(#060613, #060613),
    radial-gradient(circle at top left, #96dfd0, #1f15ad);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: white;
`
export { fadeBoxCss }