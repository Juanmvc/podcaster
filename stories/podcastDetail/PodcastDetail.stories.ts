import { Meta, StoryObj } from '@storybook/react';
import PodcastDetail from './PodcastDetail';

export default {
 title: 'Components/PodcastDetail',
 component: PodcastDetail,
} as Meta;

type Story = StoryObj<typeof meta>;


const meta = {
    title: 'Example/PodcastDetail',
    component: PodcastDetail,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof PodcastDetail>;

export const Default: Story = {
    args: {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Título del podcast',
        author: 'Autor del podcast',
        description: 'Descripción corta de un podcast cualquiera'
    },
  };
