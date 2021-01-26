import React, { FC } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import InfiniteScroll from 'react-infinite-scroller';
import { TracksTable } from '../components/TracksTable';
import { usePlaylistItems } from '../hooks/usePlaylistItem';
import { getAccessToken } from '../utils/Environment';

export type PlaylistTracksTableContainerProps = {
  playlistId: string;
};

const Wrapper = styled.div`
  overflow: auto;
  height: 300px;
`;

export const PlaylistTracksTableContainer: FC<PlaylistTracksTableContainerProps> = (
  props,
) => {
  const { playlistId } = props;
  const [playlistItems, , fetchNext] = usePlaylistItems({
    accessToken: getAccessToken(),
    limit: 20,
    offset: 0,
    playlistId,
  });

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
        <TracksTable tracks={playlistItems} />
      </InfiniteScroll>
    </Wrapper>
  );
};
