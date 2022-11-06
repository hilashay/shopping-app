import styled from "styled-components";
import Links from "./Links";
const Menu = () => {
  return (
    <Container>
      <Title>Company</Title>
      <Links />
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 179px;
  color: #fff7f4;
  padding-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 40px;
  padding-bottom: 25px;
`;
