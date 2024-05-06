import PodcastEpisode from "@/app/domain/entities/PodcastEpisode";
import { formatMillisecondsToStandardTime } from "@/app/utils/formatTime";
import { TableRow } from "@/stories/podcastEpisodeListTable/PodcastEpisodeListTable";

type PresentPodcastEpisodesTableRowProps = {
  episodes: PodcastEpisode[];
  podcastID: number;
};

export default function presentPodcastEpisodesTableRow({
  episodes,
  podcastID,
}: PresentPodcastEpisodesTableRowProps): TableRow[] {
  return episodes.map((episode) => ({
    title: episode.title,
    url: `/podcast/${podcastID}/episode/${episode.id}`,
    date: episode.releaseDate.toISOString().split("T")[0],
    duration: formatMillisecondsToStandardTime(episode.duration),
  }));
}
