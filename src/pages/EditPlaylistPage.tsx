import React, { FC } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { TracksTab } from '../components/TracksTab';
import { PlaylistTracksTableContainer } from '../containers/PlaylistTracksTableContainer';
import { colorPicker } from '../utils/Color';
import NoCoverImage from '../assets/NoCoverImage.png';
import 'semantic-ui-css/semantic.min.css';

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
  background-color: red !important;
`;

const StyledLabel = styled.label<{ textColor: string }>`
  color: ${(props) => props.textColor};
  font-size: 30px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
`;

export const EditPlaylistPage: FC = () => {
  const { playlistId } = useParams<{ playlistId: string }>();

  return (
    <StyledGrid>
      <TracksTab />
      <StylePlaylistGrid background={colorPicker('dark')}>
        <StyledPlaylistHeader>
          <StyledCoverImage src={NoCoverImage} />
          <StyledLabel textColor={colorPicker('white')}>
            Playlist Name
          </StyledLabel>
        </StyledPlaylistHeader>
        <PlaylistTracksTableContainer playlistId={playlistId} />
      </StylePlaylistGrid>
    </StyledGrid>
  );
};
