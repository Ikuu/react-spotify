import { LOAD_ARTIST } from '../constants/ActionTypes';

const INITIAL_STATE = {
  artist: {
    images: [
      {
        url: '',
      }
    ]
  },
};

const loadArtist = (state, artist) => ({
  ...state,
  artist,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOAD_ARTIST:
      return loadArtist(state, action.artist);
    default:
      return state;
  }
}

export default reducer;
