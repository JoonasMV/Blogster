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
  LikesAndFavs
} from "./BlogContent.style"
import { formatDate, formatTime } from "../../utils/dateFormatter"
import blogService from "../../services/blogService"
import { useParams } from "react-router-dom"
import { useRef } from "react"

const BlogContent = ({ user }) => {
  const [blog, setBlog] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [editBlog, setEditBlog] = useState("")
  const { id } = useParams()
  const editRef = useRef()

  useEffect(() => {
    blogService.getOne(id).then((res) => {
      setBlog(res)
    })
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
    setEditMode(() => false)

    setBlog((prevState) => ({
      ...prevState,
      content: editedBlog.content,
    }))
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
      
      <LikesAndFavs>
        <button>Like</button>
        <button>Favourite</button>
      </LikesAndFavs>

      {user && user.id === blog.user.id && !editMode && <EditButton onClick={handleEditMode}>Edit</EditButton>}
      {user && user.id === blog.user.id && editMode && 
      <>
        <EditButton onClick={() => setEditMode(false)}>Cancel</EditButton>
        <EditButton onClick={handleEditSaving}>Save</EditButton>
      </>
      }

      <Sh3>- {blog.user.username}</Sh3>
    </BlogWrapper>
  )
}

export default BlogContent
