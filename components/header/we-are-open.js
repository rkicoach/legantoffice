import PropTypes from 'prop-types';
//import {FaUser, FaInfo,FaPhone, FaShoppingCart, FaCaretRight} from 'react-icons/lib/fa';
import FaUser from 'react-icons/lib/fa/user';
import FaInfo from 'react-icons/lib/fa/info';
import FaPhone from 'react-icons/lib/fa/phone';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import FaCaretRight from 'react-icons/lib/fa/caret-right';

import { isDuringRange } from '../../lib/date-time';
import { Box, Flex, Text } from '../base';
import { themeColors, transitions } from '../../styles';
import DesktopMenu from './desktop-menu';
import Contact from '../../components/contact';
import ContactProduct from '../../components/contactProduct';
import RequestCatalog from '../../components/requestCatalog';
import WeOpen from '../open';

import ReactGA from 'react-ga';

const styles = {
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    opacity: 1,
    transition: `opacity ${transitions.duration} ${transitions.easing}`,
    ':hover': {
      opacity: 0.7,
    },
    ':active': {
      opacity: 0.7,
      outline: 'none',
    },
    ':focus': {
      opacity: 0.7,
      outline: 'none',
    },
  },
  topicons: {
    paddingLeft: '10px',
    button: {
      background: 'none',
      border: 'none',
      color: 'rgb(130, 130, 130)',
    },
  },
  width: {
    width: '200px',
  },
  widthEditCheckout:{
	  backgroundColor:'#FF8C00',
	  color:'#fff',
	  fontWeight: 'bold',
    fontSize:'16px',
    width: '100%',
    borderWidth: 0,
  }
};

class WeAreOpen extends React.Component {
 
