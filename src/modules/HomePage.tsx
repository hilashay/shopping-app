import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import About from "./About/About";
import Brands from "./Brands/Brands";
import Home from "./Home/Home";
import HowItWorks from "./HowItWorks/HowItWorks";
import Reviews from "./Reviews/Reviews";

function HomePage() {
  const navigate = useNavigate();
  return (
    <AppContainer id="hero-section">
      <Home />
      <HowItWorks />
      <About onClickDressMe={() => navigate("/form-section")} />
      {/* <Reviews /> */}
      <Brands />
    </AppContainer>
  );
}

export default HomePage;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
