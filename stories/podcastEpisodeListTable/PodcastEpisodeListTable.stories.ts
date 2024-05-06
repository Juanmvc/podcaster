import { Meta, StoryObj } from "@storybook/react";
import PodcastEpisodeListTable from "./PodcastEpisodeListTable";

export default {
  title: "Components/PodcastEpisodeListTable",
  component: PodcastEpisodeListTable,
} as Meta;

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Example/PodcastEpisodeListTable",
  component: PodcastEpisodeListTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PodcastEpisodeListTable>;

export const Default: Story = {
  args: {
    rows: [
      {
        title: "Title 1",
        url: "www.google.es",
        date: "Date 1",
        duration: "Duration 1",
      },
      {
        title: "Title 2",
        url: "www.google.es",
        date: "Date 2",
        duration: "Duration 2",
      },
      {
        title: "Title 3",
        url: "www.google.es",
        date: "Date 3",
        duration: "Duration 3",
      },
    ],
  },
};
