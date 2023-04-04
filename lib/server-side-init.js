import {
  setProductCategories,
  setPromoBarMessages,
  setSocialLinks,
  setPages,
  coutryCode
} from '../actions/app';
import {
  setShippingCutoff,
  setOpenBegin,
  setOpenCutoff,
} from '../actions/user';
import fetchInitialData from './api/initial-data';
import { createCutoffDate } from './date-time';

export default async (store, isServer) => {
  if (isServer) {
    const initialData = await fetchInitialData();

    // set initial data
    await store.dispatch(setProductCategories(initialData.menu));
    await store.dispatch(setPromoBarMessages(initialData.promoBar));
    await store.dispatch(setSocialLinks(initialData.socialLinks));
    await store.dispatch(setPages(initialData.pages));
    await store.dispatch(coutryCode(initialData.coutryCode));

    // set cutoff times
    await store.dispatch(setShippingCutoff(createCutoffDate(19)));
    await store.dispatch(setOpenBegin(createCutoffDate(12)));
    await store.dispatch(setOpenCutoff(createCutoffDate(21)));
  }

  return { isServer };
};
