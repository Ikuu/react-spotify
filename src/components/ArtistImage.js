import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledArtistImage = styled.img.attrs({
  alt: `${props => props.alt || 'Portrait Not Found'}`,
})`
  border-radius: 50%;
  height: ${props => props.size || 200}px;
  width: ${props => props.size || 200}px;
`;

class ArtistImage extends PureComponent {
  static defaultProps = {
    src: 'http://placehold.it/500x500',
  };

  render() {
    return <StyledArtistImage {...this.props} />
  }
}

export default ArtistImage;
