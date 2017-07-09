import { combineReducers } from 'redux';
import artist from './artist';
import relatedArtists from './relatedArtists';

export default combineReducers({
  artist,
  relatedArtists,
});
