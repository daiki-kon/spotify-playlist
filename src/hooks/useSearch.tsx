import { useState, useEffect, useCallback } from 'react';
import { CLIENT_RENEG_LIMIT } from 'tls';

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

type useSearchResponse = [SearchedTrack, SearchedAlbum, SearchedArtist];

export const useSearch = ({
  accessToken,
  query,
  limit = 25,
}: {
  accessToken: string;
  query: string;
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

  const fetchTrack = useCallback(async (): Promise<void> => {
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
    console.log('tracks:', tracks);
    setSearchedTracks(tracks);
  }, [accessToken, limit, query]);

  const fetchAlbum = useCallback(async (): Promise<void> => {
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
    console.log('album:', albums);

    setSearchedAlbums(albums);
  }, [accessToken, limit, query]);

  const fetchArtist = useCallback(async (): Promise<void> => {
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

    console.log('artist:', artists);
    setSearchedArtists(artists);
  }, [accessToken, limit, query]);

  useEffect(() => {
    fetchTrack();
    fetchAlbum();
    fetchArtist();
  }, [fetchAlbum, fetchArtist, fetchTrack]);

  return [searchedTracks, searchedAlbums, searchedArtists];
};
