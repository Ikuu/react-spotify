import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ArtistImage from '../components/ArtistImage';

class App extends Component {
  render() {
    const { artist } = this.props;

    return (
      <div className="App">
        <Header text={artist.name} />
        <ArtistImage src={artist.images[0].url}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.artist,
});

export default connect(mapStateToProps)(App);
