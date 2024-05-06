import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import PodcastSummary from "./Podcast";

describe("PodcastSummary Component", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders correctly with provided props", () => {
    const props = {
      imageSrc: "https://example.com/image.jpg",
      title: "Test Podcast",
      subtitle: "A short description",
      url: "/test-podcast",
    };

    const { getByAltText, getByText } = render(<PodcastSummary {...props} />);

    const imageElement = getByAltText("Imagen circular");
    expect(imageElement).toHaveAttribute("src", props.imageSrc);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.subtitle)).toBeInTheDocument();
  });
});
