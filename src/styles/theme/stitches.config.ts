import { createStitches } from '@stitches/react';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  theme: {
    fonts: {
      cairo: "'Cairo', sans-serif",
    },
    colors: {
      red800: '#300219',
      red600: '#af053f',
      red400: '#bb2e57',
      black: '#0b0e16',
      gray300: '#696c74',
      gray200: '#91949d',
      gray100: '#b1b4bd',
      gray50: '#f4f6ff ',
    },
  },
});
