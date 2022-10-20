import styled from "styled-components";

const Social = () => {
  return (
    <Container>
      <Title>
        <Span>Digie</Span>ncy
      </Title>
    </Container>
  );
};

export default Social;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 215px;
  width: 263px;
  color: #fff7f4;
  padding-top: 66px;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const Span = styled.span`
  color: #ff5300;
`;
