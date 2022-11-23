import styled from "styled-components";
import About from "./About/About";
import Home from "./Home/Home";
import HowItWorks from "./HowItWorks/HowItWorks";
import Reviews from "./Reviews/Reviews";

function HomePage() {
  return (
    <AppContainer id="hero-section">
      <Home />
      <HowItWorks />
      <About />
      <Reviews />
    </AppContainer>
  );
}

export default HomePage;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
