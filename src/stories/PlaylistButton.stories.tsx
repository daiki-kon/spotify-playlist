import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { StyledButton } from '../components/StyledButton';

export default {
  title: 'components/PlaylistButton',
  component: StyledButton,
} as Meta;

const Template: Story = (args: any) => (
  <StyledButton {...args}> {args.children}</StyledButton>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <p>Hello</p>,
};
