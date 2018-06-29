import RssListStore from "./RssListStore";
import feedParseUtil from "../util/feedParseUtil";
import twitterUtil from "../util/twitterUtil";
import { Promise } from "bluebird-lst";

jest.mock("../util/feedParseUtil");
jest.mock("../util/twitterUtil");

describe("RssListStore", () => {
  let store;

  beforeEach(() => {
    localStorage.clear();
  });

  it("init", () => {
    store = new RssListStore();
    expect(store.rssList.length).toBe(0);
  });

  describe("getRssList", () => {
    it("Not Registed", () => {
      store = new RssListStore();
      store.getRssList();
      expect(store.rssList.length).toBe(0);
    });

    it("Registed 1items", () => {
      localStorage.setItem(
        "rssList",
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          }
        ])
      );
      store = new RssListStore();
      store.getRssList();
      expect(store.rssList.length).toBe(1);
    });

    it("Registed 2items", () => {
      localStorage.setItem(
        "rssList",
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          },
          {
            name: "yahoo.com",
            url: "https://yahoo.com"
          }
        ])
      );
      store = new RssListStore();
      store.getRssList();
      expect(store.rssList.length).toBe(2);
    });
  });

  describe("setRssList", () => {
    it("Not Regsited", () => {
      feedParseUtil.mockImplementation(() => {
        return {
          feedParse: url => {
            return new Promise(resolve => {
              resolve("test");
            });
          }
        };
      });

      store = new RssListStore();
      store.name = "google.com";
      store.url = "https://google.com";

      var promise = store.setRssList();

      return promise.then(ret => {
        expect(ret).toBe(true);
        expect(JSON.parse(localStorage.getItem("rssList")).length).toBe(1);
        expect(JSON.parse(localStorage.getItem("rssList"))).toMatchSnapshot();
      });
    });

    it("Registed", () => {
      feedParseUtil.mockImplementation(() => {
        return {
          feedParse: url => {
            return new Promise(resolve => {
              resolve("test");
            });
          }
        };
      });

      localStorage.setItem(
        "rssList",
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          }
        ])
      );

      store = new RssListStore();
      store.name = "yahoo.com";
      store.url = "https://yahoo.com";
      store.getRssList();

      var promise = store.setRssList();

      return promise.then(ret => {
        expect(ret).toBe(true);
        expect(JSON.parse(localStorage.getItem("rssList")).length).toBe(2);
        expect(JSON.parse(localStorage.getItem("rssList"))).toMatchSnapshot();
      });
    });

    it("Duplicate", () => {
      feedParseUtil.mockImplementation(() => {
        return {
          feedParse: url => {
            return new Promise(resolve => {
              resolve("test");
            });
          }
        };
      });

      localStorage.setItem(
        "rssList",
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          }
        ])
      );

      store = new RssListStore();
      store.name = "google.com";
      store.url = "https://google.com";
      store.getRssList();

      var promise = store.setRssList();

      return promise.then(ret => {
        expect(ret).toBe(false);
        expect(JSON.parse(localStorage.getItem("rssList")).length).toBe(1);
        expect(JSON.parse(localStorage.getItem("rssList"))).toMatchSnapshot();
      });
    });

    it("Not URL", async () => {
      feedParseUtil.mockImplementation(() => {
        return {
          feedParse: url => {
            return new Promise((resolve, reject) => {
              reject(new Error());
            });
          }
        };
      });

      store = new RssListStore();
      store.name = "google.com";
      store.url = "https://google.com";

      var promise = store.setRssList();

      return promise.then(ret => {
        expect(ret).toBe(false);
        expect(JSON.parse(localStorage.getItem("rssList"))).toMatchSnapshot();
      });
    });

    describe("twitter_list URL", () => {
      it("success", () => {
        twitterUtil.mockImplementation(() => {
          return {
            get: url => {
              return new Promise(resolve => {
                resolve("test");
              });
            }
          };
        });

        store = new RssListStore();
        store.name = "twitter_test";
        store.url = "https://twitter.com/DZonbitamago/lists/test";

        return store.setRssList().then(ret => {
          expect(ret).toBe(true);
          expect(JSON.parse(localStorage.getItem("rssList")).length).toBe(1);
          expect(JSON.parse(localStorage.getItem("rssList"))).toMatchSnapshot();
        });
      });
    });
  });

  describe("deleteRssList", () => {
    it("delete　single", () => {
      store = new RssListStore();

      var rssList = [
        {
          name: "google.com",
          url: "https://google.com"
        },
        {
          name: "yahoo.com",
          url: "https://yahoo.com"
        }
      ];
      localStorage.setItem("rssList", JSON.stringify(rssList));
      store.rssList = rssList;

      store.deleteRssList("google.com");

      expect(store.rssList.length).toBe(1);
      expect(JSON.parse(localStorage.getItem("rssList")).length).toBe(1);
    });

    it("delete　double", () => {
      store = new RssListStore();

      var rssList = [
        {
          name: "google.com",
          url: "https://google.com"
        },
        {
          name: "yahoo.com",
          url: "https://yahoo.com"
        }
      ];
      localStorage.setItem("rssList", JSON.stringify(rssList));
      store.rssList = rssList;

      store.deleteRssList("google.com");
      store.deleteRssList("yahoo.com");

      expect(store.rssList.length).toBe(0);
      expect(JSON.parse(localStorage.getItem("rssList")).length).toBe(0);
    });
  });
});
