import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import PodcastDetail from "./PodcastDetail";

describe("PodcastDetail Component", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders correctly with provided props", () => {
    const props = {
      imageSrc: "https://example.com/image.jpg",
      title: "Test Podcast",
      author: "John Doe",
      description: "A detailed description of the podcast.",
      url: "/test-podcast",
    };

    const { getByAltText, getByText } = render(<PodcastDetail {...props} />);

    const imageElement = getByAltText("Imagen circular");
    expect(imageElement).toHaveAttribute("src", props.imageSrc);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.author)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
  });
});
