import { Meta, StoryObj } from '@storybook/react';
import Podcast from './Podcast';

export default {
 title: 'Components/Podcast',
 component: Podcast,
} as Meta;

type Story = StoryObj<typeof meta>;


const meta = {
    title: 'Example/Podcast',
    component: Podcast,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Podcast>;

export const Default: Story = {
    args: {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Título del podcast',
        subtitle: 'Subtítulo del podcast',
        url: 'podcast url',
    },
  };
