import { useEffect, useState } from "react"
import {
  Sh2,
  BlogText,
  Timestamp,
  Date,
  Time,
  Sh3,
  BlogWrapper,
  EditButton,
  Editarea,
  LikesAndFavs,
  LikeButton,
  FavouriteButton,
} from "./BlogContent.style"
import { formatDate, formatTime } from "../../utils/dateFormatter"
import blogService from "../../services/blogService"
import { useParams } from "react-router-dom"
import { useRef } from "react"
import userService from "services/userService.js"

const BlogContent = ({ user }) => {
  const [liked, setLiked] = useState(false)
  const [blog, setBlog] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [editBlog, setEditBlog] = useState("")
  const { id } = useParams()
  const editRef = useRef()

  useEffect(() => {
    blogService.getOne(id).then((res) => setBlog(res))

    if (user.id) {
      userService.getById(user.id).then((user) => {
        console.log(user.likes)
        if (user.likes.includes(blog.id)) setLiked(true)
      })
    }
  }, [])

  const handleEditMode = async () => {
    setEditMode(true)
    await setEditBlog(blog.content)
    const textarea = editRef.current
    textarea.style.height = ""
    textarea.style.height = textarea.scrollHeight + "px"
  }

  const handleBlogEditing = (e) => {
    setEditBlog(e.target.value)
    const textarea = editRef.current
    textarea.style.height = ""
    textarea.style.height = textarea.scrollHeight + "px"
  }

  const handleEditSaving = async () => {
    const editedBlog = await blogService.updateBlog(editBlog, blog.id)
    setEditMode(false)

    setBlog((prevState) => ({
      ...prevState,
      content: editedBlog.content,
    }))
  }

  const handleBlogLiking = async () => {
    try {
      await blogService.likeBlog(blog.id)
      // const userLikes = (await userService.getById(user.id)).likes
      // console.log(userLikes)
      // console.log(userLikes.includes(blog.id))
      // setLiked(user.likes.includes(blog.id))

    } catch (error) {
      console.log(error)
    }
  }

  if (!blog) return null

  return (
    <BlogWrapper>
      <Sh2>{blog.title}</Sh2>
      {editMode ? (
        <Editarea value={editBlog} onChange={handleBlogEditing} ref={editRef} />
      ) : (
        <BlogText>{blog.content}</BlogText>
      )}
      <Timestamp>
        <Date>{formatDate(blog.dateAdded)}</Date>
        <Time>{formatTime(blog.dateAdded)}</Time>
      </Timestamp>

      {console.log(user)}
      {/* {user.id !== blog.user.id && ( */}
      <LikesAndFavs>
        <LikeButton onClick={handleBlogLiking}>Like</LikeButton>
        <FavouriteButton>Favourite</FavouriteButton>
      </LikesAndFavs>
      {/* )} */}

      {user && user.id === blog.user.id && !editMode && (
        <EditButton onClick={handleEditMode}>Edit</EditButton>
      )}
      {user && user.id === blog.user.id && editMode && (
        <>
          <EditButton onClick={() => setEditMode(false)}>Cancel</EditButton>
          <EditButton onClick={handleEditSaving}>Save</EditButton>
        </>
      )}

      <Sh3>- {blog.user.username}</Sh3>
    </BlogWrapper>
  )
}

export default BlogContent
