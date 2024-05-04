import getPodcastEpisodeList from "@/app/application/getPodcastEpisodeList";
import getPodcastList from "@/app/application/getPodcastList";
import presentPodcastEpisodesTableRow from "@/app/ui/presenters/PodcastEpisodeListTablePresenter";
import PodcastDetail from "@/stories/podcastDetail/PodcastDetail";
import PodcastEpisodeListTable from "@/stories/podcastEpisodeListTable/PodcastEpisodeListTable";
import classes from './page.module.scss';

async function PodcastDetailPage(context: { params: {podcastID: string}}) {

  const podcastID = +context.params.podcastID;

  const podcastList = await getPodcastList({limit: 100, genreID: 1310});
  const episodeList = await getPodcastEpisodeList({podcastID: podcastID})
  const podcast = podcastList.find(podcast => podcast.id === podcastID);

  const podcastEpisodesTableRows = presentPodcastEpisodesTableRow({episodes: episodeList, podcastID: podcastID});

  return (
      <div className={classes["podcast-detail-page"]}>
        {podcast &&
          <PodcastDetail title={podcast.title} author={podcast.author} description={podcast.description} imageSrc={podcast.imageUrl}/>
        }
        {podcastEpisodesTableRows && 
          <PodcastEpisodeListTable rows={podcastEpisodesTableRows}/>
        }
        <div>{podcastEpisodesTableRows.length}</div>
      </div>
  );
}

export default PodcastDetailPage;