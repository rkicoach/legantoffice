import { handleActions } from 'redux-actions';
import { AppActions } from '../actions';

const appState = {
  promoBarDismissed: false,
  newsletterPopupDismissed: false,
  isLoading: false,
  categories: [],
  promoBarMessages: [],
  socialLinks: [],
  country:[],
  pages: [],
};

const App = handleActions({
  [AppActions.setSitewideInitialData]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [AppActions.setProductCategories]: (state, action) => ({
    ...state,
    categories: action.payload,
  }),
  [AppActions.setPromoBarMessages]: (state, action) => ({
    ...state,
    promoBarMessages: action.payload,
  }),
  [AppActions.setSocialLinks]: (state, action) => ({
    ...state,
    socialLinks: action.payload,
  }),
  [AppActions.setPages]: (state, action) => ({
    ...state,
    pages: action.payload,
  }),
  [AppActions.coutryCode]: (state, action) => ({
    ...state,
    country: action.payload,
  }),
  [AppActions.setLoadingState]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
}, appState);

export default App;
