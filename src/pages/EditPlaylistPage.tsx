import React, { FC } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { TracksTab } from '../components/TracksTab';
import { PlaylistTracksTableContainer } from '../containers/PlaylistTracksTableContainer';
import NoCoverImage from '../assets/NoCoverImage.png';
import 'semantic-ui-css/semantic.min.css';

const StyledTracksTab = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 90%;
  margin: 2%;
  gap: 20px;
`;

const StylePlaylistGrid = styled.div`
  height: 300px;
`;

const StyledCoverImage = styled(Image)`
  max-height: 100px;
  background-color: red !important;
  margin-bottom: 14px;
`;

export const EditPlaylistPage: FC = () => {
  const { playlistId } = useParams<{ playlistId: string }>();

  return (
    <StyledTracksTab>
      <TracksTab />
      <StylePlaylistGrid>
        <StyledCoverImage src={NoCoverImage} />
        <PlaylistTracksTableContainer playlistId={playlistId} />
      </StylePlaylistGrid>
    </StyledTracksTab>
  );
};
