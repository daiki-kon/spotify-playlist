import React, { FC } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { PlaylistButton } from './PlaylistButton';

export type PlaylistCardProps = {
  coverImageUrl: string;
  playlistName: string;
  description: string;
  width?: number;
};

const StyledImage = styled(Image)`
  padding-bottom: 10%;
`;

const StyledCardTitle = styled.p`
  font-size: 16px;
  font-family: Arial;
  color: #ffffff;
  padding-bottom: 5%;
`;

export const PlaylistCard: FC<PlaylistCardProps> = (props) => {
  const { coverImageUrl, playlistName, width = 100 } = props;

  return (
    <>
      <PlaylistButton width={width}>
        <StyledImage className="content" src={coverImageUrl} />
        <StyledCardTitle>{playlistName}</StyledCardTitle>
      </PlaylistButton>
    </>
  );
};
