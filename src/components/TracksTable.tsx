import React, { FC } from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { TracksType } from '../types/TracksType';
import { TrackInfo } from './TrackInfo';
import { colorPicker } from '../utils/Color';

export type TracksTableProps = {
  tracks: TracksType;
};

const StyledAlbumCell = styled(Table.Cell)`
  max-width: 200px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledHeaderCell = styled(Table.HeaderCell)<{ color: string }>`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  /* tbody内のセルより手前に表示する */
  z-index: 1;
  background-color: ${(props) => props.color} !important;
`;

export const TracksTable: FC<TracksTableProps> = (props) => {
  const { tracks } = props;

  return (
    <Table inverted>
      <Table.Header>
        <Table.Row>
          <StyledHeaderCell color={colorPicker('dark')}>
            タイトル
          </StyledHeaderCell>
          <StyledHeaderCell color={colorPicker('dark')}>
            アルバム
          </StyledHeaderCell>
        </Table.Row>
      </Table.Header>
      {tracks.items.map((item) => (
        <Table.Row key={item.track.id}>
          <Table.Cell>
            <TrackInfo
              coverImageUrl={item.track.album.images[0].url}
              trackName={item.track.name}
              artistsNameList={item.track.artists.map((artist) => artist.name)}
            />
          </Table.Cell>
          <StyledAlbumCell>{item.track.name}</StyledAlbumCell>
        </Table.Row>
      ))}
    </Table>
  );
};
