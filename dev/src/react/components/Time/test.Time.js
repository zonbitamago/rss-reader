import React from "react";
import { shallow, mount, render } from "enzyme";
import mockdate from "mockdate";

import Time from "./Time";

describe("Time", () => {
  let component, props;

  beforeEach(() => {
    jest.useFakeTimers();
    mockdate.set(new Date(2017, 5, 15, 7, 12, 5));
    props = {};
    component = mount(<Time {...props} />);
  });

  it("現在日時表示", () => {
    expect(component.find(".Time-MMDD").text()).toBe("6/15");
    expect(component.find(".Time-HHmmss").text()).toBe("07:12:05");

    //時計の設定を1秒すすめる。
    mockdate.set(new Date(2017, 5, 15, 7, 12, 6));
    //1秒後に値が更新されることを確認する。
    // jest.advanceTimersByTime(1000);
    jest.runOnlyPendingTimers();
    expect(component.find(".Time-MMDD").text()).toBe("6/15");
    expect(component.find(".Time-HHmmss").text()).toBe("07:12:06");
  });
});
