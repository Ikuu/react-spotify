import React from 'react';

const RelatedArtists = ({ related, onArtistClick }) => (
  <div className="">
    <h2>Related</h2>
    <ul>
      {related.map((r, i) => <li key={i} onClick={() => onArtistClick(r.name)}>{r.name}</li>)}
    </ul>
  </div>
)

export default RelatedArtists;
