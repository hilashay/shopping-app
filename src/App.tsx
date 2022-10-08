import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./modules/Header/Header";
import Router from "./Router";
import Home from "./modules/Home/Home";
import Form from "./modules/Form";
import HowItWorks from "./modules/HowItWorks/HowItWorks";
import About from "./modules/About/About";
// import Reviews from "./modules/Reviews/Reviews";
import Footer from "./modules/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        {/* <Router /> */}
        <Home />
        <HowItWorks />
        <About />
        {/* <Reviews /> */}
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
