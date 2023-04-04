import { ModalView } from '../modal'
import { Box, Flex, Text, Heading, Image, NavItem, config } from '../base';
import PropTypes from 'prop-types';
import GoScreenFull from 'react-icons/lib/go/screen-full';
import Button from 'react-bootstrap/lib/Button';
import Dropzone from 'react-dropzone'
import Imgix from 'react-imgix';
import ImgixComponent from './ImgixComponent';

import $ from 'jquery';
import { debug } from 'util';
import CartItem from './cartitem';

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
			    		            width: '170px',
			    		            height: '150px'
			    		        },
		    logo_location: {
			    		            position: 'relative',
			    		            width: '60%',
			    		            border: '1px solid #ccc',
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
		    color_box: {
			    		            height: '50px',
			    		            width: '50px',
			    		            marginLeft: 'auto',
			    		            marginRight: 'auto'
			    		        },
		    btn_color: {
			    		            fontWeight: 700,
			    		            background: '#ccc'
			    		        }
}

class Personalize extends React.Component {
		    constructor(props) {
			    		            super(props);
			    		            this.state = {
							    				                selectedValue: 'Style A1',
							    				                selectedColor: 'gold',
							    				                selectedInput: '',
							    				                error: { notesPersonalize: "",style:"", color:"", initialsName:""},
							    				                imgTxtsize :  '60',
							    				                imgTxtalign : 'center,middle',
							    				                imgAuto : 'format',
							    				                imgFm : 'jpg',
							    				                imgBg : 'ffffff',
							    				                imgFit : 'fill',
							    				                imgHeight : '240',
							    				                imgWeight : '360',
							    				                imgTxtWord:'',
							    				                imgTxtclr:  "000000",
							    				                validValue: { notesPersonalize: "" },
							    												textLimit : 3
							    				                /*personalizeImgSrc: "https://teo-personalization.imgix.net/D3004.jpg"*/
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


		    handlestyleChange(e, state){
			    		            let newState = e.target.value;
			    		            let imgSize;

			    		            if(state=='imgTxtclr'){
							    				                this.setState({ imgTxtclr : newState })
							    				                return
							    				            } else if(state=='imgTxtWord'){
													                                var textLimit = 3
													    						                newState = newState.toUpperCase();
													    						                const { selectedValue } = this.state;
													    						                var text = newState.replace(/\s/g,'');
													    						                switch(selectedValue){
																																	                case 'Style A1':
																																	                    text = text.slice(0, 1)
																																	                    imgSize = 100
																																											textLimit = 1
																																	                break;
																																	                case 'Style A2':
																																	                    let a2text1 = text.slice(0, 1);
																																	                    let a2text2 = text.slice(1, 2);
																																	                    text = a2text1+'%26'+a2text2;
																																	                    imgSize = 100;
																																											textLimit = 2
																																	                break;
																																	                case 'Style A3':
																																	                    let a3text1 = text.slice(0, 1);
																																	                    let a3text2 = text.slice(1, 2);
																																	                    let a3text3 = text.slice(2, 3);
																																	                    text = a3text1+a3text2+a3text3;
																																	                    imgSize = 100;
																																											textLimit = 3
																																	                break;
																																	                case 'Style A5':
																																	                    let a5text1 = text.slice(0, 1);
																																	                    let a5text2 = text.slice(1, 2);
																																	                    let a5text3 = text.slice(2, 3);
																																	                    text = a5text1+'\u25C6'+a5text2+'\u25C6'+a5text3;
																																	                    imgSize = 80;
																																											textLimit = 3
																																	                break;
																																	                case 'Style B1':
																																	                    text = text.slice(0, 1)
																																	                    imgSize = 160
																																											textLimit = 1
																																	                break;
																																	                case 'Style C3':
																																	                    let c3text1 = text.slice(0, 1);
																																	                    let c3text2 = text.slice(1, 2);
																																	                    let c3text3 = text.slice(2, 3);
																																	                    text = c3text1+c3text2+c3text3;
																																	                    imgSize = 60;
																																											textLimit = 3
																																	                break;
																																	                case 'Style D3':
																																	                    let d3text1 = text.slice(0, 1);
																																	                    let d3text2 = text.slice(1, 2);
																																	                    let d3text3 = text.slice(2, 3);
																																	                    text = d3text1+d3text2+d3text3;
																																	                    imgSize = 30;
																																											textLimit = 3
																																	                break;
																																	                case 'Style AA':
																																	                    let aAtext = text.slice(0, 1);
																																	                    text = '['+aAtext+']'
																																	                    imgSize = 100;
																																											textLimit = 1
																																	                break;
																																	                default:
																																	                    text = imgTxtWord.slice(0, 1);
																																	                    imgSize = 60;
																																											textLimit = 3
																																	            }
													    						                console.log('imgSize is '+imgSize)
													    						                this.setState({ selectedInput : newState, imgTxtWord: text, imgTxtsize: imgSize, textLimit : textLimit })
													    						                return
													    						            } else {

																					    								                let {selectedInput} = this.state;
																					    																var value = selectedInput
																					    								                var text;
																					    																var textLimit = 3
																					    								                switch(newState){
																																													                case 'Style A1':
																																													                    text = selectedInput.slice(0, 1)
																																													                    value = selectedInput.slice(0, 1)
																																													                    imgSize = 100
																																																							textLimit = 1
																																													                break;
																																													                case 'Style A2':
																																													                    let a2text1 = selectedInput.slice(0, 1);
																																													                    let a2text2 = selectedInput.slice(1, 2);
																																													                    value = selectedInput.slice(0, 2);
																																													                    text = a2text1+'%26'+a2text2;
																																													                    imgSize = 100;
																																																							textLimit = 2
																																													                break;
																																													                case 'Style A3':
																																													                    let a3text1 = selectedInput.slice(0, 1);
																																													                    let a3text2 = selectedInput.slice(1, 2);
																																													                    let a3text3 = selectedInput.slice(2, 3);
																																																							value = selectedInput.slice(0, 3);
																																													                    text = a3text1+a3text2+a3text3;
																																													                    imgSize = 100
																																																							textLimit = 3
																																													                break;
																																													                case 'Style A5':
																																													                    let a5text1 = selectedInput.slice(0, 1);
																																													                    let a5text2 = selectedInput.slice(1, 2);
																																													                    let a5text3 = selectedInput.slice(2, 3);
																																																							value = selectedInput.slice(0, 3);
																																													                    text = a5text1+'\u25C6'+a5text2+'\u25C6'+a5text3;
																																													                    imgSize = 80;
																																																							textLimit = 3
																																													                break;
																																													                case 'Style B1':
																																													                    text = selectedInput.slice(0, 1)
																																																							value = selectedInput.slice(0, 1);
																																													                    imgSize = 160
																																																							textLimit = 1
																																													                break;
																																													                case 'Style C3':
																																													                    let c3text1 = selectedInput.slice(0, 1);
																																													                    let c3text2 = selectedInput.slice(1, 2);
																																													                    let c3text3 = selectedInput.slice(2, 3);
																																																							value = selectedInput.slice(0, 3);
																																													                    text = c3text1+c3text2+c3text3;
																																													                    imgSize = 60;
																																																							textLimit = 3
																																													                break;
																																													                case 'Style D3':
																																													                    let d3text1 = selectedInput.slice(0, 1);
																																													                    let d3text2 = selectedInput.slice(1, 2);
																																													                    let d3text3 = selectedInput.slice(2, 3);
																																																							value = selectedInput.slice(0, 3);
																																													                    text = d3text1+d3text2+d3text3;
																																													                    imgSize = 30;
																																																							textLimit = 3
																																													                break;
																																													                case 'Style AA':
																																													                    let aAtext = selectedInput.slice(0, 1);
																																																							value = selectedInput.slice(0, 1);
																																													                    text = '['+aAtext+']'
																																													                    imgSize = 100;
																																																							textLimit = 1
																																													                break;
																																													                default:
																																													                    text = imgTxtWord.slice(0, 1);
																																																							value = selectedInput.slice(0, 1);
																																													                    imgSize = 60
																																																							textLimit = 1
																																													            }
																					    								                this.setState({ selectedInput:value, selectedValue : newState, imgTxtWord: text, imgTxtsize: imgSize, textLimit : textLimit })
																					    								            }

			    		        }


		    arrDataColor = () => {

			    		            let colorOptions = this.props.imgUrl.custitem_monogram_color_options;
			    		            if (colorOptions) {
							    				                var {imgTxtclr} = this.state;
							    				                var color = {"Gold Foil":'ffd700', "Silver Foil":'c0c0c0', "Deboss":'000000',"White Foil":"ffffff"}
							    				                if(Array.isArray(colorOptions)){
																					                return (
																																		                    <Box>
																																		                        <Heading is="h2" fontSize='20px' mb2>Choose Logo Imprint Method / Color</Heading>
																																		                        <Flex css={style.color_order}>
																																		                            {colorOptions.map((data, i) => (
																																						    														                                    <Box center p2 key={'value'+i}>
																																						    														                                        <Box css={{ ...style.color_box, ...{ backgroundColor: '#'+color[data.name] } }} mb1 style={{border:'1px solid #000'}}></Box>
																																						    														                                        <Text fontSize='12px' is="label"><input onChange={(e)=>this.handlestyleChange(e, 'imgTxtclr')} value={color[data.name]} name="colorRadio" checked={imgTxtclr == color[data.name]} type="radio" /> {data.name}</Text>
																																						    														                                    </Box>
																																						    														                                ))}
																																		                        </Flex>
																																		                    </Box>
																																		                )
																					            } else {
																							    									                    return (
																																			    												                        <Box>
																																			    												                            <Heading is="h2" fontSize='20px' mb2>Choose Logo Imprint Method / Color</Heading>
																																			    												                            <Flex css={style.color_order}>
																																			    												                                <Box center p2 key={colorOptions.name}>
																																			    												                                    <Box css={{ ...style.color_box, ...{ backgroundColor: '#'+color[colorOptions.name] } }} mb1></Box>
																																			    												                                    <Text fontSize='12px' is="label"><input onChange={(e)=>this.handlestyleChange(e, 'imgTxtclr')} value={color[colorOptions.name]} name="colorRadio" checked={imgTxtclr == color[colorOptions.name]} type="radio" /> {colorOptions.name}</Text>
																																			    												                                </Box>
																																			    												                            </Flex>
																																			    												                        </Box>
																																			    												                    )
																							    									                }
							    				            }
			    		        }

		    arrDataStyle = () => {
			    		            var radioOtions = this.props.imprintRadioOptions
			    		            var monoStyleData = this.props.imgUrl.custitem_monogram_style_options
			    								//console.log("radioOtions | monoStyleData| ",radioOtions + " || " +  JSON.stringify(monoStyleData));
			    		            if(radioOtions == "All" || radioOtions == 'With Personalization & Blank Only'){
							    				                if (monoStyleData) {
																					                if(Array.isArray(monoStyleData)){
																																		                    return (
																																					    													                            <Box>
																																					    													                                <Heading is="h2" fontSize='20px' mb2>Select Monogram Style <Text is='a' href="https://storage.googleapis.com/next-teo.appspot.com/static/personalization/teo-monogram-styles-rev.jpg" target="_blank" bold color='#0f68b6'>Details</Text></Heading>
																																					    													                                <Flex css={style.color_order}>
																																					    													                                    {monoStyleData.map((data, i) => (
																																																							    																		                                        <Box center p2 key={'color'+i}>
																																																							    																		                                            <Box>{data.name == 'Style A1' ? <img src={'/static/images/personalize/Personalize-Item-A1.png'}></img> : data.name == 'Style A3' ? <img src={'/static/images/personalize/Personalize-Item-A3.png'}></img> : data.name == 'Style A5' ? <img src={'/static/images/personalize/Personalize-Item-A5.png'}></img> : data.name == 'Style B1' ? <img src={'/static/images/personalize/Personalize-Item-B1.png'}></img> : data.name == 'Style AA' ? <img src={'/static/images/personalize/Personalize-Item-AA.png'}></img> : data.name == 'Style A2' ? <img src={'/static/images/personalize/Personalize-Item-A2.png'}></img> :
																																																																															    																								                                            data.name == 'Style C3' ? <img src={'/static/images/personalize/Personalize-Item-C3.png'}></img> :
																																																																															    																								                                            data.name == 'Style D3' ? <img src={'/static/images/personalize/Personalize-Item-D3.png'}></img> : ''
																																																																															    																								                                            }</Box>
																																																							    																		                                            <Text fontSize='12px' is="label"><input onChange={(e)=>this.handlestyleChange(e, 'selectedValue')} value={data.name} name="styleRadio" checked={this.state.selectedValue==data.name} type="radio" /> {data.name}</Text>
																																																							    																		                                        </Box>
																																																							    																		                                    ))}
																																					    													                                </Flex>
																																					    													                            </Box>
																																					    													                        )
																																		                } else {
																																																		                    return (
																																																					    																                            <Box>
																																																					    																                                <Heading is="h2" fontSize='20px' mb2>Select Monogram Style <Text is='a' href="https://storage.googleapis.com/next-teo.appspot.com/static/personalization/teo-monogram-styles-rev.jpg" target="_blank" bold color='#0f68b6'>Details</Text></Heading>
																																																					    																                                <Flex css={style.color_order}>
																																																					    																                                    <Box center p2 key={monoStyleData.name}>
																																																					    																                                        <Box>
																																																					    																                                            {
																																																																											    																						                                            monoStyleData.name == 'Style A1' ? <img src={'/static/images/personalize/Personalize-Item-A1.png'}></img> :
																																																																											    																						                                            monoStyleData.name == 'Style A3' ? <img src={'/static/images/personalize/Personalize-Item-A3.png'}></img> :
																																																																											    																						                                            monoStyleData.name == 'Style A5' ? <img src={'/static/images/personalize/Personalize-Item-A5.png'}></img> :
																																																																											    																						                                            monoStyleData.name == 'Style B1' ? <img src={'/static/images/personalize/Personalize-Item-B1.png'}></img> :
																																																																											    																						                                            monoStyleData.name == 'Style AA' ? <img src={'/static/images/personalize/Personalize-Item-AA.png'}></img> :
																																																																											    																						                                            monoStyleData.name == 'Style A2' ? <img src={'/static/images/personalize/Personalize-Item-A2.png'}></img> :
																																																																											    																						                                            monoStyleData.name == 'Style C3' ? <img src={'/static/images/personalize/Personalize-Item-C3.png'}></img> :
																																																																											    																						                                            monoStyleData.name == 'Style D3' ? <img src={'/static/images/personalize/Personalize-Item-D3.png'}></img> : ''
																																																																											    																						                                            }
																																																					    																                                        </Box>
																																																					    																                                        <Text fontSize='12px' is="label"><input onChange={(e)=>this.handlestyleChange(e, 'selectedValue')} value={monoStyleData.name} name="styleRadio" checked={this.state.selectedValue==monoStyleData.name} type="radio" /> {monoStyleData.name}</Text>
																																																					    																                                    </Box>
																																																					    																                                </Flex>
																																																					    																                            </Box>
																																																					    																                        )
																																																		                }
																					            }
							    				            } else {
													    						                var custitem_monogram_style_options =   [{"$attributes":{"internalId":"1","typeId":"186"},"name":"Style A1"},{"$attributes":{"internalId":"7","typeId":"186"},"name":"Style C3"}]
													    						                if (custitem_monogram_style_options) {
																															                return (
																																														                    <Box>
																																														                        <Heading is="h2" fontSize='20px' mb2>Select Monogram Style <Text is='span' bold color='#0f68b6'>Details</Text></Heading>
																																														                        <Flex css={style.color_order}>
																																														                            {custitem_monogram_style_options.map((data, i) => (
																																																		    																                                    <Box center p2 key={data.internalId}>
																																																		    																                                        <Box>{data.name == 'Style A1' ? <img src={'/static/images/personalize/Personalize-Item-A1.png'}></img> : data.name == 'Style A3' ? <img src={'/static/images/personalize/Personalize-Item-A3.png'}></img> : data.name == 'Style A5' ? <img src={'/static/images/personalize/Personalize-Item-A5.png'}></img> : data.name == 'Style B1' ? <img src={'/static/images/personalize/Personalize-Item-B1.png'}></img> : data.name == 'Style AA' ? <img src={'/static/images/personalize/Personalize-Item-AA.png'}></img> : data.name == 'Style A2' ? <img src={'/static/images/personalize/Personalize-Item-A2.png'}></img> :
																																																																																														                                    data.name == 'Style C3' ? <img src={'/static/images/personalize/Personalize-Item-C3.png'}></img> :
																																																																																														                                    data.name == 'Style D3' ? <img src={'/static/images/personalize/Personalize-Item-D3.png'}></img> : ''
																																																																																														                                    }</Box>
																																																		    																                                        <Text fontSize='12px' is="label"><input onChange={(e)=>this.handlestyleChange(e, 'selectedValue')} value={data.name} name="styleRadio" checked={this.state.selectedValue==data.name} type="radio" /> {data.name}</Text>
																																																		    																                                    </Box>
																																																		    																                                ))}
																																														                        </Flex>
																																														                    </Box>
																																														                )
																															            }
													    						            }
			    		        }

		    _setValues = (e)=> {
			    		            let validValue = {}
			    		            let errorValues = {}
			    		            let key = e.target.name
			    		            if (e.target.value == "") {
							    				                errorValues[key] = "This Field is required."

							    				            } else {
													    						                errorValues[key] = ""
													    						                validValue[key] = e.target.value
													    						            }
			    		            let finalValidValues = Object.assign({}, this.state.validValue, validValue);
			    		            let erroValues = Object.assign({}, this.state.error, errorValues);
			    		            this.setState({ error: erroValues, validValue: finalValidValues })
			    		        }


		    handleSubmit(e) {
			    		    this.props.close(e, "personalize");
			    		            var dataObj = {};
			    		            let validValue = {}
			    		            let errorValues = {}
			    		            let initialsData = document.getElementById("initialsId").value
			    		            if (initialsData == "") {
							    				                errorValues["initialsName"] = "This Field is required."
							    				            } else {
													    						                validValue["initialsName"] = e.target.value;
													    						            }
			    		            validValue["notesPersonalize"] = e.target.value
			    		            let finalValidValues = Object.assign({}, this.state.validValue, validValue);
			    		            let erroValues = Object.assign({}, this.state.error, errorValues);
			    		            this.setState({ error: erroValues, validValue: finalValidValues })
			    		            if (initialsData == "") {
							    				                return false;
							    				            } else {

													    						                 var finalColorOption
													    						                 switch (this.state.imgTxtclr) {
																							 										                 case 'ffd700':
																							 										                     finalColorOption = "Gold Foil";
																							 										                     break;
																							 										                 case 'c0c0c0':
																							 										                     finalColorOption = "Silver Foil";
																							 										                     break;
																							 										                 case '000000':
																							 										                     finalColorOption = "Deboss";
																							 										                     break;
																							 										                 default:
																							 										                     finalColorOption = "Deboss";
																							 										             }
													    						                 dataObj['formname'] = 'personalize',
														    							                 dataObj['color'] = finalColorOption
													    						                 dataObj['email'] = ""
													    						                 dataObj['notes'] = this.state.validValue.notesPersonalize
													    						                 dataObj['imgname'] = this.props.dropImageName;
													    						                 dataObj['imgurl'] = this.props.dropImageUrl
													    						                 var newdata = JSON.stringify(dataObj);
													    						                 $.ajax({

																						 									                  url: "https://vm.theelegantoffice.com/",
																						 									                  type: 'POST',
																						 									                  data:  newdata ,
																						 									                  success: function(data) {

																																		  												                      this.props.close(e, "personalize")
																																		  												                   }.bind(this),
																						 									                  error: function(xhr, status, err) {
																																		  												                   console.log(err);
																																		  												               }.bind(this)
																						 									              });


													    						                var ItemInternalId = this.props.ItemInternalId;
													    						                var cartCount = this.props.cartCount;
													    						                var cartvalue = 7;

													    						                var initial = (initialsData != undefined)?'&custcol14='+ initialsData:'';

													    						                var stylename = (this.state.selectedValue != undefined)?'&custcol13='+this.state.selectedValue:'';

													    						                var notePersolize = (this.state.validValue.notesPersonalize != undefined)?'&custcol16='+this.state.validValue.notesPersonalize:'';

													    						                var color = (this.state.imgTxtclr != undefined)?'&custcol10='+finalColorOption:'';

													    						                this.setState({itemVal:true})
													    						    var timeOut = function(){
																				    							                  this.setState({itemVal:false});
																				    							                }
													    						                timeOut = timeOut.bind(this);
													    						                setTimeout(timeOut, 2500);
													    						          var cartvalue = 7;
													    						      		var cartUrl = 'https://shop.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid=' + ItemInternalId + '&qty=' + cartCount + '&custcol3=' + cartvalue+ color + notePersolize +stylename + initial;
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
																					  								            url: cartUrl,
																					  								            dataType:'jsonp',
																					  								            headers : ajxHeader,
																					  								            type: 'POST',
																					  								            error:function() {
																															    										                window.location = homeUrl
																															    										              }
																					  								        });
													    						            }
			    		        }

