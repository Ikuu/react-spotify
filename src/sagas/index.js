import { all, takeLatest } from 'redux-saga/effects';
import { put, call, fork } from 'redux-saga/effects';
import * as actions from '../actions';

const spotifyProxyServer = 'http://localhost:3026/';
const spotifyApi = 'https://api.spotify.com/v1';

// API Calls
const fetchAccessToken = () => (
  fetch(spotifyProxyServer)
    .then(res => res.json())
    .then(json => json.access_token)
);

const fetchArtistApi = (accessToken, artist) => (
  fetch(`${spotifyApi}/search?q="${artist}"&type=artist&limit=5`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
    .then(response => response.json())
    .then(json => json.artists.items[0])
);

const fetchRelatedArtistsApi = (accessToken, id) => (
  fetch(`${spotifyApi}/artists/${id}/related-artists`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
    .then(response => response.json())
    .then(json => json.artists)
);

// Functions*
function* fetchArtist(action) {
  const accessToken = yield call(fetchAccessToken);
  const foundArtist = yield call(fetchArtistApi, accessToken, action.artist);

  yield put(actions.loadArtist(foundArtist));
  yield fork(fetchRelatedArtists, foundArtist.id);
}

function* fetchRelatedArtists(id) {
  const accessToken = yield call(fetchAccessToken);
  const foundRelated = yield call(fetchRelatedArtistsApi, accessToken, id);

  yield put(actions.loadRelatedArtists(foundRelated));
}

// Watch
function* watchLoadArtist() {
  yield takeLatest('SEARCH_ARTIST', fetchArtist);
}

function* startup() {
  yield fork(fetchArtist, { artist: 'Between The Buried And Me' });
}

// Run
export default function* root() {
  yield all([
    fork(startup),
    fork(watchLoadArtist),
  ]);
}
