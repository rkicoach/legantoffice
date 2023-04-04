import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initRedux from '../lib/init-redux';
import serverSideInit from '../lib/server-side-init';
import initPage from '../lib/init-page';
import { openMenu } from '../actions/menu';
import { showModal, hideModal } from '../actions/modal';
import { setLoadingState } from '../actions/app';
import App from '../components/app';
import HomeContent from '../components/home/content';
//import 'promise-polyfill/src/polyfill';
//import '/font-awesome/css/font-awesome.css';

const Home = props => (
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
    <HomeContent
      hero={props.pageData.homeHero}
      cards={props.pageData.homeCards}
      promos={props.pageData.homePromos}
      posts={props.pageData.homePosts}
    />
  </App>
);

Home.getInitialProps = async ({ store, isServer }) => {
  await serverSideInit(store, isServer);
  const pageData = await initPage('homes', 'default');
//  const banner = await initPage('homes', 'header_banner');
  return { pageData/*,banner*/ };
};

Home.propTypes = {
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  pageData: PropTypes.object,
  categories: PropTypes.array,
  promoBarMessages: PropTypes.array,
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

export default withRedux(initRedux, state => ({
  isLarge: state.browser.greaterThan.medium,
  isLoading: state.App.isLoading,
  categories: state.App.categories,
  country: state.App.country,
  promoBarMessages: state.App.promoBarMessages,
  menuOpen: state.Menu.menuOpen,
  modalType: state.Modal.modalType,
  modalProps: state.Modal.modalProps,
  shippingCutoff: state.User.shippingCutoff,
  openCutoff: state.User.openCutoff,
  openBegin: state.User.openBegin,
}), { openMenu, showModal, hideModal, setLoadingState })(Home);
