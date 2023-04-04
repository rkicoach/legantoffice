import { ModalView } from '../modal'
import { Box, Flex, Text, Heading, Image, NavItem, config } from '../base';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
const style = {
	    image_height: {
		            height: '150px'
		        },
	    btn: {
		            borderRadius: 0,
		            backgroundColor:"orange"
		        },
	    boxBorder: {
		            borderRight: '1px solid #ccc'
		        },
	    boxBorderBottom: {
		            borderBottom: '1px solid #ccc'
		        },
	    imgFullColor: {
		            margin: '0 auto',
		            display: 'block',
		            maxHeight: '150px'
		        },
	    imgDebossColor: {
		            width: '100%',
		        }
}

const ItemAdded = ({ open, close ,gotocart}) => (
	    <ModalView.ModalView close={e => close(e, "itemAdded")} open={open} size="md" title="Item Added To Cart">
	        <ModalView.Body>
	            <Box px4>
	                <Flex  pb2 mb3>
	                    <Box css={style.boxBorder} pr4 width={1 / 2}>
	                        <input type='button' className='btn btn-orange' onClick={e => gotocart(e, "itemAdded")} defaultValue='Checkout / View Cart' />
	                    </Box>
	                    <Box pl4 width={1 / 2}>
	                        <input type='button' className='btn btn-orange' onClick={e => close(e, "itemAdded")} defaultValue='Continue Shopping'/>
	                    </Box>
	                </Flex>
	            </Box>
	        </ModalView.Body>
	        <ModalView.Footer/>
	    </ModalView.ModalView>
)

ItemAdded.propTypes = {
	    open: PropTypes.bool.isRequired,
	    close: PropTypes.func.isRequired
};
export default ItemAdded

