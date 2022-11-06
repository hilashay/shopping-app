import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import ReviewsList from "./Cards/ReviewsList";
import Title from "./Title";

const Reviews = () => {
  return (
    <Container>
      <Title />
      <ReviewsList />
    </Container>
  );
};

export default Reviews;

const Container = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
  flex-direction: column;
`;
