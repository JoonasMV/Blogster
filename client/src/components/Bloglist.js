import blogService from "../services/blogService"
import styled from "styled-components"
import { useEffect, useState } from "react"

const Container = styled.div`
  padding: 0 50vh;
`

const Bloglist = () => {
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => {
    blogService.getAll()
      .then(res => setBlogs(res))
  }, [])

  return (
    <Container>
      {blogs.map(blog => <div key={blog._id}>{blog.title}</div>)}
    </Container>
  )
}

export default Bloglist