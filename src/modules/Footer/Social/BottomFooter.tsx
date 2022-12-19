import styled from "styled-components";
import { SectionContainer } from "../../../components/common/SectionContainer";

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
`;

const CopyRightSymbol = styled.div`
  padding-right: 20px;
`;
