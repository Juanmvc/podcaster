
type PodcastEpisodeProps = {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  duration: number;
  url: string;
};
  
export default class PodcastEpisode {
  readonly id: number;

  readonly title: string;
  
  readonly description: string;

  readonly releaseDate: Date;

  readonly duration: number;

  readonly url: string;

  constructor({
    id,
    title,
    description,
    releaseDate,
    duration,
    url,
  }: PodcastEpisodeProps) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.releaseDate = releaseDate;
    this.duration = duration;
    this.url = url;
  }
}
  