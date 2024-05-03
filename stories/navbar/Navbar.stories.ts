import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

export default {
 title: 'Components/Navbar',
 component: Navbar,
} as Meta;

type Story = StoryObj<typeof meta>;


const meta = {
    title: 'Example/Navbar',
    component: Navbar,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Navbar>;

export const Default: Story = {
    args: {
        linkUrl: 'some url',
        linkText: 'Título del Navbar',
        loading: true
    },
  };
