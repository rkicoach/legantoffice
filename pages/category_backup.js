import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initRedux from '../lib/init-redux';
import serverSideInit from '../lib/server-side-init';
import initPage from '../lib/init-page';
import { openMenu } from '../actions/menu';
import { showModal, hideModal } from '../actions/modal';
import { setLoadingState } from '../actions/app';
import CurrentCategory from '../components/instantsearch/virtuals/current-category';
import Results from '../components/instantsearch/results';
import App from '../components/app';

const Category = props => (
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
    <CurrentCategory
      category={props.category}
      subcategory={props.subcategory}
    />
    <Results
      isLarge={props.isLarge}
      pageName={props.pageData.name}
      openMenu={props.openMenu}
      menuOpen={props.menuOpen}
      tabs={props.tabs}
      activeTab={props.activeTab}
    />
  </App>
);
Category.getInitialProps = async ({ store, isServer, query }) => {
  await serverSideInit(store, isServer);
  const { category, subcategory, tabs, activeTab } = await query;
  const pagePath = await subcategory && subcategory.length > 0
    ? { path: `categories/${category}/sub-categories`, id: subcategory }
    : { path: `categories`, id: category };
  const pageData = await initPage(pagePath.path, pagePath.id);
  let title = subcategory?subcategory:'Search...'
  
  return { pageData:{...pageData, metaTitle: title}, category, subcategory, tabs, activeTab };
};

Category.propTypes = {
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  categories: PropTypes.array,
  promoBarMessages: PropTypes.array,
  category: PropTypes.string,
  subcategory: PropTypes.string,
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

Category.displayName = 'Category';

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
}), { openMenu, showModal, hideModal, setLoadingState })(Category);
