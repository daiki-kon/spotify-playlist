import React, { FC } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import InfiniteScroll from 'react-infinite-scroller';
import { TracksTable } from '../components/TracksTable';
import { usePlaylistItems } from '../hooks/usePlaylistItem';
import { getAccessToken } from '../utils/Environment';
import { TracksType } from '../types/TracksType';

export type PlaylistTracksTableContainerProps = {
  playlistItems: TracksType;
  fetchNext: (nextUrl: string) => void;
};

const Wrapper = styled.div`
  overflow: scroll;
  height: 90%;
`;

export const PlaylistTracksTableContainer: FC<PlaylistTracksTableContainerProps> = (
  props,
) => {
  const { playlistItems, fetchNext } = props;

  const loadMore = (): void => {
    if (
      playlistItems.next !== '' &&
      playlistItems.items.length >= playlistItems.total
    ) {
      return;
    }
    fetchNext(playlistItems.next);
  };

  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        hasMore={playlistItems.items.length <= playlistItems.total}
        loadMore={loadMore}
        useWindow={false}
        // TODO: スクロールしてAPI叩きに行ってるときの処理を考える=>loadingね
      >
        <TracksTable tracks={playlistItems} tableType="playlist" />
      </InfiniteScroll>
    </Wrapper>
  );
};
