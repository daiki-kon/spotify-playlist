export type Color = 'dark' | 'blue' | 'subTitle' | 'white';

export const colorPicker = (color: Color) => {
  switch (color) {
    case 'dark':
      return '#262626';
    case 'blue':
      return '#450AF3';
    case 'subTitle':
      return '#b2b2b2';
    case 'white':
      return '#ffffff';
    default:
      // eslint-disable-next-line no-case-declarations
      const check: never = color;

      return '';
  }
};
