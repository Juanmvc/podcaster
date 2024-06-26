import React from "react";
import classes from "./podcastDetail.module.scss";
import Link from "next/link";

const MODULE_PREFIX = "podcast-detail";

export type PodcastDetailProps = {
  imageSrc: string;
  title: string;
  author: string;
  description: string;
  url?: string;
};

const PodcastDetail: React.FC<PodcastDetailProps> = ({
  imageSrc,
  title,
  author,
  description,
  url = "",
}) => {
  return (
    <Link className={classes[MODULE_PREFIX]} href={url}>
      <div className={classes[`${MODULE_PREFIX}__image-container`]}>
        <img
          src={imageSrc}
          alt="Imagen circular"
          className={classes[`${MODULE_PREFIX}__image`]}
        />
      </div>
      <div className={classes[`${MODULE_PREFIX}__title-author-container`]}>
        <h2
          data-testid="podcast-detail-page-title"
          className={classes[`${MODULE_PREFIX}__title`]}
        >
          {title}
        </h2>
        <p
          data-testid="podcast-detail-page-author"
          className={classes[`${MODULE_PREFIX}__author`]}
        >
          {author}
        </p>
      </div>
      <div className={classes[`${MODULE_PREFIX}__description-container`]}>
        <p className={classes[`${MODULE_PREFIX}__description`]}>Description:</p>
        <p
          data-testid="podcast-detail-page-description"
          className={classes[`${MODULE_PREFIX}__description-text`]}
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export default PodcastDetail;
