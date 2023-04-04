import { ModalView } from '../modal'
import { Box, Flex, Text, Heading, Image, NavItem, config } from '../base';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
const style = {
    image_height: {
        height: '150px'
    },
    btn: {
        borderRadius: 0
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

const AddYourLogo = ({ open, close, imgUrl }) => (
    <ModalView.ModalView close={e => close(e, "addlogo")} open={open} size="lg" title="Add your Logo">
        <ModalView.Body>
            <Box px4>
                <Flex css={style.boxBorderBottom} pb4 mb3>
                    <Box css={style.boxBorder} pr4 width={1 / 2}>
                        <Heading is="h2" fontSize='24px' center mb2>Deboss or Foil Stamp</Heading>
                        <Flex mb3 justifyContent='center'>
                            <Box css={style.image_height} bg="#11416b" mr1 center>
                                <img style={style.imgDebossColor} src={imgUrl.custitem_deboss_example_url} />
                            </Box>
                            {/*<Box ml1 css={style.image_height} bg="#11416b" width={1 / 2}>
                                <img style={style.imgDebossColor} src={imgUrl.custitem_deboss_example_url} />
                            </Box>*/}
                        </Flex>
                        <Text mb3>Pressed down  into the item without color or stamped in foil.</Text>
                        <Button onClick={e => close(e, "debos")} bsStyle="success" style={style.btn}>Select & Continue</Button>
                    </Box>
                    <Box pl4 width={1 / 2}>
                        <Heading is="h2" fontSize='24px' mb2 center>Full Color</Heading>
                        <Box css={style.image_height} mb3>
                            <img style={style.imgFullColor} src={imgUrl.custitem_uv_example_url} />
                        </Box>
                        <Text mb3>Printed in full (CMYK) color capturing multiple colors and gradients.</Text>
                        <Button onClick={e => close(e, "Fullcolor")} bsStyle="success" style={style.btn}>Select & Continue</Button>
                    </Box>
                </Flex>
                <Text>
                    <strong>Process: </strong>A PDF proof will be emailed for your approval before production.
                </Text>
                <Text>
                    <strong>Pricing: </strong>$95 One-time Setup Fee for standard logo size.Logos are stored for five years.  A reorder setup charge will be incurred on future orders.
                </Text>
	<Text>
	                    <strong>Artwork: </strong>Vector files are needed in order to replicate logos with detail and accuracy.  Artwork that requires our cleaning up or converting may incur an art charge.  We will contact you if that is the case.
	                </Text>
            </Box>
        </ModalView.Body>
        <ModalView.Footer>
            <Button onClick={e => close(e, "addlogo")}>Exit</Button>
        </ModalView.Footer>
    </ModalView.ModalView>
)

AddYourLogo.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    imgUrl: PropTypes.object
};
export default AddYourLogo
