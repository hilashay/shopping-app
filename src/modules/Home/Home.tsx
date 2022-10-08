import styled from "styled-components";
import Content from "./Content";
import { SectionContainer } from "../../components/General.styled";

const Home = () => {
  return (
    <Container id="home-section">
      <Content />
      <ImgContainer>
        <MainImg
          src="https://i.pinimg.com/564x/e5/fa/b3/e5fab38a3300f8cd38e7a13443b09212.jpg"
          alt="a"
        />
      </ImgContainer>
    </Container>
  );
};

export default Home;

const Container = styled(SectionContainer)`
  flex-diraction: row;
  padding: 353px 135px 210px;
  background-color: #fff7f4;
`;

const ImgContainer = styled.div`
  width: 50%;
`;

const MainImg = styled.img`
  height: 370px;
  border-radius: 30px;
`;
