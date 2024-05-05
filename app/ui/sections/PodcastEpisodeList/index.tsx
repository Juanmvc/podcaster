import classes from './podcastEpisodeList.module.scss';
import PodcastEpisodeListTable, { TableRow } from "@/stories/podcastEpisodeListTable/PodcastEpisodeListTable";

const MODULE_PREFIX = 'podcast-episode-list';

export default function PodcastEpisodeList({
    podcastEpisodesTableRows,
}: {
    podcastEpisodesTableRows: TableRow[];
}) {
  return (
    <div className={classes[MODULE_PREFIX]}>
        <PodcastEpisodeListTable rows={podcastEpisodesTableRows}/>
    </div>
  );
}
