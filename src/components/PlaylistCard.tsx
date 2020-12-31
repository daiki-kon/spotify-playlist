import React, { FC } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { StyledButton } from './PlaylistButton';
import { colorPicker } from '../utils/Color';
import NoCoverImage from '../assets/NoCoverImage.png';

export type PlaylistCardProps = {
  coverImageUrl: string;
  playlistName: string;
  width?: number;
};

const StyledImage = styled(Image)`
  padding-bottom: 10%;
  margin: auto;
`;

const StyledCardTitle = styled.p<{ color: string }>`
  font-size: 16px;
  font-family: Arial;
  color: ${(props) => props.color};
  padding-bottom: 5%;
  text-align: left;
  word-wrap: break-word;
  text-overflow: ellipsis;
  /* 文字が右端まで行ったら「...」で省略する */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EnhancedStyledButton = styled(StyledButton)<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
`;

export const PlaylistCard: FC<PlaylistCardProps> = (props) => {
  const { coverImageUrl, playlistName, width = 100 } = props;

  return (
    <>
      <EnhancedStyledButton backgroundColor={colorPicker('dark')} width={width}>
        {coverImageUrl === undefined ? (
          <StyledImage className="content" src={NoCoverImage} />
        ) : (
          <StyledImage className="content" src={coverImageUrl} />
        )}
        <StyledCardTitle color={colorPicker('white')}>
          {playlistName}
        </StyledCardTitle>
      </EnhancedStyledButton>
    </>
  );
};
