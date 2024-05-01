import React from 'react';
import './podcastDetail.scss';

export type PodcastProps = {
 imageSrc: string;
 title: string;
 author: string;
 description: string;
}

const Podcast: React.FC<PodcastProps> = ({ imageSrc, title, author, description }) => {
 return (
    <div className="podcast-detail">
      <div className="image-container">
        <img src={imageSrc} alt="Imagen circular" className="image" />
      </div>
      <div className="title-author-container">
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
      </div>
      <div className="description-container">
        <p className="description">Description:</p>
        <p className="description-text">{description}</p>
      </div>
    </div>
 );
};

export default Podcast;

