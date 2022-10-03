import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <nav>
        <LinkContainer>
          <NavbarLink to="/">Home</NavbarLink>
        </LinkContainer>
        <LinkContainer>
          <NavbarLink to="/Form">Form</NavbarLink>
        </LinkContainer>
        <LinkContainer>
          <NavbarLink to="/Reviews">Reviews</NavbarLink>
        </LinkContainer>
      </nav>
    </header>
  );
};

export default Header;

const LinkContainer = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: smaller;
  :hover {
    color: gray;
  }
`;
