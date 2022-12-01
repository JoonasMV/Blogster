import blogService from "../services/blogService"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fadeBoxCss } from "../css/divCss"

const BlogContent = styled.div`
  ${fadeBoxCss}
  width:50%;
  margin: auto;
  padding: 1rem;
  font-family: "Open Sans";
`

const Sh2 = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  color: white;
  text-align: left;
`

const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Bloglist = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then((res) => setBlogs(res))
  }, [])
  return (
    <>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <BlogContent>
            <SLink to={`/blogs/${blog.id}`}><Sh2>{blog.title}</Sh2></SLink>
            <hr></hr>
              {blog.content}
              </BlogContent>
          </div>
        )
      })}
    </>
  )
}

export default Bloglist
