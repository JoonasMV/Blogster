import styled from "styled-components"
import { fadeBoxCss } from "../css/divCss"
import { Link } from "react-router-dom"
import formatDate from "../utils/dateFormatter"

const CommentDiv = styled.div`
  ${fadeBoxCss}
  margin: 1rem 0;
  padding: 0.5rem;
`

const Commentlist = ({ comments, loadMore }) => {
  return (
    <>
      {comments.map((comment) => {
        return (
          <CommentDiv key={comment.id}>
            {comment.content}
            <div>
              posted by:{" "}
              {/* <Link to={`/user/${comment.user.id}`}>
                <strong>{comment.user.username}</strong>
              </Link> */}
            </div>
            <div style={{ color: "red" }}>{formatDate(comment.dateAdded)}</div>
          </CommentDiv>
        )
      })}
      <button onClick={loadMore}>Load more</button>
    </>
  )
}

export default Commentlist
