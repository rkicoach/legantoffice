import React from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";
import axios from 'axios';
var moment = require('moment-timezone');
var Mode = "ON";

class OpenDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swatch: false
    };
  }
  
  componentDidMount() {
    var values = null
    
    var startDate = new Date();
    var momentd = moment(startDate).tz('America/New_York').format('YYYY-MM-DD H:mm:ss');
  
    var dateTime1 = momentd.split(" ");
    var dateFormat = dateTime1[0];
    var timeFormat = dateTime1[1];
    var dateSplit = dateFormat.split("-");
    var timeSplit = timeFormat.split(":");
    var currentHour = Number(timeSplit[0]);
    var currentminute = Number(timeSplit[1]);
    var currentsecond = timeSplit[2];

    var dd = dateSplit[2];
    var mm = dateSplit[1]; //January is 0!
    var yyyy = dateSplit[0];

    var Cday = Number(dd);
    var Cmonth = Number(mm);
    var d = new Date();
    var n = d.getDay()
    
    if (Mode == "ON") {
      if (n == 6) {
	              if (currentHour >= 12 && currentHour <= 15 && (currentHour == 15? currentminute <= 0 : true)) {
			                console.log("working saturday show12pm - 3pm ");
			                $(".clOpen").show();
			              } else {
					                console.log("saturday check");
					                $(".clOpen").hide();
					              }
	            }
	          else if (n == 1 || n == 2 || n == 3 || n == 4 || n == 5) {
			          if (currentHour >7 && currentHour <= 17 && (currentHour == 17? currentminute <= 30 : true)) {
					            console.log("working day show 8am - 5.30 ");
					            $(".clOpen").show();
					          }else {
							            $(".clOpen").hide();
							          }
			        } else {
					        console.log("Sunday hide");
					        $(".clOpen").hide();
					      }

      //axios.get('https://next-api.teo.systems/api/v1/homes/weAreOpen')
      //axios.get('http://35.225.107.42/api/v1/homes/weAreOpen')
      axios.get('https://cs.theelegantoffice.com/api/v1/homes/weAreOpen')
      .then(function (response) {
          var stringifiedHoliday = response.data.workingHours;
         stringifiedHoliday.replace('"/": ""'); 
         stringifiedHoliday = JSON.parse(stringifiedHoliday);
         var stringifiedDay = stringifiedHoliday.days;
        
          if(stringifiedDay){
           stringifiedDay.map((valueData, i) => {
		                   if(valueData['day']) {
					                     var newData = valueData.day.split("-");
					                     var getDay = Number(newData[0]);
					                     var getMonth = Number(newData[1]);
					                     
					                     if (getDay == Cday && getMonth == Cmonth) {
								                         if(!valueData['startTime'] && !valueData['endTime']) {
												                       $(".clOpen").hide();
												                     }else if(valueData['startTime'] && valueData['endTime']){
															                           var startHour = Number(valueData['startTime'].split('.')[0]);
															                           var startMin = Number(valueData['startTime'].split('.')[1]) || 0;

															                           var endHour = Number(valueData['endTime'].split('.')[0]);
															                           var endMin = Number(valueData['endTime'].split('.')[1]) || 0;

															                           if (currentHour >= startHour && (currentHour == startHour? currentminute >= startMin : true) && currentHour <= endHour && (currentHour == endHour? currentminute <= endMin : true)) {
																			                           $(".clOpen").show();
																			                         }else {
																							                         $(".clOpen").hide();
																							                       }
															                         }

								                       }
					                   }

		                })
          }
        
           })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      $(".clOpen").hide();
    }
  }
  render() {
    return (
      <div className="clOpen">We're Open!</div>
    )
  }
}

export default OpenDetail;
