import React from "react";
import { shallow } from "enzyme";
import Display from "./Display";

describe("Display component", () => {
  it("should render a <div />", () => {
    // Arrange
    const wrapper = shallow(<Display displayValue={""} />);

    // Act
    const expectedDisplay = wrapper.find("div");

    // Assert
    expect(expectedDisplay.length).toEqual(1);

    // Cleanup
    wrapper.unmount();
  });

  it("should display the displayValue", () => {
    // Arrange
    const wrapper = shallow(<Display displayValue={"test"} />);

    // Act
    // wrapper.setProps({ displayValue: "test" }); // unnecessary

    // Assert
    expect(wrapper.text()).toEqual("test");

    // Cleanup
    wrapper.unmount();
  });
});
