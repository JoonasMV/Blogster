import Banner from "./components/Banner";
import Bloglist from "./components/Bloglist";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom"

const StyledBody = createGlobalStyle`
body {
  margin: 0;
  background-color: #060613;
  color: white;
}
`


function App() {
  return (
    <div>
      <StyledBody />
      <Banner />

      <Routes>
        <Route path={"/"} element={<Bloglist />} />
      </Routes>
    </div>
  );
}

export default App;
