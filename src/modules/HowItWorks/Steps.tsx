import step1 from "../../../src/images/step1.webp";
import step2 from "../../../src/images/step2.webp";
import step3 from "../../../src/images/step3.webp";
import step4 from "../../../src/images/step4.webp";
import step5 from "../../../src/images/step5.webp";
import step6 from "../../../src/images/step6.webp";
import styled from "styled-components";

const steps = [
  {
    img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/gateway/Q3HowItWorks/hiw-style-preferences.svg",
    cardNumber: "01",
    title: "Tell us about your style",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ex esse commodi,modi perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero? Dicta odit incidunt voluptas eos optio. Reiciendis?",
  },
  {
    img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/gateway/Q3HowItWorks/hiw-stylist-selections.svg",
    cardNumber: "02",
    title: "I'll pick pieces just for you",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ex esse commodi,modi perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero? Dicta odit incidunt voluptas eos optio. Reiciendis?",
  },
  {
    img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/gateway/Q3HowItWorks/hiw-personalized-shops.svg  ",
    cardNumber: "03",
    title: "Clothing just show up at your house.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ex esse commodi,modi perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero? Dicta odit incidunt voluptas eos optio. Reiciendis?",
  },
];

const Steps = () => {
  const renderSteps = () =>
    steps.map(({ img, cardNumber, title, text }, index) => (
      <Step key={index}>
        <Img src={img} alt="error" />
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
  align-items: center;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 48%;
  }
`;

const TextContainer = styled.div`
  margin-top: 30px;
  margin-left: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 200px;
`;

const Img = styled.img`
  height: 200px;
  width: auto;
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
