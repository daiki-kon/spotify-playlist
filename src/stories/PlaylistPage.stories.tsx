import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

// eslint-disable-next-line import/namespace
import { PlaylistPage } from '../pages/PlaylistPage';

export default {
  title: 'pages/PlaylistPage',
  component: PlaylistPage,
} as Meta;

const Template: Story = (args: any) => <PlaylistPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
