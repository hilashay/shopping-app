import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import Menu from "./Social/Menu/Menu";
import Social from "./Social/Social";

const Footer = () => {
  return (
    <Container>
      <Social />
      <Menu />
    </Container>
  );
};

export default Footer;

const Container = styled(SectionContainer)`
  display: flex;
  flex-direction: row;
  background: #373737;
  padding-top: 66px;
`;
