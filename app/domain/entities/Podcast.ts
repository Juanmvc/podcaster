
  type PodcastProps = {
    id: number;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
  };

  export type PodcastPrimitiveProps = {
  id: number;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
}
  
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

    toPrimitive(): PodcastProps {
      return {
        id: this.id,
        title: this.title,
        author: this.author,
        description: this.description,
        imageUrl: this.imageUrl,
      };
    }

    static fromPrimitive({
      id,
      title,
      author,
      description,
      imageUrl
    }: PodcastPrimitiveProps): Podcast {
      return new Podcast({       
        id,
        title,
        author,
        description,
        imageUrl });
    }
  }
  