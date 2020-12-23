import { useState, useEffect, useCallback } from 'react';

export type UserProfile = {
  // eslint-disable-next-line camelcase
  display_name: string;
  country: string;
  followers: {
    total: number;
  };
  product: string;
};

export const useMyProfile = (accessToken: string): UserProfile => {
  const [myProfile, setMyProfile] = useState<UserProfile>({
    display_name: '',
    country: '',
    followers: { total: 0 },
    product: '',
  });

  const fetchMyProfile = useCallback(async (): Promise<void> => {
    const response = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const profile: UserProfile = await response.json();

    setMyProfile({
      display_name: profile.display_name,
      country: profile.country,
      followers: { total: profile.followers.total },
      product: profile.product,
    });
  }, [accessToken]);

  useEffect(() => {
    fetchMyProfile();
  }, [fetchMyProfile]);

  return myProfile;
};
