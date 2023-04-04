import { handleActions } from 'redux-actions';
import { ModalActions } from '../actions';

const modalState = {
  modalType: null,
  modalProps: {},
};

const Modal = handleActions({
  [ModalActions.showModal]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [ModalActions.hideModal]: state => ({
    ...state,
    ...modalState,
  }),
}, modalState);

export default Modal;
