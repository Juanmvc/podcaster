import React from "react";
import classes from "./podcastEpisodeDetail.module.scss";
import PureHTMLContent from "../pureHTMLContent/PureHTMLContent";

const MODULE_PREFIX = "podcast-episode-detail";

export type PodcastEpisodeDetailProps = {
  title: string;
  description: string;
  audioUrl: string;
};

const PodcastEpisodeDetail: React.FC<PodcastEpisodeDetailProps> = ({
  title,
  description,
  audioUrl,
}) => {
  return (
    <div className={classes[MODULE_PREFIX]}>
      <h2 className={classes[`${MODULE_PREFIX}__title`]}>{title}</h2>
      <PureHTMLContent html={description} />
      <audio controls className={classes[`${MODULE_PREFIX}__audio-control`]}>
        <source src={audioUrl} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PodcastEpisodeDetail;
