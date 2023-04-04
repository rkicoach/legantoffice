import { createAction } from 'redux-actions';

export const showModal = createAction('SHOW_MODAL', (type, props) => ({
  modalType: type,
  modalProps: { ...props },
}));

export const hideModal = createAction('HIDE_MODAL');
