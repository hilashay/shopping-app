import styled from "styled-components";
import { Span } from "../../components/General.styled";

const Content = () => {
  return (
    <Container>
      <Title>
        We Are The Best <Span>Digital Agency</Span> for business
      </Title>
      <SubTitle>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </SubTitle>
      <Button>Contact Us</Button>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Title = styled.h1`
  margin: 23px 0 11px;
  font-size: 48px;
  width: 70%;
`;

const SubTitle = styled.p`
  font-size: 16px;
  color: #7b7b7b;
  width: 400px;
`;

const Button = styled.button`
  height: 50px;
  width: 150px;
  font-size: 20px;
  background-color: #ff5300;
  border-radius: 5px;
  border-width: inherit;
  cursor: pointer;
  color: white;
  margin-top: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
