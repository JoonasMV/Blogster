import commentService from "../../services/commentService"
import { useEffect, useState } from "react"
import Responseform from "../Responseform/Responseform"
import { formatDate, formatTime } from "../../utils/dateFormatter"
import { SResponse } from "../Commentlist/Commentlist"
import { Date, Time, Timestamp } from "./CommentResponse.style"


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
      <Timestamp>
        <Date>{formatDate(comment.dateAdded)}</Date>
        <div>{" "}</div>
        <Time>{formatTime(comment.dateAdded)}</Time>        
      </Timestamp>
      <Responseform idToRespond={comment.id}/>
      {comment.responses.map((resp) => {
        return <CommentResponse key={resp} commentId={resp} />
      })}
    </SResponse>
  )
}

export default CommentResponse
