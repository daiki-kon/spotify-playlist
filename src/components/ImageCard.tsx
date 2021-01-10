import React, { FC } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { StyledPlaylistButton } from './StyledPlaylistButton';
import { colorPicker } from '../utils/Color';
import NoCoverImage from '../assets/NoCoverImage.png';

export type ImageCardProps = {
  coverImageUrl: string;
  title: string;
  subTitle?: string;
  width?: number;
};

const StyledImage = styled(Image)`
  padding-bottom: 10%;
  margin: auto;
`;

const StyledText = styled.p<{
  fontSize: number;
  bold?: boolean;
  color: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-family: Arial;
  ${(props) => (props.bold ? `font-weight: bold;` : ``)}
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
  const { coverImageUrl, title, subTitle, width = 100 } = props;

  return (
    <>
      <EnhancedStyledButton backgroundColor={colorPicker('dark')} width={width}>
        {coverImageUrl === undefined ? (
          <StyledImage className="content" src={NoCoverImage} />
        ) : (
          <StyledImage className="content" src={coverImageUrl} />
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
