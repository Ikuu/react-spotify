import { LOAD_ARTIST, LOAD_RELATED_ARTISTS } from '../constants/ActionTypes';

export const loadArtist = artist => ({
  type: LOAD_ARTIST,
  artist,
});

export const loadRelatedArtists = artists => ({
  type: LOAD_RELATED_ARTISTS,
  artists,
});
