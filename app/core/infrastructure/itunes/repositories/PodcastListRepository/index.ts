import { ItunesBaseRepository } from '../ItunesBaseRepository';

export default class PodcastListRepository<T> extends ItunesBaseRepository {
  async getData({
    limit,
    genreID,
  }: {
    limit: number,
    genreID: number
  }) {
    return await this.get<T>(`us/rss/toppodcasts/limit=${limit}/genre=${genreID}/json`);
  }
}
