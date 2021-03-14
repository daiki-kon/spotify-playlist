import { useEffect, useState, useCallback } from 'react';
import { Item } from 'semantic-ui-react';
import { TracksType } from '../types/TracksType';

export const useMySavedTracks = ({
  accessToken,
  limit,
  offset,
}: {
  accessToken: string;
  limit: number;
  offset: number;
  // eslint-disable-next-line no-unused-vars
}): [TracksType, boolean, (nextUrl: string) => void] => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [savedTracks, setSavedTracks] = useState<TracksType>({
    total: 0,
    items: [],
    next: '',
  });
  const [fetchUrl, setFetchURL] = useState(
    `https://api.spotify.com/v1/me/tracks?market=JP&limit=${limit}&offset=${offset}`,
  );

  const processData = (data: TracksType): TracksType => {
    return {
      total: data.total,
      items: data.items.map((item) => ({
        track: {
          id: item.track.id,
          name: item.track.name,
          artists: item.track.artists.map((artist) => ({
            id: artist.id,
            name: artist.name,
          })),
          album: {
            id: item.track.album.id,
            name: item.track.album.name,
            images: item.track.album.images.map((image) => ({
              url: image.url,
            })),
          },
        },
      })),
      next: data.next,
    };
  };

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

      const tracks: TracksType = processData(await response.json());
      setSavedTracks((preState) => ({
        total: tracks.total,
        next: tracks.next,
        items: [...preState.items, ...tracks.items],
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

  return [savedTracks, isFetching, fetchNext];
};
