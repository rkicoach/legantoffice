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

class About extends React.Component {
constructor(props) {
    super(props);
	}
	return
    render(){
		return<div>
				<div><p style={style.paragraphAbout}>Welcome to The Elegant Office and thank you for visiting our store.  We introduced The Elegant Office.com in 1999, and although the world of online retail has changed significantly since then, our belief and commitment to providing superior customer service has remained a constant. Maybe that's old fashioned thinking, but we think it's the right approach.</p>
				<p style={style.paragraphAbout}>As you browse our site, make use of the enhanced sorting and search functions as well as our library of information (checkout Insights & Ideas). The intention is to make it easier for you to determine the best product for your needs. But if there are any unanswered questions, or if seeing a swatch of the matieral would be helpful, please let us know!</p>
				<p style={style.paragraphAbout}>Be assured our staff is not only familiar with the products we sell but also has over 30 years of industry experience. So whether you're in need of something FAST or interested in decorating with your logo, know that we understand the process. We'll guide you through the steps and keep you informed along the way. Add to that our Satisfaction Guarantee, and we hope you're as comfortable with us as we are with our products and services.</p>
				<p style={style.paragraphAbout}>We appreciate your interest and hope you'll enjoy exploring our carefully selected line of handcrafted desk and conference room accessories. Add the finishing touch to your spaces beautifully!</p>
				<p style={style.paragraphAbout}>Thank you for shopping at The Elegant Office!</p>
				</div>
			</div>;
    }
	
}
export default About;
