import mockAxios from "jest-mock-axios";
import feedParseUtil from "./feedParseUtil";
import stringToStream from "string-to-stream";
import * as rssConstants from "../../../__mocks__/rssConstants";

describe("feedParseUtil", () => {
  let util, rss1, rss2, atom;
  beforeEach(() => {
    util = new feedParseUtil();
    rss1 = rssConstants.RSS1;
    rss2 = rssConstants.RSS2;
    atom = rssConstants.ATOM;
  });
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  describe("正常系", () => {
    describe("HTTP_Success", () => {
      it("RSS1.0", () => {
        var responseObj = {
          status: 200,
          statusText: "OK",
          data: rss1
        };

        var feed = util.feedParse("http://example.com/");

        mockAxios.mockResponse(responseObj);

        return feed.then(a => {
          expect(1).toBe(1);
        });
      });

      it("RSS2.0", () => {
        var responseObj = {
          status: 200,
          statusText: "OK",
          data: rss2
        };

        var feed = util.feedParse("http://example.com/");

        mockAxios.mockResponse(responseObj);

        return feed.then(a => {
          expect(1).toBe(1);
        });
      });

      it("Atom", () => {
        var responseObj = {
          status: 200,
          statusText: "OK",
          data: atom
        };

        var feed = util.feedParse("http://example.com/");

        mockAxios.mockResponse(responseObj);

        return feed.then(a => {
          expect(1).toBe(1);
        });
      });
    });

    describe("feedParser", () => {
      it("RSS1.0", () => {
        stringToStream(rss1).pipe(util.feedparser);
        var promise = util.parse();

        return promise.then(ret => {
          expect(ret.length).toBe(2);
          expect(ret).toMatchSnapshot();
        });
      });

      it("RSS2.0", () => {
        stringToStream(rss2).pipe(util.feedparser);
        var promise = util.parse();

        return promise.then(ret => {
          expect(ret.length).toBe(4);
          expect(ret).toMatchSnapshot();
        });
      });

      it("Atom", () => {
        stringToStream(atom).pipe(util.feedparser);
        var promise = util.parse();

        return promise.then(ret => {
          expect(ret.length).toBe(2);
          expect(ret).toMatchSnapshot();
        });
      });
    });
  });

  describe("異常系", () => {
    it("axios error", () => {
      var feed = util.feedParse("http://example.com/");

      try {
        mockAxios.mockError(new Error());
      } catch (error) {
        expect(error).toEqual(new Error());
      }
    });
  });
});
