import styled from "styled-components";
import Card from "./ReviewItem";
import Carousel from "nuka-carousel";

export interface CardProps {
  imageUrl: string;
  name: string;
  jobName: string;
  text: string;
}

const cards: CardProps[] = [
  {
    imageUrl: "https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg",
    name: "Hila Shay",
    jobName: "CEO,word yt",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing..",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg",
    name: "Idan Haviv",
    jobName: "Managing Director",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing. .",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg",
    name: "Shai Yahav",
    jobName: "CEO,word yt",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing..",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/cf/32/5d/cf325d12d80120757b2e0b7db1e2f9a2.jpg",
    name: "Sefi Haviv",
    jobName: "Managing Director",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing. .",
  },
];

const ReviewList = () => {
  const renderCards = () =>
    cards.map(({ imageUrl, name, jobName, text }) => (
      <Card imageUrl={imageUrl} name={name} jobName={jobName} text={text} />
    ));

  return (
    <Container
      slidesToShow={2}
      slidesToScroll={2}
      slideIndex={0}
      defaultControlsConfig={{
        nextButtonStyle: { display: "none" },
        prevButtonStyle: { display: "none" },
        pagingDotsStyle: {
          fill: "#ff5300",
          transform: "scale(1.5)",
        },
      }}
    >
      {renderCards()}
    </Container>
  );
};

export default ReviewList;

const Container = styled(Carousel)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
  margin-top: 56px;

  // width: 100%; // Question: on about i shouldnt add "width", but here without width theres no option to add space between the cards.****
`;
