import Banner from "./components/Banner"
import Bloglist from "./components/Bloglist"
import Blog from "./components/Blog"
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
  /* font-family: 'Open Sans', sans-serif; */
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
  useEffect(() => {
    if (sessionStorage.length !== 0) {
      setUser({username: JSON.parse(sessionStorage.getItem("username"))})

    }
  }, [])

  const [user, setUser] = useState(null)

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
        <Route path={"/blog/:id"} element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
