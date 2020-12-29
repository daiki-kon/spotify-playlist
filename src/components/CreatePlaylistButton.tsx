import React, { FC } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { PlaylistButton } from './PlaylistButton';

export type CreatePlaylistButtonProps = {
  width?: number;
};

export const CreatePlaylistButton: FC<CreatePlaylistButtonProps> = (props) => {
  const { width = 100 } = props;

  return (
    <>
      <PlaylistButton backGroundColor="blue" width={width}>
        <Icon name="plus" size="big" />
      </PlaylistButton>
    </>
  );
};
