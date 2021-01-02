import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { TrackInfo, TrackInfoProps } from '../components/TrackInfo';

export default {
  title: 'components/TrackInfo',
  component: TrackInfo,
} as Meta;

const Template: Story<TrackInfoProps> = (args: TrackInfoProps) => (
  <TrackInfo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 20,
  coverImageUrl:
    'https://i.scdn.co/image/ab67616d0000b27304fc65f97636c39f27fa213f',
  trackName: 'MISSING',
  artistsNameList: ['ELLEGARDEN'],
};
