import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import blogService from "../services/blogService"
import { Link } from "react-router-dom"
import commentService from "../services/commentService"
import { fadeBoxCss } from "../css/divCss"
import { buttonCSS } from "../css/buttonCss"

const Container = styled.div`
  padding: 5vh 25% 0 25%;
`

const CommentBox = styled.textarea`
  font-family: "Open Sans", sans-serif;
  border-radius: 10px 0;
  font-size: 20px;
  width: 100%;
  resize: none;
  padding: 2px;
  line-height: 20px;
  min-height: 40px;
  color: black;
  &:focus {
    outline: none;
  }
  &::selection {
    background-color: gray;
  }
`

const Comment = styled.div`
  ${fadeBoxCss}
  margin: 1rem 0;
  padding: 0.5rem;
`

const PostButton = styled.button`
  ${buttonCSS}
  margin: 5px;
`

const CommentHeader = styled.h2`
  margin: 15px 0 10px;
`

const Blog = () => {
  const [blog, setBlog] = useState(null)
  const [blogComments, setBlogComments] = useState(null)
  const [comment, setComment] = useState("")
  const { id } = useParams()
  const commentRef = useRef()

  useEffect(() => {
    blogService.getOne(id).then((res) => {
      setBlog(res)
      setBlogComments(res.comments)
    })
  }, [])

  const formatDate = (dateAsString) => {
    const date = new Date(dateAsString)
    return [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ].join("/")
  }

  const handleCommentArea = (e) => {
    setComment(e.target.value)
    const commentBox = commentRef.current
    commentBox.style.height = ""
    commentBox.style.height = commentBox.scrollHeight - 3 + "px"
  }

  const handlePosting = async () => {
    const postedComment = await commentService.postComment(id, comment)
    setBlogComments((comments) => comments.concat(postedComment))
  }

  if (!blog) return null

  return (
    <>
      <Container>
        <h2>{blog.title}</h2>
        <div>{blog.content}</div>
        <div style={{ color: "red" }}>{formatDate(blog.dateAdded)}</div>
        <h3 style={{marginTop: 3}}>-{blog.user.username}</h3>
        <hr></hr>
        <CommentHeader>Comments</CommentHeader>
        <CommentBox
          type="text"
          ref={commentRef}
          onChange={handleCommentArea}
          placeholder={"test"}
          value={comment}
          />
        <PostButton onClick={handlePosting}>Post comment</PostButton>
        {blogComments.map((comment) => {
          return (
            <Comment key={comment.id}>
              {comment.content}
              <div>
                posted by:{" "}
                <Link to={`/user/${comment.user.id}`}>
                  <strong>{comment.user.username}</strong>
                </Link>
              </div>
              <div style={{ color: "red" }}>{formatDate(comment.dateAdded)}</div>
            </Comment>
          )
        })}
      </Container>
    </>
  )
}

export default Blog
