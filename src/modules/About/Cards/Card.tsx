import styled from "styled-components";
import { CardProps } from "./Cards";

const Card = ({ imageUrl, text }: CardProps) => (
  <Container>
    <Image src={imageUrl} alt="error"></Image>
    <Text>{text}</Text>
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 270px;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const Text = styled.span`
  color: gray;
  font-size: 15px;
  margin-bottom: 10px;
`;
