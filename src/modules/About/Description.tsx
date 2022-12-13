import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Span } from "../../components/General.styled";

const Description = () => {
  const navigate = useNavigate();
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
      <AboutButton onClick={() => navigate("/form-section")}>Dress me</AboutButton>
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

const PageLabel = styled.p`
  color: gray;
  font-size: 15px;
  margin-bottom: 10px;
  width: 400px;
`;

const TextRow = styled.h1`
  font-size: 40px;
  letter-spacing: 1px;
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

const AboutButton = styled(Button)`
  position: unset;
  margin-top: 25px;
`;
