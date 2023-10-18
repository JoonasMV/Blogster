import { BasicButton, SmallButton } from "css/ButtonCss"
import { gray } from "css/Color"
import styled from "styled-components"

export const Response = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: ${gray}33;
  border-radius: 5px;
  padding: 3px;
  margin-left: 5px;
`

export const Responder = styled.div`
  margin-top: 8px;
  font-size: smaller;
`

export const LoadMoreButton = styled(SmallButton)`
  margin: 10px 5px;
  height: 30px;
`