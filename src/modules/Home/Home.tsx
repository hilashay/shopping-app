import styled from "styled-components";
import Content from "./Content";
import { SectionContainer } from "../../components/General.styled";

const Home = () => {
  return (
    <Container id="/">
      <Image
        src="https://www.shutterstock.com/shutterstock/photos/1293384706/display_1500/stock-photo-woman-choosing-outfit-from-large-wardrobe-closet-with-stylish-clothes-and-home-stuff-1293384706.jpg"
        alt="a"
      />
      <Content />
    </Container>
  );
};

export default Home;

const Container = styled(SectionContainer)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #eae0de;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Image = styled.img`
  height: 100vh;
  opacity: 0.7;
  @media (max-width: 768px) {
    width: 768px;
    height: auto;
    padding-top: 140px;
  }
`;
