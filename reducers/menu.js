import { handleActions } from 'redux-actions';
import { MenuActions } from '../actions';

const menuState = {
  menuOpen: null,
};

const Menu = handleActions({
  [MenuActions.openMenu]: (state, action) => ({
    ...state,
    menuOpen: action.payload,
  }),
  [MenuActions.closeMenu]: state => ({
    ...state,
    menuOpen: null,
  }),
}, menuState);

export default Menu;
