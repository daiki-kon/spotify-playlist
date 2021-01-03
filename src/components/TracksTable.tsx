import React, { FC } from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

import { PlaylistItems } from '../hooks/usePlaylistItem';
import { TrackInfo } from './TrackInfo';

export type TracksTableProps = {
  tracks: PlaylistItems;
};

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
        <tr key={item.track.id}>
          <td>
            <TrackInfo
              coverImageUrl={item.track.album.images[0].url}
              trackName={item.track.name}
              artistsNameList={item.track.artists.map((artist) => artist.name)}
            />
          </td>
          <td>{item.track.name}</td>
        </tr>
      ))}
    </Table>
  );
};
