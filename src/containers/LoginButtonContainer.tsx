import React, { FC } from 'react';
import { LoginButton } from '../components/LoginButton';
import { getAccessUrl } from '../utils/AuthSpotify';

export type LoginButtonContainerProps = {
  width?: number;
};

export const LoginButtonContainer: FC<LoginButtonContainerProps> = (props) => {
  const { width } = props;

  const onClick = () => {
    const authUrl: string = getAccessUrl();
    // spotifyの認証ページへリダイレクト
    window.location.assign(authUrl);
  };

  return <LoginButton width={width} onClick={onClick} />;
};
