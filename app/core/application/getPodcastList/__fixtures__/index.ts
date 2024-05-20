import { FeedItunes } from "@/app/core/infrastructure/itunes/itunesTypes/FeedItunes";

export const mockPodcastList: FeedItunes = {
  feed: {
    entry: [
      {
        "im:name": { label: "The Joe Budden Podcast" },
        "im:image": [
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png",
            attributes: { height: "55" },
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png",
            attributes: { height: "60" },
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
            attributes: { height: "170" },
          },
        ],
        summary: {
          label:
            "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.",
        },
        title: { label: "The Joe Budden Podcast - The Joe Budden Network" },
       
        id: {
          label:
            "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
          attributes: { "im:id": "1535809341" },
        },
        "im:artist": {
          label: "The Joe Budden Network",
          attributes: {
            href: "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2",
          },
        },
      },
      {
        "im:name": { label: "Dissect" },
        "im:image": [
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/4f/c4/69/4fc46991-2675-7c9e-6994-d4efab46d736/mza_10353750159708400901.jpg/55x55bb.png",
            attributes: { height: "55" },
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/4f/c4/69/4fc46991-2675-7c9e-6994-d4efab46d736/mza_10353750159708400901.jpg/60x60bb.png",
            attributes: { height: "60" },
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/4f/c4/69/4fc46991-2675-7c9e-6994-d4efab46d736/mza_10353750159708400901.jpg/170x170bb.png",
            attributes: { height: "170" },
          },
        ],
        summary: {
          label:
            "Analyzing the music and meaning of one album per season, one song per episode. Join host Cole Cuchna as he dives deep into albums by Kendrick Lamar, Kanye West, Radiohead, Beyonce, Tyler The Creator, Frank Ocean, and more. Let's Dissect.",
        },
        title: { label: "Dissect - The Ringer" },      
        id: {
          label:
            "https://podcasts.apple.com/us/podcast/dissect/id1143845868?uo=2",
          attributes: { "im:id": "1143845868" },
        },
        "im:artist": { label: "The Ringer" },
        
      },
      {
        "im:name": { label: "R&B Money" },
        "im:image": [
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/55x55bb.png",
            attributes: { height: "55" },
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/60x60bb.png",
            attributes: { height: "60" },
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/170x170bb.png",
            attributes: { height: "170" },
          },
        ],
        summary: {
          label:
            "R&B Money Podcast is hosted by the Legendary Grammy Award winning R&B singer/songwriter/producer TANK and his business partner multi-platinum songwriter & executive J. Valentine.\n" +
            "\n" +
            "This podcast is for the super dedicated R&B fans, covering everything from Keith Sweat to Pink Sweat$. R&B Money has created a fly space for artist & executives in the game to reminisce, with exceptional compelling story telling and a place of discovery for the fans. ",
        },
        title: { label: "R&B Money - The Black Effect and iHeartPodcasts" },
        id: {
          label:
            "https://podcasts.apple.com/us/podcast/r-b-money/id1623212249?uo=2",
          attributes: { "im:id": "1623212249" },
        },
        "im:artist": { label: "The Black Effect and iHeartPodcasts" },
      },
    ],
  },
};
