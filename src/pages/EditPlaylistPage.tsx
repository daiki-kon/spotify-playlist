import React, { FC } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TracksTab } from '../components/TracksTab';
import { PlaylistTracksTableContainer } from '../containers/PlaylistTracksTableContainer';
import { colorPicker } from '../utils/Color';
import {
  usePlaylistInfo,
  UsePlaylistInfoResponse,
} from '../hooks/usePlaylistInfo';
import { getAccessToken } from '../utils/Environment';
import 'semantic-ui-css/semantic.min.css';
import { useMySavedTracks } from '../hooks/useMySavedTracks';
import { usePlaylistItems } from '../hooks/usePlaylistItem';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 90%;
  margin: 2%;
  gap: 20px;
`;

const StylePlaylistGrid = styled.div<{ background: string }>`
  padding-top: 2%;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 5%;
  height: 100%;
  background-color: ${(props) => props.background};
  overflow: hidden;
`;

const StyledPlaylistHeader = styled.div`
  display: flex;
  max-height: 80px;
`;

const StyledCoverImage = styled(Image)`
  max-height: 80px;
`;

const StyledLabel = styled.label<{ textColor: string }>`
  color: ${(props) => props.textColor};
  font-size: 20px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  margin-right: 10px;
  /* 文字が右端まで行ったら「...」で省略する */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const EditPlaylistPage: FC = () => {
  const { playlistId } = useParams<{ playlistId: string }>();

  const playlistInfo: UsePlaylistInfoResponse = usePlaylistInfo({
    accessToken: getAccessToken(),
    playlistId,
  });

  const [savedTracks, , fetchNextSaved, removeItem] = useMySavedTracks({
    accessToken: getAccessToken(),
    limit: 20,
    offset: 0,
  });

  const [playlistItems, , fetchNextItems] = usePlaylistItems({
    accessToken: getAccessToken(),
    limit: 20,
    offset: 0,
    playlistId,
  });

  const onDragEnd = (result: DropResult): void => {
    const { source, destination } = result;
    if (destination === null) return;

    if (
      source.droppableId === 'saved' &&
      destination?.droppableId === 'playlist'
    ) {
      console.log(result);
      console.log('ok');
      removeItem(result.draggableId);
    }
  };

  return (
    <StyledGrid>
      <DragDropContext onDragEnd={onDragEnd}>
        <TracksTab savedTracks={savedTracks} fetchNext={fetchNextSaved} />
        <StylePlaylistGrid background={colorPicker('dark')}>
          <StyledPlaylistHeader>
            <StyledCoverImage src={playlistInfo.imageUrl} />
            <StyledLabel textColor={colorPicker('white')}>
              {playlistInfo.name}
            </StyledLabel>
          </StyledPlaylistHeader>
          <PlaylistTracksTableContainer
            playlistItems={playlistItems}
            fetchNext={fetchNextItems}
          />
        </StylePlaylistGrid>
      </DragDropContext>
    </StyledGrid>
  );
};
