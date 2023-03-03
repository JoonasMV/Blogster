import Responseform from "../Responseform/Responseform"
import CommentResponse from "../CommentResponse/CommentResponse"
import { Timestamp, Date, Time } from "css/DateTime"
import { formatDate, formatTime } from "../../utils/dateFormatter"
import { Response, Responder } from "./Commentlist.style"

const Commentlist = ({ comments, loadMore }) => {
  return (
    <>
      {comments.map((comment) => {
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

      <button onClick={loadMore}>Load more</button>
    </>
  )
}

export default Commentlist
