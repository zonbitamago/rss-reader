import React from "react";
import { shallow, mount } from "enzyme";
import { electronUtil } from "../../../../__mocks__/electronUtilSettings";
import Menus from "./Menus";
import { store } from "../../../../__mocks__/storeSettings";

jest.mock("../../../../__mocks__/electronUtilSettings");
jest.mock("../../../../__mocks__/storeSettings");

describe("Menus", () => {
  let component, wrapper, props;

  beforeEach(() => {
    electronUtil.openBrowser.mockRestore();
    electronUtil.minimizeApp.mockRestore();
    electronUtil.closeApp.mockRestore();
    store.ItemStore.getSettings.mockRestore();
    store.ItemStore.setTimer.mockRestore();
    store.FeedListStore.getFeedList.mockRestore();

    props = {
      electronUtil: electronUtil,
      store: store
    };
    component = shallow(<Menus {...props} />);
    wrapper = mount(<Menus {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });

  describe("Icon Click", () => {
    it("PowerSettingsNew Icon Click", () => {
      expect(electronUtil.closeApp.mock.calls.length).toBe(0);

      wrapper
        .find(".Icon")
        .at(0)
        .childAt(0)
        .simulate("click");

      expect(electronUtil.closeApp.mock.calls.length).toBe(1);
    });
    it("Refresh Icon Click", () => {
      expect(store.ItemStore.setTimer.mock.calls.length).toBe(0);

      wrapper
        .find(".Icon")
        .at(1)
        .childAt(0)
        .simulate("click");

      expect(store.ItemStore.setTimer.mock.calls.length).toBe(1);
    });
    it("RssFeed Icon Click", () => {
      expect(store.FeedListStore.getFeedList.mock.calls.length).toBe(0);
      expect(wrapper.state().registedListModalOpen).toBe(false);

      wrapper
        .find(".Icon")
        .at(2)
        .childAt(0)
        .simulate("click");

      expect(store.FeedListStore.getFeedList.mock.calls.length).toBe(1);

      expect(wrapper.state().registedListModalOpen).toBe(true);
    });

    it("IndeterminateCheckBox Icon Click", () => {
      expect(electronUtil.minimizeApp.mock.calls.length).toBe(0);

      wrapper
        .find(".Icon")
        .at(3)
        .childAt(0)
        .simulate("click");

      expect(electronUtil.minimizeApp.mock.calls.length).toBe(1);
    });

    it("Settings Icon Click", () => {
      expect(store.ItemStore.getSettings.mock.calls.length).toBe(0);
      expect(wrapper.state().settingModalOpen).toBe(false);

      wrapper
        .find(".Icon")
        .at(4)
        .childAt(0)
        .simulate("click");

      expect(store.ItemStore.getSettings.mock.calls.length).toBe(1);

      expect(wrapper.state().settingModalOpen).toBe(true);
    });

    it("Github Icon Click", () => {
      expect(electronUtil.openBrowser.mock.calls.length).toBe(0);

      wrapper
        .find(".Icon")
        .at(5)
        .childAt(0)
        .simulate("click");

      expect(electronUtil.openBrowser.mock.calls.length).toBe(1);
    });
  });
});
