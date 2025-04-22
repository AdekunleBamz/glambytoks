import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '@mui/material';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: none;
  color: inherit;
  letter-spacing: 0.05em;
  
  &:hover {
    color: ${props => props.theme.palette.primary.main};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Navigation = () => {
  return (
    <Container>
      <Nav>
        <Logo to="/">
          GLAMBYTOKS
        </Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/booking">Book Now</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </Nav>
    </Container>
  );
};

export default Navigation; 