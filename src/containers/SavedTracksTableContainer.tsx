import React, { FC } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { TracksTable } from '../components/TracksTable';
import { getAccessToken } from '../utils/Environment';
import { TracksType } from '../types/TracksType';

const Wrapper = styled.div`
  overflow: scroll;
  height: 90%;
`;

export type SavedTracksTableContainerProps = {
  savedTracks: TracksType;
  fetchNext: (nextUrl: string) => void;
};

export const SavedTracksTableContainer: FC<SavedTracksTableContainerProps> = (
  props,
) => {
  const { savedTracks, fetchNext } = props;

  const loadMore = (): void => {
    if (
      savedTracks.next !== '' &&
      savedTracks.items.length >= savedTracks.total
    ) {
      return;
    }
    fetchNext(savedTracks.next);
  };

  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        hasMore={savedTracks.items.length <= savedTracks.total}
        loadMore={loadMore}
        useWindow={false}
        // TODO: スクロールしてAPI叩きに行ってるときの処理を考える=>loadingね
      >
        <TracksTable tracks={savedTracks} tableType="saved" />
      </InfiniteScroll>
    </Wrapper>
  );
};
