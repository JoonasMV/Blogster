import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import userService from "../services/userService"
import { Link } from "react-router-dom"

const Container = styled.div`
  display: flex;
  padding: 0 50vh;
`

const Blogs = styled.div`
  width: 75%;
  padding: 2vh;
  padding-top: 0;
  border: 2px solid red;
`

const BlogPreview = styled.div`
  overflow: hidden;
  text-overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`

const UserInfo = styled.div`
  width: 25%;
  border: 2px solid blue;
`

const User = () => {
  const [pageUser, setPageUser] = useState(null)

  const { id } = useParams()
  useEffect(() => {
    userService.getById(id).then((res) => setPageUser(res))
  }, [])

  if (!pageUser) return null

  return (
    <>
      <Container>
        <UserInfo>
          <h2>{pageUser.username}'s page</h2>
          <div>{pageUser.bio}</div>
        </UserInfo>
        <Blogs>
          {pageUser.blogs.map((blog) => (
            <div key={blog.id}>
              <Link to={`/blogs/${blog.id}`}><h3>{blog.title}</h3></Link>
              <BlogPreview>{blog.content}</BlogPreview>
            </div>
          ))}
        </Blogs>
      </Container>
    </>
  )
}

export default User