		    onHide = (ItemInternalId, cartCount, cartvalue, color, notePersolize, stylename, initial) => {
			    		            this.setState({itemVal:false})
			    		    		var cartvalue = 7;
			    		    var cartUrl = 'https://shop.theelegantoffice.com/app/site/query/additemtocart.nl?c=1206101&n=1&ext=T&buyid=' + ItemInternalId + '&qty=' + cartCount + '&custcol3=' + cartvalue+ color + notePersolize +stylename + initial;
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
											        url: cartUrl,
											        dataType:'jsonp',
											        beforeSend: function() {

																			        },
											        headers : ajxHeader,
											        type: 'POST',
											        error:function() {
																			          window.location = homeUrl
																			        }
											    });
			    		    	}

		    render() {

			    		          const { imgTxtWord,styleVal,imgTxtsize,imgTxtalign,imgAuto,imgFm,imgBg,imgFit,imgHeight,imgWeight,imgTxtclr } = this.state;
			                              const personalizeImgSrc = this.props.imgUrl.custitem_pers_preview_url;
			    													//console.log("personalizeImgSrc::" + personalizeImgSrc);
			    		            return (
							    				                <div>
							    				                    <CartItem open={!!this.state.itemVal} close={this.openClosefullModel} />
							    				                <ModalView.ModalView close={e => this.props.close(e, "personalize")} open={this.props.open} size="lg" title="Personalize this Item">
							    				                    <ModalView.Body>
							    				                        <Box>
							    				                            <Flex alignItems='center' mb1>
							    				                                <Box p2 width={1 / 2}>
							    				                                    <ImgixComponent objData={{imgTxtsize,imgTxtclr,imgTxtalign,imgWeight,imgHeight,imgAuto,imgFm,imgBg,imgFit,imgTxtWord,personalizeImgSrc}}/>
							    				                                </Box>
							    				                                <Box p2 width={1 / 2} center>
							    				                                    <Box is='img' width={1} src={this.props.imgUrl.custitem_pers_line_url} />
							    				                                    <Text mt2>Indicates monogramming location.</Text>
							    				                                </Box>
							    				                            </Flex>
							    																		{this.arrDataStyle()}

							    				                            <Flex>
							    				                                <Box width={1 / 5} className='form-group'>
							    				                                    <Text is='label'>Enter Initials</Text>
							    				                                    <Box is='input'
							    				                                        onChange={(e)=>this.handlestyleChange(e, 'imgTxtWord')}
							    				                                        type='text' className='form-control'
							    				                                        id="initialsId"
							    				                                        value={this.state.selectedInput}
							    				                                        maxLength ={this.state.textLimit}
							    				                                     />
							    				                                    <span style={{ color: "red" }}>{this.state.error.initialsName}</span>
							    				                                </Box>
							    				                            </Flex>
							                                        {this.arrDataColor()}
							    				                        </Box>
							    				                    </ModalView.Body>
							    				                    <ModalView.Footer>
							    				                        <Flex>
							    				                            <Box className="text-left" width={3 / 5}>
							    				                                <Text>
							    				                                    Notes
							    				                                </Text>
							    				                                <Box is='input' type='text' className='form-control' id='notesPersonalizeId' onChange={this._setValues.bind(this)} name="notesPersonalize" placeholder='These notes will be submitted with your order.'></Box>
							    				                                <Text>
							    				                                    Orders with personalization or logo imprinting are not eligible for return or exchange.
							    				                                 </Text>
							    				                            </Box>
							    				                            <Box width={2 / 5}>
							    				                                <Button style={style.btn_color} onClick={e => this.props.close(e, "personalize")}>Clear & Exit</Button>
							    				                                <Button onClick={this.handleSubmit.bind(this)} bsStyle="success">Add to Cart</Button>
							    				                            </Box>
							    				                        </Flex>
							    				                    </ModalView.Footer>
							    				                </ModalView.ModalView>
							    				                </div>
							    				            )
			    		        }
}

Personalize.propTypes = {
		    open: PropTypes.bool.isRequired,
		    close: PropTypes.func.isRequired,
		    imgUrl: PropTypes.object
};
export default Personalize

