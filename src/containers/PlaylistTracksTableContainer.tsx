import React, { FC } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import InfiniteScroll from 'react-infinite-scroller';
import { TracksType } from '../types/TracksType';
import { TracksTable } from '../components/TracksTable';

export type TracksTableContainerProps = {
  tracks: TracksType;
  // eslint-disable-next-line no-unused-vars
  fetchNext: (nextUrl: string) => void;
};

const Wrapper = styled.div`
  overflow: auto;
  height: 300px;
`;

export const TracksTableContainer: FC<TracksTableContainerProps> = (props) => {
  const { tracks, fetchNext } = props;

  const loadMore = (): void => {
    if (tracks.next !== '' && tracks.items.length >= tracks.total) {
      return;
    }
    fetchNext(tracks.next);
  };

  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        hasMore={tracks.items.length <= tracks.total}
        loadMore={loadMore}
        useWindow={false}
        // TODO: スクロールしてAPI叩きに行ってるときの処理を考える=>loadingね
      >
        <TracksTable tracks={tracks} />
      </InfiniteScroll>
    </Wrapper>
  );
};
