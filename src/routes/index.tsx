import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { CreateAccount } from '../pages/CreateAccount';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateAccount />} />
      </Router>
    </BrowserRouter>
  );
}
