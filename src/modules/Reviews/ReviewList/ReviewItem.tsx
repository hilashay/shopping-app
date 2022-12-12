import styled from "styled-components";
import { CardProps } from "./ReviewsList";

const ReviewItem = ({ imageUrl, name, jobName, text }: CardProps) => {
  return (
    <Container>
      <Image src={imageUrl} alt="error"></Image>
      <ReviewerInfo>
        <Text>{text}</Text>
        <Name>{name}</Name>
        <JobName>{jobName}</JobName>
      </ReviewerInfo>
    </Container>
  );
};

export default ReviewItem;

const Container = styled.div`
  position: relative;
  padding: 10px 50px 5px 5px;
  width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border: 2px solid #eaeaea;
`;

const ReviewerInfo = styled.div`
  margin: 10px 70px; // TREADE OFF: this container and the main container - both accept 135px of padding+margin left- i prefer that the first card will end at the word "Words" insted get space of 135 left and end before the title start
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 20px;
`;

const Name = styled.p`
  color: black;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 7px;
`;

const JobName = styled.p`
  color: black;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 23px;
`;

const Text = styled.div`
  width: 370px; // TREADE OFF: left it 370 even it dosent break at the exact word
  color: black;
  font-size: 16px;
  margin-right: 100px;
  margin-bottom: 25px;
`;
