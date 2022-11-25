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

const Blog = () => {
  const [blog, setBlog] = useState(null)
  const { id } = useParams()
  const commentRef = useRef()

  useEffect(() => {
    blogService.getOne(id)
      .then(res => setBlog(res))
  }, [])

  const handleCommentArea = () => {
    const commentBox = commentRef.current
    console.log(commentBox.style.height)
    commentBox.style.height = ""
    commentBox.style.height = (commentBox.scrollHeight-3) + "px"
  }


  if(!blog) return (null)

  return (
    <>
      <Container>
      <h2>{blog.title}</h2>
      <div>{blog.content}</div>
      <div style={{color: "red"}}>{blog.dateAdded}</div>
      <h3>-{blog.user.username}</h3>
      <h2>Comments</h2>
      <div>test</div>
      {/* {console.log(blog.comments)} */}
      <CommentBox 
        type="text"
        ref={commentRef}
        onChange={handleCommentArea}
        placeholder={"test"}
      />
      </Container>
    </>
  )
}

export default Blog