import { SectionContainer } from "../../components/General.styled";
import styled from "styled-components";

const MainSection = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <MainText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius facilis molestias.
          Sapiente quas similique asperiores incidunt.
          <br />
          <span style={{ color: "gray", fontSize: 15 }}>
            explicabo labore accusamus ratione. Commodi totam magni aspernatur facere velit laborum
            eligendi sint.
          </span>
        </MainText>
        <Button>Dress me!</Button>
      </TextContainer>
    </SectionContainer>
  );
};

export default MainSection;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainText = styled.div`
  font-family: "Gambetta", serif;
  height: 65px;
  width: 480px;
  font-size: 25px;
  margin-top: 240px;
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
`;
