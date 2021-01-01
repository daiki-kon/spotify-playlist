import { useState, useEffect, useCallback } from 'react';

export type Playlists = {
  total: number;
  items: {
    id: string;
    name: string;
    description: string;
    images: { url: string }[];
  }[];
  next: string;
};

export const useMyPlaylist = ({
  accessToken,
  limit,
  offset,
}: {
  accessToken: string;
  limit: number;
  offset: number;
  // eslint-disable-next-line no-unused-vars
}): [Playlists, boolean, (nextUrl: string) => void] => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [playlists, setPlaylists] = useState<Playlists>({
    total: 0,
    items: [],
    next: '',
  });
  const [fetchUrl, setFetchURL] = useState(
    `https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`,
  );

  const fetchPlaylists = useCallback(
    async (url: string): Promise<void> => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const playlistItems: Playlists = await response.json();
      setPlaylists((preState) => ({
        total: playlistItems.total,
        next: playlistItems.next,
        items: [...preState.items, ...playlistItems.items],
      }));
      setIsFetching(false);
    },
    [accessToken],
  );

  const fetchNext = (nextUrl: string): void => {
    setFetchURL(nextUrl);
  };

  useEffect(() => {
    setIsFetching(true);
    fetchPlaylists(fetchUrl);
  }, [fetchPlaylists, fetchUrl]);

  return [playlists, isFetching, fetchNext];
};
