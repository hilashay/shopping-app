import styled from "styled-components";
import Icons from "./Icons";
import { Span } from "../../../components/General.styled";
const text = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Sit a
laoreet libero dis eget maecenas
bibendum.`;

const Social = () => {
  return (
    <Container>
      <Title>
        <Span>Digie</Span>ncy
      </Title>
      <Text>{text}</Text>
      <Icons />
    </Container>
  );
};

export default Social;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 263px;
  padding-right: 37px;
  padding-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const Text = styled.p`
  height: 95px; // TRADE OFF: insted of give it 102 px I give it less to make the icons be closer and at the same line as the last link in "Menu" - "Contact us"
  font-size: 16px;
  padding-top: 25px;
  white-space: pre;
`;
