import styled from "styled-components";
import { SectionContainer } from "../../components/common/SectionContainer";
import Steps from "./Steps";
import { GRAYBACKGROUND } from "../../components/Colors";

const HowItWorks = () => {
  return (
    <Container id="howitworks-section">
      <Title>How it works?</Title>
      <Steps />
    </Container>
  );
};

export default HowItWorks;

const Container = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  background: ${GRAYBACKGROUND};
  padding-top: 100px;
  padding-bottom: 120px;
  @media (max-width: 768px) {
    padding: 0px 40px;
  }
`;

const Title = styled.h1`
  font-size: 39px;
  text-align: center;
  margin: 37px 0 26px;
  line-height: 3rem;
  letter-spacing: 1.5px;
`;
