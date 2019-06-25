import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Display/Display";

describe("Calculator", () => {
  it("should render the Display component", () => {
    // Arrange
    const wrapper = shallow(<Calculator />);

    // Act
    const expectedDisplay = wrapper.find(Display);

    // Assert
    expect(expectedDisplay.length).toEqual(1);
    expect(expectedDisplay.props()).toEqual({ displayValue: "0" });

    // Cleanup
    wrapper.unmount();
  });

  it("should render a <div />", () => {
    // Arrange
    const wrapper = shallow(<Calculator />);

    // Act
    const expectedDiv = wrapper.find("div");

    // Assert
    expect(expectedDiv.length).toEqual(1);

    // Cleanup
    wrapper.unmount();
  });
});
