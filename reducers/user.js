import { handleActions } from 'redux-actions';
import { UserActions } from '../actions';

const userState = {
  country: null,
  state: null,
  // shippingCutoff: null,
  // openCutoff: null,
  // openBegin: null,
  userSetShippingState: false,
  email: null,
  name: null,
};

const User = handleActions({
  [UserActions.setUserGeo]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [UserActions.userGeoError]: state => ({
    ...state,
    country: userState.country,
    state: userState.state,
  }),
  [UserActions.setShippingCutoff]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [UserActions.setOpenBegin]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [UserActions.setOpenCutoff]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [UserActions.handleShipToStateSelect]: (state, action) => ({
    ...state,
    state: action.payload.value,
  }),
  [UserActions.setCustomerInfo]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [UserActions.resetCustomerInfo]: state => ({
    ...state,
    email: null,
    name: null,
  }),
}, userState);

export default User;
