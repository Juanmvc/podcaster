import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import PodcastEpisodeDetail from "./PodcastEpisodeDetail";

describe("PodcastEpisodeDetail Component", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders correctly with provided props", () => {
    const props = {
      title: "Test Episode",
      description: "<p>This is a test description.</p>",
      audioUrl: "https://example.com/audio.mp3",
    };

    const { getByText, getByTestId } = render(
      <PodcastEpisodeDetail {...props} />
    );

    expect(getByText(props.title)).toBeInTheDocument();

    expect(getByText("This is a test description.")).toBeInTheDocument();

    const audioElement = getByTestId("audio-control");
    expect(audioElement).toBeInTheDocument();
  });
});
