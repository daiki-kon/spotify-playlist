import React, { FC, useEffect } from 'react';
import { Label } from 'semantic-ui-react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

import 'semantic-ui-css/semantic.min.css';

export const PlaylistPage: FC = () => {
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    console.log(width);
    console.log(height);
  }, [width, height]);

  return (
    <>
      <Label>width:{width}</Label>
      <Label>height:{height}</Label>
    </>
  );
};
