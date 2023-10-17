import Banner from "./components/Banner/Banner";
import Bloglist from "./components/Bloglist/Bloglist";
// import Blog from "./components/Bloglist/Blog/Blog";
import User from "./components/Userpage/Userpage";
import Blogform from "./components/Blogform/Blogform";
import { magentaRed, skyBlue, teal } from "./css/Color";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { mobileSize } from "css/MediaQuery";
import SingleBlog from "components/SingleBlog/SingleBlog";

const StyledBody = createGlobalStyle`
:root{
  font-size: 20px;
  background-attachment: fixed;
  background-image: linear-gradient(to left top, ${magentaRed}, ${skyBlue}, ${teal});
  color: white;
  font-family: "Times New Roman";
  height: 100vh;
  padding-top: 75px;
  @media (max-width: ${mobileSize}) {
    font-size: 16px;
  }
}

textarea {
  font-family: "Open Sans";
}

body, html {
  margin: 0;
}
`;

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (sessionStorage.length !== 0) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);

  const Content = styled.div`
    padding: 2vh;
  `;

  return (
    <>
      <StyledBody />
      <Banner user={user} setUser={setUser} />
      <Content>
        <Routes>
          <Route path={"/"} element={<Bloglist />} />
          <Route path={"/newBlog"} element={<Blogform />} />
          <Route path="/blogs/:id" element={<SingleBlog user={user} />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
