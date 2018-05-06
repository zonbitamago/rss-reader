import mockdate from "mockdate";
import * as timeUtil from "./timeUtil";

describe("timeUtil", () => {
  test("現在時刻から1時間未満は分表記", () => {
    mockdate.set(new Date(2017, 10, 15, 7, 12, 5));
    var date = new Date(2017, 10, 15, 7, 10, 5);

    var timeInMS = date.getTime();
    expect(timeUtil.transformDate(timeInMS)).toEqual("2 minutes ago");
  });

  test("現在時刻から1時間以上、1日未満は時間表記", () => {
    mockdate.set(new Date(2017, 10, 15, 7, 12, 5));
    var date = new Date(2017, 10, 15, 5, 12, 5);

    var timeInMS = date.getTime();
    expect(timeUtil.transformDate(timeInMS)).toEqual("2 hours ago");
  });

  test("現在時刻から1日以上は年月日表記", () => {
    mockdate.set(new Date(2017, 10, 17, 7, 12, 5));
    var date = new Date(2017, 10, 15, 7, 12, 5);

    var timeInMS = date.getTime();
    expect(timeUtil.transformDate(timeInMS)).toEqual("November 15, 2017");
  });
});
