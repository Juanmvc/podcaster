'use client'
import React from 'react';
import './podcast.scss';
import Link from 'next/link';

export type PodcastSummaryProps = {
 imageSrc: string;
 title: string;
 subtitle: string;
 url: string;
}

const PodcastSummary: React.FC<PodcastSummaryProps> = ({ imageSrc, title, subtitle, url }) => {
 return (
    <Link className="podcast" href={url}>
      <div className="image-container">
        <img src={imageSrc} alt="Imagen circular" className="circular-image" />
      </div>
      <div className="text-container">
        <h3 className="title">{title}</h3>
        <p className="subtitle">{subtitle}</p>
      </div>
    </Link>
 );
};

export default PodcastSummary;

