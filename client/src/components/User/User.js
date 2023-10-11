import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import userService from "../../services/userService"
import {
  UserInfo,
  UserWrapper,
  BioBox,
  BioWrapper,
  Blogs,
  BlogPreview,
  Sh2,
  Sh3,
  SLink
} from "./User.style"

const User = () => {
  const [pageUser, setPageUser] = useState(null)

  const { id } = useParams()
  useEffect(() => {
    userService.getById(id).then((res) => setPageUser(res))
  }, [id])

  if (!pageUser) return null

  return (
    <>
      <UserInfo>
        <UserWrapper>
          <h2>{pageUser.username}'s page</h2>
        </UserWrapper>
        <BioBox>
          <Sh2>About me</Sh2>
          <BioWrapper>{pageUser.bio}</BioWrapper>
        </BioBox>
      </UserInfo>
      <Blogs>
        {pageUser.blogs.map((blog) => (
          <div key={blog.id}>
            <SLink to={`/blogs/${blog.id}`}>
              <Sh3>{blog.title}</Sh3>
            </SLink>
            <BlogPreview>{blog.content}</BlogPreview>
            <hr />
          </div>
        ))}
      </Blogs>
    </>
  )
}

export default User
