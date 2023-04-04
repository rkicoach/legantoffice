import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button'
import ImageGallery from 'react-image-gallery';
import { Flex, Box, Heading, Text } from '../base';
import $ from 'jquery';

let product = ""
const style = {
	paragraphAbout: {
		fontSize: "17px",
		fontWeight: 'normal',
	},
	olcontent: {
		fontSize: "18px",
		textDecoration: "none",
		fontWeight: "normal",
	},
	ulcontent: {
		fontSize: "18px",
		textDecoration: "none",
		fontWeight: "normal",
	},
	price_retail: {
		color: '#9c9c9c',
		textDecoration: 'line-through'
	},
	custom_wrap: {
		position: 'relative',
		border: '1px solid #ddd'
	},
	custom_head: {
		position: 'absolute',
		background: '#fff',
		top: '-15px',
		left: '15px',
		width: 'auto'
	}
}

class dataView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			storeDisplayName: '',
			images: []
		};

	}

	loadRedirectPage = (e, itemId,pageTitle,itemType) => {
		if (e) {

			e.preventDefault();
		}
	//	window.location = 'http://35.193.182.100/product/'+encodeURIComponent('/products/'+pageTitle+'?productId='+itemId+'&itemtype='+itemType);
		window.location = 'http://35.193.182.100/product/'+encodeURIComponent('/products/'+pageTitle);
	
}
	componentDidMount() {
	
	}
	
	render() {
	
	var data = this.props.similarData;
	var pageTitle  =''
	var custitem_price=''
	var storeDisplayName =''
	var discountPrice =''
	const images = []
	var itemId =''
	var descriptionName = ''
	if(data){
		if (data.readResponseList.readResponse[0].record.description) {
			descriptionName = data.readResponseList.readResponse[0].record.description;
		}
		if (data.readResponseList.readResponse[0].record.$attributes.internalId) {
			itemId = data.readResponseList.readResponse[0].record.$attributes.internalId;
		}
		if (data.readResponseList.readResponse[0].record.pageTitle) {
			pageTitle = data.readResponseList.readResponse[0].record.pageTitle;
		}
		if (data.readResponseList.readResponse[0].record.storeDisplayName) {
		 storeDisplayName = data.readResponseList.readResponse[0].record.storeDisplayName;
		}
		if (data.readResponseList.readResponse[0].record.pricingMatrix) {
			var pricingMatrix = data.readResponseList.readResponse[0].record.pricingMatrix.pricing;
			$.each(pricingMatrix, function (key, value) {
				if (value.priceLevel.name == 'MSRP') {
					$.each(value.priceList.price, function (key2, priceValue) {
						if (priceValue.quantity == '0.0') {
							custitem_price = priceValue.value;
							discountPrice = priceValue.discount;
						}
					})
				}

			})
		}
		if(data){
			var t = Object.values(data);
			console.log(t);
			console.log(t[0]['readResponse'][0]['record']['$attributes']['xsi:type']);
			var xsi = t[0]['readResponse'][0]['record']['$attributes']['xsi:type'].split(':');	
			var itemType = xsi[1];
		}	
	}

	images.push({ 'original': 'https://static.pexels.com/photos/33109/fall-autumn-red-season.jpg', 'thumbnail': 'https://static.pexels.com/photos/33109/fall-autumn-red-season.jpg'},{ 'original': 'https://static.pexels.com/photos/226475/pexels-photo-226475.jpeg', 'thumbnail': 'https://static.pexels.com/photos/226475/pexels-photo-226475.jpeg'})
		return (
			<Modal show={this.props.swatch} bsSize="large" aria-labelledby="contained-modal-title-lg" onHide={e => this.props.click(e)} className="custom-modal">
				<Modal.Header closeButton>
					<Modal.Title>Request a Quick View all Collection of this Product </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Flex>
						<Box width={1/2}>
							<ImageGallery
								items={images}
								slideInterval={2000}
								showFullscreenButton={false}
								useBrowserFullscreen={false}
								showPlayButton={false}
								autoPlay={true}
								width={200}
							/>
						</Box>
						<Box width={1/2}>
							<Heading is="h2" fontSize="3" mb2>{pageTitle}</Heading>
							<Text mb0>Dacasso</Text>
							<Text mb3>Item #: {storeDisplayName}</Text>
							<Box>
								<Text is="span" fontSize="4" css={style.price_retail}>$141.00</Text>
								<Text is="span" fontSize="3" bold ml2>${custitem_price}</Text>
							</Box>
							<Box is="fieldset" mt4 css={style.custom_wrap} p2>
								<Box is="legend" fontSize="4" px1 css={style.custom_head} color="#11416b" bold>Customize this Item</Box>
								<Flex justifyContent="space-around" alignItems="center">
									<Text>This product can be personalized for an elegant touch.</Text>
									<button type="button" className="btn btn-success">Continue</button>
								</Flex>
							</Box>
						</Box>
					</Flex>
					
				<div><a href={"http://35.193.182.100/product"+encodeURIComponent("/products/")}></a></div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="pull-left">Close</Button>
					<Button onClick={(e) => { this.loadRedirectPage(e, itemId,pageTitle,itemType);}} >View Product1</Button>
				</Modal.Footer>
			</Modal>

		);
	}


}


export default dataView;
