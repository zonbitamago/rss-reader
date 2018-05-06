import moment from "moment";

export function transformDate(timeInMS) {
  var momentDate = moment(timeInMS);
  var momentNow = moment(new Date());
  if (momentNow.diff(momentDate, "days") > 0) {
    return momentDate.format("LL");
  }
  return momentDate.startOf("minute").fromNow();
}
