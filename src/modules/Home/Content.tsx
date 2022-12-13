import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Span, Button } from "../../components/General.styled";

const Content = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>
        Discovering styles <Span>you love</Span> just got easier
      </Title>
      <Button onClick={() => navigate("/form-section")}>Contact me</Button>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: rtelative;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  margin: 23px 0 11px;
  font-size: 42px;
  position: absolute;
  bottom: 350px;
  text-shadow: 2px 2px 2px gray;
  color: white;
  letter-spacing: 1.5px;
  // width: 70%;
  @media (max-width: 768px) {
    font-size: 40px;
    width: 100%;
  }
`;
