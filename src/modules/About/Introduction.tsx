import styled from "styled-components";
import { Button } from "../../components/common/Button";
import { Span } from "../../components/common/Span";

interface IntroductionProps {
  onClickDressMe: VoidFunction;
}

const Introduction: React.FC<IntroductionProps> = ({ onClickDressMe }) => {
  return (
    <Container>
      <PageLabel>About us</PageLabel>
      <TextRow>
        My name is <Span>Hila</Span>
      </TextRow>
      <TextRow>
        And I'll make it easy to look<Span> your best</Span>
        <TextRow>
          <Span> all the time</Span>
        </TextRow>
      </TextRow>
      <Text>
        I'm 27 years old, a Fullstack Developer student with a strong interest in fashion and online
        shopping. I understand how any eCommerce store works, how their return policies work, I
        research for discounts, special pieces that are difficult to find, and I have endless
        patience to scroll until I find what I want, and it is just EASY for me.
        <Text>
          When it comes to online shopping, I've always been the person who helps everyone around
          me.
        </Text>
        <Text>
          So I thought, why not be that person for other people who require this type of service?
          Making people look and feel good about themselves make me feel satisfied, and I believe it
          is a need that is still underserved on the needs list.
        </Text>
      </Text>
      <DressMeButton onClick={onClickDressMe}>Dress me</DressMeButton>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 49px 0 93px;
  @media (max-width: 768px) {
    padding: 80px 0 0 5px;
    margin-left: 22px;
  }
  @media (max-width: 390px) {
    padding: 35px 0 0 5px;
    margin-left: 22px;
  }
`;

const PageLabel = styled.p`
  color: gray;
  font-size: 15px;
  margin-bottom: 10px;
  width: 400px;
`;

const TextRow = styled.h1`
  font-size: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 332px;
  }
`;

const Text = styled.div`
  color: gray;
  margin: 10px 0;
  font-size: 15px;
  width: 450px;
  @media (max-width: 768px) {
    width: 332px;
  }
`;

const DressMeButton = styled(Button)`
  position: unset;
  margin-top: 25px;
`;
