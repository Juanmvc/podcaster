"use client";
import React from "react";
import classes from "./podcastList.module.scss";
import ColorLabel from "@/stories/colorLabel/ColorLabel";
import PodcastSummary from "@/stories/podcast/Podcast";
import { useState } from "react";
import { useFilteredList } from "../../hooks/usePodcastFilteredList";
import { useQuery } from "@tanstack/react-query";
import getPodcastList from "@/app/core/application/getPodcastList";
import { one_day_in_ms } from "@/app/core/domain/const/time";
import Podcast, { PodcastPrimitiveProps } from "@/app/core/domain/entities/Podcast";

const MODULE_PREFIX = "podcast-list";

export default function PodcastList({
  podcastList,
}: {
  podcastList: PodcastPrimitiveProps[];
}) {
  const { data } = useQuery({
    queryKey: ["initial-podcasts"],
    queryFn: () => getPodcastList({ limit: 100, genreID: 1310 }),
    initialData: podcastList,
    staleTime: one_day_in_ms,
  });

  const [value, setValue] = useState("");
  const podcastEntityList = data.map((podcast) =>
    Podcast.fromPrimitive({ ...podcast })
  );

  const filteredPodcastList = useFilteredList(podcastEntityList, value);

  return (
    <div className={classes[MODULE_PREFIX]}>
      <div className={classes[`${MODULE_PREFIX}__filter`]}>
        <ColorLabel>{filteredPodcastList.length}</ColorLabel>
        <input
          type="search"
          placeholder="Filter podcasts..."
          onChange={(e) => setValue(e.target.value.trim())}
        />
      </div>
      <div className={classes[`${MODULE_PREFIX}__grid`]}>
        {filteredPodcastList.map(({ id, title, author, imageUrl }) => (
          <PodcastSummary
            key={id}
            title={title}
            subtitle={author}
            imageSrc={imageUrl}
            url={`/podcast/${id}`}
          />
        ))}
      </div>
    </div>
  );
}
