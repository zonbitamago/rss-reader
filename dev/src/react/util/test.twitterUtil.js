import twitterUtil, { getHost, getPath } from "./twitterUtil";
import * as constants from "../util/constants";

describe("twitterUtil", () => {
  let twitterUtiltest, correct_url, error_url;
  beforeEach(() => {
    correct_url = "https://twitter.com/DZonbitamago/lists/test";
    error_url = "https://twitter.com/DZonbitamago/lists/nothing";
    twitterUtiltest = new twitterUtil();
  });

  describe("main class", () => {
    it("get", () => {
      return twitterUtiltest.get(correct_url).then(tweets => {
        expect(tweets.length).not.toBe(0);
      });
    });

    it("error", () => {
      return twitterUtiltest.get(error_url).catch(error => {
        expect(error[0].code).toBe(34);
        expect(error[0].message).toBe("Sorry, that page does not exist.");
      });
    });
  });

  describe("util function", () => {
    it("getHost", () => {
      expect(getHost(correct_url)).toBe(constants.TWITTER_DOMAIN);
    });

    it("getPath", () => {
      expect(getPath(correct_url)).toBe("DZonbitamago/lists/test");
    });
  });
});
