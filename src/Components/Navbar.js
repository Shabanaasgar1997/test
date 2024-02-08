import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Menubar = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  background: green;
`;

const Menubar_Snippets = styled.li`
  padding: 1em;
`;

const Menubar_Links = styled.a`
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
        <Menubar_Snippets>
          <Menubar_Links href="">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </Menubar_Links>
        </Menubar_Snippets>
        <Menubar_Snippets>
          <Menubar_Links href="">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Menubar_Links>
        </Menubar_Snippets>

        <Menubar_Snippets>
          <Menubar_Links href="">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </Menubar_Links>
        </Menubar_Snippets>
      </Menubar>
    </>
  );
}
