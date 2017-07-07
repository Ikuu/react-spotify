import React from 'react';
import styled from 'styled-components';

const StyledArtistImage = styled.img`
  border-radius: 50%;
  height ${props => props.size || 200}px;
  width: ${props => props.size || 200}px;
`;

const ArtistImage = (props) => (
  <StyledArtistImage {...props} />
);

export default ArtistImage;
