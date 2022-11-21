import blogService from "../services/blogService"
import styled from "styled-components"
import { useRef } from "react"

const FormWrapper = styled.div`
  margin: auto;
  width: 75%;
`

const BlogForm = styled.form`
  text-align: center;
`

const Sh2 = styled.h2`
  text-align: center;
  font-family: "Open Sans";
  font-weight: 700;
  font-style: italic;
`

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 60vh;
  font-family: "Open Sans", sans-serif;
`

const TitleInput = styled.textarea`
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
`

const Blogform = () => {
  const titleRef = useRef(null)

  const resizeField = () => {
    const textarea = titleRef.current
    console.log(textarea.style.height)
    textarea.style.height = ""
    textarea.style.height = textarea.scrollHeight + "px"
  }

  return (
    <>
      <Sh2>Write a new blog</Sh2>
      <FormWrapper>
        <BlogForm>
          <div style={{ marginBottom: 10 }}>
            <TitleInput
              id="textarea"
              rows={1}
              type="text"
              ref={titleRef}
              onChange={resizeField}
              placeholder="Title"
            />
          </div>

          <div>
            <StyledTextArea placeholder="content" />
          </div>
        </BlogForm>
      </FormWrapper>
    </>
  )
}

export default Blogform
