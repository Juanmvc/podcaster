import Podcast from "../../domain/entities/Podcast";
import adaptPodcastList from "../../infrastructure/itunes/adapters/adaptPodcastList";
import { FeedItunes } from "../../infrastructure/itunes/itunesTypes/FeedItunes";
import PodcastListRepository from "../../infrastructure/itunes/repositories/PodcastListRepository";

const getPodcastList = async ({
    limit,
    genreID
}: {
  limit: number;
  genreID: number;
}): Promise<Podcast[]> => {
  const repository =
    new PodcastListRepository<FeedItunes>();
  const { data } = await repository.getData({
    limit,
    genreID
  });

  const podcastList = adaptPodcastList(data);
  
  return podcastList;
};

export default getPodcastList;
