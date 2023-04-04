import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../base';
import { themeColors } from '../../styles';
import Promo from './promo';
import FaClose from 'react-icons/lib/fa/close';

const styles = {
  container: {
    maxWidth: '68em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  crossIcon :{
    position: 'absolute',
    top: '5px',
    right: 0,
    color: '#fff',
    cursor: 'pointer'
  }
};


class PromoBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        open: true
      }
    }
    
    closePromo(){
	          sessionStorage.setItem('promoBarOpen', false);
	          this.setState({open: false})
	        }

	    componentDidMount() {
		          var promoBarOpen = sessionStorage.getItem('promoBarOpen');
		          if(promoBarOpen) {
				          this.setState({open:false})
				        }
		        }
	
	
	render(){
      var { messages, isLarge, showModal } = this.props;
      if(this.state.open){
        return (
          <Box bg={themeColors.primary} width={1}>
            <Flex
              justifyContent={isLarge ? 'space-between' : 'center'}
              alignItems="center"
              width={1}
              css={styles.container}
            >
              {isLarge ? (
                messages.map((message, i) => (
                  <Promo key={i} message={message} showModal={showModal} />
                ))
              ) : (
                <Promo message={messages[1]} showModal={showModal} />
              )}
              
            </Flex>
            <Box width={20} css={styles.crossIcon} onClick={()=>this.closePromo()}><FaClose /></Box>
          </Box>
        );
      }else{
        return <div></div>
      }
      

      
    }
};



export default PromoBar;
