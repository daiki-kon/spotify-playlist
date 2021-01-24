import { useState, useCallback } from 'react';

export type SearchedTrack = {
  tracks: {
    items: {
      id: string;
      name: string;
      album: {
        id: string;
        name: string;
        images: {
          url: string;
        }[];
      };
      artists: {
        id: string;
        name: string;
      }[];
    }[];
  };
};

export type SearchedAlbum = {
  albums: {
    items: {
      id: string;
      name: string;
      images: {
        url: string;
      }[];
      artists: {
        id: string;
        name: string;
      }[];
    }[];
  };
};

export type SearchedArtist = {
  artists: {
    items: {
      id: string;
      name: string;
      images: {
        url: string;
      }[];
    }[];
  };
};

type useSearchResponse = [
  SearchedTrack,
  SearchedAlbum,
  SearchedArtist,
  // eslint-disable-next-line no-unused-vars
  (query: string) => void,
];

export const useSearch = ({
  accessToken,
  limit = 25,
}: {
  accessToken: string;
  limit?: number;
}): useSearchResponse => {
  const [searchedTracks, setSearchedTracks] = useState<SearchedTrack>({
    tracks: { items: [] },
  });
  const [searchedAlbums, setSearchedAlbums] = useState<SearchedAlbum>({
    albums: { items: [] },
  });
  const [searchedArtists, setSearchedArtists] = useState<SearchedArtist>({
    artists: { items: [] },
  });

  const fetchTrack = useCallback(
    async (query: string): Promise<void> => {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=track&market=JP&limit=${limit}&offset=0`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const tracks: SearchedTrack = await response.json();
      setSearchedTracks(tracks);
    },
    [accessToken, limit],
  );

  const fetchAlbum = useCallback(
    async (query: string): Promise<void> => {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=album&market=JP&limit=${limit}&offset=0`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const albums: SearchedAlbum = await response.json();
      setSearchedAlbums(albums);
    },
    [accessToken, limit],
  );

  const fetchArtist = useCallback(
    async (query: string): Promise<void> => {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=artist&market=JP&limit=${limit}&offset=0`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const artists: SearchedArtist = await response.json();
      setSearchedArtists(artists);
    },
    [accessToken, limit],
  );

  const search = (query: string): void => {
    fetchTrack(query);
    fetchAlbum(query);
    fetchArtist(query);
  };

  return [searchedTracks, searchedAlbums, searchedArtists, search];
};
