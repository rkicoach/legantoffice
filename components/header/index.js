import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MdMenu from 'react-icons/lib/md/menu';
import { Box, Flex, NavItem, Overlay, config } from '../base';
import { themeColors, shadows } from '../../styles';
import Logo from '../../svgs/logo-main.svg';
import Autocomplete from '../instantsearch/widgets/autocomplete';
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile-menu';
import PromoBar from './promo-bar';
import WeAreOpen from './we-are-open';
import SearchIcon from 'react-icons/lib/fa/search';
const queryString = require('query-string');
const decodeUriComponent = require('decode-uri-component');
import { readFileSync } from 'fs';
import { join } from 'path';
const text = readFileSync(join(__dirname, 'value.html'), 'utf8');
var template = { __html: text };
const { breakpoints } = config.get();
import HomeBanner from '../home/home-banner';

const styles = {
	  container: {
		      boxShadow: shadows.level1,
		      position: 'relative'
		    },
	  top: {
		      maxWidth: '68em',
		      marginLeft: 'auto',
		      marginRight: 'auto',
		    },
	  logoContainer: {
		      position: 'relative',
		      paddingLeft: 15,
		      [breakpoints[1]]: {
			            maxHeight: 30,
			            paddingLeft: 0,
			          },
		    },
	  logo: {
		      height: '40px',
		      maxWidth: '100%',
		      ':after': {
			            content: '""',
			          },
		    },
};
const autoCompleteChange = function(e){
	  console.log(e.target.value)
}

class Header extends Component {
	  constructor(props) {
		      super(props);
		      this.state = {
			            refineName:'',
			            defaultRefine:'',
			            open: false,
			            isLarge: true
			          };
		    }

	  openSearch(){
		      this.setState({open : !this.state.open})
		    }

	  componentWillReceiveProps(nextProps){
		      const parsed = queryString.parse(location.search);
		      if(!(parsed.q && parsed.s)) {
			            this.setState({refineName:''})
			            this.setState({defaultRefine:''})
			          }
		    }

	  componentDidMount() {
		      this.setState({isLarge: window.innerWidth>767})
		      const parsed = queryString.parse(location.search);
		      var defaultRefine = [];
		  	      if(parsed['q']) {
				      		            if(Array.isArray(parsed['q'])) {
								    				            parsed['q'].forEach((val,i) => {
														    						              var refine = {};
														    						              refine['refineName'] = val;
														    						              refine['defaultVal'] = decodeUriComponent(parsed['s'][i]).split(',');
														    						              defaultRefine.push(refine);
														    						            })
								    				          }else{
														  						          var refine = {};
														  						          refine['refineName'] = parsed['q'];
														  						          refine['defaultVal'] = decodeUriComponent(parsed['s']).split(',');
														  						          defaultRefine.push(refine);

														  						        }
				      		          }

		  	      this.setState({defaultRefine})

		      var abc = document.getElementById("cartvalitemnet").innerHTML;
		      var xyz = abc.split('>');
		      if(xyz[2]){
			            sessionStorage.newCartVal = xyz[2];
			            this.setState({cartValue : xyz[2]})
			          } else {
					        this.setState({cartValue : sessionStorage.newCartVal})
					      }
		    }

	  render() {
		    const {
			        categories,
			        promoBarMessages,
			        menuOpen,
			        openMenu,
			        showModal,
			        openCutoff,
			        openBegin,
			        banner
			      } = this.props;
		  const {isLarge} = this.state;
		    return (
			          <Box
			            bgWhite
			            is="nav"
			            width={1}
			            css={styles.container}
			          >
			          <Box id="cartvalitemnet" style={{display:'none'}} dangerouslySetInnerHTML={template} />
			          <PromoBar
			            messages={promoBarMessages}
			            isLarge={isLarge}
			            showModal={showModal}
			          />
			          <Flex
			            justifyContent="space-between"
			            alignItems="center"
			            width={1}
			            bgWhite
			            css={styles.top}
			          >

			            <NavItem
			              href="/"
			              width={[140, 140, 180, 180]}
			              css={styles.logoContainer}
			            >
			            <small className="header-logo-since">Since 1999</small>
			              <Box
			                is={Logo}
			                css={styles.logo}
			              />
			            </NavItem>

			                <Autocomplete
			                refineName = {this.state.refineName}
			                defaultRefine = {this.state.defaultRefine}
			                position="relative"
			                width={1 / 2}
			                onkeydown={autoCompleteChange}
			                style={true}
			                open={this.state.open}
			                isLarge={isLarge}
			                />

			            <Box
			              is={SearchIcon}
			              fontSize={3}
			              onClick={()=>this.openSearch()}
			              />

			              <WeAreOpen
			                currentDate={new Date()}
			                openCutoff={new Date(openCutoff)}
			                openBegin={new Date(openBegin)}
			                categories={categories}
			                menuOpen={menuOpen}
			                openMenu={openMenu}
			                countryCode={this.props.country.country_code}
			                cartData={this.state.cartValue}
			                isLarge={isLarge}
			              />

			                {!isLarge &&
						            <MdMenu
						              size={24}
						              color={themeColors.dark}
						              style={{ cursor: 'pointer' }}
						              onClick={() => openMenu('mobile-menu')}
						            />
						            }

			          </Flex>


			          <Box bgWhite width={1}>
			            {isLarge ? (
					              <DesktopMenu
					                categories={categories}
					                menuOpen={menuOpen}
					                openMenu={openMenu}
					              />
					            ) : (
							                <MobileMenu
							                  categories={categories}
							                  menuOpen={menuOpen}
							                  openMenu={openMenu}
							                />
							              )}
			          </Box>
			          {!isLarge && (
					          <Overlay
					            isOpen={menuOpen === 'mobile-menu'}
					            onDismiss={() => openMenu(null)}
					          />
					        )}
			          <HomeBanner banner={banner}></HomeBanner>
			        </Box>
			        )
		    }
}


const catPropTypes = {
	  slug: PropTypes.string,
	  name: PropTypes.string,
};

Header.propTypes = {
	  categories: PropTypes.arrayOf(PropTypes.shape({
		      children: PropTypes.arrayOf(PropTypes.shape(catPropTypes)),
		      ...catPropTypes,
		    })),
	  promoBarMessages: PropTypes.array,
	  menuOpen: PropTypes.string,
	  isLarge: PropTypes.bool,
	  openCutoff: PropTypes.string,
	  openBegin: PropTypes.string,
	  openMenu: PropTypes.func,
	  showModal: PropTypes.func,
};

Header.displayName = 'Header';

export default Header;

