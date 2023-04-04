
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { InstantSearch} from 'react-instantsearch/dom';
import { Router } from '../../routes';
import { Box } from '../base';
import Header from '../header';
import Footer from '../footer';
import { ModalRoot } from '../modal';
import { LoadingOverlay } from '../loading';
import Meta from './meta';
import Content from './content';
import initPage from '../../lib/init-page';

class App extends React.Component {
	    constructor(props) {
		            super(props);
		            this.state = {
				              banner : ""
				            }
		        }

	   componentDidMount(){
		          initPage('homes', 'header_banner').then((banner) => {
				           this.setState({banner});
				         });

		       }

	    render() {
		          var props = this.props;
		          Router.onRouteChangeStart = () => props.setLoadingState(true);
		          Router.onRouteChangeComplete = () => props.setLoadingState(false);
		          Router.onRouteChangeError = () => props.setLoadingState(false);

		          return (
				          <InstantSearch
				            appId="CUDCYZHOXL"
				            apiKey="ddced29ac732fb0e4f278bcdf96a8405"
				            indexName="next-teo-products"
				          >

				            <Box p0 css={{ minHeight: '100vh' }}>
				              <Meta
				                pageTitle={props.metaTitle}
				                metaDescription={props.metaDescription}
				                canonicalUrl={props.canonicalUrl}
				              />
				              <Header
				                categories={props.categories}
				                promoBarMessages={props.promoBarMessages}
				                openMenu={props.openMenu}
				                showModal={props.showModal}
				                menuOpen={props.menuOpen}
				                isLarge={props.isLarge}
				                openBegin={props.openBegin}
				                openCutoff={props.openCutoff}
				                country={props.country}
				                banner={this.state.banner}
				              />
				              <Content>

				               {props.children}
				              </Content>
				              <Footer />
				              <ModalRoot
				                modalType={props.modalType}
				                modalProps={props.modalProps}
				                hideModal={props.hideModal}
				                isLarge={props.isLarge}
				              />
				              <LoadingOverlay isLoading={props.isLoading} />
				            </Box>
				          </InstantSearch>
				        );
		        }
}


App.propTypes = {
	  children: PropTypes.node,
	  categories: PropTypes.array,
	  promoBarMessages: PropTypes.array,
	  metaTitle: PropTypes.string,
	  metaDescription: PropTypes.string,
	  canonicalUrl: PropTypes.string,
	  menuOpen: PropTypes.string,
	  modalType: PropTypes.string,
	  modalProps: PropTypes.object,
	  openCutoff: PropTypes.string,
	  openBegin: PropTypes.string,
	  isLarge: PropTypes.bool,
	  isLoading: PropTypes.bool,
	  openMenu: PropTypes.func,
	  setLoadingState: PropTypes.func,
	  showModal: PropTypes.func,
	  hideModal: PropTypes.func,
};

export default App;

