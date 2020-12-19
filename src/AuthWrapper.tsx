import React, { FC, useState, useEffect } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import {
  formatParams,
  isValidState,
  FetchAccessTokenResult,
  fetchAccessToken,
  AuthResult,
  isValidAccessToken,
} from './utils/AuthSpotify';

export const AuthWrapper: FC<RouteProps> = (props) => {
  const [isFail, setIsFail] = useState(false);

  const saveAccessToken = async (code: string): Promise<void> => {
    try {
      const accessToken: FetchAccessTokenResult = await fetchAccessToken(code);
      const date = new Date();
      date.setSeconds(date.getSeconds() + accessToken.expires_in);
      localStorage.setItem('spotifyAccessTokenExpireTime', date.toString());
      localStorage.setItem('spotifyAccessToken', accessToken.access_token);
    } catch (error) {
      setIsFail(true);
      console.error(error);
    }
  };

  useEffect(() => {
    // TODO:  認証の流れ考える

    // AccessTokenが有効なら以降の処理をスキップ
    if (isValidAccessToken() === true) {
      console.log('ok');

      return;
    }

    const urlParams = window.location.search.substring(1);

    const authResult: AuthResult =
      urlParams !== ''
        ? formatParams(urlParams)
        : { result: '', state: '', isError: true };

    if (isValidState(authResult.state) === false) {
      setIsFail(true);

      return;
    }
    saveAccessToken(authResult.result);
  }, []);

  return (
    <Route
      render={() => (isFail ? <Redirect to="/" /> : <Route {...props} />)}
    />
  );
};
