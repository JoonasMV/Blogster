import Banner from "./components/Banner"
import Bloglist from "./components/Bloglist"
import Blog from "./components/Blog"
import User from "./components/User"
import Blogform from "./components/Blogform"
import UserLogin from "./components/UserLogin"
import Userbox from "./components/Userbox"
import styled, { createGlobalStyle } from "styled-components"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

const StyledBody = createGlobalStyle`
body {
  margin: 0;
  background-color: #060613;
  color: white;
  font-size: 20px;
  white-space: pre-line;
}
`

const UserboxWrapper = styled.div`
position: sticky;
top: 2rem;
right: 1rem;
float: right;
@media (max-width: 1000px) {
  position: static;
  float: none;
  width: 50%;
  margin: auto;
  margin-bottom: 2vh;
}
`

const PageWrapper = styled.div`
  padding: 0 25%;
  @media (max-width: 1000px) { 
    padding: 0 5%;
  }
`

function App() {
  const [user, setUser] = useState({ username: null, id: null })

  useEffect(() => {
    if (sessionStorage.length !== 0) {
      setUser({
        username: JSON.parse(sessionStorage.getItem("username")),
        id: JSON.parse(sessionStorage.getItem("id")),
      })
    }
  }, [])

  return (
    <div>
      <StyledBody />
      <Banner />
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <UserboxWrapper>
                {user.id ? (
                  <Userbox user={user} setUser={setUser} />
                ) : (
                  <UserLogin setUser={setUser} />
                )}
              </UserboxWrapper>
              <PageWrapper>
                <Bloglist />
              </PageWrapper>
            </>
          }
        />
        <Route path={"/newBlog"} element={<Blogform />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/user/:id" element={<PageWrapper><User /></PageWrapper>} />
      </Routes>
    </div>
  )
}

export default App
