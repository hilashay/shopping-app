import styled from "styled-components";
import { Span } from "../../components/common/Span";

const Title = () => {
  return (
    <Container>
      <TextRow>
        Some <Span>Great</Span>
      </TextRow>
      <TextRow>
        <Span>Words</Span> From Our Clients
      </TextRow>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  width: 460px;
`;

const TextRow = styled.h2`
  font-size: 40px;
  text-align: center;
  letter-spacing: 1px;
`;
