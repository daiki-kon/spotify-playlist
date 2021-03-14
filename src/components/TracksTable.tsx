import React, { FC } from 'react';
import { Tab, Table, TableCell } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { table } from 'console';
import { TracksType } from '../types/TracksType';
import { TrackInfo } from './TrackInfo';
import { colorPicker } from '../utils/Color';

export type TracksTableProps = {
  tracks: TracksType;
  tableType: 'playlist' | 'saved';
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
  const { tracks, tableType } = props;

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
      <Droppable droppableId={tableType}>
        {(provided) => (
          <tbody
            className={tableType}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tracks.items.map((item, index) => {
              return (
                <Draggable
                  key={item.track.id}
                  draggableId={`${item.track.id}-${tableType}`}
                  index={index}
                >
                  {/* eslint-disable-next-line no-shadow */}
                  {(provided) => (
                    <tr
                      key={`${item.track.id}-${tableType}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <td>
                        <TrackInfo
                          coverImageUrl={item.track.album.images[0].url}
                          trackName={item.track.name}
                          artistsNameList={item.track.artists.map(
                            (artist) => artist.name,
                          )}
                        />
                      </td>
                      <td>{item.track.name}</td>
                    </tr>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </tbody>
        )}
      </Droppable>
    </Table>
  );
};
