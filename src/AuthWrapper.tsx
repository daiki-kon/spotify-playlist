import React, { FC, useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import {
  formatParams,
  isValidState,
  FetchAccessTokenResult,
  fetchAccessToken,
  AuthResult,
  isValidAccessToken,
} from './utils/AuthSpotify';
import { PlaylistPage } from './pages/PlaylistPage';

export const AuthWrapper: FC = () => {
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
    // AccessTokenが有効なら以降の処理をスキップ
    if (isValidAccessToken() === true) {
      console.log('ok');

      return;
    }
    console.log(window.location.search);
    const urlParams = window.location.search.substring(1);
    if (urlParams === '') {
      setIsFail(true);

      return;
    }

    const authResult: AuthResult =
      urlParams !== ''
        ? formatParams(urlParams)
        : { result: '', state: '', isError: true };
    if (isValidState(authResult.state) === false) {
      setIsFail(true);
      console.error('state is wrong');

      return;
    }
    saveAccessToken(authResult.result);
  }, []);

  return (
    // 認証に失敗 => スタートページヘリダイレクト
    //      成功 => PlaylistPageをレンダリング
    <Route
      render={() => (isFail ? <Redirect to="StartPage" /> : <PlaylistPage />)}
    />
  );
};
