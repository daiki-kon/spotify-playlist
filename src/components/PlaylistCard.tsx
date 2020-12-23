import React, { FC } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

export type PlaylistCardProps = {
  coverImageUrl: string;
  playlistName: string;
  description: string;
  width?: number;
};

const StyledCard = styled.div<{ width: number }>`
  position: relative;
  background-color: #262626;
  width: ${(props) => props.width}%;
  padding: 1.5% 1%;
  border-radius: 10px;
`;

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
      <StyledCard width={width}>
        <StyledImage className="content" src={coverImageUrl} />
        <StyledCardTitle>{playlistName}</StyledCardTitle>
      </StyledCard>
    </>
  );
};
