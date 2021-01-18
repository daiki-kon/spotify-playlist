import React, { FC, ChangeEvent } from 'react';
import { getAccessToken } from '../utils/Environment';
import { useSearch } from '../hooks/useSearch';
import { SearchPanel } from '../components/SearchPanel';

export const SearchPanelContainer: FC = () => {
  const [tracks, albums, artists, search] = useSearch({
    accessToken: getAccessToken(),
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('event', event.target.value);
    if (event.target.value === '') {
      // eslint-disable-next-line no-alert
      alert('入力が空白です');
    } else {
      search(event.target.value);
    }
  };

  return (
    <SearchPanel
      tracks={tracks}
      albums={albums}
      artists={artists}
      onChange={onChange}
    />
  );
};
