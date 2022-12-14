import styled from "styled-components";
import { BLUEFONTCOLOR } from "../../components/Colors";
import { SectionContainer } from "../../components/common/SectionContainer";
import Logos from "./Logos";

const Brands = () => {
  return (
    <Container id="brands-section">
      <Title>Let me find your faves from 1000+ brands & styles</Title>
      <Logos />
    </Container>
  );
};

export default Brands;

const Container = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0;
  background: #white;
  margin-bottom: -83px;
  width: 60%;
  align-self: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 88%;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  padding: 30px 0;
  color: ${BLUEFONTCOLOR};
  letter-spacing: 1px;
  @media (max-width: 390px) {
    padding: 0 0 35px;
  }
`;
