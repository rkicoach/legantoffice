import { createAction } from 'redux-actions';

// set retrieved sitewide data
export const setSitewideInitialData = createAction('SET_SITEWIDE_INITIAL_DATA');
export const setProductCategories = createAction('SET_PRODUCT_CATEGORIES');
export const setPromoBarMessages = createAction('SET_PROMO_BAR_MESSAGES');
export const setSocialLinks = createAction('SET_SOCIAL_LINKS');
export const setPages = createAction('SET_PAGES');
export const coutryCode = createAction('COUNTRY_CODE');

// app loading state
export const setLoadingState = createAction('SET_LOADING_STATE');

// dismissals to be saved in state
export const dismissPromoBar = createAction('DISMISS_PROMO_BAR');
export const dismissNewsletterPopup = createAction('DISMISS_NEWSLETTER_POPUP');
