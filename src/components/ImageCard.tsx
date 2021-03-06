import React, { FC } from 'react';
import { Image } from 'semantic-ui-react';
import styled, { css } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { StyledPlaylistButton } from './StyledPlaylistButton';
import { colorPicker } from '../utils/Color';
import NoCoverImage from '../assets/NoCoverImage.png';
import NoCoverArtist from '../assets/NoCoverArtist.png';

export type ImageCardProps = {
  type: 'album' | 'artist';
  coverImageUrl?: string;
  title: string;
  subTitle?: string;
  width?: number;
  id?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (id: string | undefined) => void;
};

const artistStyle = css`
  width: 170px;
  height: 187px;
  object-fit: cover;
  border-radius: 50%;
`;

const StyledImage = styled(Image)<{ artist: boolean }>`
  padding-bottom: 10%;
  margin: auto;
  ${(props) => (props.$artist ? artistStyle : ``)}
`;

const StyledText = styled.p<{
  fontSize: number;
  bold?: boolean;
  color: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-family: Arial;
  ${(props) => (props.bold ? `font-weight: bold;` : ``)};
  margin-bottom: 0px;
  color: ${(props) => props.color};
  text-align: left;
  word-wrap: break-word;
  text-overflow: ellipsis;
  /* 文字が右端まで行ったら「...」で省略する */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EnhancedStyledButton = styled(StyledPlaylistButton)<{
  backgroundColor: string;
}>`
  background-color: ${(props) => props.backgroundColor};
`;

export const ImageCard: FC<ImageCardProps> = (props) => {
  const {
    type,
    coverImageUrl,
    title,
    subTitle,
    width = 100,
    id,
    // onClickを省略可能にするため何もしない関数をデフォルトに設定
    // eslint-disable-next-line no-unused-vars
    onClick = (_: string | undefined): void => {},
  } = props;

  return (
    <>
      <EnhancedStyledButton
        backgroundColor={colorPicker('dark')}
        width={width}
        onClick={() => onClick(id)}
      >
        {coverImageUrl === undefined ? (
          <StyledImage
            src={type === 'album' ? NoCoverImage : NoCoverArtist}
            $artist={type === 'artist'}
          />
        ) : (
          <StyledImage src={coverImageUrl} $artist={type === 'artist'} />
        )}
        <StyledText fontSize={16} bold color={colorPicker('white')}>
          {title}
        </StyledText>
        {subTitle !== undefined ? (
          <StyledText fontSize={15} color={colorPicker('subTitle')}>
            {subTitle}
          </StyledText>
        ) : (
          <></>
        )}
      </EnhancedStyledButton>
    </>
  );
};
