import { Link } from "react-router-dom"
import { Background, Title, ButtonWrapper, StyledButton } from "./Banner.style"
import UserLogin from "../UserLogin/UserLogin"
import Userbox from "../Userbox/Userbox"
import { useState } from "react"
import CreateAccount from "../CreateAccount/CreateAccount"
import ToggleVisible from "../ToggleVisibility/ToggleVisible"

const Banner = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(false)
  const [showCreateAcc, setCreateAcc] = useState(false)

  const handleShowLogin = () => {
    setShowLogin((showLogin) => !showLogin)
    if (showCreateAcc) {
      setCreateAcc(false)
    }
  }

  const handleShowCreateAcc = () => {
    setCreateAcc((showCreateAcc) => !showCreateAcc)
    if (showLogin) {
      setShowLogin(false)
    }
  }

  return (
    <Background>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>Blogster</Title>
      </Link>
      <ButtonWrapper>
        {!user.id && (
          <>
            <StyledButton onClick={handleShowLogin}> Login </StyledButton>
            <StyledButton onClick={handleShowCreateAcc}> Sign up </StyledButton>
          </>
        )}
        {user.id && <Userbox user={user} setUser={setUser} />}
      </ButtonWrapper>
      <ToggleVisible visible={showLogin}>
        {!user.id && <UserLogin setUser={setUser} setShowLogin={setShowLogin}/>}
      </ToggleVisible>
      <ToggleVisible visible={showCreateAcc}>
        <CreateAccount setUser={setUser} setBoxVisibility={setCreateAcc}/>
      </ToggleVisible>
    </Background>
  )
}

export default Banner
