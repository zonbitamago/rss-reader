import React from "react";
import { shallow, mount } from "enzyme";

import SettingModal from "./SettingModal";
import { store } from "../../../../__mocks__/storeSettings";

jest.mock("../../../../__mocks__/storeSettings");

describe("SettingModal", () => {
  let component, wrapper, props, handleClose;

  beforeEach(() => {
    handleClose = jest.fn();
    store.ItemStore.setSetting.mockRestore();
    store.ItemStore.setTimer.mockRestore();
    store.ItemStore.updateDuration = "";
    handleClose.mockRestore();
    props = { store: store, open: true, handleClose: handleClose };
    wrapper = mount(<SettingModal {...props} />);
  });

  it("should", () => {
    component = shallow(<SettingModal {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("Yes Button Click", () => {
    expect(store.ItemStore.setSetting.mock.calls.length).toBe(0);
    expect(store.ItemStore.setTimer.mock.calls.length).toBe(0);
    expect(handleClose.mock.calls.length).toBe(0);

    wrapper
      .find(".SettingModal .Button button")
      .at(0)
      .simulate("click");

    expect(store.ItemStore.setSetting.mock.calls.length).toBe(1);
    expect(store.ItemStore.setTimer.mock.calls.length).toBe(1);
    expect(handleClose.mock.calls.length).toBe(1);
  });

  it("No Button Click", () => {
    expect(store.ItemStore.setSetting.mock.calls.length).toBe(0);
    expect(store.ItemStore.setTimer.mock.calls.length).toBe(0);
    expect(handleClose.mock.calls.length).toBe(0);

    wrapper
      .find(".SettingModal .Button button")
      .at(1)
      .simulate("click");

    expect(store.ItemStore.setSetting.mock.calls.length).toBe(0);
    expect(store.ItemStore.setTimer.mock.calls.length).toBe(0);
    expect(handleClose.mock.calls.length).toBe(1);
  });

  it("UpdateDuration Input Change", () => {
    expect(store.ItemStore.updateDuration).toBe("");

    wrapper
      .find(".SettingModal input#UpdateDuration")
      .simulate("change", { target: { value: "test" } });
    expect(store.ItemStore.updateDuration).toBe("test");
  });
});
