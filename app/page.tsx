
import getPodcastList from "./application/getPodcastList";
import PodcastList from "./ui/sections/PodcastList";

async function PodcastListPage() {

  const podcastList = await getPodcastList({limit: 100, genreID: 1310});
  const podcastListPrimitive = podcastList.map(podcast => podcast.toPrimitive());

  return (
      <div>
        <PodcastList podcastList={podcastListPrimitive} />
      </div>
  );
}

export default PodcastListPage;
