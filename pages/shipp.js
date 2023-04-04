import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initRedux from '../lib/init-redux';
import serverSideInit from '../lib/server-side-init';
// import initPage from '../lib/init-page';
import { openMenu } from '../actions/menu';
import { showModal, hideModal } from '../actions/modal';
import { setLoadingState } from '../actions/app';
import { Heading } from '../components/base';
import App from '../components/app';
import Shipping from './shipping';


const Shipp = props => (

  
  <App
    metaTitle={props.pageData.metaTitle}
    metaDescription={props.pageData.metaDescription}
    canonicalUrl={props.pageData.canonicalUrl}
    categories={props.categories}
    promoBarMessages={props.promoBarMessages}
    isLarge={props.isLarge}
    isLoading={props.isLoading}
    menuOpen={props.menuOpen}
    modalType={props.modalType}
    modalProps={props.modalProps}
    shippingCutoff={props.shippingCutoff}
    openCutoff={props.openCutoff}
    openBegin={props.openBegin}
    openMenu={props.openMenu}
    showModal={props.showModal}
    hideModal={props.hideModal}
    setLoadingState={props.setLoadingState} 
    country={props.country}
  >

    <Heading bold is="h1" mt={2} mb3>
      {props.pageData.name}
       </Heading>
      < Shipping />
   
	
  </App>
);

Shipp.getInitialProps = async ({ store, isServer, query }) => {
  await serverSideInit(store, isServer);
  const { slug } = await query;
  // const pagePath = await subcategory && subcategory.length > 0
  //   ? { path: `categories/${category}/sub-categories`, id: subcategory }
  //   : { path: `categories`, id: category };
  // const pageData = await initPage(pagePath.path, pagePath.id);
  const pageData = { name: 'Shipping' };

  return { pageData, slug };
};

Shipp.propTypes = {
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  categories: PropTypes.array,
  promoBarMessages: PropTypes.array,
  slug: PropTypes.string,
  pageData: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    enabled: PropTypes.bool,
    additionalScripts: PropTypes.array,
    url: PropTypes.string,
    promoTopper: PropTypes.object,
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    canonicalUrl: PropTypes.string,
  }),
  menuOpen: PropTypes.string,
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  shippingCutoff: PropTypes.string,
  openCutoff: PropTypes.string,
  openBegin: PropTypes.string,
  openMenu: PropTypes.func,
  setLoadingState: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};

Shipp.displayName = 'Shipp';

export default withRedux(initRedux, state => ({
  isLarge: state.browser.greaterThan.medium,
  isLoading: state.App.isLoading,
  country: state.App.country,
  categories: state.App.categories,
  promoBarMessages: state.App.promoBarMessages,
  menuOpen: state.Menu.menuOpen,
  modalType: state.Modal.modalType,
  modalProps: state.Modal.modalProps,
  shippingCutoff: state.User.shippingCutoff,
  openCutoff: state.User.openCutoff,
  openBegin: state.User.openBegin,
}), { openMenu, showModal, hideModal, setLoadingState })(Shipp);
