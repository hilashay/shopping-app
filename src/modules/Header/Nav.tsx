import { useState } from "react";
import styled from "styled-components";

type LinkLabel = "Home" | "How it works" | "About us" | "Reviews";

const links: Array<{ label: LinkLabel; path: string }> = [
  { label: "Home", path: "#home-section" },
  { label: "How it works", path: "#form-section" },
  { label: "About us", path: "#" },
  { label: "Reviews", path: "#reviews-section" },
];

export const Nav = () => {
  const [active, setActive] = useState<LinkLabel>("Home");

  return (
    <Container>
      {links.map(({ path, label }) => (
        <LinkContainer key={`nav-link-${label}`}>
          <Link
            href={path}
            isActive={active === label}
            onClick={() => {
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

const Link = styled.a<LinkProps>`
  font-family: "Gambetta", serif;
  text-decoration: none;
  font-size: 20px;
  margin-right: 16px;
  color: ${(props) => (props.isActive ? "#ff5300" : "#000000")};

  :hover {
    color: #ff5300;
  }
`;
