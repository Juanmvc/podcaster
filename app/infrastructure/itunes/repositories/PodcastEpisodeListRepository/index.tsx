import { ItunesBaseRepository } from '../ItunesBaseRepository';

export default class PodcastEpisodeListRepository<T> extends ItunesBaseRepository {
  async getData({
    podcastID,
  }: {
    podcastID: number
  }) {
    return await this.get<T>(`lookup?id=${podcastID}&media=podcast&entity=podcastEpisode&limit=1000`);
  }
}
