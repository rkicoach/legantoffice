import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initRedux from '../lib/init-redux';
import serverSideInit from '../lib/server-side-init';
import { openMenu } from '../actions/menu';
import { showModal, hideModal } from '../actions/modal';
import { setLoadingState } from '../actions/app';
import { Heading } from '../components/base';
import App from '../components/app';

// static components
import {Privacy, Error404, About, Contact, Reviews, Blog, TermsCondition, Shipping, Returns, AddLogo, TablePad, ConferenceTable, WhyConferencePads, B2b, DeskPad, Personalization, LetherType} from '../components/staticpages';


const Pages = props => {
  function page(slugName){
    var pageName;
    switch(slugName){
      case 'privacy-policy-legal-info':
        pageName = <Privacy />
        break;
      case 'about-us':
        pageName = <About />
        break;
      case 'contact-us':
        pageName = <Contact />
        break;
      case 'reviews':
        pageName = <Reviews />
        break;
      case 'blog':
        pageName = <Blog />
        break;
      case 'terms-conditions':
        pageName = <TermsCondition />
        break;
      case 'shipping':
        pageName = <Shipping />
        break;
      case 'returns':
        pageName = <Returns />
        break;
      case 'add-a-logo':
        pageName = <AddLogo />
        break;
      case 'types-of-table-pads':
        pageName = <TablePad />
        break;
      case 'conference-table-renderings':
        pageName = <ConferenceTable />
        break;
      case 'why-conference-table-pads':
        pageName = <WhyConferencePads />
        break;
      case 'b2b-solutions':
        pageName = <B2b />
        break;
      case 'desk-pad-styles':
        pageName = <DeskPad />
        break;
      case 'personalization':
        pageName = <Personalization />
        break;
      case 'leather-types':
        pageName = <LetherType />
        break;
      default:
        pageName = <Error404 />
    }
console.log(slugName)
    return pageName;
  }
  return(
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
    {/* <Heading bold is="h1" my={2}>
      {props.pageData.name}
    </Heading> */}
    {page(props.page)}
  </App>
)};

Pages.getInitialProps = async ({ store, isServer, query }) => {
  await serverSideInit(store, isServer);
  const { page } = await query;
  const pageData = { name: 'Privacy Policy & Legal Info', metaTitle:page };
  return { pageData, page };
};

Pages.propTypes = {
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

Pages.displayName = 'Pages';

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
}), { openMenu, showModal, hideModal, setLoadingState })(Pages);
