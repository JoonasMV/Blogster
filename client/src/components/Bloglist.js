import blogService from "../services/blogService"
import styled from "styled-components"
import { useEffect, useState } from "react"

const BlogContent = styled.div`
  width:50%;
  margin: auto;
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
            <h2>{blog.title}</h2>
              {blog.content}
              </BlogContent>
          </div>
        )
      })}
    </>
  )
}

export default Bloglist
