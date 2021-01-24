import { useState, useEffect, useCallback } from 'react';
import { TracksType } from '../types/TracksType';

export const usePlaylistItems = ({
  accessToken,
  playlistId,
  limit,
  offset,
}: {
  accessToken: string;
  playlistId: string;
  limit: number;
  offset: number;
  // eslint-disable-next-line no-unused-vars
}): [TracksType, boolean, (nextUrl: string) => void] => {
  const [playlistItems, setPlaylistItems] = useState<TracksType>({
    total: 0,
    items: [],
    next: '',
  });
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [fetchUrl, setFetchURL] = useState(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=JP&limit=${limit}&offset=${offset}`,
  );

  const fetchPlaylistItems = useCallback(
    async (url: string): Promise<void> => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const trackItems: TracksType = await response.json();
      setPlaylistItems((preState) => ({
        total: trackItems.total,
        next: trackItems.next,
        items: [...preState.items, ...trackItems.items],
      }));
      setIsFetching(false);
    },
    [accessToken],
  );

  const fetchNext = (nextUrl: string) => {
    setFetchURL(nextUrl);
  };

  useEffect(() => {
    console.log('use effect');
    setIsFetching(true);
    fetchPlaylistItems(fetchUrl);
  }, [fetchPlaylistItems, fetchUrl]);

  return [playlistItems, isFetching, fetchNext];
};
