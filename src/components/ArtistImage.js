import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledArtistImage = styled.img`
  border-radius: 50%;
  height ${props => props.size || 200}px;
  width: ${props => props.size || 200}px;
`;

const defaultProps = {
  src: 'http://placehold.it/500x500',
};

class ArtistImage extends PureComponent {
  render() {
    return <StyledArtistImage {...this.props} />
  }
}

export default ArtistImage;
