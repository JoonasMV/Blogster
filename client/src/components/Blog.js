import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import blogService from "../services/blogService"

const Container = styled.div`
  padding: 5vh 50vh 0 50vh;
`

const Blog = () => {
  const [blog, setBlog] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    blogService.getOne(id)
      .then(res => setBlog(res))
  }, [])
  console.log(blog)

  if(!blog) return (null)

  return (
    <>
      <Container>
      <h2>{blog.title}</h2>
      <div>{blog.content}</div>
      <div style={{color: "red"}}>{blog.dateAdded}</div>
      <h3>-{blog.user.username}</h3>
      </Container>
    </>
  )
}

export default Blog