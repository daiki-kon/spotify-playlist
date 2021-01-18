import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { TracksTable, TracksTableProps } from '../components/TracksTable';

export default {
  title: 'components/TracksTable',
  component: TracksTable,
} as Meta;

const Template: Story<TracksTableProps> = (args: TracksTableProps) => (
  <TracksTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  tracks: {
    total: 3,
    next: '',
    items: [
      {
        track: {
          album: {
            name: '文化',
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b273ae668ffa508a4ec36bae23d5',
              },
            ],
          },
          artists: [{ name: 'Eve' }],
          name: 'ドラマツルギー',
          id: '44i0yotEYW72i9QbpWcn6y',
        },
      },
      {
        track: {
          album: {
            name: 'Take Off Your Colours',
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b2732aaeb5e53f01685922339edd',
              },
            ],
          },
          artists: [{ name: 'ユー・ミー・アット・シックス' }],
          name: 'If I Were In Your Shoes',
          id: '5DdHUFL088qi98xCzw4v33',
        },
      },
      {
        track: {
          album: {
            name: 'Shout to the Walls!',
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b2738c839954e20342a2ca37c37a',
              },
            ],
          },
          artists: [{ name: 'NICO Touches the Walls' }],
          name: '夏の大三角形',
          id: '7jgpA3tD2n9oyPVdNf5Kd3',
        },
      },
    ],
  },
};
