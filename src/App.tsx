import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import About from "./modules/About/About";
import Header from "./modules/Header/Header";
import Home from "./modules/Home/Home";
import HowItWorks from "./modules/HowItWorks/HowItWorks";
import Reviews from "./modules/Reviews/Reviews";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Home />
        <HowItWorks />
        <About />
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
