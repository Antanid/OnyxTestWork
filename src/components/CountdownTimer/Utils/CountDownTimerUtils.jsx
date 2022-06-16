import dayjs from 'dayjs';

function padWithZeros(number, minLength) {
  const numberString = number.toString();
  if (numberString.length >= minLength) {
    return numberString;
  }
  return '0'.repeat(minLength - numberString.length) + numberString;
}

function getRemainingSeconds(nowDayjs, timestampsDayjs) {
  const seconds = timestampsDayjs.diff(nowDayjs, 'seconds') % 60;
  return padWithZeros(seconds, 2);
}
function getRemainingMinutes(nowDayjs, timestampsDayjs) {
  const minutes = timestampsDayjs.diff(nowDayjs, 'minutes') % 60;
  return padWithZeros(minutes, 2);
}
function getRemainingHours(nowDayjs, timestampsDayjs) {
  const hours = timestampsDayjs.diff(nowDayjs, 'hours') % 24;
  return padWithZeros(hours, 2);
}
function getRemainingDays(nowDayjs, timestampsDayjs) {
  const days = timestampsDayjs.diff(nowDayjs, 'days');
  return padWithZeros(days, 2);
}

function getRemainingTimes(timestampsMs) {
  const timestampsDayjs = dayjs(timestampsMs);
  const nowDayjs = dayjs();
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampsDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampsDayjs),
    hours: getRemainingHours(nowDayjs, timestampsDayjs),
    days: getRemainingDays(nowDayjs, timestampsDayjs),
  };
}

export default getRemainingTimes;
