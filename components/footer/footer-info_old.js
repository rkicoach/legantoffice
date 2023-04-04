import React from 'react';
import { Box } from '../base';
import { transitions } from '../../styles';
import Logo from '../../svgs/logo-white.svg';
import Fb from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import Pintrest from 'react-icons/lib/fa/pinterest';
import GooglePlus from 'react-icons/lib/fa/google-plus';
import Youtube from 'react-icons/lib/fa/youtube';
import ProductSlider from '../../pages/slider';

var footerUrl = "http://35.193.182.100";
const styles = {
  logo: {
    height: 'auto',
  },
  address: {
    fontStyle: 'normal',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: '700',
    display: 'block',
    ':hover': {
      opacity: 0.5,
      transition: `opacity ${transitions.duration} ${transitions.easing}`,
    },
  },
  column: {      
      width: '20%',
      float:'left',
  },
  column2: {   
      width: '20%',
      float:'left',   
      padding: '12px 6px',
      textAlign:'center',
  },
  address:{
    fontSize: '13px',
    marginBottom:'0',
    fontStyle:'normal',
  },
  footerlink:{
    fontSize: '13px',
    color:'#E8E8E8',
    marginBottom:'0',
    fontStyle:'normal',
    display:'inline-block',
    textDecoration:'none',
  },
  footerlist:{
    color:'rgb(232, 232, 232)',
    fontSize:'14px',
    padding: '5px 8px',
    fontWeight:'700',
    textAlign:'center',
    textDecoration:'none',
    display:'block',
  },
  newsletter:{
    width:'100%',
    padding:'0 0 70px 0',
    float:'left',
  },
  newslettertitle:{
    fontSize: '20px',
    color:'#E8E8E8',
    fontWeight:'700',
    marginBottom:'12px',
  },
  inputfield:{
    display: 'block',
    width: '298px',
    height: '32px',
    margin: '3px 12px 0 0',    
    paddingLeft: '8px',
    paddingRight: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    border:'1px solid rgba(0, 0, 0, 0.25)',
    borderRadius: '2px',
    float:'left',
  },
  submitbutton:{
    backgroundColor: '#2d936c',
    fontSize: '.9em',
    fontWeight: '700',
    borderRadius: '3px',
    padding: '.75em 1.5em',
    cursor: 'pointer',
    color: '#fff',
    border: 'none',
    float:'left',
  },
  rCjEAf:{
    backgroundColor: "#f5f5f5",
    position: 'fixed',
    bottom: '0',
    left: '0',
    padding: '0 50px 0 12px',
  },
  '::-webkit-input-placeholder': { /* Chrome/Opera/Safari */
    color: '#fff',  
  },
  '::-moz-input-placeholder': { /* Chrome/Opera/Safari */
    color: '#fff',  
  },
  '::-ms-input-placeholder': { /* Chrome/Opera/Safari */
    color: '#fff',  
  },
  '::-moz-placeholder': { /* Chrome/Opera/Safari */
    color: '#fff',  
  },
  white: {
    color: '#fff'
  }
};
const FooterInfo = () => (
  <footerr>
  	<ProductSlider />
    <foot style={styles.newsletter}>
      <h4 style={styles.newslettertitle}>Sign Up for Our Newsletter</h4>
      <input type="text" placeholder="Email Address" required="" value="" name="newsletterSignup.email" style={styles.inputfield}></input>
      <button type="submit" style={styles.submitbutton}>Submit</button>
    </foot>
    <foot style={styles.column}>
    <Box
      is={Logo}
      width={180}
      mb2
      css={styles.logo}
    />
    <Box
      is="address"
      white
      mb2
      css={styles.address}
    >
      5200 NW 43rd Street<br />
      Suite 102-256<br />
      Gainesville, FL 32606<br />
      <Box
      is="a"
      href="tel:866-433-7573"
      white
      css={styles.footerlink}
    >
      866-433-7573
    </Box>
    <Box
      is="a"
      href="mailto:sales@theelegantoffice.com"
      white
      css={styles.footerlink}
    >
      sales@TheElegantOffice.com
    </Box>
    </Box>    
  </foot>
    <foot style={styles.column2}>
	  <Box
      is="a"
      href="https://www.theelegantoffice.com/pages/reviews/"
      white
      css={styles.footerlist}
    >
      Review
    </Box>
	 <Box
      is="a"
      href={footerUrl+"/detail"}
      white
      css={styles.footerlist}
    >
      About Us
    </Box>
	 <Box
      is="a"
      href={footerUrl+"/contactcomponent"}
      white
      css={styles.footerlist}
    >
      Contact Us
    </Box>	
    </foot>
    <foot style={styles.column2}>
      <Box
      is="a"
      href={footerUrl+"/blogcomponent"}
      white
      css={styles.footerlist}
    >
      Blog
    </Box>
    <Box
      is="a"
      href={footerUrl+"/termcomponent"}
      white
      css={styles.footerlist}
    >
      Terms & Conditions
    </Box>
    <Box
      is="a"
      href={footerUrl+"/shipp"}
      white
      css={styles.footerlist}
    >
      Shipping
    </Box>
    </foot>
    <foot style={styles.column2}>
	<Box
      is="a"
      href={footerUrl+"/returncomponent"}
      white
      style={styles.footerlist}
    >
      Returns
    </Box>
	<Box
      is="a"
      href={footerUrl+"/privacycomponent"}
      white
      css={styles.footerlist}
    >
      Privacy Policy & Legal Info
    </Box>
	
    </foot>
    <foot style={styles.column2}>
      <Box p={2} fontSize={3}>
      <a href="https://www.facebook.com/theelegantoffice"><Box
        is={Fb}
        white
        mr={1}
        href = "https://www.facebook.com/theelegantoffice"
        /></a>
        <a href="https://twitter.com/ElegantOffice"><Box
        is={Twitter}
        white
        mr={1}
        href = "https://twitter.com/ElegantOffice"
        /></a>
        <a href="https://www.pinterest.com/elegantoffice/"><Box
        is={Pintrest}
        white
        mr={1}
        href = "https://www.pinterest.com/elegantoffice/"
        /></a>
        <a href="https://plus.google.com/+Theelegantoffice"><Box
        is={GooglePlus}
        white
        mr={1}
        href = "https://plus.google.com/+Theelegantoffice"
        /></a>
        <a href="https://www.youtube.com/theelegantoffice"><Box
        is={Youtube}
        white
        href = "https://www.youtube.com/theelegantoffice"
        /></a>
      </Box>
    <a href="https://seal.digicert.com/seals/popup/?tag=DyuLHnsY&url=www.theelegantoffice.com&lang=en&cbr=1503489040098"><img
	  is="a"
    src="//seal.digicert.com/seals/cascade/?s=DyuLHnsY,10,m,www.theelegantoffice.com"
    white
    css={styles.imgfooter}
    >
</img></a>
<div className="rCjEAf" style={styles.rCjEAf}>
	<Box is="a" white href="https://www.google.com/shopping/seller?q=theelegantoffice.com&amp;hl=en_US">
		<div className="ULIPpd">
			
			<div className="OKjXc">
				<Box left>
					<Box color="#e57125" is="span" fontSize={5}>4.9</Box> <img id="orange-stars" width="52" height="10" src="https://www.gstatic.com/verifiedreviews/orange_stars_large.png"></img>
				</Box>
			</div>
		</div>
		<img id="gcr-logo" className="uxoP6d" src="https://www.gstatic.com/verifiedreviews/en_US/gcr_logo_stacked.png"></img>
	</Box>
</div>
    </foot>
    
  </footerr>
  
);

export default FooterInfo;
