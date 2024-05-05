import classes from './podcastList.module.scss';
import { PodcastPrimitiveProps } from "@/app/domain/entities/Podcast";
import PodcastSummary from "@/stories/podcast/Podcast";

const MODULE_PREFIX = 'podcast-list';

export default function PodcastList({
    podcastList,
}: {
    podcastList: PodcastPrimitiveProps[];
}) {
  return (
    <div className={classes[MODULE_PREFIX]}>
        {podcastList.map(
          ({ id,
            title,
            author,
            imageUrl,}) => (
            <PodcastSummary key={id} title={title} subtitle={author} imageSrc={imageUrl} url={`/podcast/${id}`}/>
          )
        )}
    </div>
  );
}
