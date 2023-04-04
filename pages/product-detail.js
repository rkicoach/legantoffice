import React from 'react';
import FormData from 'form-data';
import PropTypes from 'prop-types';
import $ from 'jquery';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import Zoom from 'react-img-zoom';
import custom from './custom.js';
import { Router } from '../routes';
import Swatch from './swatch';
import { FaClone, FaStar, FaTags, FaCaretRight, FaTextHeight, FaAlignRight, FaAngleLeft,FaAngleRight } from 'react-icons/lib/fa';
import MdAspectRatio from 'react-icons/lib/md/aspect-ratio';
import { Collapse, Button } from 'react-bootstrap';
import { Box, Flex, Text, Heading, Image, NavItem, config } from '../components/base';
import Yotpo from '../components/yotpo';
import DataView from '../components/similerItem/dataView';
import ShipTime from '../components/delivery/ship-time';
import transitMap from '../components/state/transit_times';
import AddToCartModals from '../components/addtocart';
import CartItem from '../components/addtocart/cartitem';
import {LoadingOverlay} from '../components/loading';
import OrderBy from '../components/delivery/order-by';
const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
const CLOUDINARY_UPLOAD_URL = 'Server URl';
const { shadows } = config;
import Meta from '../components/app/meta';
import {Helmet} from 'react-helmet'
//import Dialog from 'react-bootstrap-dialog';

var pID =null;
var pSku = null;
var pName = null;
var pImgUrl = null;
var relatedResourceObj = {
		'Personalization Options':'/pages/personalization' ,
		'Conference Table Renderings':'/pages/conference-table-renderings',
		'Types of Table Pads': '/pages/types-of-table-pads',
		'Desk Pad Styles':'/pages/desk-pad-styles',
		'Why Conference Table Pads':'/pages/why-conference-table-pads'
}
let product = ''
var productUrl = ''
var pageTitle = ''
const style = {
	productTable: {
		borderCollapse: 'collapse',
		width: '60%',
		fontSize: '14px',
	},
	productTableTh: {
		width: '50%',
		textAlign: 'left',
		padding: '8px',
		fontSize: '13px',
		fontWeight: 'bold',
		borderBottom: '2px solid #aeaeae',
	},
	productTableTd: {
		width: '50%',
		borderTop: '1px solid #aeaeae',
		textAlign: 'left',
		padding: '8px',
		fontSize: '13px',
		fontWeight: '400',
	},
	data_reactid: {
		fontSize: '17px',
	},
	base50: {
		flexBasis: '50%',
	},
	personalise_wrap: {
		border: '1px solid #ccc',
		padding: '16px',
		position: 'relative',
		lineHeight: 1,
		boxShadow: shadows.level3
	},
	personalise_heading: {
		position: 'absolute',
		top: '-10px',
		background: '#fff',
		color: '#0f2f58',
		fontSize: '1.3em',
		left: '50%',
		width: '100%',
		maxWidth: '90%',
		transform: 'translate(-50%)'
	},
	rrp_price: {
		textDecoration: 'line-through'
	},
	nav:{
		position:'absolute',
		color: '#a7a7a7',
		zIndex: 5,
		top: '45%',
		fontSize: '60px',
		cursor: 'pointer'
	},
	navLeft: {
		left: '-20px'
	},
	navRight: {
		right: '-20px'
	}
}

var similarItem = '';


