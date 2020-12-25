import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  PlaylistButton,
  PlaylistButtonProps,
} from '../components/PlaylistButton';

export default {
  title: 'components/PlaylistButton',
  component: PlaylistButton,
} as Meta;

const Template: Story<PlaylistButtonProps> = (args: PlaylistButtonProps) => (
  <PlaylistButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: <p>hello</p>,
  width: 20,
};
