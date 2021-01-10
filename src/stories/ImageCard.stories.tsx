import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { ImageCard, ImageCardProps } from '../components/ImageCard';

export default {
  title: 'components/ImageCard',
  component: ImageCard,
} as Meta;

const Template: Story<ImageCardProps> = (args: ImageCardProps) => {
  return <ImageCard {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  coverImageUrl:
    'https://i.scdn.co/image/ab67616d0000b273233906d0f076db62a4f819d0',
  title: '洋楽',
  width: 20,
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  coverImageUrl:
    'https://i.scdn.co/image/ab67616d0000b273233906d0f076db62a4f819d0',
  title: 'Tik Tok',
  subTitle: 'ケシャ',
  width: 20,
};
