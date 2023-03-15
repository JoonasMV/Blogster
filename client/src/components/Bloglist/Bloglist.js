import blogService from "../../services/blogService"
import { useEffect, useState } from "react"
import {
  BlogContent,
  Sh2,
  SLink,
  TopBar,
  Container,
  PageWrapper,
} from "./Bloglist.style.js"

const Bloglist = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then((res) => setBlogs(res))
  }, [])
  return (
    <>
      {blogs.map((blog) => {
        return (
          <PageWrapper key={blog.id}>
            <Container>
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
          </PageWrapper>
        )
      })}
    </>
  )
}

export default Bloglist
