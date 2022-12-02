import styled from "styled-components"
import { fadeBoxCss } from "../css/divCss"
import { Link } from "react-router-dom"

const CommentDiv = styled.div`
  ${fadeBoxCss}
  margin: 1rem 0;
  padding: 0.5rem;
`

const Comment = ({ comment }) => {
  const formatDate = (dateAsString) => {
    const date = new Date(dateAsString)
    return [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ].join("/")
  }

  return (
    <CommentDiv>
      {comment.content}
      <div>
        posted by:{" "}
        <Link to={`/user/${comment.user.id}`}>
          <strong>{comment.user.username}</strong>
        </Link>
      </div>
      <div style={{ color: "red" }}>{formatDate(comment.dateAdded)}</div>
    </CommentDiv>
  )
}

export default Comment
