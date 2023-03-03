import blogService from "../../services/blogService"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const BlogContent = styled.div`
  color: white;
  background-color: #343a40;
  padding: 1rem;
  border-radius: 5px;
  @media (max-width: 768px){
    border-radius: 0;
  }
`

const Sh2 = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  text-align: left;
  color: white;
`

const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const TopBar = styled.div`
  background-color: #343a40;
  margin-bottom: 1rem;
`

const Container = styled.div`
  margin-top: 2rem;
  box-sizing: border-box;
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
          <Container key={blog.id}>
            <BlogContent>
              <SLink to={`/user/${blog.user.id}`}>
                <TopBar>{blog.user.username}</TopBar>
              </SLink>
              <SLink to={`/blogs/${blog.id}`}>
                <Sh2>{blog.title}</Sh2>
              </SLink>
              <hr></hr>
              {blog.content}
            </BlogContent>
          </Container>

          // <div key={blog.id}>
          //   <BlogContent>
          //   <SLink to={`/blogs/${blog.id}`}><Sh2>{blog.title}</Sh2></SLink>
          //   <hr></hr>
          //     {blog.content}
          //     </BlogContent>
          // </div>
        )
      })}
    </>
  )
}

export default Bloglist
