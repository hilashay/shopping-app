import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";

const ImgAndTextSection = () => {
  return (
    <ImgContainer>
      <MainImg
        src="https://i.pinimg.com/564x/e5/fa/b3/e5fab38a3300f8cd38e7a13443b09212.jpg"
        alt="a"
      />
    </ImgContainer>
  );
};

export default ImgAndTextSection;

const MainImg = styled.img`
  height: 320px;
  width: auto;
  border-radius: 30px;
  margin-top: 100px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 50%;
`;
