import styled from "styled-components";
import { SectionContainer } from "../../../components/General.styled";

const BottomFooter = () => {
  return (
    <Container>
      <CopyRightSymbol>&#169;</CopyRightSymbol> 2022 Hila Shay, Inc.
    </Container>
  );
};

export default BottomFooter;

const Container = styled(SectionContainer)`
  display: flex;
  flex-direction: row;
  background: #000000;
  padding-top: 18px;
  padding-bottom: 18px;
  color: #ffffff;
  @media (max-width: 390px) {
    padding: 20px 10px 10px 40px;
  }
`;

const CopyRightSymbol = styled.div`
  padding-right: 20px;
`;
