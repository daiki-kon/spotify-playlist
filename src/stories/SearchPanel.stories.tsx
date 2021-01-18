import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchPanel, SearchPanelProps } from '../components/SearchPanel';

import { useSearch } from '../hooks/useSearch';
import { SearchPanelContainer } from '../containers/SearchPanelContainer';

export default {
  title: 'components/SearchPanel',
  component: SearchPanel,
} as Meta;

const Template: Story<SearchPanelProps> = (args: SearchPanelProps) => {
  // return <SearchPanel tracks={tracks} albums={albums} artists={artists} />;
  return <SearchPanelContainer />;
};

export const Primary = Template.bind({});
Primary.args = {};
