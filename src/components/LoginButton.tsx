import React, { FC } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

export type LoginButtonPops = {
  width?: number;
  onClick: () => void;
};

const StyledButton = styled(Button)`
  width: ${(props) => props.width || 100}%;
`;

export const LoginButton: FC<LoginButtonPops> = (props) => {
  const { width, onClick } = props;

  return (
    <>
      <StyledButton inverted color="green" width={width} onClick={onClick}>
        LOG IN
      </StyledButton>
    </>
  );
};
