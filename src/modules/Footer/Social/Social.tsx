import styled from "styled-components";
import Icons from "./Icons";

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
  color: #fff7f4;
  padding-right: 37px;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const Span = styled.span`
  color: #ff5300;
`;

const Text = styled.p`
  height: 95px;
  font-size: 16px;
  padding-top: 25px;
  white-space: pre;
`;
