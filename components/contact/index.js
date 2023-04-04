import React from 'react';
import $ from "jquery";
import ImageGallery from 'react-image-gallery';
//import { Modal, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { themeColors } from '../../styles';
import { Box, Flex, Heading, Text } from '../base';

const style = {
    heading: {
        fontSize: "40px",
        fontWeight: 'bold',
        marginBottom: '30px'
    },
    paragraph: {
        color: themeColors.subtle
    },
    paraWrap: {
        marginTop: '15px',
        textAlign: 'center'
    },
    image: {
        maxWidth: '100%'
    },
    contentHead: {
        fontSize: "25px",
        fontWeight: 'bold',
        marginBottom: '15px',
        marginTop: '10px',
        textAlign: 'center'
    }
}

class Contact extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			ValidationError: {
				Uname: "",
				Lname: "",
			}
		}
    }
	
	
	 _handleSubmit(e) {
	 	var dataObj = {};
	 	var validateObject = {}
	 	validateObject['Uname'] = ""
	 	validateObject['Lname'] = ""
	 	validateObject['Cname'] = ""
	 	validateObject['Email'] = ""
	 	validateObject['Phone'] = ""
	 	validateObject['notes'] = ""
	 	validateObject['formname'] = ""
		 var count = 0;
		if (this.refs.firstname.value == "") {
			count = 1;
		   validateObject['Uname'] = "This field is required"
		   this.setState({ ValidationError: validateObject })
		   return false;
		} else {
		   var firstName = this.refs.firstname.value
		   var regex = /^[a-zA-Z]*$/;
		   if(!regex.test(firstName)){
			   count = 1;
			   validateObject['Uname'] = "Please enter only alphabetical letters."
			   this.setState({ ValidationError: validateObject })
				return false;
		   } else {
			   count = 0;
				dataObj['Uname'] = this.refs.firstname.value
		   }
		}
	 	if (this.refs.lastname.value == "") {
	 		count = 1;
			 validateObject['Lname'] = "This field is required"
			 this.setState({ ValidationError: validateObject })
			 return false;
	 	} else {
			var lastName = this.refs.lastname.value
			var regex = /^[a-zA-Z]*$/;
			if(!regex.test(lastName)){
				count = 1;
				validateObject['Lname'] = "Please enter only alphabetical letters."
				this.setState({ ValidationError: validateObject })
			 	return false;
			} else {
				count = 0;
			 	dataObj['Lname'] = this.refs.lastname.value
			}
	 	}
	 	if (this.refs.companyname.value == "") {
	 		count = 1;
			 validateObject['Cname'] = "This field is required"
			 this.setState({ ValidationError: validateObject })
			return false;
	 	} else {
	 		count = 0;
	 		dataObj['Cname'] = this.refs.companyname.value
		 }
		 if (this.refs.phone.value == "") {
			count = 1;
		   validateObject['Phone'] = "This field is required"
		   this.setState({ ValidationError: validateObject })
		   return false;
		} else {
		   var phone = this.refs.phone.value
		   if(phone.length != 10){
			   count = 1;
			   validateObject['Phone'] = "Please Enter Valid Phone Number"
			   this.setState({ ValidationError: validateObject })
				return false;
		   } else if(isNaN(phone)){
			   count = 1;
			   validateObject['Phone'] = "Please Enter Valid Phone Number"
			   this.setState({ ValidationError: validateObject })
				return false;
		   } else {
			   count = 0;
				dataObj['Phone'] = this.refs.phone.value
		   }
		}
	 	if (this.refs.email.value == "") {
	 		count = 1;
			 validateObject['Email'] = "This field is required"
			 this.setState({ ValidationError: validateObject })
			return false;
	 	} else {
			var email = this.refs.email.value;
			var atpos = email.indexOf("@");
			var dotpos = email.lastIndexOf(".");
			if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
				count = 1;
				validateObject['Email'] = 'Please Enter Valid Email'
				this.setState({ ValidationError: validateObject })
			 	return false;
			} else {
				count = 0;
	 			dataObj['Email'] = this.refs.email.value
			}
	 	}
	 	if (this.refs.notes.value == "") {
	 		count = 1;
			validateObject['notes'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
	 	}else{
	 		count = 0;
	 		dataObj['notes'] = this.refs.notes.value
	 	}	 	
		dataObj['formname'] = this.refs.formname.value
		var newdata = JSON.stringify(dataObj);
		if(count == 1){
	 		return false;
	 	} else {
	 		$.ajax({
				//url: "http://35.226.230.128/",
				url: "https://vm.theelegantoffice.com/",
				type: 'POST',
				data:  newdata ,
				success: function(data) {
					alert("message has been sent successfully!");
					location.reload();
				}.bind(this),
				error: function(xhr, status, err) {
				console.log(err);
			}.bind(this)
		});
		alert("Message has been sent successfully!");
		this.props.hide('contact_us')
	 	}
	 	return false;
	 }
	
    render() {
        return (
            <Modal show={this.props.open} onHide={e=>this.props.hide('contact_us')} className="custom-modal">
				<Modal.Header closeButton>
					<Modal.Title>Contact Us</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label htmlFor="username">First Name</label>
									<input name="firstname" ref="firstname" type="text" className="form-control" id="firstname"/>
									<input name="formname" ref="formname" type="hidden" className="form-control" value="contact us"/>
									<span className="help-block">{this.state.ValidationError.Uname}</span>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Last Name</label>
									<input name="lastname" ref="lastname" type="text" className="form-control" id="lastname"/>
									<span className="help-block">{this.state.ValidationError.Lname}</span>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Company Name</label>
								<input type="text" ref="companyname" name="swatchRequest.companyName" className="form-control" />
								<span className="help-block">{this.state.ValidationError.Cname}</span>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Phone</label>
									<input type="text" ref="phone" name="swatchRequest.phoneName" className="form-control" />
									<span className="help-block">{this.state.ValidationError.Phone}</span>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Email Address</label>
									<input type="text" ref="email" name="swatchRequest.email" className="form-control" />
									<span className="help-block">{this.state.ValidationError.Email}</span>
								</div>
							</div>
						</div>
						
						<div className="form-group">
							<label>How can we help?</label>
							<textarea ref="notes" name="swatchRequest.notes" placeholder="These notes will be submitted with your request."  className="form-control"></textarea>
							<span className="help-block">{this.state.ValidationError.notes}</span>
						</div>
						
						
						<Box backgroundColor='#e8e8e8' mb1 p2>
							<Text>The Elegant Office, Inc.</Text>
							<Text>5200 NW 43rd Street, Suite 102-256</Text>
							<Text>Gainesville, FL 32606 USA</Text>
							<Text><Text is="a" href="tel:8664337573">866-433-7573</Text></Text>
							<Text is="a" href="mailto:sales@TheElegantOffice.com">sales@TheElegantOffice.com</Text>
						</Box>
						<button onClick={this._handleSubmit.bind(this)} type="button" className="btn btn-success">Submit</button>
					</form>
				</Modal.Body>
			</Modal>
        )
    }
}

export default Contact;