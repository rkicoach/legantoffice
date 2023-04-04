/* eslint max-len: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Box, Flex } from '../../base';
import ModalBase from '../modal-base';
const styles = {
	  upperText: {
		      position: 'absolute',
		      top: '.75em',
		      left: '.75em',
		      color: '#fff',
		      textShadow: '0 2px 4px rgba(52,52,52,.9)'
		    },
	  wrapImg: {
		      position: 'relative'
		    }
}
const AddLogo = props => {
	  var htmlContent = props.htmlContent;
	  return (
		      !htmlContent ? (<ModalBase {...props} >
			            <Container>
			              <Text mb1 fontSize="4">
			                This offer applies to Dacasso® Desk Pads purchased either in a desk set or individually. We’ll deboss up to three initials in the bottom right corner of the pad using Times New Roman font. Enter the three letters (first, middle, last) on the product page, and we’ll do the rest!
			              </Text>
			              <Text mb1 fontSize="4">
			                This applies to single pad orders only. Although we make every effort to ship personalized orders the same day, this service may add a day for production. If you have a strict delivery date, please let us know. As a customized item, desk pads that have been personalized with initials cannot be returned for credit.
			              </Text>
			              <Flex>
			              <Box width={1/3} p1 css={styles.wrapImg}><Box is="img" width={1} src="https://cdn2.bigcommerce.com/n-d57o0b/k2r6aoh/product_images/uploaded_images/coaster-single-initial.jpg"/><Text css={styles.upperText} fontSize="4">Style B1 - Debossed</Text></Box>
			              <Box width={1/3} p1 css={styles.wrapImg}><Box is="img" width={1} src="https://cdn2.bigcommerce.com/n-d57o0b/k2r6aoh/product_images/uploaded_images/pad-single-initial.jpg"/><Text css={styles.upperText} fontSize="4">Style A1 - Debossed</Text></Box>
			              <Box width={1/3} p1 css={styles.wrapImg}><Box is="img" width={1} src="https://cdn2.bigcommerce.com/n-d57o0b/k2r6aoh/product_images/uploaded_images/red-initial.jpg" /><Text css={styles.upperText} fontSize="4">Style A1 - White Imprint</Text></Box>
			              </Flex>
			            </Container>
			          </ModalBase>) : (<ModalBase {...props} ><div dangerouslySetInnerHTML={{__html:htmlContent}} /></ModalBase>)
	  )};

AddLogo.propTypes = {
	  hideModal: PropTypes.func.isRequired,
};

export default AddLogo;

