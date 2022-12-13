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
  padding: 48px 0;
  background: #f5f5f5;
  margin-bottom: -83px;
  flex-direction: column;
`;
