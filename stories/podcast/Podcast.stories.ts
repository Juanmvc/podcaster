import { Meta, StoryObj } from '@storybook/react';
import Podcast from './Podcast';

export default {
 title: 'Components/Podcast',
 component: Podcast,
} as Meta;

type Story = StoryObj<typeof meta>;


const meta = {
    title: 'Example/Button',
    component: Podcast,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Podcast>;

export const Primary: Story = {
    args: {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Título del Div',
        subtitle: 'Subtítulo del Div',
        onClick: () => console.log('Div clicado'),
    },
  };
