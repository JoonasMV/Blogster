import Banner from "./components/Banner"
import Bloglist from "./components/Bloglist"
import Blogform from "./components/Blogform"
import Userbox from "./components/Userbox"
import styled, { createGlobalStyle } from "styled-components"
import { Route, Routes } from "react-router-dom"

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
                <Userbox />
              </UserboxWrapper>
              <Bloglist />
            </>
          }
        />
        <Route path={"/newBlog"} element={<Blogform />} />
      </Routes>
    </div>
  )
}

export default App
