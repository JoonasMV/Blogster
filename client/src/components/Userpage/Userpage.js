import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import userService from "../../services/userService"
import { PageWrapper, ElementWrapper, BlogTitle, BlogContent } from "css/BlogCss"
import { BlogPreview, Sh2, SBlogContentWrapper } from "./Userpage.style"

const User = () => {
  const [user, setUser] = useState(null)

  const { id } = useParams()
  useEffect(() => {
    userService.getById(id).then((res) => setUser(res))
  }, [id])

  if (!user) return null

  return (
    <PageWrapper>
        <Sh2>{user.username}'s page</Sh2>
      <h3>About me</h3>
      <ElementWrapper>
        {user.bio || "No bio yet"}
      </ElementWrapper>
      <h3>Entries</h3>
        {user.blogs.map((blog) => (
      <ElementWrapper key={blog.id}>
          <BlogPreview>
            <BlogTitle>{blog.title}</BlogTitle>
            <SBlogContentWrapper>
              <BlogContent>{blog.content}</BlogContent>
            </SBlogContentWrapper>
          </BlogPreview>
      </ElementWrapper>
        ))}
    </PageWrapper>
    )
  }
  
  export default User