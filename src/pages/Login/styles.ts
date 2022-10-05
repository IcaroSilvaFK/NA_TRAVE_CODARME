import { transparentize } from 'polished';

import { styled } from '../../styles/theme/stitches.config';

export const Container = styled('div', {});

export const Header = styled('div', {
  borderBottom: '1px solid $red600',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 0',
  svg: {
    width: '150px',
  },
});

export const Main = styled('main', {
  maxWidth: '50%',
  margin: '0 auto',

  '@media (max-width: 700px)': {
    maxWidth: '80%',

    paddingBottom: '20px',
  },
});

export const HeaderMain = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '40px',
  gap: '10px',

  h3: {
    color: '$red800',
  },
});

export const BodyMain = styled('div', {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',

    button: {
      background: '$red600',
      color: '$gray50',
      padding: '16px 0',
      borderRadius: '16px',
      marginTop: '30px',

      '&:hover': {
        background: transparentize(0.2, '#af053f'),
      },
    },
  },
});

export const Button = styled('button', {
  background: 'transparent',
  fontSize: 'xx-large',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
});

export const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',

  input: {
    border: '1px solid $gray300',
    height: '40px',
    borderRadius: '16px',
    fontSize: '1rem',
    padding: '16px',
    color: '$gray300',
  },
});

export const Label = styled('label', {
  fontWeight: 'bold',
  color: '$gray300',
});
