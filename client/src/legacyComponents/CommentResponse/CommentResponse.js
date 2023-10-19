import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import commentService from "services/commentService"
import { formatDate, formatTime } from "utils/dateFormatter"
import Responseform from "./Responseform/Responseform"
import { Response, Responder, Timestamp } from "./Commentlist.style"
import { Date, Time } from "css/DateTime"

const CommentResponse = ({ commentId }) => {
  const [comment, setComment] = useState("")

  useEffect(() => {
    commentService.getResponses(commentId).then((res) => setComment(res))
  }, [])

  if (!comment) return null

  return (
    <Response>
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
    </Response>
  )
}

export default CommentResponse
