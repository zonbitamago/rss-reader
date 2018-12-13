import moment from "moment";

export function transformDate(timeInMS) {
  var momentDate = moment(timeInMS);
  var momentNow = moment(new Date());
  // if (momentNow.diff(momentDate, "days") > 0) {
  //   return momentDate.format("YYYY/MM/DD HH:mm:ss");
  // }
  // return momentDate.startOf("YYYY/MM/DD HH:mm:ss").fromNow();
  return momentDate.format("YYYY/MM/DD HH:mm:ss");
}
