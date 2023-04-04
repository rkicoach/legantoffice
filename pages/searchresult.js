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

class searchresult extends React.Component {
constructor(props) {
    super(props);
	}
	return
    render(){
		return<div>
				<div>
					<p style={style.paragraphAbout}>
						Welcome to search result page.
					</p>
				</div>
			</div>;
    }
	
}
export default searchresult;
