import RssListStore from "./RssListStore";
import feedParseUtil from "../util/feedParseUtil";

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
      var resp;
      console.log(feedParseUtil.mock.instances);

      feedParseUtil.mock.instances[0].feedParse.mockResolvedValue(resp);

      var name = "google.com";
      var url = "https://google.com";
      store = new RssListStore();

      var promise = store.setRssList(name, url);

      return promise.then(ret => {
        console.log(ret);

        expect(ret).toBe(true);
        expect(JSON.parse(localStorage.getItem("rssList"))).toBe(1);
      });
    });

    // it("Registed", () => {
    //   store = new RssListStore();
    //   var name = "google.com";
    //   var url = "https://google.com";
    //   store = new RssListStore();
    //   store.setRssList(name, url);
    //   expect(JSON.parse(localStorage.getItem("rssList"))).toBe(2);
    // });

    // it("Duplicate", () => {
    //   store = new RssListStore();
    //   var name = "google.com";
    //   var url = "https://google.com";
    //   store = new RssListStore();
    //   store.setRssList(name, url);
    //   expect(JSON.parse(localStorage.getItem("rssList"))).toBe(1);
    // });

    // it("Not URL", async () => {
    //   store = new RssListStore();
    //   var name = "google.com";
    //   var url = "https://google.com";
    //   store = new RssListStore();
    //   await store.setRssList(name, url);

    //   expect.assertions(1);
    //   expect(JSON.parse(localStorage.getItem("rssList"))).toBe(0);
    // });
  });
});
