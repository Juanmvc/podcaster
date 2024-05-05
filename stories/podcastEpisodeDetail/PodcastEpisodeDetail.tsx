import React from 'react';
import classes from './podcastEpisodeDetail.module.scss';
import PureHTMLContent from '../pureHTMLContent/PureHTMLContent';

export type PodcastEpisodeDetailProps = {
 title: string;
 description: string;
 audioUrl: string;
}

const PodcastEpisodeDetail: React.FC<PodcastEpisodeDetailProps> = ({ title, description, audioUrl }) => {
 return (
    <div className={classes["podcast-episode-detail"]}>
        <h2 className={classes["title"]}>{title}</h2>
        <PureHTMLContent html={description}/>
        <audio controls className={classes['audio-control']}>
            <source src={audioUrl}/>
            Your browser does not support the audio element.
        </audio>
    </div>
 );
};

export default PodcastEpisodeDetail;
