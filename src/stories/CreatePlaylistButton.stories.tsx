import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  CreatePlaylistButton,
  CreatePlaylistButtonProps,
} from '../components/CreatePlaylistButton';

export default {
  title: 'components/CreatePlaylistButton',
  component: CreatePlaylistButton,
} as Meta;

const Template: Story<CreatePlaylistButtonProps> = (
  args: CreatePlaylistButtonProps,
) => <CreatePlaylistButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
