import styled from "styled-components";
import { SectionContainer } from "../../components/common/SectionContainer";
import Cards from "./Cards/Cards";
import Description from "./Description";
import { PINKBACKGROUND } from "../../components/Colors";

const About = () => {
  return (
    <Container id="about-section">
      <RowContainer>
        <ImageContainer>
          <Image
            src="https://www.shutterstock.com/shutterstock/photos/2142899553/display_1500/stock-photo-working-woman-in-an-online-store-she-wears-casual-clothes-and-checks-the-customer-s-address-and-2142899553.jpg"
            alt="a"
          />
        </ImageContainer>
        <Description />
      </RowContainer>
      <Cards />
    </Container>
  );
};

export default About;

const Container = styled(SectionContainer)`
  background: ${PINKBACKGROUND};
  display: flex;
  flex-direction: column;
  padding-bottom: 72px;
  padding-top: 49px;
  @media (max-width: 768px) {
    padding: 0px 40px 20px;
  }
`;

const RowContainer = styled.div`
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
  @media (max-width: 768px) {
    background: green;
    width: 300px;
    height: 200px;
    margin-top: 150px;
  }
`;
