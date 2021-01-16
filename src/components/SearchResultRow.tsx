import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Item, ItemDescription } from 'semantic-ui-react';
import { Subtitle } from 'stories/ImageCard.stories';
import { ImageCard } from './ImageCard';
import { colorPicker } from '../utils/Color';
import {
  SearchedTrack,
  SearchedAlbum,
  SearchedArtist,
} from '../hooks/useSearch';
import img from '../assets/NoCoverArtist.png';

export type SearchResultRowProps = {
  searchedItem: SearchedTrack | SearchedAlbum | SearchedArtist;
};

type ImageCardType = {
  searchedType: 'track' | 'album' | 'artist';
  items: {
    id: string;
    title: string;
    subTitle: string;
    coverImageUrl: string;
  }[];
};

const StyledScroll = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const StyledImageCard = styled(ImageCard)`
  margin-right: 20%;
`;

const StyledText = styled.p<{ color: string }>`
  font-size: 25px;
  font-family: Arial;
  text-align: left;
  font-weight: bold;
  color: ${(props) => props.color};
  margin-bottom: 5px;
`;
export const SearchResultRow: FC<SearchResultRowProps> = (props) => {
  const { searchedItem } = props;
  const [searchResult, setSearchResult] = useState<ImageCardType>();

  useEffect(() => {
    if ('tracks' in searchedItem) {
      setSearchResult({
        searchedType: 'track',
        items: [
          ...searchedItem.tracks.items.map((item) => ({
            id: item.id,
            title: item.name,
            subTitle: item.artists.map((artist) => artist.name).join(),
            coverImageUrl: item.album.images[0].url,
          })),
        ],
      });
    } else if ('albums' in searchedItem) {
      setSearchResult({
        searchedType: 'album',
        items: [
          ...searchedItem.albums.items.map((item) => ({
            id: item.id,
            title: item.name,
            subTitle: item.artists.map((artist) => artist.name).join(),
            coverImageUrl: item.images[0].url,
          })),
        ],
      });
    } else {
      setSearchResult({
        searchedType: 'artist',
        items: [
          ...searchedItem.artists.items.map((item) => ({
            id: item.id,
            title: item.name,
            subTitle: '',
            coverImageUrl: item.images[0]?.url,
          })),
        ],
      });
    }
  }, [searchedItem]);

  return (
    <>
      <StyledText color={colorPicker('white')}>
        {searchResult?.searchedType}
      </StyledText>
      <StyledScroll>
        {searchResult?.items.map((i) => (
          <StyledImageCard
            key={i.id}
            type={searchResult.searchedType === 'artist' ? 'artist' : 'album'}
            coverImageUrl={i.coverImageUrl}
            title={i.title}
            subTitle={i.subTitle}
          />
        ))}
      </StyledScroll>
    </>
  );
};
