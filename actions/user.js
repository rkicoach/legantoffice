import { createAction } from 'redux-actions';

// actions related to fetching from the teo-utils IP geolocation service
export const getUserGeo = createAction('USER_GEO_REQUEST');
export const setUserGeo = createAction('USER_GEO_RECEIVED');
export const userGeoError = createAction('USER_GEO_ERROR');

// general error action for user data
export const userDataError = createAction('USER_DATA_ERROR');

// add user email and name to state, consumed by kevy
export const setCustomerInfo = createAction('SET_CUSTOMER_INFO', (email, name) => ({
  email,
  name,
}));
export const resetCustomerInfo = createAction('RESET_CUSTOMER_INFO');

// user-selected shipping state from the shiptime component on product pages/quickview
export const handleShipToStateSelect = createAction('SET_SHIPTO_STATE');

// set cutoff dates/times
export const setShippingCutoff = createAction('SET_SHIPPING_CUTOFF', (date) => ({
  shippingCutoff: date,
}));

export const setOpenBegin = createAction('SET_OPEN_BEGIN', (date) => ({
  openBegin: date,
}));

export const setOpenCutoff = createAction('SET_OPEN_CUTOFF', (date) => ({
  openCutoff: date,
}));
