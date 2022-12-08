import commentService from "../services/commentService"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { fadeBoxCss } from "../css/divCss"

const SResponse = styled.div`
  ${fadeBoxCss}
  padding: 3px;
`

const CommentResponse = ({ response }) => {
  const [comment, setComment] = useState("")

  useEffect(() => {
    commentService.getResponse(response).then((res) => setComment(res))
  }, [])

  if (!comment) return null

  console.log(comment)

  return (
    <>
      <div>{comment.content}</div>
      <div>{comment.user.username}</div>
      <div style={{ color: "red" }}>{comment.dateAdded}</div>
      <SResponse>
        {comment.responses &&
          comment.responses.map((resp) => {
            return <CommentResponse key={resp} response={resp} />
          })}
      </SResponse>
    </>
  )
}

export default CommentResponse
