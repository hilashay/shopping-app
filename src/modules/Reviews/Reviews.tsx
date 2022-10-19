import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import Title from "./Title";

const Reviews = () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};

export default Reviews;

const Container = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
`;
