import { PodcastPrimitiveProps } from "@/app/domain/entities/Podcast";
import PodcastSummary from "@/stories/podcast/Podcast";

const MODULE_PREFIX = 'podcast-list';

export default function PodcastList({
    podcastList,
}: {
    podcastList: PodcastPrimitiveProps[];
}) {
  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}>
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
