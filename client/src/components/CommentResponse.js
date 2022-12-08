import commentService from "../services/commentService"
import { useEffect, useState } from "react"
import Responseform from "./Responseform"
import formatDate from "../utils/dateFormatter"
import { SResponse } from "./Commentlist"

const CommentResponse = ({ commentId }) => {
  const [comment, setComment] = useState("")

  useEffect(() => {
    commentService.getResponse(commentId).then((res) => setComment(res))
  }, [])

  if (!comment) return null

  return (
    <SResponse>
      <div>{comment.content}</div>
      <div>{comment.user.username}</div>
      <div style={{color: "red"}}>{formatDate(comment.dateAdded)}</div>
      <Responseform />
      {comment.responses.map((resp) => {
        return <CommentResponse key={resp} commentId={resp} />
      })}
    </SResponse>
  )
}

export default CommentResponse
