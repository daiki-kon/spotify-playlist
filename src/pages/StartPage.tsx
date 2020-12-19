import React, { FC } from 'react';
import styled from 'styled-components';
import { Introduction } from '../components/Introduction';
import { LoginButtonContainer } from '../containers/LoginButtonContainer';
import 'semantic-ui-css/semantic.min.css';

const StyledWrapper = styled.div`
  margin: auto;
`;

export const StartPage: FC = () => {
  return (
    <StyledWrapper>
      <Introduction />
      <LoginButtonContainer />
    </StyledWrapper>
  );
};
