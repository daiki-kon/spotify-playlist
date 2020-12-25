import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

export type PlaylistButtonProps = {
  width?: number;
  children: ReactNode;
};

const StyledButton = styled.button<{ width: number }>`
  position: relative;
  background-color: #262626;
  width: ${(props) => props.width}%;
  padding: 1.5% 1%;
  border-radius: 10px;
  border: none;
`;

export const PlaylistButton: FC<PlaylistButtonProps> = (props) => {
  const { children, width = 100 } = props;

  return (
    <>
      <StyledButton width={width}>{children}</StyledButton>
    </>
  );
};
