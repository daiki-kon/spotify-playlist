export const setAccessToken = () => {
  console.log('hello');
};

// eslint-disable-next-line consistent-return
export const getAccessToken = (): string => {
  const accessToken = localStorage.getItem('spotifyAccessToken');

  if (typeof accessToken === 'string') {
    return accessToken;
  }

  console.error('missing accessToken');

  // TODO: ログインページヘリダイレクトすべきか考える
  return '';
};
