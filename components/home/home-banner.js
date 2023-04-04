import React from 'react';
import PropTypes from 'prop-types';
import {Text, Button, Box, Flex, NavItem} from '../base';
import { Link } from '../../routes';
import FaClose from 'react-icons/lib/fa/close';

class HomeBanner extends React.Component {
	     constructor(props){
		             super(props);
		             this.state = {
				                 isClosed : false
				             }
		          }

	     closePromo() {
		             sessionStorage.setItem('bannerClosed', true);
		             this.setState({isClosed:true})
		          }

	     componentDidMount() {
		            var bannerClosed = sessionStorage.getItem('bannerClosed');
		            if(bannerClosed) {
				             this.setState({isClosed:true})
				           }
		          }

	     render(){

		            var headerBanner = this.props.banner;
		             const styles = {
				                 container: {
							               "max-width": "1064px",
							               margin: "0 auto",
							               padding: "5px 20px",
							               width: "100%",
							               backgroundColor : "#" + headerBanner.backgroundColor,
							             },
				                 crossIcon :{
							                 float: "right",
							                 color: "#" + headerBanner.textColor
							             }
				             }

		             var styling={
                                                 textAlign: "center",
				                 backgroundColor : "#" + headerBanner.backgroundColor,
				                 color: "#" + headerBanner.textColor,
				                 width: '100%'
				             }
		             var closeBar = {
				                 float: "right",
				                 "margin-top": "-10px",
				                 color: "#" + headerBanner.textColor
				             }
		             var visible = headerBanner.enabled;
		             var isClosed = this.state.isClosed;
		             var url = headerBanner.url;

		             if(!url && !headerBanner.data) {
				               return (<div></div>)
				             }

		             if(!isClosed){
				               return (

						                   visible ? (
									               <Flex
									               justifyContent= 'space-between'
									                     alignItems="center"
									                     width={1}
									                     css={styles.container}

									               >
									               {url == "" ? (
											                     <Text style={styling}>
											                        {headerBanner.data || ""}
											                     </Text>
											                   ):(
														                 <Text is='a' href={url} style={styling}>
														                   {headerBanner.data || ""}
														                 </Text>
														               )}
									               <span style={closeBar}><Box  width={20} css={styles.crossIcon} onClick={()=>this.closePromo()}><FaClose /></Box></span>
									               </Flex>):(<div></div>)


						                )}
		              else {
				                 return <div></div>
					              };

		          }
}



HomeBanner.displayName = 'HomeBanner';
export default HomeBanner;

