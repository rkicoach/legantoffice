import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import InfoBox from './info-box';
import {
		  getShipDay,
		  dateBetween,
		  businessDaysFromDate,
		  dayOfWeekString,
} from './date-time';
import transitMap from './transit-times';


const style = {
		  deliveryTime: {
			  		      fontSize: '0.8em',
			  		    },
}

class ShipTime extends Component {
		  constructor(props){
			  		      super(props)
			  		      this.state = {isDeliveryEst : null}
			  		      this.state = {checkIt : null}
			  		    }

		  componentDidMount(){
			  		      var self = this;
			  		      axios.get('https://cs.theelegantoffice.com/api/v1/homes/shippingCutOff')
			  		        .then(function (response) {
											        self.setState({ofcOffTime:response.data.time})
											      })
			  		        const shipDay = getShipDay(this.props.currentDate, this.props.shippingCutoff);
			  		        var offset = -5.0;

			  		        const transitDays = transitMap.get(this.props.state);
			  		        const delEst = businessDaysFromDate(shipDay, transitDays);

			  		        if(this.props.radioOptions == 'Blank' || this.props.radioOptions == 'Debossing' || this.props.radioOptions == 'Full Color' || this.props.radioOptions == 'Personalization'){
											        var releaseDate = this.props.release_date
											        var releaseDay = 0
											        if(releaseDate != undefined){
																			            var releaseSplit = releaseDate.split(" ")
																			            if(releaseSplit[0] != "Ships"){
																					    								                  releaseDay = releaseSplit[0]
																					    								                }
																			        }
											        var newShipDate = new Date(delEst);
															newShipDate = businessDaysFromDate(newShipDate, releaseDay)
											        const delDay = dayOfWeekString(newShipDate.getDay());
											        const delMonth = newShipDate.getMonth() + 1;
											        const delDayOfMonth = newShipDate.getDate();
											          this.setState({
													  						              deliveryEst : `${delDay}, ${delMonth}/${delDayOfMonth}`,
													  						              isDeliveryEst:null
													  						            });

											      } else {
												      					      const delDay = dayOfWeekString(delEst.getDay());
												      					              const delMonth = delEst.getMonth() + 1;
												      					              const delDayOfMonth = delEst.getDate();
												      					                this.setState({
																												            deliveryEst : `${delDay}, ${delMonth}/${delDayOfMonth}`,
																												            isDeliveryEst:'yes'
																												          });

												      					            }
			  		    }

		componentDidUpdate(prevProps, prevState){
					  const shipDay = getShipDay(this.props.currentDate, this.props.shippingCutoff);
					  var offset = -5.0;

					  const transitDays = transitMap.get(this.props.state);
					  const delEst = businessDaysFromDate(shipDay, transitDays);
					  var stateNow = this.props.state;
					  if(stateNow != prevProps.state)  {
						  			    if(this.props.radioOptions == 'Blank' || this.props.radioOptions == 'Debossing' || this.props.radioOptions == 'Full Color' || this.props.radioOptions == 'Personalization'){
										    				        var releaseDate = this.props.release_date
										    				        var releaseDay = 0
										    				        if(releaseDate != undefined){
																						        var releaseSplit = releaseDate.split(" ")
																						        if(releaseSplit[0] != "Ships"){
																																          releaseDay = releaseSplit[0]
																																        }
																						    }
										    								var newShipDate = new Date(delEst);
										    								newShipDate = businessDaysFromDate(newShipDate, releaseDay)
										    				        const delDay = dayOfWeekString(newShipDate.getDay());
										    				        const delMonth = newShipDate.getMonth() + 1;
										    				        const delDayOfMonth = newShipDate.getDate();
										    				        this.setState({
																						        deliveryEst : `${delDay}, ${delMonth}/${delDayOfMonth}`,
																						        isDeliveryEst:null
																						    });

										    				      } else {
															      					          const delDay = dayOfWeekString(delEst.getDay());
															      					          const delMonth = delEst.getMonth() + 1;
															      					          const delDayOfMonth = delEst.getDate();
															      					          this.setState({
																						  							          deliveryEst : `${delDay}, ${delMonth}/${delDayOfMonth}`,
																						  							          isDeliveryEst:'yes'
																						  							      });

															      					        }
						  			   }
				}

		  render(){
			  		      var startDate = new Date();
			  		      var momentd = moment(startDate).tz('America/New_York').format('YYYY-MM-DD HH:mm:ss');
			  		      var dateTime1 = momentd.split(" ");
			  		      var dateFormat = dateTime1[0];
			  		      var timeFormat = dateTime1[1];
			  		      var dateSplit = dateFormat.split("-");
			  		      var timeSplit = timeFormat.split(":");
			  		      var currentHour = timeSplit[0];
			  		      var currentminute = timeSplit[1];
			  		      var currentsecond = timeSplit[2];
			  		      var yyyy = dateSplit[0];

			  		      var estTime = timeFormat;
			  		      var currentESTdateTime = momentd;

			  		      var dateTime = new Date(dateFormat+' '+this.state.ofcOffTime);
			  		      var estFormatTime = new Date(momentd);
			  		      var timeLeft = null;
			  		      if (estFormatTime.getTime() < dateTime.getTime()) {
						      			            timeLeft = dateBetween(estFormatTime, dateTime);
						      			          } else {

											  					        dateTime.setDate(dateTime.getDate() + 1);
											  					        timeLeft = dateBetween(estFormatTime, dateTime);
											  					      }

			  		      var d = new Date();
			  		      var n = d.getDay();
			  		      if (n == 6) {
						      			            dateTime.setDate(dateTime.getDate() + 2);
						      			            timeLeft = dateBetween(estFormatTime, dateTime);
						      			          } else if (n == 0) {

											  					        dateTime.setDate(dateTime.getDate() + 1);
											  					        timeLeft = dateBetween(estFormatTime, dateTime);
											  					      }

			  		    const delStates = [];
			  		    transitMap.forEach((value, key) => {
						    			        const state = {
																      name: key,
																      value,
																    };
						    			        delStates.push(state);
						    			      });

			  		    return(
						    			          <InfoBox
						    			          cls="shiptime-box"
						    			        >
						    			          <div>
						    			            {
											    					              <div className="delivery-time">
											    					                {this.props.release_date && this.props.release_date.length > 0 ? (
																											              <div className="delivery-time--release-date">
																											                <span className="delivery-time--date">
																											                  {this.props.defaultOption && this.props.defaultOption == "true"?"Guaranteed Delivery by":"Delivers By"} <span style={style.productTableTh} className="delivery-time--est">{this.state.deliveryEst} </span>
																											                </span>
																											                <div></div>
																											              </div>
																											            ) : (
																													    										                    <div className="delivery-time--result">
																													    										                      <div className="delivery-time--state">
																													    										                      </div>
																													    										                    </div>
																													    										                  )}
											    					              </div>
											    					            }
						    			          </div>
						    			        </InfoBox>
						    			        )
			  		    }
}

ShipTime.propTypes = {
		  brand: PropTypes.string,
		  currentDate: PropTypes.instanceOf(Date),
		  shippingCutoff: PropTypes.instanceOf(Date),
		  release_date: PropTypes.string,
		  state: PropTypes.string,
};

export default ShipTime;

