import styled from "styled-components";
import Content from "./Content";
import { SectionContainer } from "../../components/General.styled";

const Home = () => {
  return (
    <Container id="home-section">
      <MainContainer>
        <Content />
        <ImageContainer>
          <Image
            src="https://i.pinimg.com/564x/e5/fa/b3/e5fab38a3300f8cd38e7a13443b09212.jpg"
            alt="a"
          />
        </ImageContainer>
      </MainContainer>
    </Container>
  );
};

export default Home;

const Container = styled(SectionContainer)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff7f4;
`;

const MainContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 370px;
  border-radius: 30px;
`;
