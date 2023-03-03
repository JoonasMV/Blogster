import Banner from "./components/Banner/Banner"
import Bloglist from "./components/Bloglist/Bloglist"
import Blog from "./components/Blog/Blog"
import User from "./components/User/User"
import Blogform from "./components/Blogform/Blogform"
import { darkPurple } from "./css/Color"
import UserLogin from "./components/UserLogin/UserLogin"
import Userbox from "./components/Userbox/Userbox"
import styled, { createGlobalStyle } from "styled-components"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

const StyledBody = createGlobalStyle`
body {
  margin: 0;
  margin-top: 6rem;
  background-color: ${darkPurple};
  color: white;
  font-size: 20px;
}
`

const PageWrapper = styled.div`
  padding: 0 25%;
  @media (max-width: 768px){
    padding: 0;
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
      <Banner user={user} setUser={setUser}/>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              {/* <UserboxWrapper>
                {user.id ? (
                  <Userbox user={user} setUser={setUser} />
                ) : (
                  <UserLogin setUser={setUser} />
                )}
              </UserboxWrapper> */}
              <PageWrapper>
                <Bloglist />
              </PageWrapper>
            </>
          }
        />
        <Route path={"/newBlog"} element={<Blogform />} />
        <Route path="/blogs/:id" element={<Blog user={user} />} />
        <Route path="/user/:id" element={<PageWrapper><User /></PageWrapper>} />
      </Routes>
    </div>
  )
}

export default App
