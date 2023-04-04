import { ModalView } from '../modal'
import { Box, Flex, Text, Heading, Image, NavItem, config } from '../base';
import PropTypes from 'prop-types';
import GoScreenFull from 'react-icons/lib/go/screen-full';
import Button from 'react-bootstrap/lib/Button';
import Dropzone from 'react-dropzone'
import $ from 'jquery';
import CartItem from './cartitem';
import ContinueOrCheckout from './continueOrCheckout';
const style = {
    image_height: {
        height: '150px'
    },
    btn: {
        borderRadius: 0
    },
    boxBorder: {
        borderRight: '1px solid #ccc'
    },
    imgFullColor: {
        //width: '350px',
        height: '150px'
    },
    imgDebossColor: {
        margin: '0 auto'
    },
    logo_location: {
        position: 'relative',
        width: '60%',
        borderRadius: '10px',
        margin: '0 auto'
    },
    screen: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: '10px',
        fontSize: '24px',
        color: 'rgb(17, 65, 107)'
    },
    out_screen: {
        position: 'absolute',
        right: '-40px',
        bottom: '40%',
        fontSize: '24px',
        color: 'rgb(17, 65, 107)',
        height: '34px',
        width: '34px',
        borderRadius: '50%',
        border: '1px solid #ccc',
        lineHeight: '20px',
        textAlign: 'center'
    },
    standard: {
        color: '#ccc',
        fontSize: '12px'
    },
    dropzone: {
        border: '2px dashed #ccc'
    },
    color_box: {
        height: '50px',
        width: '50px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    color_order: {
        justifyContent: 'space-around'
    },
    turncate: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    btn_color: {
        fontWeight: 700,
        background: '#ccc'
    }
}
class Fullcolor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validValue: { notes: "", email: "" },
            error: { notes: "", email: "" }
        };
    }
	openClosefullModel = (e, modal) => {
		  		if (e) {
					  			e.preventDefault();
					  		}
		  		this.setState({
					  			[modal]: !this.state[modal]
					  		})
		  	}

	    goToCart = (e, modal) => {
		      		window.location = 'https://shop.theelegantoffice.com/co/cart.ssp?sc=3&whence=&is=cart'
		      	}

    resetValue(e){
        this.setState({
            validValue: { notes: "", email: "" },
            error: { notes: "", email: "" }
        })
        this.props.close(e, "Fullcolor")
        this.props.onImageDrop([])
    }

    _setValues(e) {
        let validValue = {}
        let errorValues = {}
        let key = e.target.name
        if (e.target.value == "") {
            //errorValues[key] = "This Field is required."
            errorValues[key] = ""
        } else {
            errorValues[key] = ""
            if (key == 'email') {
                let email = e.target.value;
                var atpos = email.indexOf("@");
                var dotpos = email.lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                    //errorValues["email"] = 'Please Enter Valid Email'
                    errorValues["email"] = ""
                }
            }

            validValue[key] = e.target.value
        }
        let finalValidValues = Object.assign({}, this.state.validValue, validValue);
        let erroValues = Object.assign({}, this.state.error, errorValues);
        this.setState({ error: erroValues, validValue: finalValidValues })

    }


    handleSubmit(e) {
	 var dataObj = {};
        let validValue = {}
        let errorValues = {}
        let patronesColorValue = document.getElementById("patronesColorId").value
        let notesValue = document.getElementById("patronesNotesId").value
        let emailIdValue = document.getElementById("patronesEmailId").value
        if (emailIdValue == "") {
            errorValues["email"] = "This Field is required."
        } else {
            errorValues["email"] = ""
            if (emailIdValue) {
               /*  let email = e.target.value;
                var atpos = email.indexOf("@");
                var dotpos = email.lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                    errorValues["email"] = 'Please Enter Valid Email'
                } */
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailIdValue))
                {
                    errorValues["email"] = ""
                } else {
                    errorValues["email"] = 'Please Enter Valid Email'
                }
            }
            //errorValues["email"] = ""
            validValue["email"] = e.target.value
        }
        validValue["notes"] = e.target.value
        validValue["patronesColor"] = e.target.value
        /*if (notesValue == "") {
            errorValues["notes"] = "This Field is required."
        } else {
            validValue["notes"] = e.target.value
        }
        if (patronesColorValue == "") {
            errorValues["patronesColor"] = "This Field is required."
        } else {
            validValue["patronesColor"] = e.target.value
        }*/
        let finalValidValues = Object.assign({}, this.state.validValue, validValue);
        let erroValues = Object.assign({}, this.state.error, errorValues);
        this.setState({ error: erroValues, validValue: finalValidValues })
        //if ((emailIdValue == "") || (notesValue == "") || (patronesColorValue == "")) {
        if (emailIdValue == "") {
            return false;
        } else if(errorValues.email != ""){
            return false;
        } else {
             /**** mail functionality start****/
             dataObj['formname'] = 'full color',
             dataObj['storeDisplayName'] = this.props.storeDisplayName
             dataObj['color'] = this.state.validValue.patronesColor
             dataObj['email'] = this.state.validValue.email
             dataObj['notes'] = this.state.validValue.notes
             dataObj['imgurl'] = this.props.dropImageUrl
             var newdata = JSON.stringify(dataObj);
             $.ajax({
                 //url: "http://35.226.230.128/",
                 url: "https://vm.theelegantoffice.com/",
                 type: 'POST',
                 data:  newdata ,
                 success: function(data) {
                     //alert("Product add into cart successfully!");
                     //location.reload();
                     this.props.close(e, "Fullcolor")
                     this.props.close(e, "addlogo")
                 }.bind(this),
                 error: function(xhr, status, err) {
                 console.log(err);
             }.bind(this)
             });
             /**** mail functionality stop****/

            var ItemInternalId = this.props.ItemInternalId;
            var uvSetupId = this.props.uvId;
            var cartCount = this.props.cartCount;
            var cartvalue = 4;
            var dropImage = (this.props.dropImageName != undefined)?'&custcol11='+this.props.dropImageName:'';
            var notes= (this.state.validValue.notes != undefined)?'&custcol16='+this.state.validValue.notes:'';
            this.setState({itemVal:true})
            var urlMain = 'https://shop.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid=' + ItemInternalId + '&qty=' + cartCount + '&custcol3=' + cartvalue+ '&custcol17='+this.state.validValue.email+'&custcol15='+this.state.validValue.patronesColor+ notes+ dropImage;			
            var urlUv = 'https://shop.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid=' + uvSetupId + '&qty=1';
           var timeOut = function(){
		   this.props.close(e, "Fullcolor");
		                 this.props.close(e, "addlogo");
		                 this.setState({itemVal:false});
		               }
			                   timeOut = timeOut.bind(this);
					               setTimeout(timeOut, 2500);
		
		/* var uvCartWindow = window.open(urlUv);
            setTimeout(function(){ 
				uvCartWindow.close();
                window.location=urlMain;
                this.setState({itemVal:false})
			}, 500);*/
		var homeUrl = window.location;
		var isItemAddedToCart = new RegExp('[\?&]' + "itemAddedToCart" + '=([^&#]*)').exec(window.location.href);
				if(isItemAddedToCart == null) {
								homeUrl = homeUrl + "?itemAddedToCart=T";
							}
		      var ajxHeader = {
			              "Access-Control-Allow-Origin":"*",
			              "Content-Type":"application/json;charset=UTF-8",
			              'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT',
			              'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
			              'Access-Control-Max-Age': '1728000'
			            };

		      $.ajax({
			        				url: urlMain,
			        				dataType:'jsonp',
			        				beforeSend: function() {
									            $.ajax({
											            				url: urlUv,
											            				dataType:'jsonp',
											            				headers : ajxHeader,
											            				type: 'POST'
											                });
									  				},
			        				headers : ajxHeader,
			        				type: 'POST',
			                error:function() {
						          // homeUrl = homeUrl + "?itemAddedToCart=T";
						window.location = homeUrl
						          }
			            });

        }
    }

    render() {
        return (
            <div>
		<ContinueOrCheckout open={!!this.state.itemAdded} close={this.openClosefullModel} gotocart={this.goToCart}/>
                <CartItem open={!!this.state.itemVal} close={this.openClosefullModel} />
                <ModalView.ModalView close={e => this.props.close(e, "Fullcolor")} open={this.props.open} size="lg" title="Full color">
                    <ModalView.Body>
                        <Box px4>
                            <Flex mb1>
                                <Box css={style.boxBorder} pr4 width={1/2}>
                                    <Heading is="h2" fontSize='24px' center mb2>Full Color</Heading>
                                    <Flex mb3>
                                        <Box width={1} mr1 center>
                                            {/* <img className='img-responsive' style={style.imgDebossColor} src={this.props.imgUrl.custitem_deboss_example_url} /> */}
                                            <img style={style.imgFullColor} src={this.props.imgUrl.custitem_uv_example_url} />
                                        </Box>
                                    </Flex>
                                    <Text mb2>Printed in full (CMYK) color capturing multiple colors and gradients.</Text>
                                    <Box css={style.logo_location}>
                                        <img className='img-responsive' style={style.imgDebossColor} src={this.props.imgUrl.custitem_logo_line_url} />
                                    </Box>
                                    <Text center css={style.standard} mt1><GoScreenFull /> Standard logo location</Text>
                                </Box>
                                <Box pl4 width={1 / 2} center>
                                <Box css={style.dropzone} p2>
                                    {this.props.dropImage ? <Text is='img' src={this.props.dropImage} width={1} />:
                                    <Dropzone
                                    multiple={false}
                                    accept=".jpg,.png, .ai, .pdf, .eps, .tiff, .psd"
                                    onDrop={this.props.onImageDrop}
                                    maxSize={8e+6}
                                    style={{}}
                                >
                                {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                                    if (isDragActive) {
                                    return "This file is authorized";
                                    }
                                    if (isDragReject) {
                                    return "This file is not authorized";
                                    }
                                    return rejectedFiles.length
                                    ? `File format not allowed or file size exceeds limit. Please try again.`
                                    :  <Box>
                                   <Text fontSize={5} color="#11416b">Click here to select a logo file from your computer.</Text>
						                                    <Text>High resolution graphic files are preferred (AI, PDF, EPS). If significant work is required before production, Art Charges may be incurred.
						8 MB max.</Text></Box>
                                }}
                            
                                </Dropzone>
                                }


                                    </Box>
                                    {this.props.dropImage && <Text css={style.turncate}>{this.props.dropImage.name}</Text>}
                                    <Text mb4>if you prefer, email your logo directly to us at art@TheElegantOffice.com</Text>
                                    <Box left mt2>
                                        <Box className='form-group'>
                                            {/* <Text is='label'>Patrones Color</Text> */}
                                            <Text is='label'>Pantone Color</Text>
                                            <Box is='input' name="patronesColor" type='input' className='form-control' id='patronesColorId' defaultValue={this.state.validValue.PatronesColor} onChange={this._setValues.bind(this)} placeholder='Enter pantone (PMS) numbers'></Box>
                                            {/*<span style={{ color: "red" }}>{this.state.error.patronesColor}</span>*/}
                                        </Box>
                                        <Box className='form-group'>
                                            <Text is='label'>Email Address</Text>
                                            <Box is='input' name="email" type='email' className='form-control' id='patronesEmailId' defaultValue={this.state.validValue.email} onChange={this._setValues.bind(this)} placeholder='Email address to receive proof'></Box>
                                            <span style={{ color: "red" }}>{this.state.error.email}</span>
                                        </Box>
                                        <Box className='form-group'>
                                            <Text is='label'>Notes/special instructions</Text>
                                            <Box is='input' type='text' className='form-control' id='patronesNotesId' onChange={this._setValues.bind(this)} defaultValue={this.state.validValue.notes} name="notes" placeholder='These notes will be submitted with your order.'></Box>
                                            {/*<span style={{ color: "red" }}>{this.state.error.notes}</span>*/}
                                        </Box>
                                    </Box>
                                    {/*dropImage&&<img width="100%" src={dropImage.preview} alt="preview" />*/}
                                </Box>
                            </Flex>
                        </Box>
                    </ModalView.Body>
                    <ModalView.Footer>
                        <Flex>
                            <Box className="text-left" width={3 / 5}>

                                <Text>
                                    Ships in {this.props.imgUrl.custitem_logo_lead_time} after proof approval
                                </Text>
                                <Text>
                                    A $95 setup fee will be incurred on first-time orders
                                </Text>           </Box>
                            <Box width={2 / 5}>
                                <Button style={style.btn_color} onClick={e => this.resetValue()}>Clear & Exit</Button>
                                <Button onClick={this.handleSubmit.bind(this)} bsStyle="success">Add to Cart</Button>
                            </Box>
                        </Flex>
                    </ModalView.Footer>
                </ModalView.ModalView>
            </div>
        )
    }
}

Fullcolor.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    imgUrl: PropTypes.object
};
export default Fullcolor
