import { useState } from "react";
import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import { BLUEFONTCOLOR } from "../../components/Colors";

type LinkLabel = "Home" | "How it works" | "About us" | "Brands" | "Dress me";

const links: Array<{ label: LinkLabel; path: string }> = [
  { label: "Home", path: "#hero-section" },
  { label: "How it works", path: "#howitworks-section" },
  { label: "About us", path: "#about-section" },
  { label: "Brands", path: "#brands-section" },
  { label: "Dress me", path: "form-section" },
];

export const Nav = () => {
  const [active, setActive] = useState<LinkLabel>("Home");

  return (
    <Container>
      {links.map(({ path, label }) => (
        <LinkContainer key={`nav-link-${label}`}>
          <StyledLink
            to={`/${path}`}
            isActive={active === label}
            onClick={() => {
              setActive(label);
            }}
          >
            {label}
          </StyledLink>
        </LinkContainer>
      ))}
    </Container>
  );
};

const Container = styled.nav`
  @media (max-width: 768px) {
    margin-left: 90px;
  }
  @media (max-width: 390px) {
    margin-left: 230px;
    width: 150px;
  }
`;

const LinkContainer = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

interface LinkProps {
  isActive: boolean;
}

const StyledLink = styled(NavHashLink)<LinkProps>`
  text-decoration: none;
  font-size: 20px;
  margin-right: 16px;
  color: ${(props) => (props.isActive ? BLUEFONTCOLOR : "#000000")};

  :hover {
    color: ${BLUEFONTCOLOR};
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
