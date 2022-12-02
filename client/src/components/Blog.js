import Commentlist from "./Commentlist"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import blogService from "../services/blogService"
import commentService from "../services/commentService"
import { buttonCSS } from "../css/buttonCss"
import formatDate from "../utils/dateFormatter"

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

const PostButton = styled.button`
  ${buttonCSS}
  margin: 5px;
`

const CommentHeader = styled.h2`
  margin: 15px 0 10px;
`

const BlogContent = styled.div`
  white-space: pre-line;
`

const Blog = () => {
  const [blog, setBlog] = useState(null)
  const [blogComments, setBlogComments] = useState([])
  const [comment, setComment] = useState("")
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(2)
  const { id } = useParams()
  const commentRef = useRef()

  useEffect(() => {
    blogService.getOne(id).then((res) => {
      setBlog(res)
    })
    commentService.getComments(id, min, max).then(res => {
      //console.log(res)
      setBlogComments(res)
    })
  }, [])

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

  const loadMoreComments = async () => {
    const commentsToLoad = 2
    const comments = await commentService.getComments(id, min + commentsToLoad, max + commentsToLoad)
    
    setMin(prev => prev + commentsToLoad)
    setMax(prev => prev + commentsToLoad)
    
    console.log(comments)
    setBlogComments(prev => prev.concat(comments))
  }

  if (!blog) return null
  return (
    <>
      <Container>
        <h2>{blog.title}</h2>
        <BlogContent>{blog.content}</BlogContent>
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
        {blogComments && <Commentlist comments={blogComments} loadMore={loadMoreComments}/>}
      </Container>
    </>
  )
}

export default Blog
