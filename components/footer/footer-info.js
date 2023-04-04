import { Box, NavItem, config } from '../base';
import { transitions } from '../../styles';
import Logo from '../../svgs/logo-white.svg';
import Fb from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import Pintrest from 'react-icons/lib/fa/pinterest';
import GooglePlus from 'react-icons/lib/fa/google-plus';
import Youtube from 'react-icons/lib/fa/youtube';
import ProductSlider from '../../pages/slider';
const { breakpoints } = config.get();

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
		        float:'left',
		        textAlign: 'center',
		        [breakpoints[1]]: {
				        textAlign: 'left'
				      }
		    },
	  column2: {
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
		      ':hover': {
			            color: '#bbb'
			          }
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
class FooterInfo extends React.Component{

	  constructor(props) {
		      super(props);
		    }


	  componentDidMount() {
		       /*
		  var e = document.createElement("script");
		      e.type = "text/javascript",
			      e.async = true,
			      e.src = "//staticw2.yotpo.com/gzLifCZ7CnkFZTx4G1LaYq2lKf3l5GCCSQy6FivI/widget.js";
		      var t = document.getElementsByTagName("script")[0];
		      t.parentNode.insertBefore(e,t);

		      if (typeof yotpo !== 'undefined') {
			            setTimeout(function () {
					                yotpo.initWidgets();
					            }, 100)

			          }
		  */
		      		      
		      const y = document.createElement('script');
		      y.type = 'text/javascript';
		      y.async = true;
		      y.defer = true;
		      y.src = 'https://apis.google.com/js/platform.js?onload=renderBadge';

		      const s = document.createElement('script');
		      s.type = 'text/javascript';
		      s.async = true;
		      s.innerHTML = 'window.renderBadge = function() {'+
			  '    var ratingBadgeContainer = document.createElement("div");'+
			  '      document.body.appendChild(ratingBadgeContainer);'+
			  '      window.gapi.load(\'ratingbadge\', function() {'+
			  '        window.gapi.ratingbadge.render('+
			  '          ratingBadgeContainer, {'+
			  '            "merchant_id": 125459308,'+
			  '            "position": "BOTTOM_LEFT"'+
			  '          });           '+
			  '     });'+
			  '  }';
		 // console.log('In footer :s',s);

		      const x = document.createElement('script');
		      x.type = 'text/javascript';
		      x.innerHTML = 'window.___gcfg = {'+
			  '    lang: \'en_US\''+
			  '  };';
		  //console.log('In footer :y element ',y);
		 // console.log('In footer :x',x);
		  document.body.appendChild(y);
		  document.body.appendChild(s);
		  document.body.appendChild(x);
		    }


	  render() {
		      return (<Box>
			          	<ProductSlider />
			            {/*<foot style={styles.newsletter}>
				            <h4 style={styles.newslettertitle}>Sign Up for Our Newsletter</h4>
					            <input type="text" placeholder="Email Address" required="" value="" name="newsletterSignup.email" style={styles.inputfield}></input>
						            <button type="submit" style={styles.submitbutton}>Submit</button>
							          </foot>*/}
			            <Box css={styles.column} width={[1, 1/5]}>
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
			          </Box>
			            <Box css={styles.column2} width={[1, 1/5]}>
			        	  {/*<Box
					          is="a"
						          href="https://www.theelegantoffice.com/pages/reviews/"
							          white
								          css={styles.footerlist}
									        >
										        Review
											      </Box>*/}
			            <NavItem
			      									    href='/pages/reviews'
			      			                key={'reviews'}
			      			                /* route="reviewscomponent"
								 * 					 *           params={{ slug: 'reviews' }} */
			      			                route="pages"
			      			                params={{ page: 'reviews' }}
			      			                css={styles.footerlist}
			      			                white
			      			              >
			      			                Review
			      			              </NavItem>
			      			            <NavItem
			      									    href='/pages/about-us'
			      			                key={'about'}
			      			                /* route="detail"
								 * 					 *           params={{ slug: 'about-us' }} */
			      			                route="pages"
			      			                params={{ page: 'about-us' }}
			      			                css={styles.footerlist}
			      			                white
			      			              >
			      			                About Us
			      			              </NavItem>
			      			            <NavItem
			      									    href='/pages/contact-us'
			      			                key={'contact'}
			      			                /* route="contactcomponent"
								 * 					 *           params={{ slug: 'contact-us' }} */
			      			                route="pages"
			      			                params={{ page: 'contact-us' }}
			      			                css={styles.footerlist}
			      			                white
			      			              >
			      			                Contact Us
			      			              </NavItem>
			      			            </Box>
			      			            <Box css={styles.column2} width={[1, 1/5]}>
			      			             <NavItem
			      									    href='/pages/blog'
			      			                key={'blog'}
			      			                /* route="blogcomponent"
								 * 					 *           params={{ slug: 'blog' }} */
			      			                route="pages"
			      			                params={{ page: 'blog' }}
			      			                css={styles.footerlist}
			      			                white
			      			              >
			      			                Blog
			      			              </NavItem>
			      			              <NavItem
			      										  href='/pages/terms-conditions'
			      			                key={'termcondition'}
			      			                /* route="termcomponent"
								 * 					 *           params={{ slug: 'terms-conditions' }} */
			      			                route="pages"
			      			                params={{ page: 'terms-conditions' }}
			      			                css={styles.footerlist}
			      			                white
			      			              >
			      			                Terms & Conditions
			      			              </NavItem>
			      			              <NavItem
			      										  href='/pages/shipping'
			      			                key={'shipping'}
			      			                /* route="shipp"
								 * 					 *           params={{ slug: 'shipping' }} */
			      			                route="pages"
			      			                params={{ page: 'shipping' }}
			      			                css={styles.footerlist}
			      			                white
			      			              >
			      			                 Shipping
			      			              </NavItem>
			      			            </Box>
			      			            <Box css={styles.column2} width={[1, 1/5]}>
			      			            <NavItem
			      									    href='/pages/returns'
			      			                key={'returns'}
			      			                /* route="returncomponent"
								 * 					 *           params={{ slug: 'returns' }} */
			      			                route="pages"
			      			                params={{ page: 'returns' }}
			      			                css={styles.footerlist}
			      			                white
			      			              >
			      			                 Returns
			      			              </NavItem>
			      			        	    <NavItem
			      										  href='/pages/privacy-policy-legal-info'
			      			                key={'privacy'}
			      			                route="pages"
			      			                params={{ page: 'privacy-policy-legal-info' }}
			      			                css={styles.footerlist}
			      			                white
			      			              >
			      			                 Privacy Policy & Legal Info
			      			              </NavItem>
			            </Box>
			            <Box css={styles.column2} width={[1, 1/5]}>
			      <div id="y-badges"  class="yotpo yotpo-badge badge-init" data-appkey="gzLifCZ7CnkFZTx4G1LaYq2lKf3l5GCCSQy6FivI">&nbsp;</div>
			              <Box p={2} fontSize={3}>
			              <a href="https://www.facebook.com/theelegantoffice" target="_blank"><Box
			                is={Fb}
			                white
			                mr={1}
			                href = "https://www.facebook.com/theelegantoffice"
			                /></a>
			                <a href="https://twitter.com/ElegantOffice" target="_blank"><Box
			                is={Twitter}
			                white
			                mr={1}
			                href = "https://twitter.com/ElegantOffice"
			                /></a>
			                <a href="https://www.pinterest.com/elegantoffice/" target="_blank"><Box
			                is={Pintrest}
			                white
			                mr={1}
			                href = "https://www.pinterest.com/elegantoffice/"
			                /></a>
			                <a href="https://plus.google.com/+Theelegantoffice" target="_blank"><Box
			                is={GooglePlus}
			                white
			                mr={1}
			                href = "https://plus.google.com/+Theelegantoffice"
			                /></a>
			                <a href="https://www.youtube.com/theelegantoffice" target="_blank"><Box
			                is={Youtube}
			                white
			                href = "https://www.youtube.com/theelegantoffice"
			                /></a>
			              </Box>
			            {/* <a href="https://seal.digicert.com/seals/popup/?tag=DyuLHnsY&url=www.theelegantoffice.com&lang=en&cbr=1503489040098" target="_blank">
				          <img
					    	  is="a"
						        src="//seal.digicert.com/seals/cascade/?s=DyuLHnsY,10,m,www.theelegantoffice.com"
							      src={'/static/images/seal-image/seal.png'}
							            white
								          css={styles.imgfooter}
									        >
										  </img></a> */}

			            </Box>

			          </Box>)
		    }
}


export default FooterInfo;

