import React, { FC } from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

import { PlaylistItems } from '../hooks/usePlaylistItem';
import { TrackInfo } from './TrackInfo';

export type TracksTableProps = {
  tracks: PlaylistItems;
};

const StyledAlbumCell = styled(Table.Cell)`
  max-width: 200px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TracksTable: FC<TracksTableProps> = (props) => {
  const { tracks } = props;

  return (
    <Table inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>タイトル</Table.HeaderCell>
          <Table.HeaderCell>アルバム</Table.HeaderCell>
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
