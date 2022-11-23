import blogService from "../services/blogService"
import styled from "styled-components"
import { useRef, useState } from "react"

const FormWrapper = styled.div`
  margin: auto;
  width: 60%;
  height: 70vh;
  margin-top: 20vh;
  /* background-color: #12123b; */
  /* box-shadow: 0px 0px 15px 15px #12123b;
  border-radius: 50px 0 50px 50px; */
  padding-top: 2vh;
`

const StyledBlog = styled.form`
  text-align: center;
`

const Sh2 = styled.h2`
  text-align: center;
  font-family: "Pacifico", cursive;
  font-size: 50px;
  color: #b3fff0;
  margin-bottom: 0;
  margin-top: 0;
`

const StyledTextArea = styled.textarea`
  width: 90%;
  height: 51vh;
  font-family: "Open Sans", sans-serif;
  border: none;
  background: #ededed;
  /* opacity: 0.5; */
  border-radius: 10px;
  font-size: 20px;
`

const StyledTitleArea = styled.textarea`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 3px solid white;
  color: white;
  resize: none;
  padding: 0;
  width: 50%;
  margin-bottom: 2vh;
  &:focus {
    outline: none;
  }
`

const Blogform = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const titleRef = useRef(null)

  const resizeField = (e) => {
    setTitle(e.target.value)
    const textarea = titleRef.current
    console.log(textarea.style.height)
    textarea.style.height = ""
    textarea.style.height = textarea.scrollHeight + "px"
  }

  const tabHandler = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault()
      setContent((prevState) => prevState + "    ")
    }
  }

  const handleBlogPost = (e) => {
    e.preventDefault()
    const newBlog = {
      title: title,
      content: content
    }
    blogService.postBlog(newBlog)
  }

  return (
    <>
      <FormWrapper>
        <Sh2>Write a new blog</Sh2>
        <StyledBlog onSubmit={handleBlogPost}>
          <div>
            <StyledTitleArea
              id="textarea"
              rows={1}
              type="text"
              ref={titleRef}
              onChange={resizeField}
              value={title}
              placeholder="Title"
            />
          </div>

          <div>
            <StyledTextArea
              placeholder="content"
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={tabHandler}
              value={content}
            />
          </div>
          <button
            type="submit"
            style={{margin: "auto"}}>Post</button>
        </StyledBlog>
      </FormWrapper>
    </>
  )
}

export default Blogform
