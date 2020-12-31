import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { colorPicker } from '../utils/Color';

export type IntroductionProps = {
  width?: number;
};

const StyledContainer = styled(Container)`
  width: ${(props) => props.width || 100}%;
  color: ${(props) => props.color};
  text-align: center;
  font-weight: bold;
`;

export const Introduction: FC<IntroductionProps> = (props) => {
  const { width } = props;

  return (
    <>
      <StyledContainer width={width} color={colorPicker('white')}>
        <p>Lets get started</p>
        <p>Create Your Favorite Playlist</p>
      </StyledContainer>
    </>
  );
};
