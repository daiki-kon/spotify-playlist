import crypto, { randomBytes } from 'crypto';

const scopes: string[] = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const isValidAccessToken = (): boolean => {
  const expireTimeString: string | null = localStorage.getItem(
    'spotifyAccessTokenExpireTime',
  );

  if (expireTimeString === null) return false;
  const now: Date = new Date();
  const expireTime: Date = new Date(expireTimeString);

  // AccessTokenの失効確認
  if (now > expireTime) return false;

  return true;
};

const getRandomString = (length: number) => {
  return randomBytes(length).reduce((p, i) => p + (i % 32).toString(32), '');
};

const setAsString = (item: string | undefined | null): string => {
  return typeof item === 'string' ? item : '';
};

export const getAccessUrl = (): string => {
  const authEndpoint: string = setAsString(process.env.REACT_APP_AUTH_ENDPOINT);
  const clientId: string = setAsString(process.env.REACT_APP_CLIENT_ID);
  const redirectUrl: string = setAsString(process.env.REACT_APP_REDIRECT_URI);
  const state: string = getRandomString(14);
  const codeVerifier: string = getRandomString(64);
  const codeChallenge: string = crypto
    .createHash('sha256')
    .update(codeVerifier)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  // stateの用途(認証URIと突き合わせる)ためlocal storageではなくsession storageに保存
  sessionStorage.setItem('AuthorizationState', state);
  sessionStorage.setItem('CodeVerifier', codeVerifier);

  const accessUrl: string = `${authEndpoint}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    '%20',
  )}&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`;

  return accessUrl;
};

export type AuthResult = {
  result: string;
  state: string;
  isError: boolean;
};

export const formatParams = (params: string): AuthResult => {
  const [result, state] = params.split('&');
  const [resultKey, resultValue] = result.split('=');
  const stateValue = state.split('=')[1];
  const isError: boolean = resultKey === 'error';

  return {
    result: resultValue,
    state: stateValue,
    isError,
  };
};

export const isValidState = (responseState: string): boolean => {
  const localState: string | null = sessionStorage.getItem(
    'AuthorizationState',
  );

  return localState !== null && localState === responseState;
};

export type FetchAccessTokenResult = {
  // eslint-disable-next-line camelcase
  access_token: string;
  // eslint-disable-next-line camelcase
  token_type: string;
  scope: string;
  // eslint-disable-next-line camelcase
  expires_in: number;
  // eslint-disable-next-line camelcase
  refresh_token: string;
};

export const fetchAccessToken = async (
  code: string,
): Promise<FetchAccessTokenResult> => {
  const accessTokenEndpoint: string = setAsString(
    process.env.REACT_APP_ACCESS_TOKEN_ENDPOINT,
  );

  // eslint-disable-next-line camelcase
  const client_id: string = setAsString(process.env.REACT_APP_CLIENT_ID);
  // eslint-disable-next-line camelcase
  const grant_type: string = 'authorization_code';
  // eslint-disable-next-line camelcase
  const redirect_uri: string = setAsString(process.env.REACT_APP_REDIRECT_URI);
  // eslint-disable-next-line camelcase
  const code_verifier: string = setAsString(
    sessionStorage.getItem('CodeVerifier'),
  );

  const response = await fetch(accessTokenEndpoint, {
    method: 'POST',
    headers: {
      // eslint-disable-next-line
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // eslint-disable-next-line camelcase
    body: `client_id=${client_id}&grant_type=${grant_type}&code=${code}&redirect_uri=${redirect_uri}&code_verifier=${code_verifier}`,
  });

  if (response.ok !== true) {
    throw new Error('FailedFetchAccessToken');
  }

  return response.json();
};
