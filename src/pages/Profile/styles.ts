import { transparentize } from 'polished';

import { styled } from '../../styles/theme/stitches.config';

export const Container = styled('div', {});

export const Header = styled('div', {
  background: '$red600',
});
export const ContainerHeader = styled('div', {
  maxWidth: '50%',
  margin: '0 auto',
  '@media (max-width:1000px)': {
    maxWidth: '80%',
    margin: '0 auto',
  },
  '@media (max-width:550px)': {
    maxWidth: '95%',
  },
});

export const FirstSectionHeader = styled('div', {
  display: 'flex',
  aligItems: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 0',

  svg: {
    width: '150px',
  },
  'svg:last-child': {
    width: '80px',
  },
});

export const SecondSectionHeader = styled('div', {
  padding: '20px 0',

  button: {
    background: 'transparent',
    fontSize: 'xx-large',
    color: '$gray50',
  },
  h1: {
    fontSize: '32px',
    color: '$gray50',
  },
});

export const Body = styled('main', {
  maxWidth: '50%',
  margin: '0 auto',
  marginBottom: '20px',

  '@media (max-width:1000px)': {
    maxWidth: '80%',
    margin: '0 auto',
  },
  '@media (max-width:550px)': {
    maxWidth: '95%',
  },
});

export const HeaderBody = styled('div', {
  marginTop: '40px',
  h3: {
    fontSize: 'xx-large',
    color: '$red600',
  },
});

export const HeaderCoursel = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '20px',

  button: {
    background: 'transparent',
    fontSize: '1.75rem',
    color: '$red600',
    display: 'flex',
    alignItems: 'center',
  },
  span: {
    fontSize: '1rem',
    color: '$red800',
    fontWeight: 'bold',
  },
});

export const Scoreboard = styled('div', {
  border: '1px solid $gray300',
  borderRadius: '16px',
  marginTop: '20px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '22px 0',

  span: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$gray300',
  },
});

export const ContainerScore = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',

  '>div': {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    img: {
      width: '56px',
      height: '56px',
      border: '1px solid $gray300',
      borderRadius: '8px',
    },
  },

  '@media (max-width:550px)': {
    fontSize: 'medium',
    '>div': {
      img: {
        width: '40px',
        height: '40px',
      },
    },
  },
});

export const Circle = styled('div', {
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  background: transparentize(0.8, '#bb2e57'),

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.1rem',
  color: '$red800',
  fontWeight: 'bold',

  margin: '0 10px',

  '@media (max-width:550px)': {
    width: '40px',
    height: '40px',
  },
});
