import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import Header from '../components/Header';
import ArtistImage from '../components/ArtistImage';
import RelatedArtists from '../components/RelatedArtists';

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const sameArtist = isEqual(this.props.artist, nextProps.artist);
    const sameRelatedArtists = isEqual(this.props.relatedArtists, nextProps.relatedArtists);

    return !(sameArtist && sameRelatedArtists);
  }

  render() {
    const { artist, onArtistClick, relatedArtists } = this.props;

    return (
      <div className="App">
        <Header text={artist.name} click={onArtistClick} />
        <ArtistImage alt={artist.name} src={artist.images[0].url} />
        <RelatedArtists related={relatedArtists} onArtistClick={onArtistClick} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.artist,
  relatedArtists: state.relatedArtists,
});

const mapDispatchToProps = dispatch => ({
  onArtistClick: artist => dispatch({ type: 'SEARCH_ARTIST', artist, }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
