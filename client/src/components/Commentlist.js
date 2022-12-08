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
          <CommentDiv key={comment.blog.id}>
            {comment.content}
            <div>
              posted by:{" "}
              <Link to={`/user/${comment.user.id}`}>
                <strong>{comment.user.username}</strong>
              </Link>
            </div>
            <div style={{ color: "red" }}>{formatDate(comment.dateAdded)}</div>
            
            <Responseform />
            
            {/* {comment.responses.map((response) => {
              return (
                <SResponse key={`${response.id}nest`}>
                  {console.log(response)}
                  <CommentResponse response={response} />
                  <Responseform>{response.content}</Responseform>
                </SResponse>
              )
            })} */}
          </CommentDiv>
        )
      })}
      <button onClick={loadMore}>Load more</button>
    </>
  )
}

export default Commentlist
