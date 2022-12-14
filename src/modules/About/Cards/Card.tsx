import styled from "styled-components";
import { CardProps } from "./Cards";

const Card = ({ image, title, text }: CardProps) => (
  <Container>
    <Image src={image} alt="error"></Image>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  height: 300px;
  width: 370px;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-around;
  text-align: center;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 95%;
    padding: 15px 0;
  }
`;

const Image = styled.img`
  margin-top: 10px;
  height: auto;
  width: 80px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 22px;
    margin-top: 5px;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Text = styled.p`
  width: 88%;
  color: gray;
  font-size: 15px;
  line-height: 1.5rem;
  margin: 10px 10px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 10px 0 25px 10px;
  }
`;
