const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const date = day => {
  return `${DAYS[day.getDay()]} ${day.getDate()} ${
    MONTHS[day.getMonth()]
  } ${day.getFullYear()} - ${String(day.getHours()).padStart(
    2,
    '0'
  )}:${String(day.getMinutes()).padStart(2, '0')}`;
};

export default date;
