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

class Swatch extends React.Component {
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
		if (this.refs.lastName.value == "") {
			count = 1;
			validateObject['Lname'] = "This field is required"
		}else{
			count = 0;
			dataObj['Lname'] = this.refs.lastName.value
		}
		if (this.refs.username.value == "") {
			count = 1;
			validateObject['Uname'] = "This field is required"
		}else{
			count = 0;
			dataObj['Uname'] = this.refs.username.value
		}
		if (this.refs.companyName.value == "") {
			count = 1;
			validateObject['Cname'] = "This field is required"
		}else{
			count = 0;
			dataObj['Cname'] = this.refs.companyName.value
		}
		if (this.refs.Email.value == "") {
			count = 1;
			validateObject['Email'] = "This field is required"
		}else{
			var email = this.refs.Email.value;
			var atpos = email.indexOf("@");
			var dotpos = email.lastIndexOf(".");
			if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
				validateObject['Email'] = 'Please Enter Valid Email'
			} else {
				count = 0;
				dataObj['Email'] = this.refs.Email.value
			}
		}
		if (this.refs.Phone.value == "") {
			count = 1;
			validateObject['Phone'] = "This field is required"
		}else{
			var phone = this.refs.Phone.value
			if(phone.length != 10){
				validateObject['Phone'] = "Please Enter Valid Phone Number"
			} else if(isNaN(phone)){
				validateObject['Phone'] = "Please Enter Valid Phone Number"
			} else {
				count = 0;
				dataObj['Phone'] = this.refs.Phone.value
			}
		}
		if (this.refs.address1.value == "") {
			count = 1;
			validateObject['address1'] = "This field is required"
		}else{
			count = 0;
			dataObj['address1'] = this.refs.address1.value
		}
		/*if (this.refs.address2.value == "") {
			count = 1;
			validateObject['address2'] = "This field is required"
		}else{
			count = 0;
			dataObj['address2'] = this.refs.address2.value
		}*/		
		dataObj['address2'] = this.refs.address2.value		
		if (this.refs.city.value == "") {
			count = 1;
			validateObject['city'] = "This field is required"
		}else{
			var cityVal = this.refs.city.value
			var regex = /^[a-zA-Z]*$/;
			if(!regex.test(cityVal)){
				validateObject['city'] = "Please Enter Valid City Name"
			} else {
				count = 0;
				dataObj['city'] = this.refs.city.value
			}
		}
		if (this.refs.zip.value == "") {
			count = 1;
			validateObject['zip'] = "This field is required"
		}else{
			var zipVal = this.refs.zip.value
			if(isNaN(zipVal)){
				validateObject['zip'] = "Please Enter Valid Zip Code"
			} else {
				count = 0;
				dataObj['zip'] = this.refs.zip.value
			}
		}
		if (this.refs.country.value == "") {
			count = 1;
			validateObject['country'] = "This field is required"
		}else{
			var countryVal = this.refs.country.value
			var regex = /^[a-zA-Z]*$/;
			if(!regex.test(countryVal)){
				validateObject['country'] = "Please Enter Valid Country Name"
			} else {
				count = 0;
				dataObj['country'] = this.refs.country.value
			}
		}
		if (this.refs.state.value == "") {
			count = 1;
			validateObject['state'] = "This field is required"
		}else{
			var stateVal = this.refs.state.value
			var regex = /^[a-zA-Z]*$/;
			if(!regex.test(stateVal)){
				validateObject['state'] = "Please Enter Valid State Name"
			} else {
				count = 0;
				dataObj['state'] = this.refs.state.value
			}
		}
		/*if (this.refs.currenturl.value == "") {
			count = 1;
			validateObject['currenturl'] = "This field is required"
		}else{
			count = 0;
			dataObj['currenturl'] = this.refs.currenturl.value
		}*/
		dataObj['currenturl'] = this.refs.currenturl.value
		/*if (this.refs.status.value == "") {
			count = 1;
			validateObject['status'] = "This field is required"
		}else{
			count = 0;
			dataObj['status'] = this.refs.status.value
		}*/
		dataObj['status'] = this.refs.status.value
		/*if (this.refs.currentdate.value == "") {
			count = 1;
			validateObject['currentdate'] = "This field is required"
		}else{
			count = 0;
			dataObj['currentdate'] = this.refs.currentdate.value
		}*/
		dataObj['currentdate'] = this.refs.currentdate.value
		if (this.refs.notes.value == "") {
			count = 1;
			validateObject['notes'] = "This field is required"
		}else{
			count = 0;
			dataObj['notes'] = this.refs.notes.value
		}
		dataObj['itemUrl'] = this.refs.item.value
		dataObj['ip'] = '127.0.0.1'
		var newdata = JSON.stringify(dataObj);
		
		this.setState({ ValidationError: validateObject })
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
		this.props.click(e)
		}
		return false;
	}

	render() {
		
		return (
			<Modal show={this.props.swatch.swatchStatus} onHide={e=>this.props.click(e)} className="custom-modal">
				<Modal.Header closeButton>
					<Modal.Title>Request a Swatch of this Product </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form ref='user_form' onSubmit={this.onSubmit}>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label htmlFor="username">First Name</label>
									<input name="username" ref="username" type="text" className="form-control" id="username" placeholder="Username" />
									<input name="currenturl" ref="currenturl" type="hidden" className="form-control" value={this.props.swatch.url} />
									<input name="status" ref="status" type="hidden" className="form-control" value={this.props.swatch.status} />
									<input name="item" ref="item" type="hidden" className="form-control" value={this.props.item} />
									<input name="currentdate" ref="currentdate" type="hidden" className="form-control" value={this.props.swatch.todayDate} />
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
							<p className="Text">Material swatches will be sent via USPS at no charge.</p>
						</div>
						<button onClick={this._handleSubmit.bind(this)} type="button" className="btn btn-success">Submit</button>
					</form>
				</Modal.Body>
			</Modal>
		)
	}

}
export default Swatch;
