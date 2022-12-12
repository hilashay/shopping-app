import styled from "styled-components";
import { SectionContainer } from "../../../components/General.styled";

const BottomFooter = () => {
  return (
    <Container>
      <CopyRightSymbol>&#169;</CopyRightSymbol> Copyright 2021. All Right Reserved By Ojjomedia
    </Container>
  );
};

export default BottomFooter;

const Container = styled(SectionContainer)`
  display: flex;
  flex-direction: row;
  background: #2b282f;
  padding-top: 18px;
  padding-bottom: 18px;
  color: #ffffff;
`;

const CopyRightSymbol = styled.div`
  padding-right: 20px;
`;
