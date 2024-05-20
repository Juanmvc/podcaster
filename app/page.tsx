import getPodcastList from "./core/application/getPodcastList";
import PodcastList from "./ui/sections/PodcastList";
import React from "react";

async function PodcastListPage() {
  const podcastList = await getPodcastList({ limit: 100, genreID: 1310 });
  const podcastListPrimitive = podcastList.map((podcast) =>
    podcast.toPrimitive()
  );

  return (
    <div data-test-id="podcast-list-page">
      <PodcastList podcastList={podcastListPrimitive} />
    </div>
  );
}

export default PodcastListPage;
