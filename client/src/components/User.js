import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import userService from "../services/userService"
import { Link } from "react-router-dom"
import {
  UserInfo,
  UserWrapper,
  BioBox,
  BioWrapper,
  Blogs,
  BlogPreview,
  Sh2
} from "../css/User"

const User = () => {
  const [pageUser, setPageUser] = useState(null)

  const { id } = useParams()
  useEffect(() => {
    userService.getById(id).then((res) => setPageUser(res))
  }, [])

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
              <Link to={`/blogs/${blog.id}`}>
                <h3>{blog.title}</h3>
              </Link>
              <BlogPreview>{blog.content}</BlogPreview>
              <hr />
            </div>
          ))}
        </Blogs>
    </>
  )
}

export default User
