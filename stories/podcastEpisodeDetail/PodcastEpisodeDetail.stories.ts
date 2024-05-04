import { Meta, StoryObj } from '@storybook/react';
import PodcastEpisodeDetail from './PodcastEpisodeDetail';

export default {
 title: 'Components/PodcastEpisodeDetail',
 component: PodcastEpisodeDetail,
} as Meta;

type Story = StoryObj<typeof meta>;


const meta = {
    title: 'Example/PodcastEpisodeDetail',
    component: PodcastEpisodeDetail,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof PodcastEpisodeDetail>;

export const Default: Story = {
    args: {
        title: 'Título del episodio del podcast',
        description: '<div>Descripción corta de un episodio cualquiera</div>',
        audioUrl: 'https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/524GE/traffic.megaphone.fm/VMP4468706306.mp3?updated=1714796306',
    },
  };
