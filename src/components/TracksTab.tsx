import React, { FC } from 'react';
import { Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { colorPicker } from '../utils/Color';
import { SearchPanelContainer } from '../containers/SearchPanelContainer';
import { SavedTracksTableContainer } from '../containers/SavedTracksTableContainer';

export type TracksTabProps = {};

const StyledTabPane = styled(Tab.Pane)<{ background: string }>`
  background: ${(props) => props.background} !important;
  border: none !important;
`;

export const TracksTab: FC<TracksTabProps> = () => {
  const panes = [
    {
      menuItem: {
        content: '検索',
      },
      render: () => (
        <StyledTabPane background={colorPicker('dark')}>
          <SearchPanelContainer />
        </StyledTabPane>
      ),
    },
    {
      menuItem: 'お気に入り',
      render: () => (
        <StyledTabPane background={colorPicker('dark')}>
          <SavedTracksTableContainer />
        </StyledTabPane>
      ),
    },
  ];

  return (
    <>
      <Tab
        menu={{
          color: 'grey',
          inverted: true,
        }}
        panes={panes}
      />
    </>
  );
};
