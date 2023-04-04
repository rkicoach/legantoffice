function isBusinessDay(date) {
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    // it's the freakin weekend
    return false;
  }

  // DATE FORMAT KEY:
  // basic date:
  // 1/1 ==> month/day of month = jan 1
  //
  // relative date - closest day of the week following a date
  // (or preceeding, if relative date would spill into the next month):
  // 1/2+1 ==> month/day+day of week = the monday after jan 2
  // 12/31+5 ==> month/day+day of week = the friday before dec 31
  //
  // date by week in month:
  // 9-1/1 ==> month-week of month/day of week = the first monday in september
  // 11-4/4 ==> month-week of month/day of week = the fourth thurs in november
  //
  // examples follow:

  const holidays = [
    '12/31+5',  // New Year's Day on a saturday celebrated on previous friday
    '1/1',      // New Year's Day
    '1/2+1',    // New Year's Day on a sunday celebrated on next monday
    '1-3/1',    // Birthday of Martin Luther King, third Monday in January
    '2-3/1',    // Washington's Birthday, third Monday in February
    '5~1/1',    // Memorial Day, last Monday in May
    '7/3+5',    // Independence Day
    '7/4',      // Independence Day
    '7/5+1',    // Independence Day
    '9-1/1',    // Labor Day, first Monday in September
    '10-2/1',   // Columbus Day, second Monday in October
    '11/10+5',  // Veterans Day
    '11/11',    // Veterans Day
    '11/12+1',  // Veterans Day
    '11-4/4',   // Thanksgiving Day, fourth Thursday in November
    '12/24+5',  // Christmas Day
    '12/25',    // Christmas Day
    '12/26+1',  // Christmas Day
  ];

  const dayOfMonth = date.getDate();
  const month = date.getMonth() + 1;
  const monthDay = `${month}/${dayOfMonth}`;

  if (holidays.indexOf(monthDay) > -1) {
    return false;
  }

  const monthDayDay = `${monthDay}+${dayOfWeek}`;
  if (holidays.indexOf(monthDayDay) > -1) {
    return false;
  }

  const weekOfMonth = Math.floor((dayOfMonth - 1) / 7) + 1;
  const monthWeekDay = `${month}-${weekOfMonth}/${dayOfWeek}`;
  if (holidays.indexOf(monthWeekDay) > -1) {
    return false;
  }

  const lastDayOfMonth = new Date(date);
  lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
  lastDayOfMonth.setDate(0);
  const negWeekOfMonth = Math.floor((lastDayOfMonth.getDate() - dayOfMonth - 1) / 7) + 1;
  const monthNegWeekDay = `${month}~${negWeekOfMonth}/${dayOfWeek}`;
  if (holidays.indexOf(monthNegWeekDay) > -1) {
    return false;
  }

  // if we've come this far, date is neither a weekend or holiday
  return true;
}

export function businessDaysFromDate(date, daysToAdjust) {
  let counter = 1;
  let businessDays = daysToAdjust;
  const oneDayInMs = 86400000;
  const d = new Date(date.getTime());

  while (businessDays > 0) {
    d.setTime(date.getTime() + (counter * oneDayInMs));
    if (isBusinessDay(d)) {
      --businessDays;
    }
    ++counter;
  }

  return d;
}

export function isBefore(startDate, endDate) {
  return startDate.getTime() < endDate.getTime();
}

export function isAfter(startDate, endDate) {
  return startDate.getTime() > endDate.getTime();
}

export function isDuringRange(date, startDate, endDate) {
  const t = date.getTime();
  const start = startDate.getTime();
  const end = endDate.getTime();

  return t >= start && t <= end;
}

export function dateBetween(startDate, endDate) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let distance = endDate.getTime() - startDate.getTime();

  if (distance < 0) {
    distance = endDate - businessDaysFromDate(startDate, 1);
  }

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);

  const dayDesc = days === 1 ? ' day ' : ' days ';
  const hourDesc = hours === 1 ? ' hour ' : ' hrs ';
  const minDesc = minutes === 1 ? ' minute' : ' mins';

  const d = days > 0 ? `${days} ${dayDesc}` : '';
  const h = hours > 0 ? `${hours} ${hourDesc}` : '';
  const m = minutes > 0 ? `${minutes} ${minDesc}` : '';

  const timeLeftString = days > 1 ? `${d} ${h}` : `${d} ${h} ${m}`;

  return timeLeftString;
}

export function getShipDay(now, cutOff) {
  let shipDay = new Date(cutOff.getTime());

  if (!isBusinessDay(cutOff)) {
    shipDay = businessDaysFromDate(cutOff, 1);
    return shipDay;
  }

  if (!isBefore(now, cutOff)) {
    shipDay = businessDaysFromDate(cutOff, 1);
    return shipDay;
  }

  return shipDay;
}

export function dayOfWeekString(dayIdx) {
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][dayIdx];
}
