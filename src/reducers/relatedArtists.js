import { LOAD_RELATED_ARTISTS } from '../constants/ActionTypes';

const INITIAL_RELATED_ARTISTS = [];
const loadRelatedArtists = (state, artists) => artists;

export default (state = INITIAL_RELATED_ARTISTS, action) => {
  switch(action.type) {
    case LOAD_RELATED_ARTISTS:
      return loadRelatedArtists(state, action.artists);
    default:
      return state;
  }
};
