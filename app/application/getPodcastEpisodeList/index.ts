import { PodcastEpisodeList } from "@/app/domain/entities/PodcastEpisodeList";
import adaptPodcastEpisodeList from "@/app/infrastructure/itunes/adapters/adaptPodcastEpisodeList";
import { EpisodesResultsItunes } from "@/app/infrastructure/itunes/itunesTypes/EpisodesResultsItunes";
import PodcastEpisodeListRepository from "@/app/infrastructure/itunes/repositories/PodcastEpisodeListRepository";

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
