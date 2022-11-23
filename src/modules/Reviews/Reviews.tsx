import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import ReviewsList from "./ReviewList/ReviewsList";
import Title from "./Title";

const Reviews = () => {
  return (
    <Container id="reviews-section">
      <Title />
      <ReviewsList />
    </Container>
  );
};

export default Reviews;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
  flex-direction: column;
`;
