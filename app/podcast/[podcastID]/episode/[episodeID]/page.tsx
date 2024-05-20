import PodcastDetail from "@/stories/podcastDetail/PodcastDetail";
import classes from "./page.module.scss";
import PodcastEpisodeDetail from "@/stories/podcastEpisodeDetail/PodcastEpisodeDetail";
import getPodcastList from "@/app/core/application/getPodcastList";
import getPodcastEpisodeList from "@/app/core/application/getPodcastEpisodeList";

async function PodcastEpisodeDetailPage(context: {
  params: { podcastID: string; episodeID: string };
}) {
  const podcastID = +context.params.podcastID;
  const episodeID = +context.params.episodeID;

  const podcastList = await getPodcastList({ limit: 100, genreID: 1310 });
  const episodeList = await getPodcastEpisodeList({ podcastID: podcastID });
  const podcast = podcastList.find((podcast) => podcast.id === podcastID);
  const episode = episodeList.episodes.find(
    (episode) => episode.id === episodeID
  );

  return (
    <div
      data-test-id="podcast-episode-detail-page"
      className={classes["episode-detail-page"]}
    >
      {podcast && (
        <PodcastDetail
          title={podcast.title}
          author={podcast.author}
          description={podcast.description}
          imageSrc={podcast.imageUrl}
          url={`/podcast/${podcastID}`}
        />
      )}
      {episode && (
        <PodcastEpisodeDetail
          title={episode.title}
          description={episode.description}
          audioUrl={episode.url}
        />
      )}
    </div>
  );
}

export default PodcastEpisodeDetailPage;
