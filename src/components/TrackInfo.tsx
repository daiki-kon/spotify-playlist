import React, { FC } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { colorPicker } from '../utils/Color';

export type TrackInfoProps = {
  width?: number;
  coverImageUrl: string;
  trackName: string;
  artistsNameList: string[];
};

const Wrapper = styled.div`
  max-width: 220px;
  display: flex;
`;

const StyledImage = styled(Image)`
  height: auto;
  width: 25%;
  margin-right: 20px;
  padding: 2%;
`;

const StyledText = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  text-align: left;
  max-width: 146px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledTrackTitle = styled(StyledText)`
  text-align: left;
  font-weight: bold;
`;

export const TrackInfo: FC<TrackInfoProps> = (props) => {
  const { coverImageUrl, trackName, artistsNameList } = props;

  return (
    <Wrapper>
      <StyledImage src={coverImageUrl} />
      <div>
        <StyledTrackTitle color={colorPicker('white')}>
          {trackName}
        </StyledTrackTitle>
        <StyledText color={colorPicker('white')}>
          {artistsNameList.join()}
        </StyledText>
      </div>
    </Wrapper>
  );
};
