import React, { FC } from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { StyledPlaylistButton } from './StyledPlaylistButton';
import { colorPicker } from '../utils/Color';

export type CreatePlaylistButtonProps = {
  width?: number;
};

const EnhancedStyledButton = styled(StyledPlaylistButton)<{
  baseColor: string;
  gradationColor: string;
}>`
  background: linear-gradient(
    to bottom right,
    ${(props) => props.baseColor},
    ${(props) => props.gradationColor}
  );
`;

export const CreatePlaylistButton: FC<CreatePlaylistButtonProps> = (props) => {
  const { width = 100 } = props;

  return (
    <>
      <EnhancedStyledButton
        baseColor={colorPicker('blue')}
        gradationColor={colorPicker('white')}
        width={width}
      >
        <Icon name="plus" size="big" />
      </EnhancedStyledButton>
    </>
  );
};
