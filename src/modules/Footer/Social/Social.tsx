import styled from "styled-components";
import Icons from "./Icons";

const Social = () => {
  return (
    <Container>
      <Icons />
    </Container>
  );
};

export default Social;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 263px;
  padding-right: 37px;
  padding-bottom: 60px;
  @media (max-width: 390px) {
    padding: 0;
    width: 100%;
  }
`;