class ProductDetail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			swatch: false,
			data_view: false,
			arrDataProduct: [],
			similarItem: [],
			cartDataValue: [],
			selectedOption: 5,
			dataRes: null,
			delStates: [],
			isStatus:true,
			Quantity:"1",
			resRegion: null,
			custitem_radio_imprint_options:'All',
			currentProdId:null,
			currentProdName:null,
			dropImageUrl:null,
			dataNotFound:null,
			structureData:null
		};
		//this.modalClick = this.modalClick.bind(this)
		this.getState = this.getState.bind(this);
		//Router.onRouteChangeComplete = () => props.setLoadingState(true);
	}
        
	renderItem2(item) {
		    return (<Zoom
			      img={item.original}
			      zoomScale={1.3}
			      width={400}
			      height={400}
			      />)
		  }

	onAddressChanged = (e) => {
		this.setState({ selectedOption: e.target.value })
	}
	openSwatch = (e) => {
		if (e) {

			e.preventDefault();
		}
		this.setState({
			swatch: !this.state.swatch
		})
	}
	openClosefullModel = (e, modal) => {
		if (e) {
			e.preventDefault();
		}
		this.setState({
			[modal]: !this.state[modal]
		})
	}
        
	closeForLuggage = (e, modal) => {
				if (e) {
								e.preventDefault();
							}
				this.setState({
								[modal]: false
							})
			}

	goToCart = (e, modal) => {
				window.location = 'https://shop.theelegantoffice.com/co/cart.ssp?sc=3&whence=&is=cart'
			}

	closeDataView = (e, id) => {
		if (e) {

			e.preventDefault();
		}
		this.setState({ productID: id }, function () {
			this.setState({
				data_view: !this.state.data_view
			})
		})

	}
	// on image drop on debosing
		onImageDrop = (file) => {
		if (file.length) {
			let file_extension = file[0].name.split('.').pop();
			if(file_extension == 'jpg' || file_extension == 'png')
			{
				this.setState({ dropImage: file[0].preview })
				
			}	else	{
				let preview_image = '/static/images/newFile.png';
				this.setState({ dropImage: preview_image })
			}
		/* if and else block based on file extension
			this.setState({ dropImage: file[0].preview })*/

			this.setState({ dropImageName: file[0].name }) 
			//console.log('file upload', file[0])
			this.handleImageUpload(file[0]);
		} else {
			this.setState({ dropImage: null })
		}
		
	}

	handleImageUpload(file) {
		var data = new FormData();
		let fileName = new Date().getTime()+file.name
		this.setState({ dropImageName: fileName })
		data.append('file', file, fileName);
	//	console.log('Form Data'+ JSON.stringify(data));
		const config =  { headers: {'Access-Control-Allow-Origin': '*' } }

	   axios.post('https://em.theelegantoffice.com/upload', data, config)
				  .then(response => {
					  			  console.log('Axios File Response' , response);
					  			  this.setState({ dropImageUrl: response.data })
					  		  })
				  .catch(error => {
					  			  console.log('Axios Error response '+ error);
					  		  });
	}
	
	getState(e){
		this.setState({selectValue:e.target.value});
	}
	
	customizedCart(data){
		var debos = "Debossing";
		var fcolor = "Full Color";
	   
		var exists = (data.indexOf(fcolor) > -1); //true
		var notExists = (data.indexOf(debos) > -1); //false
		if(exists == true && notExists == true){
			return 1;
		}else if(exists == true && notExists == false){
			return 2;
		}else if(exists == false && notExists == true){
			return 3;
		}else{
			return 0;
		}

	}
	
	/*modalClick(inventryId) {
		var objdata = {
			['productId']: "3334",
			['itemtypealgolia']: 'inventoryItem',
		}
		$.ajax({
			url: 'http://35.194.51.81/',
			type: 'POST',
			dataType: 'json',
			data: objdata,
			success: function (data) {
				this.setState({ dataRes: data });

			}.bind(this),
			error: function (xhr, status, err) {
				console.log(err);
			}.bind(this)
		});
	}*/
	cartDataValue(custitem_logo_price, custitem_pers_price, custitem_price, discountPrice, custitem_price_online, shipDate, custitem_ship_lead_time, selectValue, shipDate_lead, custitem_pers_lead_time, shipDate_logo, custitem_logo_lead_time, outOfStockMessage, custitem_cur_avail_gnv, resCountryCode, res_custitem_radio_imprint_options,custitem_logo_min) {
		var resDis = ((custitem_price - custitem_price_online) / custitem_price) * 100;
		resDis = Math.floor(resDis);
		return (
			this.state.cartDataValue.map((data, i) => (
				<Box key={i} width={1}>
					{(data == 'Blank') &&
						<Flex is='label' width={1} py2 css={{ cursor: 'pointer', borderBottom: '1px solid #ccc' }}>
							<Box width={20}>
								{data == 'Blank' &&
									<input type='radio' name="cartupdate" checked={this.state.selectedOption == 5} value='5' onChange={this.onAddressChanged} />
								}
							</Box>
							<Box width={1 / 2}>
								{(data == 'Blank') && 
									<Heading is='h5' fontSize='3' bold>
										${(Number(custitem_price_online).toFixed(2))} 
									</Heading>
								}
								{custitem_pers_price == custitem_price ? '' :
									data == 'Blank' ? 
									<Box>
										<Text is="span" css={style.rrp_price}>
											{resDis > 0 ?'$'+(Number(custitem_price).toFixed(2)) : ''}
										</Text>
										<Text is="span" color="#f00" ml2>
											{resDis > 0 ? resDis+'% Off':''}
										</Text>
									</Box> : ''
								}
							</Box>
							<Box width={1 / 2} pt2 >
								{resCountryCode != 'US' ? '' : 
									custitem_cur_avail_gnv == '0' ? <Box className="delivery-time--deadline">{data == 'Blank' ? outOfStockMessage : ''}</Box> :
									<Box right p0>
										{data == 'Blank' ? <ShipTime
											defaultOption="true"
											brand={"Dacasso"}
											currentDate={new Date()}
											shippingCutoff={shipDate}
											release_date={custitem_ship_lead_time}
											state={selectValue}
											radioOptions={data}
										/> : ''
										}
									</Box>	
								}
							</Box>
						</Flex>
					}
					{((data == 'Personalization') && (res_custitem_radio_imprint_options == "All" || res_custitem_radio_imprint_options == "With Personalization & Blank Only")) &&
						<Flex is='label' width={1} py2 css={{ cursor: 'pointer', borderBottom: '1px solid #ccc' }}>
							<Box width={20}>
								{((data == 'Personalization') && (res_custitem_radio_imprint_options == "All" || res_custitem_radio_imprint_options == "With Personalization & Blank Only")) &&
									<input type='radio' name="cartupdate" checked={this.state.selectedOption == 7} value='7' onChange={this.onAddressChanged} /> 
								}
							</Box>
							<Box width={1 / 2}>
								{((data == 'Personalization') && (res_custitem_radio_imprint_options == "All" || res_custitem_radio_imprint_options == "With Personalization & Blank Only")) && 
									<Heading is='h3' fontSize='4' bold>
										{Number(custitem_pers_price) <= Number(custitem_price_online) ? 'Personalize - FREE!' : 'Personalize'} 
									</Heading>
								}
								{((data == 'Personalization') && (res_custitem_radio_imprint_options == "All" || res_custitem_radio_imprint_options == "With Personalization & Blank Only")) &&
									<Heading is='h5' fontSize='3' bold>
										${(Number(custitem_pers_price).toFixed(2))} 
									</Heading> 
								}
							</Box>
							{((data == 'Personalization') && (res_custitem_radio_imprint_options == "All" || res_custitem_radio_imprint_options == "With Personalization & Blank Only")) &&
								<Box 
									color='#114e81'
									fontSize='30px'
									width={20}
									>
									<FaTextHeight />
								</Box>
							}
							<Box width={1 / 2} pt2 >
								{resCountryCode != 'US' ? '' : 
									custitem_cur_avail_gnv == '0' ? <Box className="delivery-time--deadline">{data == 'Blank' ? outOfStockMessage : ''}</Box> :
									<Box right p0>
										{(data == 'Personalization' && (res_custitem_radio_imprint_options == "All" || res_custitem_radio_imprint_options == "With Personalization & Blank Only")) ? <ShipTime
											brand={"Dacasso"}
											currentDate={new Date()}
											shippingCutoff={shipDate}
											release_date={custitem_pers_lead_time}
											state={selectValue}
											radioOptions={data}
										/> : ''
										}
									</Box>	
								}
							</Box>
						</Flex>
					}
					{i == '1' && (res_custitem_radio_imprint_options == "With Logo & Blank Only" || res_custitem_radio_imprint_options == "All") ? 
					<Flex is='label' width={1} py2 css={{ cursor: 'pointer', borderBottom: '1px solid #ccc' }}>
						<Box width={2 / 50}>
							<input type='radio' name="cartupdate" checked={this.state.selectedOption == 1 || this.state.selectedOption == 2 || this.state.selectedOption == 3} value={this.customizedCart(this.state.cartDataValue)} onChange={this.onAddressChanged} />
						</Box>
						<Box width={24 / 50}>
							<Heading is='h3' fontSize='4' bold>Order With A Logo 
								 </Heading>
							<Heading is='h5' fontSize='3' bold>${(Number(custitem_logo_price).toFixed(2))}</Heading>
							<Heading is='h5' fontSize='3.5' bold>$95 One-time setup charge
							 							</Heading>
														<Heading is='h5' fontSize='3.5' bold>Minimum Order of {custitem_logo_min || 1}
								 						</Heading>
							<Box className='card-price' left p0>
								<Text is='span' className='rrp-price' mr5></Text>
								<Text is='small' color='red' bold></Text>
							</Box>
						</Box>
						<Box
							color='#114e81'
							width={20}
							fontSize='30px'
								><MdAspectRatio />
						</Box>
						<Box width={24 / 50} pt2 >
							{custitem_cur_avail_gnv == '0' || resCountryCode != 'US' ? null :
								<Box right p0>
									<ShipTime
										brand={"Dacasso"}
										currentDate={new Date()}
										shippingCutoff={shipDate}
										release_date={custitem_logo_lead_time}
										state={selectValue}
										radioOptions={data}
									/>
								</Box>}
						</Box>
					</Flex> : ''
					}
				</Box>
			))
		)
	}

	async getProd(data){
		var homeUrl = window.location.origin;
		console.log('URL is '+homeUrl)
		var prodInternalId = data.item.$attributes.internalId;
		var requestURL = await fetch('https://cudcyzhoxl-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.24.7%3Breact-instantsearch%204.2.0%3BJS%20Helper%202.23.0&x-algolia-application-id=CUDCYZHOXL&x-algolia-api-key=ddced29ac732fb0e4f278bcdf96a8405', {
			method: 'post',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: `{"requests":[{"indexName":"next-teo-products","params":"query=&hitsPerPage=1&filters=objectID:${prodInternalId}"}]}`
		  })
	  	var response =await requestURL.json();
	  	var similarURL = response.results[0].hits[0].url;
	  	//Router.push(similarURL);
		window.location = homeUrl+similarURL;
	}

	async setUrlOnSimilarItem(similardata) {
				var homeUrl = window.location.origin;
				if(Array.isArray(similardata)) {
								var data = [];
								for(var i =0;i<similardata.length;i++) {
													var prodInternalId = similardata[i].item.$attributes.internalId;
													var requestURL = await fetch('https://cudcyzhoxl-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.24.7%3Breact-instantsearch%204.2.0%3BJS%20Helper%202.23.0&x-algolia-application-id=CUDCYZHOXL&x-algolia-api-key=ddced29ac732fb0e4f278bcdf96a8405', {
																			method: 'post',
																			headers: {
																									  'Content-Type': 'application/json'
																									},
																			body: `{"requests":[{"indexName":"next-teo-products","params":"query=&hitsPerPage=1&filters=objectID:${prodInternalId}"}]}`
																		  })
												  	var response =await requestURL.json();
														if(response.results[0].hits.length > 0) {
																					var similarURL = response.results[0].hits[0].url || "";
																					similardata[i]['similarURL'] = homeUrl + similarURL
																					data.push(similardata[i]);
																				}

												}
								this.setState({similarItem:data});
							}
				else{
						    var prodInternalId = similardata.item.$attributes.internalId;
						    var requestURL = await fetch('https://cudcyzhoxl-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.24.7%3Breact-instantsearch%204.2.0%3BJS%20Helper%202.23.0&x-algolia-application-id=CUDCYZHOXL&x-algolia-api-key=ddced29ac732fb0e4f278bcdf96a8405', {
							    	      method: 'post',
							    	      headers: {
									      	        'Content-Type': 'application/json'
									      	      },
							    	      body: `{"requests":[{"indexName":"next-teo-products","params":"query=&hitsPerPage=1&filters=objectID:${prodInternalId}"}]}`
							    	      })
						      var response =await requestURL.json();
									if(response.results[0].hits.length > 0) {
															var similarURL = response.results[0].hits[0].url || "";
															similardata['similarURL'] = homeUrl + similarURL
															this.setState({similarItem:similardata});
														}

						  }
			}

	simlerDataItem() {
		var similarItemdata = this.state.similarItem
		if(similarItemdata){
			if(Array.isArray(similarItemdata)){
				return (
						similarItemdata.map((data, i) => (
							i < 4 ?
								<Box key={'similer' + i} width={1/2} p1 onClick={this.getProd.bind(this,data)}>
									<NavItem href={data.similarURL} className='link-block card' >
										{/* <div className='card-topper'>
											<div className='card-topper-left'>
												<p>Dacasso</p>
											</div>
											<Box color='#f07830' className='card-topper-right'>
												<FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
												<span>5 Reviews </span>
											</Box>
										</div> */}
										<div className='card-figure'>
											<img className='CardImage' src={"https://storage.googleapis.com/next-teo.appspot.com/static/images/products/" + data.item.name + '/' + data.item.name + "-0.jpg"} />
										</div>
										<div className='card-body'>
											<Box className='card-title' fontSize='0.9em' dangerouslySetInnerHTML={{ __html: data.description }} />
											<div className='card-price'>
												<span className='rrp-price'>${data.basePrice} </span>
												<span> ${data.onlinePrice}</span>
												<input type="hidden" value={data.item.$attributes.internalId} />
											</div>
										</div>
									</NavItem>
									{/* <div className='card-qv-button'>
										<button className='quick-view' onClick={(e) => { this.closeDataView(e, data.item.$attributes.internalId); this.modalClick(data.item.$attributes.internalId) }} >Quick View</button>
									</div> */}
								</Box>
								: ''))
					)
			} else {
				return (
					<Box key={'similarData'} width={1/2} p1 onClick={this.getProd.bind(this,similarItemdata)}>
						<NavItem href={similarItemdata.similarURL} className='link-block card' >
							<div className='card-figure'>
								<img className='CardImage' src={"https://storage.googleapis.com/next-teo.appspot.com/static/images/products/" + similarItemdata.item.name + '/' + similarItemdata.item.name + "-0.jpg"} />
							</div>
							<div className='card-body'>
								<Box className='card-title' fontSize='0.9em' dangerouslySetInnerHTML={{ __html: similarItemdata.description }} />
								<div className='card-price'>
									<span className='rrp-price'>${similarItemdata.basePrice} </span>
									<span> ${similarItemdata.onlinePrice}</span>
									<input type="hidden" value={similarItemdata.item.$attributes.internalId} />
								</div>
							</div>
						</NavItem>
					</Box>
				)
			}
		}
	}
     componentDidUpdate(prevProps, prevState) {
	         if(this.state.selectedOption != prevState.selectedOption) {
			 			if(this.state.selectedOption == 1) {
											this.setState({"Quantity" : this.state.custitem_logo_min || 1});
										}else{
															this.setState({"Quantity" : 1});
														}
			 		}else{
									if(this.state.selectedOption == 1) {
														if(this.state.Quantity < (this.state.custitem_logo_min || 1)) {
																				this.setState({"Quantity" : this.state.custitem_logo_min || 1});
																			}
													}
								}
	     	}

	async componentDidMount() {
    var url_string = window.location.href;
    var productDataUrl = decodeURIComponent(url_string);
		var isItemAddedToCart = new RegExp('[\?&]' + "itemAddedToCart" + '=([^&#]*)').exec(window.location.href);
				//isItemAddedToCart = ['','T'];
				if(isItemAddedToCart && isItemAddedToCart[1] == 'T') {
								this.setState({itemAdded:true});
							}

    productUrl = productDataUrl;
    //console.log('Base URL '+productUrl);
    //var url = new URL(productUrl);

    var pathArray = window.location.pathname.split( '/' );
    //console.log('Base URL 2 '+pathArray[1]);
    var postURLData = '/'+pathArray[1]+'/'+pathArray[2]+'/';

    // var productId = url.searchParams.get('productId');
    // var item_type = url.searchParams.get('itemtype');
    // if (item_type == 'Assembly/Bill of Materials') {
    //  var itemtypealgolia = 'assemblyItem';
    // } else {
    //  var itemtypealgolia = 'inventoryItem';
    // };

    /** for get geo location ***/
    const self = this;

   //console.log('get all data'+ JSON.stringify(this));

    var jay = await fetch('https://cudcyzhoxl-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.24.7%3Breact-instantsearch%204.2.0%3BJS%20Helper%202.23.0&x-algolia-application-id=CUDCYZHOXL&x-algolia-api-key=ddced29ac732fb0e4f278bcdf96a8405', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: `{"requests":[{"indexName":"next-teo-products","params":"query=&hitsPerPage=1&filters=url:${postURLData}"}]}`
    })

