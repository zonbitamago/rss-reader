import React from "react";
import { shallow, mount } from "enzyme";

import RegistedListItem from "./RegistedListItem";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import { store } from "../../../../__mocks__/storeSettings";

jest.mock("../../../../__mocks__/electronUtilSettings");
jest.mock("../../../../__mocks__/storeSettings");

describe("RegistedListItem", () => {
  let component, wrapper, props;

  beforeEach(() => {
    electronUtil.openBrowser.mockRestore();
    props = {
      name: "test",
      url: "https://google/co.jp",
      electronUtil: electronUtil,
      store: store
    };
  });

  it("should", () => {
    component = shallow(<RegistedListItem {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("link click", () => {
    expect(electronUtil.openBrowser.mock.calls.length).toBe(0);
    wrapper = mount(<RegistedListItem {...props} />);

    wrapper
      .find(".RegistedListItem .RegistedListItem-Text div")
      .simulate("click");

    expect(electronUtil.openBrowser.mock.calls.length).toBe(1);
  });

  it("Delete Icon Click", () => {
    expect(store.FeedListStore.deleteFeedList.mock.calls.length).toBe(0);
    expect(store.ItemStore.setTimer.mock.calls.length).toBe(0);
    wrapper = mount(<RegistedListItem {...props} />);

    wrapper.find(".RegistedListItem svg").simulate("click");

    expect(store.FeedListStore.deleteFeedList.mock.calls.length).toBe(1);
    expect(store.ItemStore.setTimer.mock.calls.length).toBe(1);
  });
});
