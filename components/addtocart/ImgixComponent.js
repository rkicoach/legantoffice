import { ModalView } from '../modal';
import { Box, Flex, Text, Heading, Image, NavItem, config } from '../base';
import PropTypes from 'prop-types';
import GoScreenFull from 'react-icons/lib/go/screen-full';
import Button from 'react-bootstrap/lib/Button';
import Imgix from 'react-imgix';

class ImgixComponent extends React.Component {
	    constructor(props) {
		            super(props);
		            this.state = {
				            };
		        }

	    render() {
		            var {imgTxtWord,imgTxtsize,imgTxtalign,imgAuto,imgFm,imgBg,imgFit,imgHeight,imgWeight,imgTxtclr,personalizeImgSrc} = this.props.objData;
		            return (
				                <div>
				                    <Box p2 width={1 / 2}>
				                        <Imgix src={`${personalizeImgSrc}?w=${imgWeight}&h=${imgHeight}&fit=${imgFit}&bg=${imgBg}&fm=${imgFm}&auto=${imgAuto}&txtalign=${imgTxtalign}&txtshad=10&txtfont=${imgTxtclr}&txt=${imgTxtWord}&txtsize=${imgTxtsize}&txtclr=${imgTxtclr}`} />
				                    </Box>
				                </div>
				            )
		        }
}

ImgixComponent.propTypes = {
	    objData: PropTypes.object
};
export default ImgixComponent

