/* eslint max-len: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Text, Heading, NavItem } from '../../base';
import ModalBase from '../modal-base';
import Router from 'next/router';

function addShipp(componentname, url) {
	    Router.push(componentname,url)
}

const FreeShipping = props => {
	  var htmlContent = props.htmlContent;
	  return (
		      !htmlContent ? (<ModalBase {...props} >
			            <Container>
			              <Text mb1>
			                FedEx Ground service is FREE on orders over $49 shipping within the 48 contiguous states.  For orders under $49, we offer FedEx Ground at a discounted flat rate of $4.95 per order.  Most orders ship the same day!
			              </Text>
			              <Heading is="h4" mb1>Expedited Services</Heading>
			              <Text mb1>
			                Expedited shipping options are available and may be selected during checkout. The discounted rates shown will be added to your cart. The number of transit days counts business days and does not include the day the carrier picks up the package. For Saturday delivery, please contact customer service.
			              </Text>
			              <Heading is="h4" mb1>International Orders</Heading>
			              <Text mb1>
			                Delivery options and associated shipping charges are shown during checkout. Our shipping rates are discounted, but if you’d prefer that we bill your shipper account, please let us know. Additional duties and / or taxes may be incurred.
			                <NavItem style={{cursor:'pointer',fontSize:'16px'}} center p1 key={'shipping'} route="pages" params={{ page: 'shipping' }}>Click here</NavItem>to view more details pertaining to international orders.
			              </Text>
			            </Container>
			          </ModalBase>) : (<ModalBase {...props} ><div dangerouslySetInnerHTML={{__html:htmlContent}} /></ModalBase>)
	  )};

FreeShipping.propTypes = {
	  hideModal: PropTypes.func.isRequired,
};

export default FreeShipping;

