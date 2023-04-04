import React from 'react';
import App from '../components/app';
import Header from '../components/header';
import Footer from '../components/footer';
import { Box } from '../components/base';

let product = ""
const style = {
	paragraphAbout: {
		fontSize:"17px",
		fontWeight: 'normal',
	},
	linkTeg:{
		fontSize:'15px',
		textDecoration: 'none',
		color:'#000',
	},
	img:{
		width:'200px',
	}
	
}

class Help extends React.Component {
constructor(props) {
    super(props);
	}
	return
    render(){
		return<wraper>
			
			<script src='http://1206101.shop.netsuite.com/app/site/query/getitemname.nl?c=1206101&n=1&id=8'></script>
			<script src='https://vpromos.chetu.com/test/demo.js'></script>
		<img style={style.img}  src='http://1206101.shop.netsuite.com/core/media/media.nl?id=192&c=1206101&h=60930fd0ec04f709d2f1'></img>product image<br/>
		<a style={style.linkTeg} href = "http://1206101.shop.netsuite.com/app/site/query/cartredirect.nl?c=1206101&n=1&ext=T">Link to shopping cart page</a><br/>
		<a style={style.linkTeg} href = "http://1206101.shop.netsuite.com/app/site/query/checkoutredirect.nl?c=1206101&n=1&ext=T">Link to checkout page</a><br/>
		<a style={style.linkTeg} href = "http://1206101.shop.netsuite.com/app/site/query/checkoutredirect.nl?c=1206101&n=1&ext=T&login=T">Link to customer login page</a><br/>
		<a style={style.linkTeg} href = "http://1206101.shop.netsuite.com/app/site/query/checkoutredirect.nl?c=1206101&n=1&ext=T&login=T&logoff=T">
			Link to customer login page, first forgetting old customer's identity</a><br/>
		<a style={style.linkTeg} href = "http://1206101.shop.netsuite.com/app/site/query/checkoutredirect.nl?c=1206101&n=1&ext=T&login=T&newcust=T&reset=T">Link to new customer registration page</a><br/>
		<a style={style.linkTeg} href = "http://1206101.shop.netsuite.com/app/site/query/customercenterredirect.nl?c=1206101&n=1&ext=T">Link to customer center</a><br/>
		<a style={style.linkTeg} href="#"><script src='http://1206101.shop.netsuite.com/app/site/query/getcustomermessage.nl?c=1206101&n=1&ckinvalidate=T&prefixtext=Welcome%20&suffixtext=!&unrecognizedtext=Welcome%20to%20The+Elegant+Office'></script>Script to recognize and welcome the current customer</a><br/>
		<a style={style.linkTeg} href="#"><script src='http://1206101.shop.netsuite.com/app/site/query/getcartitemcount.nl?c=1206101&n=1'></script>Script to display the number of items in the cart</a><br/>
		<a style={style.linkTeg} href="#"><script src='http://1206101.shop.netsuite.com/app/site/query/getcarttotal.nl?c=1206101&n=1'></script>Script to display the current subtotal of items in the cart</a>
		

			<div className="yotpo yotpo-main-widget" 
			data-product-id="3266" 
			data-name="Abc" 
			data-url="http://localhost:4000/help" 
			data-image-url="The product image URL. URL escaped" 
			data-description="Product description"> 
			</div> 
			</wraper>   

    }
	
}
export default Help;
