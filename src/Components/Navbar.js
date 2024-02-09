import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Menubar = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  background: green;
`;

const Snippets = styled.li`
  padding: 1em;
`;

const MenuLinks = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.25em;
`;
// const Jithender = styled.ul`
//   background: blue;
// `;
export default function Navbar() {
  return (
    <>
      <Menubar>
        <Snippets>
          <MenuLinks href="">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </MenuLinks>
        </Snippets>
        <Snippets>
          <MenuLinks href="">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </MenuLinks>
        </Snippets>

        <Snippets>
          <MenuLinks href="">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </MenuLinks>
        </Snippets>

        <Snippets>
          <MenuLinks href="">
            <Link to="/menu" className="nav-link">
              States
            </Link>
          </MenuLinks>
        </Snippets>
        <Snippets>
          <MenuLinks href="">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </MenuLinks>
        </Snippets>
      </Menubar>
    </>
  );
}
