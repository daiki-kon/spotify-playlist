import { useState, useEffect, useCallback } from 'react';
import NoCoverImage from '../assets/NoCoverImage.png';

export type UsePlaylistInfoResponse = {
  name: string;
  imageUrl: string;
};

type FetchPlaylistInfoResponse = {
  name: string;
  images: {
    url: string;
  }[];
};

export const usePlaylistInfo = ({
  accessToken,
  playlistId,
}: {
  accessToken: string;
  playlistId: string;
}): UsePlaylistInfoResponse => {
  const [playlistInfo, setPlaylistInfo] = useState<UsePlaylistInfoResponse>({
    name: '',
    imageUrl: '',
  });

  const fetchPlaylistInfo = useCallback(async (): Promise<void> => {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const info: FetchPlaylistInfoResponse = await response.json();

    setPlaylistInfo({
      name: info.name,
      imageUrl:
        info.images?.[0] === undefined ? NoCoverImage : info.images[0].url,
    });
  }, [accessToken, playlistId]);

  useEffect(() => {
    fetchPlaylistInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return playlistInfo;
};
