import Commentlist from "../../Commentlist/Commentlist"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import commentService from "../../../services/commentService"
import {
  Container,
  Shr,
  CommentHeader,
  CommentBox,
  PostButton,
} from "./Blog.style"
import BlogContent from "./BlogContent/BlogContent"

const Blog = ({ user }) => {
  const [blogComments, setBlogComments] = useState([])
  const [comment, setComment] = useState("")
  const [userId, setUserId] = useState("")
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(5)
  const { id } = useParams()
  const commentRef = useRef()

  // useEffect(() => {
  //   commentService.getBlogComments(id, min, max).then((res) => {
  //     setBlogComments(res)
  //   })
  //   setUserId(JSON.parse(sessionStorage.getItem("id")))
  // }, [])

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

  return (
    <>
      <Container>
        <BlogContent user={user} />

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
