import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import userService from "../services/userService"
import { Link } from "react-router-dom"
import { fadeBoxCss } from "../css/divCss"

const Container = styled.div`
  /* display: flex; */
  padding: 0 50vh;
  margin-bottom: 2rem;
`

const Blogs = styled.div`
  ${fadeBoxCss}
  padding: 2vh;
  padding-top: 0;
  margin-top: 1rem;
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
  display: flex;
  `

const UserWrapper = styled.div`
  ${fadeBoxCss}
  width: 25%;
  margin-right: 1rem;
  text-align: center;
`

const BioBox = styled.div`
 ${fadeBoxCss}
  width: 75%;
  text-align: center;
`

const BioWrapper = styled.div`
  margin-bottom: 1rem;
`

const Sh2 = styled.h2`
  margin-bottom: 0;
  margin-top: 1rem;
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
              <hr/>
            </div>
          ))}
        </Blogs>
      </Container>
    </>
  )
}

export default User
