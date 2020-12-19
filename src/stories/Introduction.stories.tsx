import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { Introduction } from '../components/Introduction';

export default {
  title: 'components/Introduction',
  component: Introduction,
} as Meta;

const Template: Story = (args: any) => <Introduction {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 40,
};
