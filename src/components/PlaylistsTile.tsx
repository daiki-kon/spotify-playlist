import React, { FC } from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';
import { PlaylistItems } from '../hooks/useMyPlaylists';
import { PlaylistCard } from './PlaylistCard';
import { CreatePlaylistButton } from './CreatePlaylistButton';
import 'semantic-ui-css/semantic.min.css';

export type PlaylistsTileProps = {
  isFetching: boolean;
  playlists: PlaylistItems;
};

const StyledLoader = styled(Loader)`
  margin: auto;
`;

const StyledGrid = styled.div`
  width: 100%;
  padding: 5%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const PlaylistsTile: FC<PlaylistsTileProps> = (props) => {
  const { isFetching, playlists } = props;

  return (
    <>
      {isFetching === true ? (
        <StyledLoader active />
      ) : (
        <StyledGrid>
          <CreatePlaylistButton />
          {playlists.items.map((item) => (
            <PlaylistCard
              key={item.id}
              coverImageUrl={item.images[0]?.url}
              playlistName={item.name}
            />
          ))}
        </StyledGrid>
      )}
    </>
  );
};
