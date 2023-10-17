import Responseform from "../Responseform/Responseform"
import CommentResponse from "../CommentResponse/CommentResponse"
import { Timestamp, Date, Time } from "css/DateTime"
import { formatDate, formatTime } from "../../utils/dateFormatter"
import { Response, Responder, LoadMoreButton } from "./Commentlist.style"
import { useState, useEffect } from "react"
import commentService from "services/commentService.js"
import { useParams } from "react-router-dom"

const Commentlist = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(5)
  const [blogComments, setBlogComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    commentService.getBlogComments(id, min, max).then((res) => {
      setBlogComments(res)
    })
  })

  const loadMoreComments = async () => {
    const commentsToLoad = 2
    const comments = await commentService.getBlogComments(
      id,
      min + commentsToLoad,
      max + commentsToLoad
    )

    setMin((prev) => prev + commentsToLoad)
    setMax((prev) => prev + commentsToLoad)
    setBlogComments((prev) => prev.concat(comments))
  }

  return (
    <>
      {blogComments.map((comment) => {
        return (
          <Response key={comment.id}>
            <div>{comment.content}</div>
            <Responder>- {comment.user.username}</Responder>
            <Timestamp>
              <Date>{formatDate(comment.dateAdded)}</Date>
              <div> </div>
              <Time>{formatTime(comment.dateAdded)}</Time>
            </Timestamp>{" "}
            <Responseform idToRespond={comment.id} />
            {comment.responses &&
              comment.responses.map((response) => {
                return <CommentResponse key={response} commentId={response} />
              })}
          </Response>
        )
      })}

  <LoadMoreButton onClick={loadMoreComments}>Load more</LoadMoreButton>
    </>
  )
}

export default Commentlist
