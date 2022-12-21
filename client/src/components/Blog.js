import Commentlist from "./Commentlist"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import blogService from "../services/blogService"
import commentService from "../services/commentService"
import { formatDate, formatTime } from "../utils/dateFormatter"

const Container = styled.div`
  padding: 5vh 25% 0 25%;
  @media (max-width: 1000px) {
    padding: 0;
  }
`

const BlogWrapper = styled.div`
  background-color: #343a40;
  padding: 1rem;
  border-radius: 15px;
`

const Sh2 = styled.h2`
  margin: 0;
`

const Sh3 = styled.h3`
  margin: 0;
`

const CommentBox = styled.textarea`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  width: 100%;
  resize: none;
  line-height: 20px;
  min-height: 40px;
  display: inherit;
  color: black;
  &:focus {
    outline: none;
  }
  &::selection {
    background-color: gray;
  }
`

const PostButton = styled.button`
  border-radius: 15px;
  font-size: 15px;
  height: 45px;
  width: 120px;
  margin: 10px 0;
  margin-bottom: 1rem;
`

const CommentHeader = styled.h2`
  margin: 15px 0 10px;
`

const BlogContent = styled.p`
  white-space: pre-line;
`

const Shr = styled.hr`
  margin: 1rem 0;
`

const Date = styled.div`
`

const Time = styled.div`
  font-size: 16px;
`

const Timestamp = styled.div`
  margin-bottom: .1rem;
`

const Blog = () => {
  const [blog, setBlog] = useState(null)
  const [blogComments, setBlogComments] = useState([])
  const [comment, setComment] = useState("")
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(5)
  const { id } = useParams()
  const commentRef = useRef()

  useEffect(() => {
    blogService.getOne(id).then((res) => {
      setBlog(res)
    })
    commentService.getBlogComments(id, min, max).then((res) => {
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
    setComment("")
    setBlogComments((comments) => comments.concat(postedComment))
  }

  const loadMoreComments = async () => {
    const commentsToLoad = 2
    const comments = await commentService.getBlogComments(
      id,
      min + commentsToLoad,
      max + commentsToLoad
    )

    setMin((prev) => prev + commentsToLoad)
    setMax((prev) => prev + commentsToLoad)

    setBlogComments((prev) => prev.concat(comments))
  }

  if (!blog) return null
  return (
    <>
      <Container>
        <BlogWrapper>
          <Sh2>{blog.title}</Sh2>
          <BlogContent>{blog.content}</BlogContent>
          <Timestamp>
            <Date>{formatDate(blog.dateAdded)}</Date>
            <Time>{formatTime(blog.dateAdded)}</Time>
          </Timestamp>
          <Sh3>- {blog.user.username}</Sh3>
        </BlogWrapper>
        <Shr></Shr>
        <CommentHeader>Comments</CommentHeader>
        <CommentBox
          type="text"
          ref={commentRef}
          onChange={handleCommentArea}
          placeholder={"test"}
          value={comment}
        />
        <PostButton onClick={handlePosting}>Post comment</PostButton>
        {blogComments && (
          <Commentlist comments={blogComments} loadMore={loadMoreComments} />
        )}
      </Container>
    </>
  )
}

export default Blog
