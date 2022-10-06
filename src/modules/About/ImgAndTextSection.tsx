import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";

const ImgAndTextSection = () => {
  return (
    <ImgAndTextContainer>
      <SectionContainer>
        <MainImg
          src="https://i.pinimg.com/564x/e5/fa/b3/e5fab38a3300f8cd38e7a13443b09212.jpg"
          alt="a"
        />
        {/* </ImgContainer> */}
      </SectionContainer>
      <TextContainer>
        <MainText>
          <Span>About us</Span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius facilis molestias.
          Sapiente quas similique asperiores incidunt.
          <br />
          <Span style={{ color: "gray", fontSize: 15 }}>
            explicabo labore accusamus ratione. Commodi totam magni aspernatur facere velit laborum
            eligendi sint.
          </Span>
        </MainText>
        <Button>Dress me!</Button>
      </TextContainer>
    </ImgAndTextContainer>
  );
};

export default ImgAndTextSection;

const MainImg = styled.img`
  height: 320px;
  width: 430px;
  border-radius: 30px;
  margin-top: 100px;
`;

const ImgAndTextContainer = styled.div`
  display: flex;
  height: 450px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.div`
  color: gray;
  font-size: 15px;
  margin-bottom: 10px;
`;

const MainText = styled.div`
  font-family: "Gambetta", serif;
  height: 65px;
  width: 480px;
  font-size: 25px;
  margin-top: 100px;
`;

const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: #ff5300;
  border-radius: 5px;
  border-width: inherit;
  cursor: pointer;
  color: white;
  margin-top: 150px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
