import { LOAD_ARTIST } from '../constants/ActionTypes';

export const loadArtist = artist => {
  return {
    type: LOAD_ARTIST,
    artist,
  }
};
