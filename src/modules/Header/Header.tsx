import styled from "styled-components";
import logo from "../../../src/images/logo.png";
import { Nav } from "./Nav";

const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="error" />
      <Nav />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  position: fixed;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 1%);
  z-index: 1;

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

const Image = styled.img`
  height: 68px;
  width: 85px;
  position: absolute;
  top: 10px;
  left: 135px;
  @media (max-width: 768px) {
    left: 40px;
    height: 49px;
    width: 65px;
  }
`;
