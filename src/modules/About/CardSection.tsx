import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";

const CardSection = () => {
  return (
    <SectionContainer>
      <CardsContainer>
        <Card>
          <ImgCard
            src={"https://i.pinimg.com/564x/34/4f/ab/344fabadbf096629aea1df4ce0bc6979.jpg"}
          ></ImgCard>
          <Span>Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.</Span>
        </Card>
        <Card>
          <ImgCard
            src={"https://i.pinimg.com/564x/95/f0/84/95f0843f3769ebea8c76c7c56a871f16.jpg"}
          ></ImgCard>
          <Span>Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.</Span>
        </Card>
        <Card>
          <ImgCard
            src={"https://i.pinimg.com/564x/52/29/df/5229dfbd0d6168853308f89750df9510.jpg"}
          ></ImgCard>
          <Span>Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.</Span>
        </Card>
        <Card>
          <ImgCard
            src={"https://i.pinimg.com/564x/f8/98/e1/f898e146b41b1892ef3d212d259093d5.jpg"}
          ></ImgCard>
          <Span>Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.</Span>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
};

export default CardSection;

const Span = styled.div`
  color: gray;
  font-size: 15px;
  margin-bottom: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 270px;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const ImgCard = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;
