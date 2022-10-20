import styled from "styled-components";
import { SectionContainer } from "../../components/General.styled";
import Social from "./Social";

const Footer = () => {
  return (
    <Container>
      <Social />
    </Container>
  );
};

export default Footer;

const Container = styled(SectionContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #373737;
`;
