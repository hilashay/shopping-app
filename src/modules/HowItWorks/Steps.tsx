import styled from "styled-components";

const steps = [
  {
    img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/gateway/Q3HowItWorks/hiw-style-preferences.svg",
    cardNumber: "01",
    title: "Tell us about your style",
    text: "To help me learn what you like to wear, just fill the form, I'll have all the imformation I need to know to start looking for you cloths!",
  },
  {
    img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/gateway/Q3HowItWorks/hiw-stylist-selections.svg",
    cardNumber: "02",
    title: "I'll pick pieces just for you",
    text: "I'll begin gathering clothing reflect your style, fit and price points. Then I'll place the order and send it to your address.",
  },
  {
    img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/gateway/Q3HowItWorks/hiw-personalized-shops.svg  ",
    cardNumber: "03",
    title: "Clothing just show up at your house",
    text: "Enjoy your new clothes once the order arrives at your house",
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
    width: 100%;
    padding: 30px 0;
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
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  height: 77px;
  width: 325px;
  color: #7b7b7b;
  font-size: 16px;
  @media (max-width: 768px) {
  }
`;
