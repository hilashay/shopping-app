import styled from "styled-components";
import Description from "./Description";
import ImgAndTextSection from "./ImgAndText";

const About = () => {
  return (
    <AboutContainer id="about-section">
      <ImgAndTextSection />
      <Description />
      {/* <CardSection /> */}
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  padding: 0 135px 0;
  background-color: #fff7f4;
  display: flex;
  flex-direction: row;
`;
