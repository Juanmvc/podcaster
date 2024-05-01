
type PodcastEpisodeProps = {
    id: number;
    title: string;
    description: string;
    url: string;
  };
  
  export default class PodcastEpisode {
    readonly id: number;
  
    readonly title: string;
    
    readonly description: string;
  
    readonly url: string;
  
    constructor({
      id,
      title,
      description,
      url,
    }: PodcastEpisodeProps) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.url = url;
    }
  }
  