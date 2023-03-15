import blogService from "../../services/blogService"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import {
  FormWrapper,
  StyledBlog,
  StyledTextArea,
  StyledTitleArea,
  StyledButton,
  Sh2,
  TextAreaWrapper,
  Asd
} from "./Blogform.style.js"

const Blogform = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const titleRef = useRef(null)

  const resizeField = (e) => {
    setTitle(e.target.value)
    const textarea = titleRef.current
    textarea.style.height = ""
    textarea.style.height = textarea.scrollHeight + "px"
  }

  const handleBlogPost = (e) => {
    e.preventDefault()
    const newBlog = {
      title: title,
      content: content,
    }
    blogService.postBlog(newBlog)
    setTitle("")
    setContent("")
  }

  return (
    // <>
      <FormWrapper>
      {/* <Sh2>Write a new blog</Sh2> */}
        {/* <form onSubmit={handleBlogPost}> */}
          {/* <TextAreaWrapper>
            <StyledTitleArea
              id="textarea"
              rows={1}
              type="text"
              ref={titleRef}
              onChange={resizeField}
              value={title}
              placeholder="Title"
            />
          </TextAreaWrapper> */}

          <TextAreaWrapper>
            <StyledTextArea
              placeholder="content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </TextAreaWrapper>
          {/* <StyledButton type="submit" style={{ marginRight: 20 }}>
            Post
            </StyledButton>
            <Link to="/">
            <StyledButton type="button">cancel</StyledButton>
          </Link> */}
        {/* </form> */}
      </FormWrapper>
    // </>
  )
}

export default Blogform
