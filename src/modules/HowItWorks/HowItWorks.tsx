import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import StepsSection from "./StepsSection";

const HowItWorks = () => {
  return (
    <SectionContainer id="form-section">
      <H1>How it works?</H1>
      <StepsSection />
    </SectionContainer>
  );
};

export default HowItWorks;

const H1 = styled.h1`
  text-align: center;
`;
