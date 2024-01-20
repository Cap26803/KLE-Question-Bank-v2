// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SiteTitle = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: darkred;
    color: white;
  }

  > img {
    width: 210px;  /* Set your logo width */
    margin-right: 10px;
  }

  &:hover > img {
    filter: brightness(1); /* This should remove the hover effect on the image */
  }
`;

const NavLinkContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: darkred;
    color: white;
  }

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: darkred;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;

export default function Navbar() {
  return (
    <NavBarContainer>
      <SiteTitle to="/">
        <img src="/images/KTech-wide.png" alt="Logo" />
      </SiteTitle>
      <NavLinkContainer>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/About">About us</NavLink>
      </NavLinkContainer>
    </NavBarContainer>
  );
}
