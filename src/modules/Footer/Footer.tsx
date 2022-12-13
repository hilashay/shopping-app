import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import Menu from "./Menu/Menu";
import BottomFooter from "./Social/BottomFooter";
import Social from "./Social/Social";

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
  background: #eae0de;
  padding-top: 66px;
  @media (max-width: 768px) {
    padding: 60px 0 10px 40px;
  }
`;
