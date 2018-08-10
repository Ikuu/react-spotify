import React, { PureComponent } from 'react';

class RelatedArtists extends PureComponent {
  render() {
    const { related, onArtistClick } = this.props;

    return (
      <div>
        <h2>Related</h2>
        <ul>
          {related.map((r, i) => <li key={i} onClick={() => onArtistClick(r.name)}>{r.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default RelatedArtists;
