import React from 'react';
import PropTypes from 'prop-types';

// import QuickView from './quick-view';
// import PersonalizeModal from './personalize-modal';
// import LogoModal from './logo-modal';
// import ContactRequest from './contact-request';
// import SwatchRequest from './swatch-request';
// import CatalogRequest from './catalog-request';
// import QuoteRequest from './quote-request';
import FreeShipping from './modals/free-shipping';
import FreeInitials from './modals/free-initials';
import AddLogo from './modals/add-logo';
// import CPSPads from './cps-pads';
// import CPSPlacemats from './cps-placemats';
// import CPSMats from './cps-mats';
// import CPSBlotters from './cps-blotters';
// import LoginModal from './login';

const MODAL_COMPONENTS = {
  // QUICK_VIEW: QuickView,
  // PERSONALIZE_MODAL: PersonalizeModal,
  // LOGO_MODAL: LogoModal,
  // CONTACT_US: ContactRequest,
  // SWATCH_REQUEST: SwatchRequest,
  // CATALOG_REQUEST: CatalogRequest,
  // CUSTOM_PRODUCTS: QuoteRequest,
  FREE_SHIPPING: FreeShipping,
  FREE_INITIALS: FreeInitials,
  ADD_LOGO: AddLogo,
  // CPS_PADS: CPSPads,
  // CPS_PLACEMATS: CPSPlacemats,
  // CPS_MATS: CPSMats,
  // CPS_BLOTTERS: CPSBlotters,
  // LOGIN: LoginModal,
};

const ModalRoot = (props) => {
  if (!props.modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[props.modalType];
console.log(props.hideModal)
  return (
    <SpecificModal
      {...props.modalProps}
      hideModal={props.hideModal}
      isLarge={props.isLarge}
    />
  );
};

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.shape({
    title: PropTypes.string,
  }),
  hideModal: PropTypes.func,
  isLarge: PropTypes.bool,
};

export default ModalRoot;
