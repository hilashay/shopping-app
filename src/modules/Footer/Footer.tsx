import styled from "styled-components";
import { SectionContainer } from "../../components/common/SectionContainer";
import BottomFooter from "./Social/BottomFooter";
import Social from "./Social/Social";
import { PINKBACKGROUND } from "../../components/Colors";

const Footer = () => {
  return (
    <Container>
      <TopContainer>
        <Social />
        {/* <Menu /> */}
      </TopContainer>
      <BottomFooter />
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 83px;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled(SectionContainer)`
  flex-direction: row;
  background: ${PINKBACKGROUND};
  padding-top: 66px;
  @media (max-width: 768px) {
    padding: 40px 0 40px 40px;
  }
`;
