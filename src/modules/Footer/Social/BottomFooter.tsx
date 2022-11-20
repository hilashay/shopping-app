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
  background: #ff5300;
  padding-top: 18px;
  padding-bottom: 18px;
  color: #ffffff;
  @media (max-width: 768px) {
    padding: 18px 40px;
    justify-content: center;
  }
`;

const CopyRightSymbol = styled.div`
  padding-right: 20px;
`;
