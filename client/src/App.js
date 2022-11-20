import Banner from "./components/Banner";
import Bloglist from "./components/Bloglist";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom"

const StyledBody = createGlobalStyle`
body {
  margin: 0;
}
`
const Container = styled.div`
  padding: 0 50vh;
`

function App() {
  return (
    <div>
      <StyledBody />
      <Banner />
      <Container>
        <Bloglist />
      </Container>

      <Routes>
        <Route to={"/"} element={<Bloglist />} />
      </Routes>
    </div>
  );
}

export default App;
