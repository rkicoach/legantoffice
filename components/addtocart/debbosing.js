import { ModalView } from '../modal';
import { Box, Flex, Text, Heading, Image, NavItem, config } from '../base';
import PropTypes from 'prop-types';
import GoScreenFull from 'react-icons/lib/go/screen-full';
import Button from 'react-bootstrap/lib/Button';
import Dropzone from 'react-dropzone';
import $ from 'jquery';
import axios from 'axios';
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
        width: '350px',
        height: '150px'
    },
    imgDebossColor: {
        width: '100%',
    },
    logo_location: {
        position: 'relative',
        width: '60%',
        borderRadius: '10px',
        margin: '0 auto',
        height: '150px'
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


class Debosing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validValue: { notes: "", email: "", color: "Deboss" },
            error: { notes: "", email: "", color: "" }
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
            validValue: { notes: "", email: "", color: "Deboss" },
            error: { notes: "", email: "", color: "" }
        })
        this.props.close(e, "debos")
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

    handleColorChange(e){
        let validValue = {}
        validValue["email"] = this.state.validValue.email
        validValue["notes"] = this.state.validValue.notes
        validValue["color"] = e.target.value

        let finalValidValues = Object.assign({}, this.state.validValue, validValue);
        this.setState({  validValue: finalValidValues })
    }

    handleSubmit(e) {
	 var dataObj = {};
        let validValue = {}
        let errorValues = {}
        let notesValue = document.getElementById("notesId").value
        let emailIdValue = document.getElementById("emailId").value
        if (emailIdValue == "") {
            errorValues["email"] = "This Field is required."
        } else {
            errorValues["email"] = ""
            if (emailIdValue) {
                /* let email = e.target.value;
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
        /*if (notesValue == "") {
            errorValues["notes"] = "This Field is required."
        } else {
            validValue["notes"] = e.target.value
        }*/
        validValue["notes"] = e.target.value
        let finalValidValues = Object.assign({}, this.state.validValue, validValue);
        let erroValues = Object.assign({}, this.state.error, errorValues);
        this.setState({ error: erroValues, validValue: finalValidValues })
        if (emailIdValue == "") {
            return false;
        } else if(errorValues.email != ""){
            return false;
        } else {
            /**** mail functionality start****/
            dataObj['formname'] = 'deboss',
            dataObj['storeDisplayName'] = this.props.storeDisplayName
            dataObj['color'] = this.state.validValue.color
            dataObj['email'] = this.state.validValue.email
            dataObj['notes'] = this.state.validValue.notes
	    dataObj['imgname'] = this.props.dropImageName;
            dataObj['imgurl'] = this.props.dropImageUrl
            var newdata = JSON.stringify(dataObj);
            $.ajax({
               // url: "http://35.226.230.128/",
                url: "https://vm.theelegantoffice.com/",
				type: 'POST',
				data:  newdata ,
				success: function(data) {
                    //alert("Product add into cart successfully!");
					//location.reload();
                    this.props.close(e, "debos")
                    this.props.close(e, "addlogo")
				}.bind(this),
				error: function(xhr, status, err) {
				console.log(err);
			}.bind(this)
            });
            /**** mail functionality stop****/

            var ItemInternalId = this.props.ItemInternalId;
            var cartCount = this.props.cartCount;
            var cartvalue = 2;
            var debossSetupId = this.props.debossId;
            var addNotes = (this.state.validValue.notes != undefined)?'&custcol16='+this.state.validValue.notes:'';
            var dropImage = (this.props.dropImageName != undefined)?'&custcol11='+this.props.dropImageName:'';
            this.setState({itemVal:true})
            var urlMain = 'https://shop.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid=' + ItemInternalId + '&qty=' + cartCount + '&custcol3=' + cartvalue+ '&custcol10='+this.state.validValue.color+'&custcol17='+this.state.validValue.email+ addNotes + dropImage;			
            var urlDeboss = 'https://shop.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid='+ debossSetupId + '&qty=1';
           var timeOut = function(){
		   this.props.close(e, "debos");
		                 this.props.close(e, "addlogo");
		                 this.props.ForLuggage(e,'addlogo');
		                 this.setState({itemVal:false});
				               //this.setState({itemAdded:true});
		             }
		                           timeOut = timeOut.bind(this);
		                                       setTimeout(timeOut, 2500);
		/*var debossCartWindow = window.open(urlDeboss);
            setTimeout(function(){ 
				debossCartWindow.close()
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
											            				url: urlDeboss,
											            				dataType:'jsonp',
											            				headers : ajxHeader,
											            				type: 'POST'
											                })
									  				},
			        				headers : ajxHeader,
			        				type: 'POST',
			                error:function() {
					//	homeUrl = homeUrl + "?itemAddedToCart=T";            
						window.location = homeUrl
						          }
			            });
        }
    }

    dataColor = () => {
        var arrData = this.props.imgUrl.custitem_deboss_color_options;
        //var color = ['gold', 'silver', 'black']
        var color = {"Gold Foil":'ffd700', "Silver Foil":'c0c0c0', "Deboss":'000000'}
        if (arrData) {
            //var count = Object.keys(arrData).length;
            //console.log('count is '+count);
            if(Array.isArray(arrData)){ // check data is an array or object
                return (
                    <Box>
                        <Heading is="h2" fontSize='20px' center mb2>Choose Logo Imprint Method / Color</Heading>
                        <Flex css={style.color_order}>
                            {arrData.map((data, i) => (
                                <Box key={data.name+i} width={1 / 5}>
                                    <Box css={{ ...style.color_box, ...{ backgroundColor: '#'+color[data.name] } }} mb1 style={{border:'1px solid #000'}}></Box>
                                    <Text fontSize='12px' is="label">
                                        <input value={data.name} onChange={this.handleColorChange.bind(this)} checked={this.state.validValue.color == data.name} name="colorRadio" type="radio" /> {data.name}</Text>
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                )
            } else {
                return (
                    <Box>
                        <Heading is="h2" fontSize='20px' center mb2>Choose Logo Imprint Method / Color</Heading>
                        <Flex css={style.color_order}>
                            <Box key={arrData.name} width={1 / 5}>
                                <Box css={{ ...style.color_box, ...{ backgroundColor: '#'+color[arrData.name] } }} mb1 style={{border:'1px solid #000'}}></Box>
                                <Text fontSize='12px' is="label">
                                <input value={arrData.name} onChange={this.handleColorChange.bind(this)} checked={this.state.validValue.color == arrData.name} name="colorRadio" type="radio" /> {arrData.name}</Text>
                            </Box>
                        </Flex>
                    </Box>
                )
            }
            
        }

    }
    render() {
        return (
            <div>
		<ContinueOrCheckout open={!!this.state.itemAdded} close={this.openClosefullModel} gotocart={this.goToCart} />
                <CartItem open={!!this.state.itemVal} close={this.openClosefullModel} />
                <ModalView.ModalView close={e => this.props.close(e, "debos")} open={this.props.open} size="lg" title="Debossing">
                    <ModalView.Body>
                        <Box px4>
                            <Flex mb1>
                                <Box css={style.boxBorder} pr4 width={1 / 2}>
                                    <Heading is="h2" fontSize='24px' center mb2>Deboss or Foil Stamp</Heading>
                                    <Flex mb3>
                                        <Box css={style.image_height} bg="#11416b" mr1>
                                            <img style={style.imgDebossColor} src={this.props.imgUrl.custitem_deboss_example_url} />
                                        </Box>
                                        {/* <Box ml1 css={style.image_height} bg="#11416b" width={1 / 2}>
                                            <img style={style.imgDebossColor} src={this.props.imgUrl.custitem_deboss_example_url} />
                                        </Box> */}
                                    </Flex>
                                    <Text mb2>Pressed down  into the item without color <strong>or</strong> stamped in foil.</Text>
                                    <Box css={style.logo_location}>
                                        <img style={style.imgDebossColor} src={this.props.imgUrl.custitem_logo_line_url} />
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
						    8 MB max.</Text>
						    </Box>
                                    }}
                                
                                    </Dropzone>
                                }


                                    </Box>

                                    <Text mb4>if you prefer, email your logo directly to us at art@TheElegantOffice.com</Text>
                                    <Box>{this.dataColor()}</Box>
                                    <Box left mt2>
                                        <Box className='form-group'>
                                            <Text is='label'>Email Address</Text>
                                            <Box  is='input' name="email" type='email' className='form-control' id='emailId' defaultValue={this.state.validValue.email} onChange={this._setValues.bind(this)} placeholder='Email address to receive proof'></Box>
                                            <span style={{ color: "red" }}>{this.state.error.email}</span>
                                        </Box>
                                        <Box className='form-group'>
                                            <Text is='label'>Notes/special instructions</Text>
                                            <Box  is='input' type='text' className='form-control' id='notesId' onChange={this._setValues.bind(this)} defaultValue={this.state.validValue.notes} name="notes" placeholder='These notes will be submitted with your order.'></Box>
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

Debosing.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    imgUrl: PropTypes.object
};
export default Debosing
