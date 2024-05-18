import { EpisodesResultsItunes } from "../../itunesTypes/EpisodesResultsItunes";
import { EpisodeItunes } from "../../itunesTypes/EpisodeItunes";
import PodcastEpisode from "@/app/domain/entities/PodcastEpisode";

const adaptPodcastEpisodeList = (episodesResultsItunes: EpisodesResultsItunes) => {
    const episodes = episodesResultsItunes.results;
    const episodeCount = episodes[0].trackCount
    episodes.shift()
    const podcastList = episodes.map((episode: EpisodeItunes) => 
        new PodcastEpisode ({
            id: episode.trackId,
            title: episode.trackName,
            description: episode.description,
            releaseDate: new Date (episode.releaseDate),
            duration: episode.trackTimeMillis,
            url: episode.episodeUrl,
    }));
    return {count: episodeCount, episodes: podcastList};
};

export default adaptPodcastEpisodeList;
