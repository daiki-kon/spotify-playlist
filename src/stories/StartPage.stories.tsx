import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { StartPage } from '../pages/StartPage';

export default {
  title: 'pages/StartPage',
  component: StartPage,
} as Meta;

const Template: Story = (args: any) => <StartPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
