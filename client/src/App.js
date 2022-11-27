import Banner from "./components/Banner"
import Bloglist from "./components/Bloglist"
import Blog from "./components/Blog"
import User from "./components/User"
import Blogform from "./components/Blogform"
import Loginbox from "./components/Loginbox"
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
  
}
`
const UserboxWrapper = styled.div`
  position: sticky;
  float: right;
  top: 2vh;
  right: 2vh;
`

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (sessionStorage.length !== 0) {
      setUser({
        username: JSON.parse(sessionStorage.getItem("username")),
        id: JSON.parse(sessionStorage.getItem("id"))
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
              {user
                  ? <Userbox user={user} setUser={setUser}/>
                  : <Loginbox setUser={setUser}/>}
              </UserboxWrapper>
              <Bloglist />
            </>
          }
        />
        <Route path={"/newBlog"} element={<Blogform />} />
        <Route path={"/blogs/:id"} element={<Blog />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  )
}

export default App
