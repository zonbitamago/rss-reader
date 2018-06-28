import twitterUtil from "./twitterUtil";

describe("twitterUtil", () => {
  let twitterUtiltest;
  beforeEach(() => {
    twitterUtiltest = new twitterUtil();
  });
  it("init", () => {
    twitterUtiltest.get();
  });
});
