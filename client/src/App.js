import Banner from "./components/Banner/Banner"
import Bloglist from "./components/Bloglist/Bloglist"
import Blog from "./components/Bloglist/Blog/Blog"
import User from "./components/User/User"
import Blogform from "./components/Blogform/Blogform"
import { magentaRed, skyBlue, teal } from "./css/Color"
import { mobileSize } from "css/MediaQuery"
import styled, { createGlobalStyle } from "styled-components"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

const StyledBody = createGlobalStyle`
:root{
  font-size: 20px;
  background-attachment: fixed;
  background-image: linear-gradient(to left top, ${magentaRed}, ${skyBlue}, ${teal});
  color: white;
  font-family: "Times New Roman";
  height: 100%;
}

textarea {
  font-family: "Times New Roman";
}

body, html {
  margin: 0;
}
`

const Content = styled.div`
   @media (max-width: ${mobileSize}){
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 70px;
  }
`;

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    if (sessionStorage.length !== 0) {
      setUser(JSON.parse(sessionStorage.getItem("user")))
    }
  }, [])

  return (
    <>
      <StyledBody />
      <Banner user={user} setUser={setUser} />
      <Content>
      <Routes>
        <Route path={"/"} element={<Bloglist />} />
        <Route path={"/newBlog"} element={<Blogform />} />
        <Route path="/blogs/:id" element={<Blog user={user} />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
      </Content>
    </>
  )
}

export default App
