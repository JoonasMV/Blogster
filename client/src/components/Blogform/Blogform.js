import blogService from "../../services/blogService"
import styled from "styled-components"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { blueButton } from "../../css/buttonCss"

const FormWrapper = styled.div`
  margin: auto;
  width: 60%;
  @media (max-width: 1000px) {
    width: 90%;
    margin-top: 100px;
  }
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
  @media (max-width: 700px) {
    width: 100%;
    font-size: 30px;
    line-height: 30px;
  }
`

const StyledTextArea = styled.textarea`
  width: 90%;
  height: 51vh;
  font-family: "Open Sans", sans-serif;
  border: none;
  background: #ededed;
  border-radius: 10px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  @media (max-width: 1000px) {
    height: 60vh;
  }
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
  @media (max-width: 1000px) {
    width: 90%;
    font-size: 20px;
    margin-top: 1rem;
  }
`

const StyledButton = styled.button`
  ${blueButton}
  width: 5rem;
  font-size: 15px;
`

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

  // const tabHandler = (e) => {
  //   if (e.keyCode === 9) {
  //     e.preventDefault()
  //     setContent((prevState) => prevState + "    ")
  //   }
  // }

  const handleBlogPost = (e) => {
    e.preventDefault()
    const newBlog = {
      title: title,
      content: content
    }
    blogService.postBlog(newBlog)
    setTitle("")
    setContent("")
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
              // onKeyDown={tabHandler}
              value={content}
            />
          </div>
          <div style={{marginBottom: 10}}>
          <StyledButton
            type="submit"
            style={{marginRight: 20}}>Post</StyledButton>
          <Link to="/"><StyledButton type="button">cancel</StyledButton></Link>
          </div>
        </StyledBlog>
      </FormWrapper>
    </>
  )
}

export default Blogform
