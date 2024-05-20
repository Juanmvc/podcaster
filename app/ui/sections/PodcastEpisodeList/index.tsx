"use client";
import React from "react";
import presentPodcastEpisodesTableRow from "../../presenters/PodcastEpisodeListTablePresenter";
import classes from "./podcastEpisodeList.module.scss";
import PodcastEpisodeListTable from "@/stories/podcastEpisodeListTable/PodcastEpisodeListTable";
import { useQuery } from "@tanstack/react-query";
import getPodcastEpisodeList from "@/app/core/application/getPodcastEpisodeList";
import { one_day_in_ms } from "@/app/core/domain/const/time";
import PodcastEpisode, { PodcastEpisodePrimitiveProps } from "@/app/core/domain/entities/PodcastEpisode";


const MODULE_PREFIX = "podcast-episode-list";

export default function PodcastEpisodeList({
  podcastEpisodes,
  podcastID,
}: {
  podcastEpisodes: PodcastEpisodePrimitiveProps[];
  podcastID: number;
}) {
  const { data } = useQuery({
    queryKey: [`initial-podcast-episodes-${podcastID}`],
    queryFn: () => getPodcastEpisodeList({ podcastID }),
    initialData: {count: podcastEpisodes.length, episodes: podcastEpisodes},
    staleTime: one_day_in_ms,
  });

  const podcastEpisodesEntityList = data.episodes.map((podcast) =>
    PodcastEpisode.fromPrimitive({ ...podcast })
  );

  const podcastEpisodesTableRows = presentPodcastEpisodesTableRow({
    episodes: podcastEpisodesEntityList,
    podcastID: podcastID,
  });

  return (
    <div className={classes[MODULE_PREFIX]}>
      <PodcastEpisodeListTable rows={podcastEpisodesTableRows} />
    </div>
  );
}
