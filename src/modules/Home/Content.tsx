import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Span } from "../../components/common/Span";
import { Button } from "../../components/common/Button";

const Content = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>
        Discovering styles <Span>you love</Span> just got easier
      </Title>
      <MainButton onClick={() => navigate("/form-section")}>Contact me</MainButton>
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
  @media (max-width: 768px) {
    font-size: 34px;
    position: absolute;
    bottom: 600px;
  }
  @media (max-width: 390px) {
    font-size: 30px;
    position: absolute;
    padding: 0 50px;
    bottom: 420px;
  }
`;

const MainButton = styled(Button)`
  @media (max-width: 768px) {
    height: 30px;
    width: 100px;
    font-size: 16px;
    bottom: 550px;
  }
  @media (max-width: 390px) {
    height: 32px;
    width: 90px;
    bottom: 380px;
  }
`;
