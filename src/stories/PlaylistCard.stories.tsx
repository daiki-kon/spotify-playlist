import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { PlaylistCard, PlaylistCardProps } from '../components/PlaylistCard';

export default {
  title: 'components/PlaylistCard',
  component: PlaylistCard,
} as Meta;

const Template: Story<PlaylistCardProps> = (args: PlaylistCardProps) => (
  <PlaylistCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  coverImageUrl:
    'https://i.scdn.co/image/ab67616d0000b273233906d0f076db62a4f819d0',
  playlistName: '洋楽',
  width: 20,
};
