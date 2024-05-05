import { mockPodcastList } from "../../../../application/getPodcastList/__fixtures__/index";
import adaptPodcastList from ".";
import { mockAdaptedPodcastList } from "./__fixtures__";

describe("adaptPodcastList adapter", () => {
  it("should return the Podcasts entities with the correct format", () => {
    const adapterResult = adaptPodcastList(mockPodcastList);

    expect(adapterResult).toEqual(mockAdaptedPodcastList);
  });
});
