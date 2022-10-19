import styled from "styled-components";

const Title = () => {
  return (
    <Container>
      <LinesStyle>
        Some <span style={{ color: "#FF5300" }}>Great</span>
      </LinesStyle>
      <LinesStyle>
        <span style={{ color: "#FF5300" }}>Words</span> From Our Clients
      </LinesStyle>
    </Container>
  );
};

export default Title;

const Container = styled.h2`
  width: 460px;
`;

const LinesStyle = styled.h2`
  font-size: 40px;
  text-align: center;
`;
