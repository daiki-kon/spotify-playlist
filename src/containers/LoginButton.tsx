import React, { FC } from 'react';
import { LoginButton } from '../components/LoginButton';
import { getAccessUrl } from '../utils/LoginSpotify';

export type EnhancedLoginButton = {
  width?: number;
};

export const EnhancedLoginButton: FC<EnhancedLoginButton> = (props) => {
  const { width } = props;

  const onClick = () => {
    const authUrl: string = getAccessUrl();
    // spotifyの認証ページへリダイレクト
    window.location.assign(authUrl);
  };

  return <LoginButton width={width} onClick={onClick} />;
};
