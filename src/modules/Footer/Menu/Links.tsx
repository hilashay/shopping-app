import { useState } from "react";
import styled from "styled-components";

type LinkLabel = "About Us" | "Our Work" | "Client" | "Our Blog" | "Contact US";

const links: Array<{ label: LinkLabel; path: string }> = [
  { label: "About Us", path: "#About-section" },
  { label: "Our Work", path: "#work-section" },
  { label: "Client", path: "#client-section" },
  { label: "Our Blog", path: "#blog-section" },
  { label: "Contact US", path: "#contact-section" },
];

const Menu = () => {
  const [active, setActive] = useState("");

  const renderLinks = () =>
    links.map(({ label, path }) => (
      <Link
        href={path}
        isActive={active === label}
        onClick={() => {
          setActive(label);
        }}
      >
        {label}
      </Link>
    ));

  return <Container>{renderLinks()}</Container>;
};

export default Menu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 37px;
`;

interface LinkProps {
  isActive: boolean;
}

const Link = styled.a<LinkProps>`
  color: #ffffff;
  padding-bottom: 10px;
  font-family: "Gambetta", serif;
  text-decoration: none;
  font-size: 16px;
  margin-right: 16px;
  color: ${(props) => (props.isActive ? "#ff5300" : "#ffffff")};

  :hover {
    color: #ff5300;
  }
`;
