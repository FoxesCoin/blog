export const FONT_FAMILY = {
  regular: 'Oswald',
  thin: 'Raleway',
};

export const FONT_SIZES = {
  title: '40px',
  subtitle: '14px',

  header: '24px',
  regular: '20px',
  small: '12px',
};

export type FontSize = keyof typeof FONT_SIZES;
export type FontFamily = keyof typeof FONT_FAMILY;
