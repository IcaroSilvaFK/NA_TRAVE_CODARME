import { styled } from '../../styles/theme/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '100vh',
  background: '$red800',

  overflowY: 'auto',
  svg: {
    width: '150px',
  },

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const Image = styled('img', {
  maxWidth: '486px',
  height: '486px',
  objectFit: 'contain',
  '@media (max-width: 500px)': {
    maxWidth: '100%',
  },
});

export const ContainerContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  width: '100%',
});

export const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  h1: {
    fontSize: '48px',
    color: '$gray50',
    maxWidth: '480px',
    lineHeight: '120%',
    '@media (max-width: 500px)': {
      textAlign: 'center',
      fontSize: '40px',

      marginTop: '12px',
    },
  },
});

export const Nav = styled('nav', {
  marginTop: '30px',
  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    li: {
      padding: '8px 0',
      fontWeight: 'bold',
      borderRadius: '16px',
      fontSize: '20px',

      a: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    'li:first-child': {
      background: '$gray50',
      color: '$red800',
    },
    'li:last-child': {
      color: '$gray50',
      border: '1px solid $gray50',
    },
    '@media (max-width: 500px)': {
      width: '90%',
      margin: '0 auto',
      padding: '20px 0',
    },
  },
});
