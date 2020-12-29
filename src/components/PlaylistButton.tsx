import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { colorPicker, Color } from '../utils/Color';

export type PlaylistButtonProps = {
  width?: number;
  children: ReactNode;
  backGroundColor: Color;
};

const StyledButton = styled.button<{ backGroundColor: string; width: number }>`
  position: relative;
  background-color: ${(props) => props.backGroundColor};
  width: ${(props) => props.width}%;
  max-width: 240px;
  padding: 10px;
  border-radius: 10px;
  /* アウトライン削除 */
  border: none;
  outline: none;
  /* カーソルを変化 */
  cursor: pointer;

  /* クリック時のアニメーション */
  :hover {
    top: -2px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  :active {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    top: 0;
  }
`;

export const PlaylistButton: FC<PlaylistButtonProps> = (props) => {
  const { children, backGroundColor, width = 100 } = props;

  return (
    <>
      <StyledButton
        backGroundColor={colorPicker(backGroundColor)}
        width={width}
      >
        {children}
      </StyledButton>
    </>
  );
};
