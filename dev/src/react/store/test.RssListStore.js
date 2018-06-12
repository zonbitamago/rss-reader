import RssListStore from "./RssListStore";
import feedParseUtil from "../util/feedParseUtil";
import { Promise, reject } from "bluebird-lst";

jest.mock("../util/feedParseUtil");

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

      var name = "google.com";
      var url = "https://google.com";
      store = new RssListStore();

      var promise = store.setRssList(name, url);

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

      var name = "yahoo.com";
      var url = "https://yahoo.com";
      store = new RssListStore();
      store.getRssList();

      var promise = store.setRssList(name, url);

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

      var name = "google.com";
      var url = "https://google.com";
      store = new RssListStore();
      store.getRssList();

      var promise = store.setRssList(name, url);

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

      var name = "google.com";
      var url = "https://google.com";
      store = new RssListStore();

      var promise = store.setRssList(name, url);

      return promise.then(ret => {
        expect(ret).toBe(false);
        expect(JSON.parse(localStorage.getItem("rssList"))).toMatchSnapshot();
      });
    });
  });
});
