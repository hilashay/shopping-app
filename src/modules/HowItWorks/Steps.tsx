import step1 from "../../../src/images/step1.webp";
import step2 from "../../../src/images/step2.webp";
import step3 from "../../../src/images/step3.webp";
import step4 from "../../../src/images/step4.webp";
import step5 from "../../../src/images/step5.webp";
import step6 from "../../../src/images/step6.webp";
import styled from "styled-components";

const steps = [
  {
    img: step1,
    cardNumber: "01",
    title: "Send me your details",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ex esse commodi,modi perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero? Dicta odit incidunt voluptas eos optio. Reiciendis?",
  },
  {
    img: step2,
    cardNumber: "02",
    title: "Send me your details",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ex esse commodi,modi perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero? Dicta odit incidunt voluptas eos optio. Reiciendis?",
  },
  {
    img: step3,
    cardNumber: "03",
    title: "Send me your details",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ex esse commodi,modi perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero? Dicta odit incidunt voluptas eos optio. Reiciendis?",
  },
  {
    img: step4,
    cardNumber: "04",
    title: "Send me your details",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ex esse commodi,modi perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero? Dicta odit incidunt voluptas eos optio. Reiciendis?",
  },
  {
    img: step5,
    cardNumber: "05",
    title: "Send me your details",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ex esse commodi,modi perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero? Dicta odit incidunt voluptas eos optio. Reiciendis?",
  },
  {
    img: step6,
    cardNumber: "06",
    title: "Send me your details",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ex esse commodi,modi perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero? Dicta odit incidunt voluptas eos optio. Reiciendis?",
  },
];

const Steps = () => {
  const renderSteps = () =>
    steps.map(({ img, cardNumber, title, text }, index) => (
      <Step key={index}>
        <ImgAndNumberContainer>
          <Img src={img} alt="error" />
          <NumberOfCard>{cardNumber}</NumberOfCard>
        </ImgAndNumberContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
      </Step>
    ));

  return <StepsContainer>{renderSteps()} </StepsContainer>;
};

export default Steps;

const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const Step = styled.div`
  display: flex;
  height: 300px;
  width: 370px;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 48%;
  }
`;

const ImgAndNumberContainer = styled.div`
  margin-top: 30px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NumberOfCard = styled.p`
  margin-right: 20px;
  height: 74px;
  width: 79px;
  color: #efefef;
  font-size: 56px;
`;

const TextContainer = styled.div`
  margin-top: 30px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
`;

const Img = styled.img`
  height: 74px;
  width: 79px;
`;

const Title = styled.div`
  color: #00000;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  height: 77px;
  width: 325px;
  color: #7b7b7b;
  font-size: 14px;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
