import getPodcastEpisodeList from "@/app/application/getPodcastEpisodeList";
import getPodcastList from "@/app/application/getPodcastList";
import presentPodcastEpisodesTableRow from "@/app/ui/presenters/PodcastEpisodeListTablePresenter";
import PodcastDetail from "@/stories/podcastDetail/PodcastDetail";
import classes from './page.module.scss';
import PodcastEpisodeListTable from "@/stories/podcastEpisodeListTable/PodcastEpisodeListTable";
import PodcastEpisodeDetail from "@/stories/podcastEpisodeDetail/PodcastEpisodeDetail";

async function PodcastEpisodeDetailPage(context: { params: {podcastID: string, episodeID: string}}) {

  const podcastID = +context.params.podcastID;
  const episodeID = +context.params.episodeID;

  const podcastList = await getPodcastList({limit: 100, genreID: 1310});
  const episodeList = await getPodcastEpisodeList({podcastID: podcastID})
  const podcast = podcastList.find(podcast => podcast.id === podcastID);
  const episode = episodeList.find(episode => episode.id === episodeID);

  return (
      <div className={classes["episode-detail-page"]}>
        {podcast &&
          <PodcastDetail title={podcast.title} author={podcast.author} description={podcast.description} imageSrc={podcast.imageUrl}/>
        }
        {episode &&
          <PodcastEpisodeDetail title={episode.title} description={episode.description} audioUrl={episode.url}/>
        }
      </div>
  );
}

export default PodcastEpisodeDetailPage;