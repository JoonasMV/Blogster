import styled from "styled-components"
import { fadeBoxCss } from "../css/divCss"
import { Link } from "react-router-dom"
import formatDate from "../utils/dateFormatter"
import { useState } from "react"
import Responseform from "./Responseform"
import CommentResponse from "./CommentResponse"
import commentService from "../services/commentService"

const CommentDiv = styled.div`
  ${fadeBoxCss}
  margin: 1rem 0;
  padding: 0.5rem;
`
const SResponse = styled.div`
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
            <Responseform />
            {console.log(comment.responses)}
            {comment.responses &&
              comment.responses.map((responseId) => {
                return (
                  <SResponse key={responseId}>
                    <CommentResponse commentId={responseId} />
                  </SResponse>
                )
              })}
          </SResponse>
        )
      })}

      <button onClick={loadMore}>Load more</button>
    </>
  )
}

export default Commentlist
