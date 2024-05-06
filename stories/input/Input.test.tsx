import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders correctly and calls onChange when text is entered", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input onChange={mockOnChange} placeholder="Test placeholder" />
    );

    const inputElement = getByPlaceholderText("Test placeholder");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "New text" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
