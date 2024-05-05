import { Meta, StoryObj } from '@storybook/react';
import ColorLabel from './ColorLabel';

export default {
 title: 'Components/ColorLabel',
 component: ColorLabel,
} as Meta;

type Story = StoryObj<typeof meta>;


const meta = {
    title: 'Example/ColorLabel',
    component: ColorLabel,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof ColorLabel>;

export const Default: Story = {
    args: {
        children: "some text"
    },
  };
