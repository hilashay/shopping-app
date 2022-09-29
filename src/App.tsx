import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Reviews from "./components/Reviews";
import "./";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
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

const AppContainer = styled.div`
  display: flex;
  background-color: #e6ddf2;
  flex-direction: column;
`;
