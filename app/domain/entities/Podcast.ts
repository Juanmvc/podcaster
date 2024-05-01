
   type PodcastProps = {
    id: number;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
  };
  
  export default class Podcast {
    readonly id: number;
  
    readonly title: string;
  
    readonly author: string;
  
    readonly description: string;
  
    readonly imageUrl: string;
  
    constructor({
      id,
      title,
      author,
      description,
      imageUrl,
    }: PodcastProps) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.description = description;
      this.imageUrl = imageUrl;
    }
  }
  