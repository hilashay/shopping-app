import step1 from "../../../src/images/step1.webp";
import step2 from "../../../src/images/step2.webp";
import step3 from "../../../src/images/step3.webp";
import step4 from "../../../src/images/step4.webp";
import step5 from "../../../src/images/step5.webp";
import step6 from "../../../src/images/step6.webp";
import styled from "styled-components";

const StepsSection = () => {
  return (
    <StepsContainer>
      <Step>
        <ImgAndNumberContainer>
          <Img src={step1} alt="error" />
          <NumberOfCard>01</NumberOfCard>
        </ImgAndNumberContainer>
        <TextContainer>
          <Title>Send me your details</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse commodi, modi
            perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero?
            Dicta odit incidunt voluptas eos optio. Reiciendis?
          </Text>
        </TextContainer>
      </Step>

      <Step>
        <ImgAndNumberContainer>
          <Img src={step2} alt="error" />
          <NumberOfCard>02</NumberOfCard>
        </ImgAndNumberContainer>
        <TextContainer>
          <Title>Send me your details</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse commodi, modi
            perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero?
            Dicta odit incidunt voluptas eos optio. Reiciendis?
          </Text>
        </TextContainer>
      </Step>
      <Step>
        <ImgAndNumberContainer>
          <Img src={step3} alt="error" />
          <NumberOfCard>03</NumberOfCard>
        </ImgAndNumberContainer>
        <TextContainer>
          <Title>Send me your details</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse commodi, modi
            perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero?
            Dicta odit incidunt voluptas eos optio. Reiciendis?
          </Text>
        </TextContainer>
      </Step>
      <Step>
        <ImgAndNumberContainer>
          <Img src={step4} alt="error" />
          <NumberOfCard>04</NumberOfCard>
        </ImgAndNumberContainer>
        <TextContainer>
          <Title>Send me your details</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse commodi, modi
            perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero?
            Dicta odit incidunt voluptas eos optio. Reiciendis?
          </Text>
        </TextContainer>
      </Step>
      <Step>
        <ImgAndNumberContainer>
          <Img src={step5} alt="error" />
          <NumberOfCard>05</NumberOfCard>
        </ImgAndNumberContainer>
        <TextContainer>
          <Title>Send me your details</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse commodi, modi
            perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero?
            Dicta odit incidunt voluptas eos optio. Reiciendis?
          </Text>
        </TextContainer>
      </Step>
      <Step>
        <ImgAndNumberContainer>
          <Img src={step6} alt="error" />
          <NumberOfCard>06</NumberOfCard>
        </ImgAndNumberContainer>
        <TextContainer>
          <Title>Send me your details</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse commodi, modi
            perspiciatis voluptatum nemo ipsum qui tempora assumenda nulla adipisci cumque libero?
            Dicta odit incidunt voluptas eos optio. Reiciendis?
          </Text>
        </TextContainer>
      </Step>
    </StepsContainer>
  );
};

export default StepsSection;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 30px;
  row-gap: 30px;
}
`;

const Step = styled.div`
  display: flex;
  height: 300px;
  width: 370px;
  margin-bottom: 10px;
  //   background-color: red;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ImgAndNumberContainer = styled.div`
  margin-top: 30px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //   background-color: yellow;
`;

const NumberOfCard = styled.div`
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
  //   background-color: blue;
  margin-bottom: 200px;
`;

const Img = styled.img`
  height: 74px;
  width: 79px;
`;

const Title = styled.div`
  color: black;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  height: 77px;
  width: 325px;
  color: #7b7b7b;
  font-size: 14px;
`;
