import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import StepsSection from "./StepsSection";

const HowItWorks = () => {
  return (
    <div style={{ height: 1000 }} id="form-section">
      <SectionContainer>
        <H1>How it works?</H1>
        <StepsSection />
      </SectionContainer>
    </div>
  );
};

export default HowItWorks;

const H1 = styled.h1`
  text-align: center;
`;
