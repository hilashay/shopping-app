import styled from "styled-components";
import { CardProps } from "./ReviewsList";

const ReviewItem = ({ imageUrl, name, jobName, text }: CardProps) => {
  return (
    <Container>
      <Image src={imageUrl} alt="error"></Image>
      <ReviewerInfo>
        <Name>{name}</Name>
        <JobName>{jobName}</JobName>
        <Text>{text}</Text>
      </ReviewerInfo>
    </Container>
  );
};

export default ReviewItem;

const Container = styled.div`
  position: relative;
  height: 250px;
  width: 470px;
  background-color: #ff5300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const ReviewerInfo = styled.div`
  // margin: 56px 135px 135px 130px; // TREADE OFF: this container and the main container - both accept 135px of padding+margin left- i prefer that the first card will end at the word "Words" insted get space of 135 left and end before the title start
  margin-top: 35px;
  margin-bottom: 50px;
  margin-left: 65px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: absolute;
  left: -30px;
  top: 20px;
`;

const Name = styled.p`
  color: white;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 7px;
`;

const JobName = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 23px;
`;

const Text = styled.div`
  width: 370px; // TREADE OFF: left it 370 even it dosent break at the exact word
  color: white;
  font-size: 16px;
  margin-right: 35px;
  margin-bottom: 25px;
`;
