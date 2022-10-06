import { globalCss } from './theme/stitches.config';

export const globalCSS = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  'body,#root,html': {
    width: '100%',
    height: '100%',
    fontSize: ' 1rem',
    fontFamily: '$cairo',
  },
  'input,button': {
    border: 0,
    outline: 0,
  },
  button: {
    cursor: 'pointer',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  'ul,ol': {
    listStyle: 'none',
  },
});
