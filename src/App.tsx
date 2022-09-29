import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Reviews from "./components/Reviews";
import "./";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <AppContainer>
        <nav>
          <LinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
          </LinkContainer>
          <LinkContainer>
            <NavbarLink to="/Form">Form</NavbarLink>
          </LinkContainer>
          <LinkContainer>
            <NavbarLink to="/Reviews">Reviews</NavbarLink>
          </LinkContainer>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;

const LinkContainer = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: smaller;
  :hover {
    color: gray;
  }
`;
const AppContainer = styled.div`
  display: flex;
  background-color: #e6ddf2;
  flex-direction: column;
`;
