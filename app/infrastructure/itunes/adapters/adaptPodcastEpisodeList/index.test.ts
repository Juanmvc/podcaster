import { mockPodcastEpisodeList } from "../../../../application/getPodcastEpisodeList/__fixtures__/index";
import adaptPodcastEpisodeList from ".";
import { mockAdaptedPodcastEpisodeList } from "./__fixtures__";

describe("adaptPodcastEpisodeList adapter", () => {
  it("should return the Podcasts episodes entities with the correct format", () => {
    const adapterResult = adaptPodcastEpisodeList(mockPodcastEpisodeList);

    expect(adapterResult.episodes).toEqual(mockAdaptedPodcastEpisodeList);
  });
});
