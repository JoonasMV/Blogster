import styled from "styled-components"
import Responseform from "./Responseform"
import CommentResponse from "./CommentResponse"
import { Timestamp, Time, Date } from "../css/CommentResponse"
import { formatDate, formatTime } from "../utils/dateFormatter"

export const SResponse = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 3px;
  margin-left: 5px;
`

const Commentlist = ({ comments, loadMore }) => {
  return (
    <>
      {comments.map((comment) => {
        return (
          <SResponse key={comment.id}>
            <div>{comment.content}</div>
            <div>{comment.user.username}</div>
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
          </SResponse>
        )
      })}

      <button onClick={loadMore}>Load more</button>
    </>
  )
}

export default Commentlist
