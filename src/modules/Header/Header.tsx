import styled from "styled-components";
import { Nav } from "./Nav";
import logo from "../../../src/images/logo.png";

const Header = () => {
  return (
    <Container>
      <Img src={logo} alt="error" />
      {/* <Logo>My App</Logo> */}
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
`;

const Logo = styled.h2`
  position: absolute;
  top: 10px;
  left: 135px;
  color: red;
`;

const Img = styled.img`
  height: 70px;
  width: 85px;
  position: absolute;
  top: 10px;
  left: 135px;
`;
