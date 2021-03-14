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
}): [
  TracksType,
  boolean,
  (nextUrl: string) => void,
  (trackId: string) => void,
] => {
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

  const removeDuplicate = (tracks: TracksType): TracksType => {
    const trackIds = [...new Set(tracks.items.map((item) => item.track.id))];
    console.log(trackIds);

    return {
      ...tracks,
      items: tracks.items.filter(
        (item, index) => trackIds.indexOf(item.track.id) === index,
      ),
    };
  };

  const postItemToPlaylist = async (trackId: string) => {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=spotify:track:${trackId}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log(response);
  };

  const registerTrack = (trackId: string): void => {
    postItemToPlaylist(trackId);
    setPlaylistItems((preState) => preState);
  };

  useEffect(() => {
    setIsFetching(true);
    fetchPlaylistItems(fetchUrl);
  }, [fetchPlaylistItems, fetchUrl]);

  return [removeDuplicate(playlistItems), isFetching, fetchNext, registerTrack];
};
