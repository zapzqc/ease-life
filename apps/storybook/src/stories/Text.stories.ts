import type { Meta, StoryObj } from '@storybook/web-components';
import '@ease-life/text';

const meta: Meta = {
  component: 'el-text',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'world',
  },
};
