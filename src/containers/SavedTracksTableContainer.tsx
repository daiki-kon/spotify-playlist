import React, { FC } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { useMySavedTracks } from '../hooks/useMySavedTracks';
import { TracksTable } from '../components/TracksTable';
import { getAccessToken } from '../utils/Environment';

const Wrapper = styled.div`
  overflow: scroll;
  height: 90%;
`;

export const SavedTracksTableContainer: FC = () => {
  const [savedTracks, , fetchNext] = useMySavedTracks({
    accessToken: getAccessToken(),
    limit: 20,
    offset: 0,
  });

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
        <TracksTable tracks={savedTracks} />
      </InfiniteScroll>
    </Wrapper>
  );
};
