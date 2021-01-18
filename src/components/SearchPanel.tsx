import React, { FC, ChangeEvent } from 'react';
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { SearchResultRow } from './SearchResultRow';
import {
  SearchedTrack,
  SearchedAlbum,
  SearchedArtist,
} from '../hooks/useSearch';

export type SearchPanelProps = {
  tracks: SearchedTrack;
  albums: SearchedAlbum;
  artists: SearchedArtist;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled(Input)`
  width: 30%;
  margin-bottom: 20px;
`;

export const SearchPanel: FC<SearchPanelProps> = (props) => {
  const { tracks, albums, artists, onChange } = props;

  return (
    <>
      <StyledInput
        icon="search"
        iconPosition="left"
        placeholder="曲、アルバム、アーティスト"
        onChange={onChange}
      />
      <SearchResultRow searchedItem={tracks} />
      <SearchResultRow searchedItem={albums} />
      <SearchResultRow searchedItem={artists} />
    </>
  );
};
