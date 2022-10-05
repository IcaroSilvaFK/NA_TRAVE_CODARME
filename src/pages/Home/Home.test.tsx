import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { Home } from '.';

describe('Home component', () => {
  test('it should be render component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(
      getByText('Dê o seu palpite na Copa do Mundo do Catar 2022!'),
    ).toBeInTheDocument();
  });
});
