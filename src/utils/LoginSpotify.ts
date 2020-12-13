import crypto, { randomBytes } from 'crypto';

const scopes: string[] = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

const getRandomString = (length: number) => {
  return randomBytes(length).reduce((p, i) => p + (i % 32).toString(32), '');
};

const getCodeChallenge = (): string => {
  return crypto
    .createHash('sha256')
    .update(getRandomString(64))
    .digest('base64');
};

const setAsString = (item: string | undefined): string => {
  return typeof item === 'string' ? item : '';
};

export const getAccessUrl = (): string => {
  const authEndpoint: string = setAsString(process.env.REACT_APP_AUTH_ENDPOINT);
  const clientId: string = setAsString(process.env.REACT_APP_CLIENT_ID);
  const redirectUrl: string = setAsString(process.env.REACT_APP_REDIRECT_URI);

  const accessUrl: string = `${authEndpoint}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    '%20',
  )}&state=${getRandomString(
    14,
  )}&code_challenge=${getCodeChallenge()}&code_challenge_method=S256`;

  return accessUrl;
};