  constructor(props) {
    super(props);
		this.state = {
        /* openstate: [
          {
            "name": <Text is="span" fontSize={3} color={themeColors.subtle}><FaUser /></Text>,
            "order": 0,
            "slug": "user",
            "style": styles.width,
            "children": [
              {
                "name": "Sign In or Register",
                "order": 0,
                "slug": "https://shop.theelegantoffice.com/app/site/query/checkoutredirect.nl?c=1206101&n=1&ext=T&login=T",
                "click": this.openSignupUrl
              }
            ]
          },
          {
            "name": <Text is="span" fontSize={3} color={themeColors.subtle}><FaInfo /></Text>,
            "order": 1,
            "slug": "info",
            "style": styles.width,
            "children": [
              {
                "name": "Contact Us",
                "order": 0,
                "slug": "contact_us",
                "click": this.openModel
              },
              {
                "name": "Custom Products",
                "order": 1,
                "slug": "custom_products",
                "click": this.openModel
              },
              ((this.props.countryCode == 'US') ? {
                "name": "Request a Catalog",
                "order": 2,
                "slug": "request_catalog",
                "click": this.openModel
              } : {}
              )
            ]
          },
          {
            "name":  <Box is="text" style={{color:"#FF8C00"}} fontSize={3} color={themeColors.checkout}><FaShoppingCart /><script  type="text/javascript"  src='https://shop.theelegantoffice.com/app/site/query/getcartitemcount.nl?c=1206101&n=1' async></script></Box>,
            "order": 1,
            "slug": "shopping",
            "style": styles.width,
            "children": [
              {
                "name": <span>Edit/Checkout <FaCaretRight /></span>,
                "slug": "http://cart.theelegantoffice.com/co/cart.ssp?sc=3&whence=&is=cart",
                "click": this.openUrl,
                "style": styles.widthEditCheckout
               }
            ]
          }
        ] */
		  }
    }
    componentDidMount() {

      /**** for olark chat show on footer ***/
      (function (o, l, a, r, k, y) { if (o.olark) return; r = 'script'; y = l.createElement(r); r = l.getElementsByTagName(r)[0]; y.async = 1; y.src = '//' + a; r.parentNode.insertBefore(y, r); y = o.olark = function () { k.s.push(arguments); k.t.push(+new Date) }; y.extend = function (i, j) { y('extend', i, j) }; y.identify = function (i) { y('identify', k.i = i) }; y.configure = function (i, j) { y('configure', i, j); k.c[i] = j }; k = y._ = { s: [], t: [+new Date], c: {}, l: a }; })(window, document, 'static.olark.com/jsclient/loader.js');
      
          /* custom configuration goes here (www.olark.com/documentation) */
          // This line is required, even if already enabled in preferences
          olark.configure('features.prechat_survey', true);
      
          // Modification options
          olark.configure('Your Name', 'required');
          olark.configure('system.ask_for_email', 'optional');
          olark.configure('system.ask_for_phone', 'hidden');
          olark.identify('9806-427-10-8328');
      /**** for google analytics code  ***/
      ReactGA.initialize('UA-356003-1' , {gaOptions : ('create', 'theelegantoffice.com')})
	          {
	            var ga= ReactGA.ga();
	            ga('send', 'pageview',window.location.pathname);   // sends a pageview hit to Google Analytics and includes the path of the current page
	            ga('require', 'ecommerce');

	          }
	    function trackEcommerce() {
          this._addTrans = addTrans;
          this._addItem = addItems;
          this._trackTrans = trackTrans;
        }
      
        function addTrans(orderID,store,total,tax,shipping,city,state,country) {
          ga('ecommerce:addTransaction', {
            'id': orderID,
            'affiliation': store,
            'revenue': total,
            'tax': tax,
            'shipping': shipping,
            'city': city,
            'state': state,
            'country': country
          });
        }
      
        function addItems(orderID,sku,product,variation,price,qty) {
          ga('ecommerce:addItem', {
            'id': orderID,
            'sku': sku,
            'name': product,
            'category': variation,
            'price': price,
            'quantity': qty
          });
        }
      
        function trackTrans() {
          ga('ecommerce:send');
        }
      
        var pageTracker = new trackEcommerce();
    }
    openModel = (e)=>{
      var obj  = {}
      obj[e] = !this.state[e]
      this.setState(obj)
    }
    openUrl = (e)=>{
      window.location = (e)
    }
    openSignupUrl = (e)=>{
      window.location = (e)
    }

render(){
  const { currentDate, openCutoff, openBegin, categories, menuOpen, openMenu, cartData } = this.props;
  var openstate = [
    {
      "name": <Text is="span" fontSize={3} color={themeColors.subtle}><FaUser /></Text>,
      "order": 0,
      "slug": "user",
      "style": styles.width,
      "url" : "https://shop.theelegantoffice.com/myaccount-1-06-0/index.ssp?sc=6", //used in desktop-menu component
      "children": [
        {
          "name": "Sign In or Register",
          "order": 0,
          "slug": "https://shop.theelegantoffice.com/myaccount-1-06-0/index.ssp?sc=6",
          "click": this.openSignupUrl
        }
      ]
    },
    {
      "name": <Text is="span" fontSize={3} color={themeColors.subtle}><FaInfo /></Text>,
      "order": 1,
      "slug": "info",
      "style": styles.width,
      "children": [
        {
          "name": "Contact Us",
          "order": 0,
          "slug": "contact_us",
          "click": this.openModel
        },
        {
          "name": "Custom Products",
          "order": 1,
          "slug": "custom_products",
          "click": this.openModel
        },
        ((this.props.countryCode == 'US') ? {
          "name": "Request a Catalog",
          "order": 2,
          "slug": "request_catalog",
          "click": this.openModel
        } : {}
        )
      ]
    },
    {
      "name":  <Box is="text" style={{color: cartData > 0 ? "#FF8C00": '#9c9c9c'}} fontSize={3} color={themeColors.checkout}><FaShoppingCart />
      {cartData}</Box>,
      "order": 1,
      "slug": "shopping",
      "style": styles.width,
      "url" : "https://shop.theelegantoffice.com/co/cart.ssp?sc=3&whence=&is=cart", //used in desktop-menu component
      "children": [
        {
          "name": <span>Edit/Checkout <FaCaretRight /></span>,
          "slug": "https://shop.theelegantoffice.com/co/cart.ssp?sc=3&whence=&is=cart",
          "click": this.openUrl,
          "style": styles.widthEditCheckout
         }
      ]
    }
  ]

return(
 
  <Box mx2>
    <Flex
      flexDirection="row"
      flexWrap="nowrap"
      justifyContent="center"
      alignItems="center"
    >
      {this.props.isLarge && 
      <Box
        ml1
        fontSize={5}
      >
        {isDuringRange(currentDate, openBegin, openCutoff) && (
          <Text
            fontSize={6}
            color={themeColors.primary}
            center
          >
           
        </Text>
		
        )}
        <WeOpen />
        <Box
          is="a"
          href="tel:8664337573"
          ml1
          fontSize={5}
          bold
          color={themeColors.subtle}
          css={styles.link}
        >
          <FaPhone size={16} color={themeColors.subtle} /> 866-433-7573
        </Box>
		 
      </Box>
      }
      <Box css={styles.topicons}>
        <DesktopMenu
          //categories={this.state.openstate}
          categories={openstate}
          menuOpen={menuOpen}
          openMenu={openMenu}
        />
      </Box>
    </Flex>
    {/* {JSON.stringify(categories)} */}
    <Contact open={this.state.contact_us} hide={this.openModel} />
    <ContactProduct open={this.state.custom_products} hide={this.openModel} />
    <RequestCatalog open={this.state.request_catalog} hide={this.openModel} />
  </Box>
  )}
}



export default WeAreOpen;
