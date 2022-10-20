import styled from "styled-components";
import Card from "./Card";

const cards = [
  {
    imageUrl: "https://i.pinimg.com/564x/34/4f/ab/344fabadbf096629aea1df4ce0bc6979.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/95/f0/84/95f0843f3769ebea8c76c7c56a871f16.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/52/29/df/5229dfbd0d6168853308f89750df9510.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/f8/98/e1/f898e146b41b1892ef3d212d259093d5.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. enim.",
  },
];

const Cards = () => {
  const renderCards = () =>
    cards.map(({ imageUrl, text }) => <Card imageUrl={imageUrl} text={text} />);

  return <Container>{renderCards()}</Container>;
};

export default Cards;

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
