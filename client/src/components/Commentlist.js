import styled from "styled-components"
import { fadeBoxCss } from "../css/divCss"
import formatDate from "../utils/dateFormatter"
import Responseform from "./Responseform"
import CommentResponse from "./CommentResponse"

export const SResponse = styled.div`
  ${fadeBoxCss}
  padding: 3px;
`

const Commentlist = ({ comments, loadMore }) => {
  return (
    <>
      {comments.map((comment) => {
        return (
          <SResponse key={comment.id}>
            <div>{comment.content}</div>
            <div>{comment.user.username}</div>
            <div style={{ color: "red" }}>{formatDate(comment.dateAdded)}</div>
            <Responseform idToRespond={comment.id}/>

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
