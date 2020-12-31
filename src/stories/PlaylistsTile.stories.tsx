import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

// eslint-disable-next-line import/namespace
import { PlaylistsTile, PlaylistsTileProps } from '../components/PlaylistsTile';

export default {
  title: 'components/PlaylistsTile',
  component: PlaylistsTile,
} as Meta;

const Template: Story<PlaylistsTileProps> = (args: PlaylistsTileProps) => (
  <PlaylistsTile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isFetching: false,
  playlists: {
    total: 2,
    items: [
      {
        id: '37i9dQZF1DZ06evO1QM05u',
        name: 'This Is ELLEGARDEN',
        description: '',
        images: [
          {
            url:
              'https://thisis-images.scdn.co/37i9dQZF1DZ06evO1QM05u-large.jpg',
          },
        ],
      },
      {
        id: '"37i9dQZF1EM1IkF3naAH2G"',
        name: '"My Top Songs 2020"',
        description: '',
        images: [
          {
            url:
              'https://lineup-images.scdn.co/wrapped-2020-top100_LARGE-ja.jpg',
          },
        ],
      },
    ],
    next: ' ',
  },
};
