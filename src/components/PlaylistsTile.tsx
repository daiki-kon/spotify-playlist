import React, { FC } from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';
import { Playlists } from '../hooks/useMyPlaylists';
import { ImageCard } from './ImageCard';
import { CreatePlaylistButton } from './CreatePlaylistButton';
import 'semantic-ui-css/semantic.min.css';

export type PlaylistsTileProps = {
  isFetching: boolean;
  playlists: Playlists;
  // eslint-disable-next-line no-unused-vars
  onClickPlaylist: (id: string | undefined) => void;
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
  const { isFetching, playlists, onClickPlaylist } = props;

  return (
    <>
      {isFetching === true ? (
        <StyledLoader active />
      ) : (
        <StyledGrid>
          <CreatePlaylistButton />
          {playlists.items.map((item) => (
            <ImageCard
              key={item.id}
              type="album"
              coverImageUrl={item.images[0]?.url}
              title={item.name}
              id={item.id}
              onClick={onClickPlaylist}
            />
          ))}
        </StyledGrid>
      )}
    </>
  );
};
