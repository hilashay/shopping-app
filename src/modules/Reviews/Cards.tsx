import styled from "styled-components";
import Card from "./Card";

const Cards = () => {
  const cards = [
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
  ];

  const renderCards = () =>
    cards.map(({ imageUrl, name, jobName, text }) => (
      <Card imageUrl={imageUrl} name={name} jobName={jobName} text={text} />
    ));

  return <Container>{renderCards()}</Container>;
};

export default Cards;

const Container = styled.div`
  display: flex;
  padding: 56px 135px 135px 130px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%; // Question: on about i shouldnt add "width", but here without width theres no option to add space between the cards.****
`;
