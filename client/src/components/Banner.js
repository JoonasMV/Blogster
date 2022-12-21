import { Link } from "react-router-dom"
import { Background, Title, ButtonWrapper, StyledButton } from "../css/Banner"
import UserLogin from "./UserLogin"
import Userbox from "./Userbox"
import { useState } from "react"
import CreateAccount from "./CreateAccount"

const Banner = ({ user, setUser }) => {
  const [show, setShow] = useState(false)
  const isVisible = show ? { display: "" } : { display: "none" }

  return (
    <Background>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>Blogster</Title>
      </Link>
      <ButtonWrapper>
        {!user.id && (
          <>
            <StyledButton onClick={() => setShow((show) => !show)}>
              Login
            </StyledButton>
            <StyledButton>Sign up</StyledButton>
          </>
        )}
        {user.id && <Userbox user={user} setUser={setUser} />}
      </ButtonWrapper>
      <div style={isVisible}>{!user.id && <UserLogin setUser={setUser} />}</div>
      <div><CreateAccount /></div>
    </Background>
  )
}

export default Banner
