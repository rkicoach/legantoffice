import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Heading, Flex, Box } from '../../base';
import ModalBase from '../modal-base';
import ReactDOMServer from 'react-dom/server';

const AddLogo = props => {
	  var htmlContent = props.htmlContent;
	  return (
		      !htmlContent ? (<ModalBase {...props} >
			            <Container>
			              <Text mb1 fontSize='4'>
			                Adding your logo enhances your brand and adds a custom look to your order. For over 15 years, we’ve consistently received excellent feedback from our clients on our debossing technique and logo options. With our expertise and experience, it is easy to create a workplace environment that elegantly communicates your brand to colleagues, clients and meeting attendees.
			              </Text>
			        <Flex alignItems='center' flexWrap="wrap" mb2>
			          <Box>
			          <img src='https://cdn2.bigcommerce.com/n-d57o0b/k2r6aoh/templates/__custom/assets/promo_images/logo_modal/blackdeboss.jpg' />
			          </Box>
			          <Box p2>
			            <Heading is='h4' fontSize='3' mb1>Pricing</Heading>
			                <Text mb1>
			                  One-time setup fee of $95, plus an additional $4 per-piece run charge.
			              </Text>
			          </Box>
			        </Flex>
			        <Flex alignItems='center' mb2>
			          <Box>
			          <img src='https://cdn2.bigcommerce.com/n-d57o0b/k2r6aoh/templates/__custom/assets/promo_images/logo_modal/chocolatedeboss.jpg' />
			          </Box>
			          <Box p2>
			            <Heading is='h4' fontSize='3' mb1>Lead Time</Heading>
			            <Text mb1>
			              Production time is 5 business days after proof approval.
			            </Text>
			          </Box>
			        </Flex>
			        <Flex alignItems='center'>
			          <Box>
			          <img src='https://cdn2.bigcommerce.com/n-d57o0b/k2r6aoh/templates/__custom/assets/promo_images/logo_modal/goldfoil.jpg' />
			          </Box>
			          <Box p2>
			            <Heading is='h4' fontSize='3' mb1>Proofing</Heading>
			            <Text mb1>
			              After your order is placed we will send you a proof via email.
			            </Text>
			          </Box>
			        </Flex>
			        </Container>
			          </ModalBase>) : (<ModalBase {...props} ><div dangerouslySetInnerHTML={{__html:htmlContent}} /></ModalBase>)
	  )};

AddLogo.propTypes = {
	  hideModal: PropTypes.func.isRequired,
};

export default AddLogo;

