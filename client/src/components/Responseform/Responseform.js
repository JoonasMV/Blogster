import styled from "styled-components"
import { useState } from "react"
import commentService from "../../services/commentService"
import { RespondButton } from "./Responseform.style"

const Stextarea = styled.textarea`
  width: 100%;
  resize: none;
`

const Responseform = ({ idToRespond }) => {
  const [show, setShow] = useState(false)
  const [response, setResponse] = useState("")
  const isVisible = show ? "" : "none"

  const submitResponse = () => {
      commentService.postResponse(idToRespond, response)
   }

  return (
    <>
      <Stextarea 
        type="text" 
        rows="6" 
        maxLength="500"
        style={{display: isVisible}}
        value={response}
        onChange={e => setResponse(e.target.value)}
      />
    {!show && <RespondButton onClick={() => setShow(!show)}>Respond</RespondButton>}
      {show && <>
        <RespondButton onClick={submitResponse}>Post response</RespondButton>
        <RespondButton onClick={() => setShow(!show)}>Cancel</RespondButton>
      </>}
    </>
  )
}

export default Responseform
