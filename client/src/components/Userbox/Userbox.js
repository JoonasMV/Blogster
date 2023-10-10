import { Link, useLocation } from "react-router-dom"
import { UsernameButton, SButton } from "css/ButtonCss"
import { Wrapper } from "./Userbox.style"

const Userbox = ({ user, setUser }) => {
  const location = useLocation()

  const logout = () => {
    sessionStorage.clear()
    setUser({ username: null, id: null })
  }

  return (
    <Wrapper>
      <Link to={`user/${user.id}`} style={{ textDecoration: "none" }}>
        <UsernameButton>{user.username}</UsernameButton>
      </Link>
      {location.pathname !== "/newBlog" && (
        <Link to="/newBlog">
          <SButton>New blog</SButton>
        </Link>
      )}
      <SButton onClick={logout}>Log out</SButton>
    </Wrapper>
  )
}

export default Userbox
