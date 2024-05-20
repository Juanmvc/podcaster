import Podcast from "@/app/core/domain/entities/Podcast";
import { EntryItunes } from "../../itunesTypes/EntryItunes";
import { FeedItunes } from "../../itunesTypes/FeedItunes";

const adaptPodcastList = (feedItunes: FeedItunes) => {
    const entries = feedItunes.feed.entry;
    const podcastList = entries.map((entry: EntryItunes) => 
        new Podcast ({
        id: +entry.id.attributes['im:id'],
        title: entry.title.label,
        author: entry['im:artist'].label,
        description: entry.summary.label,
        imageUrl: entry['im:image'][0].label,
    }));
    return podcastList;
};

export default adaptPodcastList;
