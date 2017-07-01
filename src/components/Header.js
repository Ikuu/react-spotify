import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: #242729;
  font-family: sans-serif;
  text-align: center;
`;

const Header = ({ text, click }) => (
  <StyledHeader onClick={click}>
    {text}
  </StyledHeader>
);

export default Header;
