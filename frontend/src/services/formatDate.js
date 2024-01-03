import moment from "moment";

export function dateMinusOneMonth() {
  return moment().subtract(1, "month").format("YYYY-MM-DD");
}

export function dateMinusFifteenDays() {
  return moment().subtract(15, "day");
}
