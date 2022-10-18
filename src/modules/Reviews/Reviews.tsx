import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import Carousel from "nuka-carousel";

const Reviews = () => {
  const reviews = [
    {
      img: "https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg",
      name: "Hila Shay",
      textReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.",
    },
    {
      img: "https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg",
      name: "Idan Haviv",
      textReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.",
    },
    {
      img: "https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg",
      name: "Shai Yahav",
      textReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.",
    },
  ];

  const renderReviews = () =>
    reviews.map(({ img, name, textReview }) => (
      <Card>
        <ImgCard src={img} alt="error"></ImgCard>
        <Name>{name}</Name>
        <TextReview>{textReview}</TextReview>
      </Card>
    ));
  return (
    <Carousel style={{ height: 300 }}>
      <CardsContainer>{renderReviews()}</CardsContainer>
    </Carousel>
  );
};

export default Reviews;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Card = styled.div`
  position: relative;
  height: 250px;
  width: 300px;
  background-color: #ff5300;
  //   justify-content: space-around;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  color: black;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 50px;
  margin-left: 65px;
`;

const TextReview = styled.div`
  color: white;
  font-size: 15px;
  margin-bottom: 50px;
  margin-left: 65px;
`;

const ImgCard = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: absolute;
  left: -30px;
  top: 20px;
`;
