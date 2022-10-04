import styled from "styled-components";
import MainSection from "./MainSection";

const Home = () => {
  return (
    <HomeContainer id="home-section">
      <MainSection />
      <MainImg
        src="https://i.pinimg.com/564x/e5/fa/b3/e5fab38a3300f8cd38e7a13443b09212.jpg"
        alt="a"
      />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 735px;
  // margin-top: 100px;
  background-color: #fff7f4;
  display: flex;
  flex-diraction: row;
`;

const MainImg = styled.img`
  height: 320px;
  width: 430px;
  border-radius: 30px;
  margin-top: 200px;
  margin-left: 88px;
`;
