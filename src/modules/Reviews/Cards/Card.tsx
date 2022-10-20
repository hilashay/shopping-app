import styled from "styled-components";

interface CardProps {
  imageUrl: string;
  name: string;
  jobName: string;
  text: string;
}

const Card = ({ imageUrl, name, jobName, text }: CardProps) => {
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

export default Card;

const Container = styled.div`
  position: relative;
  height: 250px;
  width: 470px;
  background-color: #ff5300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 56px 135px 135px 130px;
`;

const ReviewerInfo = styled.div`
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
  width: 370px;
  color: white;
  font-size: 16px;
  margin-right: 35px;
  margin-bottom: 25px;
`;
