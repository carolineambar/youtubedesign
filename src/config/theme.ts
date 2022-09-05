const theme = {
  media: {
    desktop: 1400,
    tablet: 800,
  },
};

const darkTheme = {
  ...theme,
  colors: {
    light: '#FFFFFF',
    gray10: '#AAAAAA',
    gray20: '#303030',
    gray30: '#212121',
    gray40: '#121212',
    dark: '#000000',
  },
};

export type ThemeTypes = typeof darkTheme;
export type ThemeContextTypes = {
  theme: ThemeTypes;
};

export { darkTheme };
