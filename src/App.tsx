import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./modules/Header";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Router />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  background-color: #e6ddf2;
  flex-direction: column;
`;