var response =await jay.json()
axios.get('https://api.ipstack.com/check?access_key=2141b062793e5b4e7f6e55775547b1f5')
		 .then(function (response) {
			 			 var resCityVal = response.data.city;
			 			 var resRegionVal = response.data.region_code;
			 			 var resCountryVal = response.data.continent_name;
			 			 var resCountryCodeVal = response.data.country_code;
			                         if(response.data.ip == '180.151.0.210') {
							 							 resRegionVal = "AL";
							 							 resCountryCodeVal = "US";
							 						 }
			 			 self.setState({ resRegion: resRegionVal, resCountryCode: resCountryCodeVal, selectValue: resRegionVal })
			 	 });
        /* axios.get('https://ip-api.com/json')
      .then(function (response) {
        var resCityVal = response.data.city;
        var resRegionVal = response.data.region;
        var resCountryVal = response.data.country;
        var resCountryCodeVal = "US"// response.data.countryCode;
        self.setState({ resRegion: resRegionVal, resCountryCode: resCountryCodeVal, selectValue: resRegionVal })
	  });*/
	/*axios.get('https://freegeoip.net/json/')
      .then(function (response) {
        var resRegionVal = response.data.region_code;
        var resCountryCodeVal = response.data.country_code;
        self.setState({ resRegion: resRegionVal, resCountryCode: resCountryCodeVal, selectValue: resRegionVal })
	  });*/
     
    var alogoliaData = response;
    //console.log('PostData Algolia Outer response '+ JSON.stringify(alogoliaData) );

	if(alogoliaData.results[0].hits[0]){
		
		pID = alogoliaData.results[0].hits[0].id;
				pSku = alogoliaData.results[0].hits[0]["_highlightResult"]["sku"].value || "";//
				pName = alogoliaData.results[0].hits[0].name || "";//
	                	pImgUrl = alogoliaData.results[0].hits[0].image || "";		
		                this.setState({currentProdId:pSku})
				this.setState({currentProdName:pName})
		                this.setState({currentProdImgUrl:pImgUrl})
				this.setState({currentProdDesc:pName})
		var pIdType = alogoliaData.results[0].hits[0].itemType;

		if (pIdType == 'Assembly/Bill of Materials') {
		var itemtypealgolia = 'assemblyItem';
		} else {
		var itemtypealgolia = 'inventoryItem';
		};

		var current = this;
		var obj = {
		['productId']: pID,
		['itemtypealgolia']: itemtypealgolia,
		}
	} else {
		this.setState({dataNotFound:'yes'})
	}
	


		$.ajax({
			//url: 'http://35.194.51.81/',
			url: 'https://ns.theelegantoffice.com/',
			type: 'POST',
			dataType: 'json',
			data: obj,
			success: function (data) {
				this.setState({isStatus:false})
				/* if(data){
					window.location ='http://localhost:4000/defaultcomponent';
				} */ 
			if (data.readResponseList.readResponse[0].record) {
				if (data.readResponseList.readResponse[0].record.pageTitle) {
					pageTitle = data.readResponseList.readResponse[0].record.pageTitle;
				}
				if (data.readResponseList.readResponse[0].record.$attributes.internalId) {
					var ItemInternalId = data.readResponseList.readResponse[0].record.$attributes.internalId;
				}
				if (data.readResponseList.readResponse[0].record) {
					var countryofmanufacture = data.readResponseList.readResponse[0].record;

					countryofmanufacture = countryofmanufacture.countryOfManufacture;
					if(countryofmanufacture){
						countryofmanufacture = countryofmanufacture.replace(/[_-]/g, "");
						function firstToUpperCase(countryofmanufacture) {
							return countryofmanufacture.substr(0, 1).toUpperCase() + countryofmanufacture.substr(1);
						}
						countryofmanufacture = firstToUpperCase(countryofmanufacture);
					}
				}

				var t = Object.values(data);
				//console.log(t);comeent
				//console.log(t[0]['readResponse'][0]['record']['$attributes']['xsi:type']);
				//var xsi = t[0]['readResponse'][0]['record']['$attributes']['xsi:type'].split(':');	
				//var itemType = xsi[1];


				if (data.readResponseList.status.isSuccesss) {
					var custitem_status = data.readResponseList.status.isSuccesss;
				}
				var custitem_color = ''
				var custitem_exterior_material = ''
				var custitem_brand = ''
				var custitem_warranty = ''

				if (data.readResponseList.readResponse[0].record.featuredDescription) {
					var content = data.readResponseList.readResponse[0].record.featuredDescription;
				}
				var custitem_Description = content;
				var custitem_price = ''
				var custitem_collection = ''
				var custitem_series = ''
				var custitem_prd_size = ''
				var custitem_pad_size = ''
				var custitem_pad_design = ''
				var custitem_pad_type = ''
				var custitemfact_pack_type = ''
				var custitem_material_desc = ''
				var custitem_care_clean = ''
				var custitem_web_related_resources = {};
				var custitem_web_related_product = {};
				var custitem_prod_img_folder = {};
				var custitem_cartValue = {};
				var custitem_prd_weight = ''
				var custitem_logo_price = ''
				var custitem_pers_price = ''
				var custitem_pers_preview_url = ''
				var custCateogyName = ''
				var discountPrice = ''
				var categoryUrl = ''
				var custitem_price_online = ''
				var custitem_teo_product_name = ''
				var customCateogyNameData = ''
				var SubCategoryName = ''
				var categoryName = ''
				var SubCategoryUrl = ''
				var custitem_deboss_example_url = ''
				var custitem_uv_example_url = ''
				var custitem_deboss_color_options = ''
				var custitem_logo_line_url = ''
				var custitem_logo_lead_time = ''
				var custitem_monogram_style_options = ''
				var custitem_pers_lead_time = ''
				var custitem_monogram_color_options = ''
				var custitem_ship_lead_time = ''
				var storeDetailedDescription = ''
				var custitem_cur_avail_gnv = ''
				var custitem_radio_imprint_options = ''
				var custitem_radio_logo_options = ''
				var custitem_deboss_setup = ''
				var custitem_uv_setup = ''
				var custitem_pers_line_url = ''
				var custitem_logo_min = '';
				
				if (data.readResponseList.readResponse[0].record.outOfStockMessage) {
					var outOfStockMessage = data.readResponseList.readResponse[0].record.outOfStockMessage;
				}
				
				if (data.readResponseList.readResponse[0].record.storeDetailedDescription) {
					var storeDetailedDescription = data.readResponseList.readResponse[0].record.storeDetailedDescription;
				}
				
				if (data.readResponseList.readResponse[0].record.storeDisplayName) {
					var storeDisplayName = data.readResponseList.readResponse[0].record.storeDisplayName;
				}

				if (data.readResponseList.readResponse[0].record.customFieldList.customField) {
					var custofield = data.readResponseList.readResponse[0].record.customFieldList.customField;
				}

				if (data.readResponseList.readResponse[0].record.siteCategoryList) {
					var customCateogyName = data.readResponseList.readResponse[0].record.siteCategoryList.siteCategory;
					
					
					if(customCateogyName.constructor === Array){
						$.each(customCateogyName, function (key, value) {
							if (value.isDefault == "true") {
								customCateogyNameData = value.category.name;
								customCateogyNameData = customCateogyNameData.split(":");
	
								categoryName = customCateogyNameData[1];
								categoryUrl = categoryName.trim();
								categoryUrl = categoryUrl.replace(/ /g, "-");
								categoryUrl = categoryUrl.toLowerCase();
								SubCategoryName = customCateogyNameData[2];
	
								SubCategoryUrl = SubCategoryName.trim();
								SubCategoryUrl = SubCategoryUrl.replace(/ /g, "-");
								SubCategoryUrl = SubCategoryUrl.toLowerCase();
							}
						})
					}else{
						
						customCateogyName = customCateogyName.category.name;
						customCateogyName = customCateogyName.split(":");
						var categoryName = customCateogyName[1];
						var categoryUrl = categoryName.trim();
						categoryUrl = categoryUrl.replace(/ /g, "-");
						categoryUrl = categoryUrl.toLowerCase();
						var SubCategoryName = customCateogyName[2];
						if(SubCategoryName){
							var SubCategoryUrl = SubCategoryName.trim();
							SubCategoryUrl = SubCategoryUrl.replace(/ /g, "-");
							SubCategoryUrl = SubCategoryUrl.toLowerCase();
						}
					}
				}



				$.each(custofield, function (key, value) {

					if (value.$attributes.scriptId == 'custitem_exterior_material') {
						custitem_exterior_material = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_color') {
						custitem_color = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_brand') {
						custitem_brand = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_warranty') {
						custitem_warranty = value.value.name;
					}
					
					if (value.$attributes.scriptId == 'custitem_prod_img_folder') {
						custitem_prod_img_folder = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_collection') {
						custitem_collection = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_series') {
						custitem_series = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_prd_size') {
						custitem_prd_size = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_pad_size') {
						custitem_pad_size = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_pad_design') {
						custitem_pad_design = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_pad_type') {
						custitem_pad_type = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitemfact_pack_type') {
						custitemfact_pack_type = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_material_desc') {
						custitem_material_desc = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_care_clean') {
						custitem_care_clean = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_prd_weight') {
						custitem_prd_weight = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_logo_price') {
						custitem_logo_price = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_pers_price') {
						custitem_pers_price = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_pers_preview_url') {
	                                        custitem_pers_preview_url = value.value;
					        custitem_pers_preview_url = custitem_pers_preview_url.replace('https://storage.googleapis.com/next-teo.appspot.com/static/personalization/preview','https://next-teo-personalization.imgix.net')
					}
					if (value.$attributes.scriptId == 'custitem_teo_product_name') {
						custitem_teo_product_name = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_deboss_example_url') {
						custitem_deboss_example_url = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_uv_example_url') {
						custitem_uv_example_url = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_deboss_color_options') {
						custitem_deboss_color_options = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_logo_line_url') {
						custitem_logo_line_url = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_logo_lead_time') {
						custitem_logo_lead_time = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_monogram_style_options') {
						custitem_monogram_style_options = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_pers_lead_time') {
						custitem_pers_lead_time = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_monogram_color_options') {
						custitem_monogram_color_options = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_ship_lead_time') {
						custitem_ship_lead_time = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_cur_avail_gnv') {
						custitem_cur_avail_gnv = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_web_related_resources') {
						if (value.value.name) {
							custitem_web_related_resources['name'] = value.value.name;
						} else {
							$.each(value.value, function (keynew, resourceValue) {
								custitem_web_related_resources[keynew] = resourceValue.name;
							})
						}
					}
					if (value.$attributes.scriptId == 'custitem_im_method') {

						$.each(value.value, function (key3, cartValue) {
							custitem_cartValue[key3] = cartValue.name;
						})
					}
					if (value.$attributes.scriptId == 'custitem_radio_imprint_options') {
						custitem_radio_imprint_options = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_radio_logo_options') {
						custitem_radio_logo_options = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_deboss_setup') {
						custitem_deboss_setup = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_uv_setup') {
						custitem_uv_setup = value.value.name;
					}
					if (value.$attributes.scriptId == 'custitem_pers_line_url') {
						custitem_pers_line_url = value.value;
					}
					if (value.$attributes.scriptId == 'custitem_logo_min') {
												custitem_logo_min = value.value;
											}

				})

				/***** similar item record code start****/
				if (data.readResponseList.readResponse[0].record.presentationItemList) {
					similarItem = data.readResponseList.readResponse[0].record.presentationItemList.presentationItem;
					if(similarItem)
					this.setUrlOnSimilarItem(similarItem);
				}

				/***** similar item record code end****/
				if (data.readResponseList.readResponse[0].record.pricingMatrix) {
					var pricingMatrix = data.readResponseList.readResponse[0].record.pricingMatrix.pricing;
					$.each(pricingMatrix, function (key, value) {
						if (value.priceLevel.name == 'MSRP') {
							var arrvalue = value.priceList.price;
							if(Array.isArray(arrvalue)){
								$.each(value.priceList.price, function (key2, priceValue) {
									if (priceValue.quantity == '0.0') {
										custitem_price = priceValue.value;
										discountPrice = priceValue.discount;
									}
								})
							}else{
								custitem_price = value.priceList.price.value;
								discountPrice = value.priceList.price.discount;
							}
							
						}


						if (value.priceLevel.name == 'TEO Online Price') {
							var onlineArr = value.priceList.price;
							if(Array.isArray(onlineArr)){
								$.each(value.priceList.price, function (key2, priceValue) {
									if (priceValue.quantity == '0.0') {
										custitem_price_online = priceValue.value;
									}
								})
							}else{
								custitem_price_online = value.priceList.price.value;
							}
						
						}

					})
				}

				if (custitem_web_related_resources) {
					var arrDataProduct = $.map(custitem_web_related_resources, function (value, index) {

						var stringDataItem = [value];
						return stringDataItem;

					});
				}
				if (custitem_cartValue) {
					var cartDataValue = $.map(custitem_cartValue, function (value, index) {

						var cartDataItem = [value];
						return cartDataItem;

					});
				}
                                this.loadScript(storeDisplayName,custitem_prod_img_folder)
				this.setState({
					custitem_cur_avail_gnv, outOfStockMessage,ItemInternalId,storeDetailedDescription,custitem_ship_lead_time,custitem_monogram_color_options, custitem_pers_lead_time, custitem_monogram_style_options, custitem_logo_lead_time, custitem_logo_line_url, custitem_deboss_color_options, custitem_uv_example_url, custitem_deboss_example_url,
					custitem_price_online, custitem_teo_product_name, discountPrice, SubCategoryUrl, categoryUrl, SubCategoryName, categoryName, itemtypealgolia, pageTitle, custitem_color, custitem_exterior_material, custitem_brand, custitem_warranty, custitem_Description, custitem_status, custitem_price, custitem_web_related_resources, custitem_prod_img_folder, storeDisplayName, arrDataProduct, custitem_collection, custitem_series, custitem_prd_size, custitem_pad_size, custitem_pad_design, custitem_pad_type, custitemfact_pack_type, countryofmanufacture, custitem_material_desc, custitem_care_clean, custitem_prd_weight, cartDataValue, custitem_logo_price, custitem_pers_price, custitem_pers_preview_url,custitem_radio_imprint_options, custitem_radio_logo_options, custitem_deboss_setup,custitem_uv_setup, custitem_pers_line_url,custitem_logo_min
				});
				
			} else {
				this.setState({dataNotFound:'yes'})
			}
			}.bind(this),
			error: function (xhr, status, err) {
				console.log(err);
			}.bind(this)
		});

	}

        async loadScript(storeDisplayName,custitem_prod_img_folder){

				try {
								const yotpoResponse = await fetch(`https://api.yotpo.com/v1/widget/gzLifCZ7CnkFZTx4G1LaYq2lKf3l5GCCSQy6FivI/products/${this.state.currentProdId}/reviews.json?per_page=1000`);
												var jsonResult =await yotpoResponse.json();
											}catch(e) {
															console.log("Error Fetching Yotpo product :",this.state.currentProdId);
														}

		    if(jsonResult && jsonResult['response'] && jsonResult['response']['reviews']) {
			    			var reviewCount = jsonResult.response.reviews.length;
			    		}
		    var reviewJson = [];
		    for(var i=0; i<reviewCount; i++) {
			            var obj ={
					                    "@type": "Review",
					                    "reviewRating":{
								                          "@type": "Rating",
								                          "ratingValue": jsonResult.response.reviews[i].score
								                    },
					                    "author" : {
								                        "@type" : "Person",
								                        "name" : jsonResult.response.reviews[i].user.display_name
								                    },
					                    "reviewBody" : jsonResult.response.reviews[i].content
					                };
			             reviewJson.push(obj);
			        }
		    const structureData = {
			                  "@context" : "https://schema.org/" ,
			                  "@type" : "Product" ,
			                  "name" : pName ,
			                  "url" : productUrl ,
			                  "sku" : pSku
			        };

				if(reviewJson.length > 0) {
								structureData['aggregateRating'] = {
															"@type": "AggregateRating",
															"ratingValue": jsonResult.response.bottomline.average_score,
															"reviewCount": jsonResult.response.bottomline.total_review
											  };
								structureData['review'] = reviewJson
							}
                    var datacount = parseInt(custitem_prod_img_folder);
		    var count = 0;
		    var imageStructure =[];
		    if (storeDisplayName) {
			            for (var i = 0; i < datacount; i++) {
					                var imgNameUrl = 'https://storage.googleapis.com/next-teo.appspot.com/static/images/products/' + storeDisplayName + '/' + storeDisplayName + '-' + count + '.jpg';
					                count++;
					                var imageReview = {
								                "@type" : "ImageObject" ,
								                "url" : imgNameUrl

								            };
					                imageStructure.push(imageReview);
					            }
			        }
				if(imageStructure.length > 0) {
								structureData['image'] = imageStructure
							}
		    this.setState({structureData: JSON.stringify(structureData)});

	}

	_handleSubmit(e) {
		var cart_number = this.refs.number.value
		this.setState({cartNumber:cart_number})
		var url_string = window.location.href;
		var productDataUrl = decodeURIComponent(url_string);
		var url_string = productDataUrl;
		//var url = new URL(url_string);
		var cart_product_id = pID;
		 
		var cartRadiovalue = this.state.selectedOption;
		var res_custitem_radio_logo_options = this.state.custitem_radio_logo_options
		if(cartRadiovalue == "7"){
			this.openClosefullModel(e, 'personalize')
		} else if (cartRadiovalue == "1" || cartRadiovalue == "2" || cartRadiovalue == "3"){
			if(res_custitem_radio_logo_options == 'With Debossing Only'){
				this.openClosefullModel(e, 'debos')
			} else if(res_custitem_radio_logo_options == 'With UV Only'){
				this.openClosefullModel(e, 'Fullcolor')
			} else {
				this.openClosefullModel(e, 'addlogo')
			}
		} 
		/* else if (cartRadiovalue == "2"){
			this.openClosefullModel(e, 'debos')
		} else if (cartRadiovalue == "3"){
			this.openClosefullModel(e, 'Fullcolor')
		} */ 
		else {
			//this.dialog.showAlert('Item Added To Cart!')
			this.setState({itemVal:true})
		//	setTimeout(this.onHide.bind(this,cart_product_id, cart_number), 2000);
			//var cartvalue = 5;
			//window.location= 'http://cart.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid=' + cart_product_id + '&qty=' + cart_number + '&custcol3=' + cartvalue;
			var timeOut = function(){
								this.setState({itemVal:false});
							}
						timeOut = timeOut.bind(this);
						setTimeout(timeOut, 2000);
						var cartvalue = 5;
						var cartUrl = 'https://shop.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid=' + cart_product_id + '&qty=' + cart_number + '&custcol3=' + cartvalue;
				    console.log('cartUrl :' + cartUrl)
				    var homeUrl = window.location;
						var isItemAddedToCart = new RegExp('[\?&]' + "itemAddedToCart" + '=([^&#]*)').exec(window.location.href);
						if(isItemAddedToCart == null) {
											homeUrl = homeUrl + "?itemAddedToCart=T";
										}
						const config =  { headers: {'Access-Control-Allow-Origin': '*' } }


						$.ajax({
												url: cartUrl,
												dataType:'jsonp',
												headers : {
																			"Access-Control-Allow-Origin":"*",
																			"Content-Type":"application/json;charset=UTF-8",
																			'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT',
																			'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
																			'Access-Control-Max-Age': '1728000'
																		},
												type: 'POST',
												error : function (err) {
																			window.location = homeUrl
																		}
									  })
		}
	}

	onHide = (cart_product_id, cart_number) => {
		//this.dialog.hide()
		this.setState({itemVal:false})
		var cartvalue = 5;
//	window.location = 'https://shop.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid=' + cart_product_id + '&qty=' + cart_number + '&custcol3=' + cartvalue;
	     var cartUrl = 'https://shop.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid=' + cart_product_id + '&qty=' + cart_number + '&custcol3=' + cartvalue;

		    var homeUrl = window.location;
		var isItemAddedToCart = new RegExp('[\?&]' + "itemAddedToCart" + '=([^&#]*)').exec(window.location.href);
				if(isItemAddedToCart == null) {
								homeUrl = homeUrl + "?itemAddedToCart=T";
							}
		$.ajax({
							url: cartUrl,
							dataType:'jsonp',
		beforeSend: function() {
								//window.location = homeUrl
							},
							headers : {
													"Access-Control-Allow-Origin":"*",
													"Content-Type":"application/json;charset=UTF-8",
													'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT',
													'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
													'Access-Control-Max-Age': '1728000'
												},
							type: 'POST',
							success: function(data) {

								        },
							error : function (err) {
								//	homeUrl = homeUrl + "?itemAddedToCart=T";
								           window.location = homeUrl;//"https://www.google.com"
												}
				  })
		}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	renderRightNav(onClick, disabled){
		return (
      <Box
        disabled={disabled}
        onClick={onClick}
		css={{...style.nav, ...style.navRight}}
		>
		<FaAngleRight />
		</Box>
    )
	
	}
	renderLeftNav(onClick, disabled){
			return (
      <Box
        disabled={disabled}
        onClick={onClick}
		css={{...style.nav, ...style.navLeft}}
		>
		<FaAngleLeft />
		</Box>
    )
	}
	render() {
		
		//IST time convert into EST
		var valueHolidays =["10-09", "29-11", "15-11", "22-11"];
		
		var shipDate = null
		var shipDate = null
		var shipDate_logo = null;
		var shipDate_lead = null;
		var offset = -5.0
		var serverDate =''
		var clientDate = new Date();
		var options = { timeZone: "America/New_York"}, // you have to know that New York in EST
    	estTime = new Date();
 
		//console.log("Date and Time in EST is: " + estTime.toLocaleString("en-US", options));
		var utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
		serverDate = new Date(utc + (3600000*offset));
		var estDate = serverDate.toLocaleDateString();
		var currentDay = estDate.split("/");
		var CurdateEST = currentDay[1];
		var res_custitem_radio_imprint_options = this.state.custitem_radio_imprint_options

		
		var valueData = null
		var newData = null
			if(valueHolidays){
			valueHolidays.map((data, i) => {
				newData = data.split("-");
				var getDay = newData[0];
				var getMonth = newData[1];
				if (getDay == CurdateEST) {
					shipDate = estDate+", "+"3:30:00 PM";
					shipDate = new Date(shipDate)
				}else{
					shipDate = estDate+", "+"3:30:00 PM";
					shipDate = new Date(shipDate)
					
					var res_custitem_logo_lead_time = this.state.custitem_logo_lead_time;
					var res_custitem_pers_lead_time = this.state.custitem_pers_lead_time;
					 if(res_custitem_logo_lead_time){
						let res = res_custitem_logo_lead_time.split(" ");
						res_custitem_logo_lead_time = res[0];
						shipDate_logo = estDate+", "+"3:30:00 PM";
						shipDate_logo = new Date(shipDate_logo)
						shipDate_logo.setDate(shipDate_logo.getDate() + parseInt(res_custitem_logo_lead_time));
					}
				 	if(res_custitem_pers_lead_time){
						let res = res_custitem_pers_lead_time.split(" ");
						res_custitem_pers_lead_time = res[0];
						shipDate_lead = estDate+", "+"3:30:00 PM";
						shipDate_lead = new Date(shipDate_lead)						
						shipDate_lead.setDate(shipDate_lead.getDate() + parseInt(res_custitem_pers_lead_time));						
					} 
				}  	
			})
		}
		  
		const delStates = [];
		transitMap.forEach((value, key) => {
			const state = {
				name: key,
				value,
			};
			delStates.push(state);
		});

		var itemTtitle = '';
		var res = '';
		var menuhostUrl = 'http://35.193.182.100/';
		var currentUrl = productUrl;
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		var yyyy = today.getFullYear();

		if (dd < 10) {
			dd = '0' + dd
		}

		if (mm < 10) {
			mm = '0' + mm
		}

		today = mm + '/' + dd + '/' + yyyy;
		var currentDate = today;

		let dataVal = {
			swatchStatus: this.state.swatch, url: currentUrl, status: custitem_status, todayDate: currentDate
		}
		const storeDisplayName = this.state.storeDisplayName;
		const imgcount = this.state.custitem_prod_img_folder;
		var datacount = parseInt(imgcount);
		const images = []
				const { resCountryCode, resRegion, custitem_cur_avail_gnv, outOfStockMessage,ItemInternalId,storeDetailedDescription,categoryUrl,custitem_ship_lead_time,custitem_monogram_color_options, custitem_pers_lead_time, custitem_monogram_style_options, custitem_logo_lead_time, custitem_logo_line_url, custitem_deboss_color_options, custitem_uv_example_url, custitem_deboss_example_url, custitem_price_online, custitem_teo_product_name, discountPrice, SubCategoryUrl, categoryUrlData, categoryName, SubCategoryName, custitem_pers_price,custitem_pers_preview_url, custitem_logo_price, custitem_prd_weight, cartDataValue, custitem_care_clean, custitem_material_desc, countryofmanufacture, custitemfact_pack_type, custitem_pad_design, custitem_pad_size, custitem_prd_size, custitem_series, custitem_collection, similarItem, itemtypealgolia, pageTitle, arrDataProduct, custitem_color, custitem_exterior_material, custitem_brand, custitem_warranty, custitem_Description, custitem_status, custitem_price, custitem_web_related_resources, custitem_pad_type,custitem_deboss_setup,custitem_uv_setup, custitem_pers_line_url,custitem_logo_min } = this.state;

		var img
		var counti = 0;
		if (storeDisplayName != 'undefined') {
			for (var i = 0; i < datacount; i++) {
				var imgNameUrl = 'https://storage.googleapis.com/next-teo.appspot.com/static/images/products/' + storeDisplayName + '/' + storeDisplayName + '-' + counti + '.jpg';
				img = { 'original': imgNameUrl, 'thumbnail': imgNameUrl, 'originalAlt' : custitem_teo_product_name }
				images.push(img)
				counti++;
			}


		}
		let productId = this.state.productId; 
	//	const { resCountryCode, resRegion, custitem_cur_avail_gnv, outOfStockMessage,ItemInternalId,storeDetailedDescription,categoryUrl,custitem_ship_lead_time,custitem_monogram_color_options, custitem_pers_lead_time, custitem_monogram_style_options, custitem_logo_lead_time, custitem_logo_line_url, custitem_deboss_color_options, custitem_uv_example_url, custitem_deboss_example_url, custitem_price_online, custitem_teo_product_name, discountPrice, SubCategoryUrl, categoryUrlData, categoryName, SubCategoryName, custitem_pers_price,custitem_pers_preview_url, custitem_logo_price, custitem_prd_weight, cartDataValue, custitem_care_clean, custitem_material_desc, countryofmanufacture, custitemfact_pack_type, custitem_pad_design, custitem_pad_size, custitem_prd_size, custitem_series, custitem_collection, similarItem, itemtypealgolia, pageTitle, arrDataProduct, custitem_color, custitem_exterior_material, custitem_brand, custitem_warranty, custitem_Description, custitem_status, custitem_price, custitem_web_related_resources, custitem_pad_type,custitem_deboss_setup,custitem_uv_setup, custitem_pers_line_url,custitem_logo_min } = this.state;

		//if (pageTitle == 'undefined' && pageTitle == null) {
		if(this.state.dataNotFound == 'yes'){
			window.location.href = window.location.origin+'/'+'defaultcomponent';
		}
		var resDisinventory = ((custitem_price - custitem_price_online) / custitem_price) * 100;
		resDisinventory = Math.floor(resDisinventory);

		return (
			<div className='wrapper'>
			<Helmet script={[{
				                type: 'application/ld+json',
				                innerHTML:  `${this.state.structureData}`
				        }]} />
				{/* start top-bar */}
				<LoadingOverlay isLoading={this.state.isStatus} />			
				<div className='top-bar'>
					{/* start breadcrumb */}
					<div className='breadcrumb'>
						<Box is='ul' fontSize='0.8em' p0 mb0>
							<li>
								<NavItem route="index">Home</NavItem> <span>/</span>
								{/* <a href={menuhostUrl}>Home</a> <span>/</span> */}
							</li>
							<li>
								{/* <a href={menuhostUrl + 'shop/' + categoryUrl}>{categoryName}</a> <span>/</span> */}
								<a href={'/shop/' + categoryUrl}>{categoryName}</a> 
								{categoryName && <span>/</span>}
							</li>
							<li>
								{/* <a href={menuhostUrl + 'shop/' + categoryUrl + '/' + SubCategoryUrl}>{SubCategoryName}</a> <span>/</span> */}
								<a href={'/shop/' + categoryUrl + '/' + SubCategoryUrl}>{SubCategoryName}</a> 
								{SubCategoryName && <span>/</span>}
							</li>
							<li>
								<a href='#'>{custitem_teo_product_name}</a>
							</li>
						</Box>
					</div>
					{/* end breadcrumb */}
					{/* start product-brand */}
					<span className='product-brand'>{custitem_brand}</span>
					{/* end product-brand */}
				</div>
				{/* end top-bar */}
				{/* start product-heading */}
				<div className='product-heading'>
					<Heading is='h1' fontSize='1.95312em'>{custitem_teo_product_name}</Heading>
					<div className='product-sku'>Item # {storeDisplayName}</div>
				</div>
			{this.state.currentProdId ? (<div class="yotpo bottomLine"
								data-appkey="gzLifCZ7CnkFZTx4G1LaYq2lKf3l5GCCSQy6FivI"
								data-product-id={this.state.currentProdId}
								data-name={this.state.currentProdName}
								data-image-url={this.state.currentProdImgUrl}
								data-description={this.state.currentProdDesc}/>) : (<div></div>)}
				{/* end product-heading */}
				{/* start product-gallery */}
				<Flex flexWrap='wrap'>
					<Box width={6/10} className='product-gallery'>
						{/* start image-gallery-content */}
						<div  className='image-gallery-content'>
							{/* start image-gallery-slide-wrapper */}
							<Box className='image-gallery-slide-wrapper'>
								<ImageGallery
									items={images}
			                                                renderItem={this.renderItem2}
									//slideInterval={5000}
									showFullscreenButton={false}
									useBrowserFullscreen={false}
									showPlayButton={false}
									autoPlay={false}
									showNav={true}
									renderLeftNav= {this.renderLeftNav}
									renderRightNav={this.renderRightNav}
								/>
							</Box>
							
							{/* end image-gallery-slide-wrapper */}
						</div>
						{/* end image-gallery-content */}
					</Box>
					{/* end product-gallery */}
					{/* start product-details */}
					<Box width={4/10} className='product-details'>
						{/* start item-size */}
						<form method='post' id='myForm'>
							<div className='item-size'>
								<div className='personalization-wrap'>
									<Box width={1} css={style.personalise_wrap}>
										{this.props.isLarge&& <Heading is="h4" center css={style.personalise_heading} px2>Free Ground Shipping - Orders $49+</Heading>}
										{(itemtypealgolia == 'assemblyItem') ?
											<Flex flexWrap='wrap'>
												{this.cartDataValue(custitem_logo_price, custitem_pers_price, custitem_price, discountPrice, custitem_price_online, shipDate, custitem_ship_lead_time, this.state.selectValue, shipDate_lead, custitem_pers_lead_time, shipDate_logo, custitem_logo_lead_time, outOfStockMessage, custitem_cur_avail_gnv, resCountryCode, res_custitem_radio_imprint_options,custitem_logo_min)}
											</Flex>
											: <Flex is='label' width={1} py2 css={{ cursor: 'pointer', borderBottom: '1px solid #ccc' }}>
												<Box width={20}>
													<input type='radio' defaultChecked value='' />
												</Box>
												<Box width={1 / 2}>
													<Heading is='h5' fontSize='3' bold>${(Number(custitem_price_online).toFixed(2))}</Heading>
													<Box>
														<Text is="span" css={style.rrp_price}>
															{resDisinventory > 0 ?'$'+(Number(custitem_price).toFixed(2)) : ''}
														</Text>
														<Text is="span" color="#f00" ml2>
															{resDisinventory > 0 ? resDisinventory+'% Off':''}
														</Text>
													</Box>

												</Box>
												<Box width={1 / 2} pt2 >
													<Box right p0>
													<ShipTime
														brand={"Dacasso"}
														currentDate={new Date()}
														shippingCutoff={shipDate}
														release_date={custitem_ship_lead_time}
														state={this.state.selectValue}
														radioOptions={res_custitem_radio_imprint_options}
													/>	
													</Box>
												</Box>
											</Flex>}
									</Box>
								</div>
							</div>
							{/* end item-size */}
							{/* start qty-add-row */}
							<div>
						<Flex>
							<Box width={1/2}>
							<div>
								{custitem_cur_avail_gnv == '0' || resCountryCode != 'US' ? null : <OrderBy />}
							</div>
							<div className='product-qty-form'>
								<label className='qty-label' htmlFor='qty'>Quantity</label>
								<div className='qty-field'>
									<input name="Quantity" value={this.state.Quantity} min="1"  onChange={ this.handleChange.bind(this) }  type='number' ref='number' className='input-field' />
								</div>
							</div>
							</Box>
							<Box width={1/2}>
							<div>
									{custitem_cur_avail_gnv == '0' || resCountryCode != 'US' ? null : <Flex justifyContent="flex-end" mb1>
										<Text is='label' mr3>Shipping to- </Text>
										<div>
										<select value={this.state.selectValue} onChange={this.getState} className="form-control input-sm">
											{delStates.map(state => (
												<option key={state.name} selected={resRegion == state.name ? true : false} value={state.name}>{state.name}</option>
											))}
										</select>
										</div>
									</Flex>}
							</div>
								<div className='qty-action'>
									<input type='button' defaultValue='Add to cart' onClick={this._handleSubmit.bind(this)} className='btn btn-orange' />
									{/* <Dialog ref={(el) => { this.dialog = el }} /> */}
								</div>
								</Box>
								</Flex>
							</div>
						</form>
						{/* end product-details-inner */}
						{/* start related-resource */}
						{arrDataProduct && arrDataProduct != "Null"?<div className='related-resource'>
							<Heading is='h2' fontSize='1.25em'><FaClone /><span>Related Resources</span>

							</Heading>
							<Flex flexWrap='wrap' justifyContent='space-between'>
								{arrDataProduct.map((data, i) => (
									data == 'Request a Swatch' ? <Text is='a' href="#" mb1 onClick={(e) => this.openSwatch(e)} key={i}>{data} <FaCaretRight /></Text> :
										<NavItem 
											key={i} 
											route={
												(data == 'Personalization Options') ? '/pages/personalization' : 
												(data == 'Conference Table Renderings') ? '/pages/conference-table-renderings' :
												(data == 'Types of Table Pads') ? '/pages/types-of-table-pads' :
												(data == 'Desk Pad Styles') ? '/pages/desk-pad-styles' :
												(data == 'Why Conference Table Pads') ? '/pages/why-conference-table-pads' :
												menuhostUrl
											} 
						                                        href={`${relatedResourceObj[data]}`}
											params={{ slug: 'abcdef' }}>
												{data} <FaCaretRight />
											</NavItem>
								))}

							</Flex>
						</div>:''}
						{/* end related-resource */}
					</Box>
				</Flex>
				{/* end product-details */}
				{/* start left-section */}
				<Flex flexWrap='wrap'>
					<Box width={6/10} className='left-section'>
						<div className='product-info'>
							{/* <h2>Feature Description</h2> */}
							<div className="campaign-msg" dangerouslySetInnerHTML={{ __html: custitem_Description }}></div>
							<br></br>
							<div className="campaign-msg" dangerouslySetInnerHTML={{ __html: storeDetailedDescription }}></div>
						</div>
						{/* start table-scroll */}
						<div className='table-scroll'>
							<table className='table-striped' style={custom.productTable}>
								<thead>
									<tr>
										<th style={style.productTableTh}>Specifications</th>
										<th style={style.productTableTh}>Product Details</th>
									</tr>
								</thead>
								<tbody>
									{custitem_collection ?
										<tr>
											<td style={style.productTableTd}>Collection</td>
											<td style={style.productTableTd}>{custitem_collection}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_series ?
										<tr>
											<td style={style.productTableTd}>Series</td>
											<td style={style.productTableTd}>{custitem_series}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_color ?
										<tr>
											<td style={style.productTableTd}>Color</td>
											<td style={style.productTableTd}>{custitem_color}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_exterior_material ?
										<tr>
											<td style={style.productTableTd}>Material</td>
											<td style={style.productTableTd}>{custitem_exterior_material}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_prd_size ?
										<tr>
											<td style={style.productTableTd}>Product Dimensions</td>
											<td style={style.productTableTd}>{custitem_prd_size}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_prd_weight ?
										<tr>
											<td style={style.productTableTd}>Product Weight</td>
											<td style={style.productTableTd}>{custitem_prd_weight}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_pad_size ?
										<tr>
											<td style={style.productTableTd}>Pad Size</td>
											<td style={style.productTableTd}>{custitem_pad_size}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_pad_design ?
										<tr>
											<td style={style.productTableTd}>Pad Design</td>
											<td style={style.productTableTd}>{custitem_pad_design}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_pad_type ?
										<tr>
											<td style={style.productTableTd}>Pad Type</td>
											<td style={style.productTableTd}>{custitem_pad_type}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitemfact_pack_type ?
										<tr>
											<td style={style.productTableTd}>Packaging</td>
											<td style={style.productTableTd}>{custitemfact_pack_type}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_brand ?
										<tr>
											<td style={style.productTableTd}>Brand</td>
											<td style={style.productTableTd}>{custitem_brand}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{countryofmanufacture ?
										<tr>
											<td style={style.productTableTd}>Country of Origin</td>
											<td style={style.productTableTd}>{countryofmanufacture}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_warranty ?
										<tr>
											<td style={style.productTableTd}>Warranty</td>
											<td style={style.productTableTd}>{custitem_warranty}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_material_desc ?
										<tr>
											<td style={style.productTableTd}>Material Description </td>
											<td style={style.productTableTd}>{custitem_material_desc}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
									{custitem_care_clean ?
										<tr>
											<td style={style.productTableTd}>Care & Cleaning</td>
											<td style={style.productTableTd}>{custitem_care_clean}</td>
										</tr> : <tr className='hide'><td colSpan='2'></td></tr>}
								</tbody>
							</table>
						</div>
						{/* end table-scroll */}
					</Box>
					{/* end left-section */}
					{/* start product-review */}
					<Box width={4/10} className='product-review'>
						<h4 className="product-review-title">Product Reviews</h4>
			                        <Yotpo productId={this.state.currentProdId} productName={this.state.currentProdName} productDesc={this.state.currentProdDesc} productImgUrl={this.state.currentProdImgUrl}/>
			                        {custitem_collection && 
						<Flex 
						mb3 
							is="a" 
							//href={'/shop/' + categoryUrl + '?refinementList' + encodeURIComponent('[collection][0]=' + custitem_color)} p2 alignItems="center"
							href={'/shop/' + categoryUrl + '?q=collection&s='+custitem_collection} p2 alignItems="center"
							color='#fff'
							backgroundColor='#11416b'
						>
							<Box width={2 / 5} fontSize="1" center>
								<FaTags />
							</Box>
							<Box width={3 / 5}>
								<Heading is="h4" fontSize="4" mb1>View This Collection</Heading>
								<Text fontSize='0.8em'> All accessories that match this item <FaCaretRight /></Text>
							</Box>
						</Flex>
						}
						{/* end collection-access */}
						<div className='similiar-item'>
						</div>
						{/* end item-view-all */}
						{/* start similiar-item */}
						{this.state.similarItem && this.state.similarItem != "Null"?<div className='similiar-item'>
							<h6>Similar Items</h6><div className='product-grid'>
								{/* start card */}

								{this.simlerDataItem()}
								{/* end card */}

							</div></div>:''}
					</Box>
				</Flex>
				{/* end product-review */}
				{/* end similiar-item */}
				<AddToCartModals
				logoState={!!this.state.addlogo}
				debosState={!!this.state.debos}
				FullcolorState={!!this.state.Fullcolor}
				PersonalizeState={!!this.state.personalize}
			        ForLuggage={this.closeForLuggage}
				close={this.openClosefullModel}
				data={{ custitem_deboss_example_url, custitem_uv_example_url, custitem_logo_lead_time, custitem_logo_line_url, custitem_deboss_color_options, custitem_monogram_style_options, custitem_pers_lead_time, custitem_monogram_color_options, custitem_pers_line_url, custitem_pers_preview_url,custitem_logo_min }}
				onImageDrop={this.onImageDrop}
				dropImage={this.state.dropImage}
				dropImageName={this.state.dropImageName}
				ItemInternalId={ItemInternalId}
				cartCount={this.state.cartNumber}
				storeDisplayName={storeDisplayName}
				debossSetupId={custitem_deboss_setup}
				uvSetupId={custitem_uv_setup}
				imprintOptions={res_custitem_radio_imprint_options}
				dropImageUrl = {this.state.dropImageUrl}
			itemAdded = {!!this.state.itemAdded}
							gotocart = {this.goToCart}
			/>
				<Swatch click={this.openSwatch} swatch={dataVal} item={storeDisplayName} />
				<DataView similarData={this.state.dataRes} click={this.closeDataView} swatch={this.state.data_view} productId={this.state.productID} />
				<CartItem open={!!this.state.itemVal} close={this.openClosefullModel} />
				<Meta
					pageTitle={pageTitle}
					metaDescription={this.props.metaDescription}
					canonicalUrl={this.props.canonicalUrl}
				/>
			</div>
		)
	}
}

export default ProductDetail;


