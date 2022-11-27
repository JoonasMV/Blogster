import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import blogService from "../services/blogService"

const Container = styled.div`
  padding: 5vh 50vh 0 50vh;
`

const CommentBox = styled.textarea`
  width: 100%;
  resize: none;
  padding: 2px;
  line-height: 20px;
  min-height: 40px;
`

const TestDiv = styled.div`
  border:2px solid red ;
`

const Blog = () => {
  const [blog, setBlog] = useState(null)
  const [comment, setComment] = useState("")
  const { id } = useParams()
  const commentRef = useRef()

  useEffect(() => {
    blogService.getOne(id).then((res) => setBlog(res))
  }, [])

  const handleCommentArea = (e) => {
    setComment(e.target.value)
    const commentBox = commentRef.current
    commentBox.style.height = ""
    commentBox.style.height = commentBox.scrollHeight - 3 + "px"
  }

  if (!blog) return null

  return (
    <>
      <Container>
        <h2>{blog.title}</h2>
        <div>{blog.content}</div>
        <div style={{ color: "red" }}>{blog.dateAdded}</div>
        <h3>-{blog.user.username}</h3>
        <h2>Comments</h2>
        <div>test</div>
        <CommentBox
          type="text"
          ref={commentRef}
          onChange={handleCommentArea}
          placeholder={"test"}
          value={comment}
        />
        <button>Post comment</button>
        {blog.comments.map((comment) => {
          return <TestDiv key={comment.id}>
                    {comment.content}
                    <div>posted by: <strong>{comment.user.username}</strong></div>
                    <div style={{color: "red"}}>{comment.dateAdded}</div>
                  </TestDiv>
        })}
      </Container>
    </>
  )
}

export default Blog
