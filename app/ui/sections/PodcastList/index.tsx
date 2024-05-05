'use client'

import classes from './podcastList.module.scss';
import Podcast, { PodcastPrimitiveProps } from "@/app/domain/entities/Podcast";
import ColorLabel from '@/stories/colorLabel/ColorLabel';
import PodcastSummary from "@/stories/podcast/Podcast";
import { useState } from 'react';
import { useFilteredList } from '../../hooks/usePodcastFilteredList';

const MODULE_PREFIX = 'podcast-list';

export default function PodcastList({
    podcastList,
}: {
    podcastList: PodcastPrimitiveProps[];
}) {

  const [value, setValue] = useState('')
  const podcastEntityList = podcastList.map(podcast => Podcast.fromPrimitive({...podcast}))

  const filteredPodcastList = useFilteredList(podcastEntityList, value);

  return (
    <div className={classes[MODULE_PREFIX]}>
      <div className={classes[`${MODULE_PREFIX}__filter`]}>
        <ColorLabel>{filteredPodcastList.length}</ColorLabel>
        <input
          type="search"
          placeholder='Filter podcasts...'
          onChange={e => setValue(e.target.value.trim())} 
        />
      </div>
      <div className={classes[`${MODULE_PREFIX}__grid`]}>
          {filteredPodcastList.map(
            ({ id,
              title,
              author,
              imageUrl,}) => (
              <PodcastSummary key={id} title={title} subtitle={author} imageSrc={imageUrl} url={`/podcast/${id}`}/>
            )
          )}
      </div>
    </div>
  );
}
