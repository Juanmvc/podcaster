"use client";
import React from "react";
import PodcastEpisode, {
  PodcastEpisodePrimitiveProps,
} from "@/app/domain/entities/PodcastEpisode";
import presentPodcastEpisodesTableRow from "../../presenters/PodcastEpisodeListTablePresenter";
import classes from "./podcastEpisodeList.module.scss";
import PodcastEpisodeListTable, {
  TableRow,
} from "@/stories/podcastEpisodeListTable/PodcastEpisodeListTable";
import { useQuery } from "@tanstack/react-query";
import getPodcastEpisodeList from "@/app/application/getPodcastEpisodeList";
import { one_day_in_ms } from "@/app/domain/const/time";

const MODULE_PREFIX = "podcast-episode-list";

export default function PodcastEpisodeList({
  podcastEpisodes,
  podcastID,
}: {
  podcastEpisodes: PodcastEpisodePrimitiveProps[];
  podcastID: number;
}) {
  const { data } = useQuery({
    queryKey: ["initial-podcast-episodes"],
    queryFn: () => getPodcastEpisodeList({ podcastID }),
    initialData: podcastEpisodes,
    staleTime: one_day_in_ms,
  });

  const podcastEpisodesEntityList = data.map((podcast) =>
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
