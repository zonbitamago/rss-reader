import twitterUtil from "./twitterUtil";

describe("twitterUtil", () => {
  let twitterUtiltest;
  beforeEach(() => {
    twitterUtiltest = new twitterUtil();
  });

  it("get", () => {
    return twitterUtiltest
      .get("https://twitter.com/DZonbitamago/lists/test")
      .then(tweets => {
        expect(tweets.length).not.toBe(0);
      });
  });

  it("error", () => {
    return twitterUtiltest
      .get("https://twitter.com/DZonbitamago/lists/nothing")
      .catch(error => {
        expect(error[0].code).toBe(34);
        expect(error[0].message).toBe("Sorry, that page does not exist.");
      });
  });
});
