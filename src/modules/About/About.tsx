import styled from "styled-components";
import { SectionContainer } from "../../components/common/SectionContainer";
import Cards from "./Cards/Cards";
import Introduction from "./Introduction";
import { PINKBACKGROUND } from "../../components/Colors";

interface AboutProps {
  onClickDressMe: VoidFunction;
}

const About: React.FC<AboutProps> = ({ onClickDressMe }) => {
  return (
    <Container id="about-section">
      <RowContainer>
        <ImageContainer>
          <Image
            src="https://www.shutterstock.com/shutterstock/photos/2142899553/display_1500/stock-photo-working-woman-in-an-online-store-she-wears-casual-clothes-and-checks-the-customer-s-address-and-2142899553.jpg"
            alt="a"
          />
        </ImageContainer>
        <Introduction onClickDressMe={onClickDressMe} />
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
    padding: 0 20px 50px 20px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 390px) {
    flex-direction: column;
  }
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
    width: 100%;
    height: max-content;
    margin-top: 120px;
  }
  @media (max-width: 390px) {
    width: 330px;
    height: max-content;
    margin-top: 50px;
  }
`;
