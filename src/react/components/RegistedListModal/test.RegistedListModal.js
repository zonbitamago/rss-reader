import React from "react";
import { mount } from "enzyme";

import RegistedListModal from "./RegistedListModal";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import { store } from "../../../../__mocks__/storeSettings";

jest.mock("../../../../__mocks__/storeSettings");

describe("RegistedListModal", () => {
  let wrapper, props, mockfn;

  beforeEach(() => {
    mockfn = jest.fn();
    store.FeedListStore.url = "";
    store.FeedListStore.name = "";
    store.FeedListStore.feedList = [
      {
        name: "name",
        url: "url"
      }
    ];
    store.FeedListStore.setFeedList.mockRestore();
    store.ItemStore.setTimer.mockRestore();
    props = {
      open: true,
      handleClose: mockfn,
      store: store,
      electronUtil: electronUtil
    };
    wrapper = mount(<RegistedListModal {...props} />);
  });

  it("yesボタンクリック", () => {
    store.FeedListStore.setFeedList.mockImplementation(() => {
      return new Promise(resolve => {
        resolve(true);
      });
    });
    expect(mockfn.mock.calls.length).toBe(0);
    expect(store.FeedListStore.setFeedList.mock.calls.length).toBe(0);
    // expect(store.ItemStore.setTimer.mock.calls.length).toBe(0);

    wrapper.find(".Button > #yes").simulate("click");

    expect(mockfn.mock.calls.length).toBe(0);
    expect(store.FeedListStore.setFeedList.mock.calls.length).toBe(1);
    // expect(store.ItemStore.setTimer.mock.calls.length).toBe(1);

    store.FeedListStore.setFeedList.mockImplementation(() => {
      return new Promise(resolve => {
        resolve(false);
      });
    });

    wrapper.find(".Button > #yes").simulate("click");
    expect(mockfn.mock.calls.length).toBe(0);
    expect(store.FeedListStore.setFeedList.mock.calls.length).toBe(2);
  });

  it("noボタンクリック", () => {
    expect(mockfn.mock.calls.length).toBe(0);
    wrapper.find(".Button > #no").simulate("click");
    expect(mockfn.mock.calls.length).toBe(1);
  });

  it("URL Input Change", () => {
    expect(store.FeedListStore.url).toBe("");
    wrapper
      .find(".RegistedListModal input#URL")
      .simulate("change", { target: { value: "test" } });
    expect(store.FeedListStore.url).toBe("test");
  });

  it("Name Input Change", () => {
    expect(store.FeedListStore.name).toBe("");
    wrapper
      .find(".RegistedListModal input#Name")
      .simulate("change", { target: { value: "test" } });
    expect(store.FeedListStore.name).toBe("test");
  });
});
