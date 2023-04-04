import React from 'react';
import $ from "jquery";
import axios from 'axios';
import { themeColors } from '../styles';

let product = ""
const style = {
	headingDeafult: {
		padding:"15px",
		fontSize:"40px",
		fontWeight: 'bold',
		marginBottom: '30px',
		alignContent:'center'
	},
	paragraph: {
		fontSize:"16px",
		marginBottom: '20px',
		color: themeColors.font,
		lineHeight: '20px'
	},
	paraWrap: {
		marginTop: '15px',
		textAlign: 'center'
	},
	image: {
		maxWidth: '100%'
	}	
}

class Default extends React.Component {
constructor(props) {
    super(props);
	}
	
    render(){
		return <div>
				<h1 style={style.headingDeafult}>No Data Found!</h1>
			</div>;
    }
}
export default Default;
