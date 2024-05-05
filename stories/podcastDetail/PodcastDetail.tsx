import React from 'react';
import classes from './podcastDetail.module.scss';

const MODULE_PREFIX = 'podcast-detail';

export type PodcastDetailProps = {
 imageSrc: string;
 title: string;
 author: string;
 description: string;
}

const PodcastDetail: React.FC<PodcastDetailProps> = ({ imageSrc, title, author, description }) => {
 return (
    <div className={classes[MODULE_PREFIX]}>
      <div className={classes[`${MODULE_PREFIX}__image-container`]}>
        <img src={imageSrc} alt="Imagen circular" className={classes[`${MODULE_PREFIX}__image`]}/>
      </div>
      <div className={classes[`${MODULE_PREFIX}__title-author-container`]}>
        <h2 className={classes[`${MODULE_PREFIX}__title`]}>{title}</h2>
        <p className={classes[`${MODULE_PREFIX}__author`]}>{author}</p>
      </div>
      <div className={classes[`${MODULE_PREFIX}__description-container`]}>
        <p className={classes[`${MODULE_PREFIX}__description`]}>Description:</p>
        <p className={classes[`${MODULE_PREFIX}__description-text`]}>{description}</p>
      </div>
    </div>
 );
};

export default PodcastDetail;

