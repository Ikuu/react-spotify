import { LOAD_ARTIST } from '../constants/ActionTypes';

const INITIAL_ARTIST = {
  images: [
    {
      url: '',
    }
  ],
};

const loadArtist = (state, artist) => artist;

export default (state = INITIAL_ARTIST, action) => {
  switch(action.type) {
    case LOAD_ARTIST:
      return loadArtist(state, action.artist);
    default:
      return state;
  }
};
