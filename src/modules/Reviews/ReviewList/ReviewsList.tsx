import styled from "styled-components";
import ReviewItem from "./ReviewItem";
import Carousel from "nuka-carousel";

export interface CardProps {
  imageUrl: string;
  name: string;
  jobName: string;
  text: string;
}

const cards: CardProps[] = [
  {
    imageUrl: "https://i.pinimg.com/564x/9d/b6/53/9db65387de45a91f292b0e37eb6b9eb2.jpg",
    name: "Hila Shay",
    jobName: "CEO,word yt",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing..",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/9d/b6/53/9db65387de45a91f292b0e37eb6b9eb2.jpg",
    name: "Idan Haviv",
    jobName: "Managing Director",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing. .",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/9d/b6/53/9db65387de45a91f292b0e37eb6b9eb2.jpg",
    name: "Shai Yahav",
    jobName: "CEO,word yt",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing..",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/9d/b6/53/9db65387de45a91f292b0e37eb6b9eb2.jpg",
    name: "Sefi Haviv",
    jobName: "Managing Director",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing. .",
  },
];

const ReviewList = () => {
  return (
    <Container
      slidesToShow={2}
      slidesToScroll={2}
      slideIndex={0}
      defaultControlsConfig={{
        pagingDotsClassName: "dots",
        nextButtonStyle: { display: "none" },
        prevButtonStyle: { display: "none" },
        pagingDotsStyle: {
          fill: "#7B7B7B",
          transform: "scale(1.5)",
          opacity: 1,
        },
      }}
    >
      {cards.map(({ imageUrl, name, jobName, text }, index) => (
        <ReviewItem imageUrl={imageUrl} name={name} jobName={jobName} text={text} key={index} />
      ))}
    </Container>
  );
};

export default ReviewList;

const Container = styled(Carousel)`
  margin-bottom: 56px;
  margin-top: 56px;
`;
