// useFilteredList.ts
import Podcast, { PodcastPrimitiveProps } from '@/app/domain/entities/Podcast';
import { useState, useCallback, useMemo } from 'react';

export const useFilteredList = (podcastList: Podcast[], filterValue: string) => {
 const filterFn = useCallback(
    (podcast: Podcast) => {
      return podcast.title.toUpperCase().includes(filterValue.toUpperCase()) ||
        podcast.author.toUpperCase().includes(filterValue.toUpperCase()) ||
        filterValue === '';
    },
    [filterValue]
 );

 const filteredList = useMemo(() => podcastList.filter(filterFn), [podcastList, filterFn]);

 return filteredList;
};
