import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type LinkLabel = "Home" | "How it works" | "About us" | "Reviews" | "Dress me";

const links: Array<{ label: LinkLabel; path: string }> = [
  { label: "Home", path: "/" },
  { label: "How it works", path: "#howitworks-section" },
  { label: "About us", path: "#about-section" },
  { label: "Reviews", path: "#reviews-section" },
  { label: "Dress me", path: "/form-section" },
];

export const Nav = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<LinkLabel>("Home");

  return (
    <Container>
      {links.map(({ path, label }) => (
        <LinkContainer key={`nav-link-${label}`}>
          <Link
            isActive={active === label}
            onClick={() => {
              navigate(path);
              setActive(label);
            }}
          >
            {label}
          </Link>
        </LinkContainer>
      ))}
    </Container>
  );
};

const Container = styled.nav``;

const LinkContainer = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

interface LinkProps {
  isActive: boolean;
}

const Link = styled.div<LinkProps>`
  font-family: "Gambetta", serif;
  text-decoration: none;
  font-size: 20px;
  margin-right: 16px;
  color: ${(props) => (props.isActive ? "#ff5300" : "#000000")};

  :hover {
    color: #ff5300;
  }
`;
