import { useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import logo from "../../../src/images/logo.png";
import { Nav } from "./Nav";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={logo} alt="error" onClick={() => navigate("/")} />
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
  @media (max-width: 390px) {
    padding: 18px;
    width: 100%;
  }
`;

const Image = styled.img`
  height: auto;
  width: 230px;
  position: absolute;
  top: 10px;
  left: 135px;
  cursor: pointer;
  @media (max-width: 768px) {
    left: 40px;
    height: auto;
    width: 140px;
  }
  @media (max-width: 390px) {
    left: 10px;
    height: auto;
    width: 140px;
  }
`;
