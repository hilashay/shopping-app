import styled from "styled-components";
import CardSection from "./CardSection";
import ImgAndTextSection from "./ImgAndTextSection";

const About = () => {
  return (
    <div style={{ height: 1000 }} id="reviews-section">
      <AboutContainer>
        <ImgAndTextSection />
        <CardSection />
      </AboutContainer>
    </div>
  );
};

export default About;

const AboutContainer = styled.div`
  height: 735px;
  // margin-top: 100px;
  background-color: #fff7f4;
  display: flex;
  flex-direction: column;
`;
