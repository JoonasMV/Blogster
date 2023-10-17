import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import userService from "../../services/userService"
import { BlogContent, BlogPreview, BlogTitle, BlogWrapper, ElementWrapper, PageWrapper, Sh2 } from "./Userpage.style"

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
      <h2>Entries</h2>
        {user.blogs.map((blog) => (
      <ElementWrapper>
          <BlogPreview key={blog.id}>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogWrapper>
              <BlogContent>{blog.content}</BlogContent>
            </BlogWrapper>
          </BlogPreview>
      </ElementWrapper>
        ))}
    </PageWrapper>
    )
  }
  
  export default User