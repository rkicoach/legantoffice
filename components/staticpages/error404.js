import React from 'react'

const style = {
	ohContainer:{
		textAlign: 'center',
    	padding: '1em .75em',
		maxWidth: '68em',
    	marginLeft: 'auto',
    	marginRight: 'auto',
	},
	heading1:{
		fontSize: '60px',
		marginBottom: '30px',
		fontWeight: 'bold'
	},
	heading2:{
		fontSize: '30px',
		marginBottom: '30px',
		fontWeight: 'bold'
	},
	para:{
		fontSize: '18px',
		fontWeight: 'normal',
		marginTop: '30px',
		marginBottom: '30px'
	},
	phone:{
		color:'#1f76c3',
	}
}

export default class Error404 extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
		<div>
			<div style={style.ohContainer}>
				<h1 style={style.heading1}>Uh oh.</h1>
				<h2 style={style.heading2}>We couldn't find the page you're looking for.  Sorry about that!</h2>
				<p style={style.para}>Let's get back to a working page!  Use the menu or search bar above, or contact our customer service team toll-free if we can help.</p>
				<a style={style.phone} href="tel:8664337573">866-433-7573</a>
				<p style={style.para}>Error 404 - Page Not Found</p>
			</div>
		</div>
    )
  }
}