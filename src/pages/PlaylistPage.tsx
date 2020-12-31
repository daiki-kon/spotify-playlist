import React, { FC } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { useMyPlaylist } from '../hooks/useMyPlaylists';
import { getAccessToken } from '../utils/Environment';
import { PlaylistsTile } from '../components/PlaylistsTile';

import 'semantic-ui-css/semantic.min.css';

const StyledInfiniteScroll = styled(InfiniteScroll)`
  width: 100%;
  height: 766px;
`;

export const PlaylistPage: FC = () => {
  const [playlists, isFetching, fetchNext] = useMyPlaylist({
    accessToken: getAccessToken(),
    limit: 20,
    offset: 0,
  });

  const loadMore = (): void => {
    if (playlists.next !== '' && playlists.items.length >= playlists.total) {
      return;
    }
    fetchNext(playlists.next);
  };

  return (
    <>
      <StyledInfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={playlists.total >= playlists.items.length}
        // TODO: スクロールしてAPI叩きに行ってるときの処理を考える
      >
        <PlaylistsTile playlists={playlists} isFetching={isFetching} />
      </StyledInfiniteScroll>
    </>
  );
};
