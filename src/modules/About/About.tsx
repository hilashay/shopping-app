import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import Cards from "./Cards/Cards";
import Description from "./Description";

const About = () => {
  return (
    <Container id="about-section">
      <TopContainer>
        <ImageContainer>
          <Image
            src="https://i.pinimg.com/564x/e5/fa/b3/e5fab38a3300f8cd38e7a13443b09212.jpg"
            alt="a"
          />
        </ImageContainer>
        <Description />
      </TopContainer>
      <Cards />
    </Container>
  );
};

export default About;

const Container = styled(SectionContainer)`
  background-color: #fff7f4;
  display: flex;
  flex-direction: column;
  padding-bottom: 72px;
  padding-top: 49px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 50%;
`;

const Image = styled.img`
  height: 320px;
  width: auto;
  border-radius: 30px;
  margin-top: 100px;
`;
