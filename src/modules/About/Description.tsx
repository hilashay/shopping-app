import styled from "styled-components";

const Description = () => {
  return (
    <TextContainer>
      <FirstTitle>About us</FirstTitle>
      <MainTitle>We Are Making Ideas Better For Everyone</MainTitle>
      <MainText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue
        ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur
        augue praesent. Lorem vulputate orci eget mi, sed pulvinar. Ornare etiam erat volutpat
        tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat
        vel at posuere in. Pellentesque volutpat vestibulum.
      </MainText>
      <Button>Dress me!</Button>
    </TextContainer>
  );
};

export default Description;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 49px 0 93px;
`;

const FirstTitle = styled.h6`
  color: gray;
  font-size: 15px;
  margin-bottom: 10px;
  width: 400px;
`;

const MainTitle = styled.h1`
  color: #000000;
  font-size: 39px;
`;

const MainText = styled.div`
  color: gray;
  font-size: 15px;
  width: 450px;
`;

const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: #ff5300;
  border-radius: 5px;
  border-width: inherit;
  cursor: pointer;
  color: white;
  margin-top: 38px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
