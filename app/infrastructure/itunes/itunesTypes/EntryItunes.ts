type ImageAttributes = {
    height: string;
}
   
type Image = {
    label: string;
    attributes: ImageAttributes;
}
   
type Name = {
    label: string;
}

type IdAttributes = {
    "im:id": string;
}

type Id = {
    label: string;
    attributes: IdAttributes;
}

type ArtistAttributes = {
    href: string;
}

type Artist = {
    label: string;
    attributes: ArtistAttributes;
}

export type EntryItunes = {
    "im:name": Name;
    "im:image": Image[];
    summary: {
        label: string;
    };
    title: {
        label: string;
    };
    id: Id;
    "im:artist": Artist;
}
