import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: #242729;
  font-family: sans-serif;
  text-align: center;
`;
class Header extends PureComponent {
  render() {
    const { click, text } = this.props;

    return (
      <StyledHeader onClick={() => click(text)}>
        {text}
      </StyledHeader>
    )
  }
}

export default Header;
