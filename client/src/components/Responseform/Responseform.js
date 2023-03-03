import styled from "styled-components"
import { useState } from "react"
import commentService from "../../services/commentService"

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
      {!show && <button onClick={() => setShow(!show)}>Respond</button>}
      {show && <>
        <button onClick={submitResponse}>Post response</button>
        <button onClick={() => setShow(!show)}>Cancel</button>
      </>}
    </>
  )
}

export default Responseform
