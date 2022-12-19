import styled from "styled-components";
import Card from "./Card";
import whoIsItFor from "../../../images/whoIsItFor.png";
import HowIGotHere from "../../../images/HowIGotHere.png";
import WhatIStandFor from "../../../images/WhatIStandFor.png";

export interface CardProps {
  imageUrl: any;
  title: string;
  text: string;
}

const cards: CardProps[] = [
  {
    imageUrl: WhatIStandFor,
    title: "What I Stand For",
    text: "It’s my mission to change the way people find clothes they love by combining technology with my personal touch. I'm here to help you save time, look great and evolve your personal style over time.",
  },
  {
    imageUrl: HowIGotHere,
    title: "How I got here",
    text: "I noticed a need around my friends and family, who said that buying clothes is like to do another task for them. So I taught why there's no service for this people? similar to other service's: closet organization, cleaning, laundry etc..",
  },
  {
    imageUrl: whoIsItFor,
    title: "Who is it for",
    text: "the service is suitable for people that don't like to do shopping, don't have time to do shopping, don't understand how this 'Shopping Online' thing work and who want to feel and look great!",
  },
];

const Cards = () => {
  return (
    <Container>
      {cards.map(({ imageUrl, title, text }, index) => (
        <Card imageUrl={imageUrl} title={title} key={index} text={text} />
      ))}
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
