import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Calculator from "../Calculator/Calculator";

describe("App", () => {
  it("should render a <div />", () => {
    // Arrange
    const wrapper = shallow(<App />);

    // Act
    const expectedDiv = wrapper.find("div");

    // Assert
    expect(expectedDiv.length).toEqual(1);

    // Cleanup
    wrapper.unmount();
  });

  it("should render the Calculator component", () => {
    // Arrange
    const wrapper = shallow(<App />);

    // Act
    const containsCalculator = wrapper.containsMatchingElement(<Calculator />);

    // Assert
    expect(containsCalculator).toEqual(true);

    // Cleanup
    wrapper.unmount();
  });
});
