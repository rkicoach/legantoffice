import { handleActions } from 'redux-actions';
import { HomeActions } from '../actions';

const homeState = {};

const Home = handleActions({
  [HomeActions.setHomeHero]: (state, action) => ({
    ...state,
    hero: action.payload,
  }),
  [HomeActions.setHomeCards]: (state, action) => ({
    ...state,
    homeCards: action.payload,
  }),
}, homeState);

export default Home;
