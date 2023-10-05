import styled from "styled-components"
import { gray, darkPurple } from "../../css/Color"

export const Container = styled.div`
  text-align: center;
  border: double 4px transparent;
  border-radius: 10px;
  background-color: ${gray};
  border: 2px solid white;
  width: 20vw;
`

export const Username = styled.div`
  padding: 0 5px;
  height: 50px;
  width: 100px;
  font-size: 30px;
  font-family: "Open Sans";
  font-weight: 600;
  color: white;
  border: 2px solid white;
  border-radius: 15px;
  box-sizing: border-box;
  text-align: center;
  &:hover {
    color: ${darkPurple};
    background-color: white;
  }
`