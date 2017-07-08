import { all, takeLatest } from 'redux-saga/effects';
import { put, call, fork } from 'redux-saga/effects';
import * as actions from '../actions';

const spotifyApi = 'https://api.spotify.com/v1';
const spotifyAuth = '';

// API Calls
const fetchArtistApi = (artist) => (
  fetch(`${spotifyApi}/search?q="${artist}"&type=artist&limit=5`, {
      headers: {
        'Authorization': spotifyAuth, 
      },
    })
    .then(response => response.json())
    .then(json => json.artists.items[0])
);

// Functions*
function* fetchArtist(artist) {
  const foundArtist = yield call(fetchArtistApi, artist.artist);
  yield put(actions.loadArtist(foundArtist));
  // yield fork(fetchRelatedArtists, foundArtist.id);
}

// Watch
function* watchSelectArtist() {
  yield* takeLatest('LOAD_ARTIST', fetchArtist);
}

function* startup() {
  yield fork(fetchArtist, { artist: 'Dave' });
}

// Run
export default function* root() {
  yield all([
    fork(startup),
    fork(watchSelectArtist),
  ]);
}
