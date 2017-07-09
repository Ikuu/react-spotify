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

const fetchRelatedArtistsApi = (id) => (
  fetch(`${spotifyApi}/artists/${id}/related-artists`, {
      headers: {
        'Authorization': spotifyAuth, 
      },
    })
    .then(response => response.json())
    .then(json => json.artists)
);

// Functions*
function* fetchArtist(action) {
  const foundArtist = yield call(fetchArtistApi, action.artist);
  
  yield put(actions.loadArtist(foundArtist));
  yield fork(fetchRelatedArtists, foundArtist.id);
}

function* fetchRelatedArtists(id) {
  const foundRelated = yield call(fetchRelatedArtistsApi, id);

  yield put(actions.loadRelatedArtists(foundRelated));
}

// Watch
function* watchLoadArtist() {
  yield takeLatest('SEARCH_ARTIST', fetchArtist);
}

function* startup() {
  yield fork(fetchArtist, { artist: 'Dave' });
}

// Run
export default function* root() {
  yield all([
    fork(startup),
    fork(watchLoadArtist),
  ]);
}
