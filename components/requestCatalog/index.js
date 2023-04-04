import React from 'react';
import $ from "jquery";
import axios from 'axios';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button'



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
	}
}

/**
 * Get current date
 */
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = mm+'/'+dd+'/'+yyyy;

class RequestCatalog extends React.Component {
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
		validateObject['address1'] = ""
		validateObject['address2'] = ""
		validateObject['city'] = ""
		validateObject['zip'] = ""
		validateObject['country'] = ""
		validateObject['state'] = ""
		validateObject['currenturl'] = ""
		validateObject['status'] = ""
		validateObject['currentdate'] = ""
		validateObject['notes'] = ""
		var count = 0;
		if (this.refs.username.value == "") {
			count = 1;
			validateObject['Uname'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		}else{
			var firstName = this.refs.username.value
		   	var regex = /^[a-zA-Z]*$/;
		   	if(!regex.test(firstName)){
			   	count = 1;
			   	validateObject['Uname'] = "Please enter only alphabetical letters."
			   	this.setState({ ValidationError: validateObject })
				return false;
		   	} else {
			   	count = 0;
				dataObj['Uname'] = this.refs.username.value
		   }
		}
		if (this.refs.lastName.value == "") {
			count = 1;
			validateObject['Lname'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		}else{
			var lastName = this.refs.lastName.value
			var regex = /^[a-zA-Z]*$/;
			if(!regex.test(lastName)){
				count = 1;
				validateObject['Lname'] = "Please enter only alphabetical letters."
				this.setState({ ValidationError: validateObject })
			 	return false;
			} else {
				count = 0;
			 	dataObj['Lname'] = this.refs.lastName.value
			}
		}
		if (this.refs.companyName.value == "") {
			count = 1;
			validateObject['Cname'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		}else{
			count = 0;
			dataObj['Cname'] = this.refs.companyName.value
		}
		if (this.refs.Email.value == "") {
			count = 1;
			validateObject['Email'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		}else{
			var email = this.refs.Email.value;
			var atpos = email.indexOf("@");
			var dotpos = email.lastIndexOf(".");
			if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
				count = 1
				validateObject['Email'] = 'Please Enter Valid Email'
				this.setState({ ValidationError: validateObject })
				return false;
			} else {
				count = 0;
				dataObj['Email'] = this.refs.Email.value
			}
		}
		if (this.refs.Phone.value == "") {
			count = 1;
			validateObject['Phone'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		}else{
			var phone = this.refs.Phone.value
			if(phone.length != 10){
				count = 1
				validateObject['Phone'] = "Please Enter Valid Phone Number"
				this.setState({ ValidationError: validateObject })
				return false;
			} else if(isNaN(phone)){
				count = 1
				validateObject['Phone'] = "Please Enter Valid Phone Number"
				this.setState({ ValidationError: validateObject })
				return false;
			} else {
				count = 0;
				dataObj['Phone'] = this.refs.Phone.value
			}
		}
		if (this.refs.address1.value == "") {
			count = 1;
			validateObject['address1'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		}else{
			count = 0;
			dataObj['address1'] = this.refs.address1.value
		}

		dataObj['address2'] = this.refs.address2.value		

		if (this.refs.city.value == "") {
			count = 1;
			validateObject['city'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		} else {
			var cityVal = this.refs.city.value
			var regex = /^[a-zA-Z]*$/;
			if(!regex.test(cityVal)){
				validateObject['city'] = "Please Enter Valid City Name"
				this.setState({ ValidationError: validateObject })
				return false;
			} else {
				count = 0;
				dataObj['city'] = this.refs.city.value
			}
		}
		if (this.refs.zip.value == "") {
			count = 1;
			validateObject['zip'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		}else{
			var zipVal = this.refs.zip.value
			if(isNaN(zipVal)){
				count = 1
				validateObject['zip'] = "Please Enter Valid Zip Code"
				this.setState({ ValidationError: validateObject })
				return false;
			} else {
				count = 0;
				dataObj['zip'] = this.refs.zip.value
			}
		}
		/* if (this.refs.country.value == "") {
			count = 1;
			validateObject['country'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		} else {
			var countryVal = this.refs.country.value
			var regex = /^[a-zA-Z]*$/;
			if(!regex.test(countryVal)){
				validateObject['country'] = "Please Enter Valid Country Name"
				this.setState({ ValidationError: validateObject })
				return false;
			} else {
				count = 0;
				dataObj['country'] = this.refs.country.value
			}
		} */
		dataObj['country'] = this.refs.country.value
		
		if (this.refs.state.value == "") {
			count = 1;
			validateObject['state'] = "This field is required"
			this.setState({ ValidationError: validateObject })
			return false;
		} else {
			var stateVal = this.refs.state.value
			var regex = /^[a-zA-Z]*$/;
			if(!regex.test(stateVal)){
				validateObject['state'] = "Please Enter Valid State Name"
				this.setState({ ValidationError: validateObject })
				return false;
			} else {
				count = 0;
				dataObj['state'] = this.refs.state.value
			}
		}

		dataObj['currentdate'] = this.refs.currentdate.value

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
					alert("Message has been sent successfully!");
					location.reload();
					
				}.bind(this),
				error: function(xhr, status, err) {
				console.log(err);
			}.bind(this)
		});
		alert('Message has been sent successfully!')
		this.props.hide('request_catalog')
		}
		return false;
	}

	render() {
		
		return (
			<Modal show={this.props.open} onHide={e=>this.props.hide('request_catalog')} className="custom-modal">
				<Modal.Header closeButton>
					<Modal.Title>Catalog Request</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form ref='user_form' onSubmit={this.onSubmit}>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label htmlFor="username">First Name</label>
									<input name="username" ref="username" type="text" className="form-control" id="username" placeholder="Username" />									
									<input name="formname" ref="formname" type="hidden" className="form-control" value="catalog-request"/>									
									<input name="currentdate" ref="currentdate" type="hidden" className="form-control" value={today} />
									<span className="help-block">{this.state.ValidationError.Uname}</span>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Last Name</label>
									<input type="text" required="" className="form-control" ref="lastName" name="swatchRequest.lastName" />
									<span className="help-block">{this.state.ValidationError.Lname}</span>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Company Name</label>
									<input type="text" ref="companyName" name="swatchRequest.companyName" className="form-control" />
									<span className="help-block">{this.state.ValidationError.Cname}</span>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Email Address</label>
									<input type="text" ref="Email" name="swatchRequest.email" className="form-control" />
									<span className="help-block">{this.state.ValidationError.Email}</span>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="text" required="" ref="Phone" name="swatchRequest.phone" className="form-control" />
							<span className="help-block">{this.state.ValidationError.Phone}</span>
						</div>
						<div className="form-group">
							<label>Address Line 1</label>
							<input type="text" required="" ref="address1" name="swatchRequest.address1" className="form-control" />
							<span className="help-block">{this.state.ValidationError.address1}</span>
						</div>
						<div className="form-group">
							<label>Address Line 2</label>
							<input type="text" ref="address2" name="swatchRequest.address2" className="form-control" />
							{/*<span className="help-block">{this.state.ValidationError.address2}</span>*/}
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>City</label>
									<input type="text" required="" ref="city" name="swatchRequest.city" className="form-control" />
									<span className="help-block">{this.state.ValidationError.city}</span>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Zip</label>
									<input type="text" required="" ref="zip" name="swatchRequest.zip" className="form-control" />
									<span className="help-block">{this.state.ValidationError.zip}</span>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Country</label>
									<input type="text" required="" ref="country" name="swatchRequest.country" className="form-control" />
									<span className="help-block">{this.state.ValidationError.country}</span>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>State</label>
									<input type="text" required="" ref="state" name="swatchRequest.state" className="form-control" />
									<span className="help-block">{this.state.ValidationError.state}</span>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Questions / Notes</label>
							<textarea ref="notes" name="swatchRequest.notes" placeholder="These notes will be submitted with your request."  className="form-control"></textarea>
							<span className="help-block">{this.state.ValidationError.notes}</span>
						</div>
						<button onClick={this._handleSubmit.bind(this)} type="button" className="btn btn-success">Submit</button>
					</form>
				</Modal.Body>
			</Modal>
		)
	}

}
export default RequestCatalog;
