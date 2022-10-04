import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./modules/Header/Header";
import Router from "./Router";
import Home from "./modules/Home/Home";
import Form from "./modules/Form";
import Reviews from "./modules/Reviews";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        {/* <Router /> */}
        <Home />
        <Form />
        <Reviews />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
