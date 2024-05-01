'use client'
import React from 'react';
import './podcast.scss';

export type PodcastProps = {
 imageSrc: string;
 title: string;
 subtitle: string;
 onClick: () => void;
}

const Podcast: React.FC<PodcastProps> = ({ imageSrc, title, subtitle, onClick }) => {
 return (
    <div className="podcast" onClick={onClick}>
      <div className="image-container">
        <img src={imageSrc} alt="Imagen circular" className="circular-image" />
      </div>
      <div className="text-container">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
 );
};

export default Podcast;

