'use client'
import React from 'react';
import classes from './podcast.module.scss';
import Link from 'next/link';

const MODULE_PREFIX = 'podcast';

export type PodcastSummaryProps = {
 imageSrc: string;
 title: string;
 subtitle: string;
 url: string;
}

const PodcastSummary: React.FC<PodcastSummaryProps> = ({ imageSrc, title, subtitle, url }) => {
 return (
    <Link className={classes[MODULE_PREFIX]} href={url}>
      <div className={classes[`${MODULE_PREFIX}__image-container`]}>
        <img src={imageSrc} alt="Imagen circular" className={classes[`${MODULE_PREFIX}__circular-image`]}/>
      </div>
      <div className={classes[`${MODULE_PREFIX}__text-container`]}>
        <h3 className={classes[`${MODULE_PREFIX}__title`]}>{title}</h3>
        <p className={classes[`${MODULE_PREFIX}__subtitle`]}>{subtitle}</p>
      </div>
    </Link>
 );
};

export default PodcastSummary;

