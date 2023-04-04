import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createResponsiveStoreEnhancer } from 'redux-responsive';
import reducers from '../reducers';

let devtools = f => f;
const dev = process.env.NODE_ENV !== 'production';

// If we're running on the client outside of production, fire up the Redux DevTools
if (dev && process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const middleware = [
  thunk,
];

const enhancers = compose(
  createResponsiveStoreEnhancer({ performanceMode: true }),
  devtools,
);

const rootReducer = combineReducers({
  ...reducers,
  // third party reduceres go here
});

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default initialState => createStoreWithMiddleware(
  rootReducer,
  initialState,
  enhancers,
);
