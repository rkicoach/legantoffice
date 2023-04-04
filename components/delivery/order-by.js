import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment-timezone';
import {
  getShipDay,
  dateBetween,
  businessDaysFromDate,
  dayOfWeekString,
} from './date-time';


const OrderBy = (props) => {
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

  var dateTime = new Date(dateFormat+" 15:30:00");
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
  return (
    
      <div>
          <div className="delivery-time">
          {timeLeft.trim() ? (<span  className="delivery-time--deadline">
                   order in the next <span className="delivery-time--est">{timeLeft}</span>
                </span>) : null}
          </div>
    
      </div>
  );
};

OrderBy.propTypes = {
  state: PropTypes.string,
};

export default OrderBy;
