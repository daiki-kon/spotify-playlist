import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { StyledPlaylistButton } from '../components/StyledPlaylistButton';

export default {
  title: 'components/PlaylistButton',
  component: StyledPlaylistButton,
} as Meta;

const Template: Story = (args: any) => (
  <StyledPlaylistButton {...args}> {args.children}</StyledPlaylistButton>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <p>Hello</p>,
};
