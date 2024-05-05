import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

export default {
 title: 'Components/Input',
 component: Input,
} as Meta;

type Story = StoryObj<typeof meta>;


const meta = {
    title: 'Example/Input',
    component: Input,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Some placeholder',
        onChange: () => console.log('changed text')
    },
  };
