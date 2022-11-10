import styled from "styled-components";
import { Button, Span } from "../../components/General.styled";

const Description = () => {
  return (
    <Container>
      <PageLabel>About us</PageLabel>
      <Title>
        <TextRow>
          We Are <Span>Making</Span>
        </TextRow>
        <TextRow>
          <Span>Ideas Better</Span> For Everyone
        </TextRow>
      </Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue
        ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur
        augue praesent. Lorem vulputate orci eget mi, sed pulvinar. Ornare etiam erat volutpat
        tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat
        vel at posuere in. Pellentesque volutpat vestibulum.
      </Text>
      <Button>Dress me!</Button>
    </Container>
  );
};

export default Description;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 49px 0 93px;
  @media (max-width: 768px) {
    padding: 80px 0 84px;
    margin-left: 22px;
  }
`;

const PageLabel = styled.h6`
  color: gray;
  font-size: 15px;
  margin-bottom: 10px;
  width: 400px;
`;

const Title = styled.h1`
  color: #000000;
  width: 494px;
  padding-bottom: 18px;
  @media (max-width: 768px) {
    width: 329px;
  }
`;

const TextRow = styled.h2`
  font-size: 40px;
`;

const Text = styled.div`
  color: gray;
  font-size: 15px;
  width: 450px;
  @media (max-width: 768px) {
    width: 332px;
  }
`;
