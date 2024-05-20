import React from "react";
import PodcastDetail from "@/stories/podcastDetail/PodcastDetail";
import classes from "./page.module.scss";
import PodcastEpisodeList from "@/app/ui/sections/PodcastEpisodeList";
import getPodcastEpisodeList from "@/app/core/application/getPodcastEpisodeList";
import getPodcastList from "@/app/core/application/getPodcastList";

async function PodcastDetailPage(context: { params: { podcastID: string } }) {
  const podcastID = +context.params.podcastID;

  const podcastList = await getPodcastList({ limit: 100, genreID: 1310 });
  const episodeList = await getPodcastEpisodeList({ podcastID: podcastID });
  const podcast = podcastList.find((podcast) => podcast.id === podcastID);

  const episodeListPrimitive = episodeList.episodes.map((episode) =>
    episode.toPrimitive()
  );

  return (
    <div className={classes["podcast-detail-page"]}>
      {podcast && (
        <PodcastDetail
          title={podcast.title}
          author={podcast.author}
          description={podcast.description}
          imageSrc={podcast.imageUrl}
        />
      )}
      {episodeList && (
        <div>
          <div
            className={classes["podcast-detail-page__episodes-count"]}
          >{`Episodes: ${episodeList.count}`}</div>
          <PodcastEpisodeList
            podcastEpisodes={episodeListPrimitive}
            podcastID={podcastID}
          />
        </div>
      )}
    </div>
  );
}

export default PodcastDetailPage;
