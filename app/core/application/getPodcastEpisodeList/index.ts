import { PodcastEpisodeList } from "../../domain/entities/PodcastEpisodeList";
import adaptPodcastEpisodeList from "../../infrastructure/itunes/adapters/adaptPodcastEpisodeList";
import { EpisodesResultsItunes } from "../../infrastructure/itunes/itunesTypes/EpisodesResultsItunes";
import PodcastEpisodeListRepository from "../../infrastructure/itunes/repositories/PodcastEpisodeListRepository";


const getPodcastEpisodeList = async ({
    podcastID,
}: {
    podcastID: number;
}): Promise<PodcastEpisodeList> => {
  const repository =
    new PodcastEpisodeListRepository<EpisodesResultsItunes>();
  const { data } = await repository.getData({
    podcastID,
  });

  const podcastList = adaptPodcastEpisodeList(data);
  
  return podcastList;
};

export default getPodcastEpisodeList;
