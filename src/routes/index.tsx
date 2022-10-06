import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { CreateAccount } from '../pages/CreateAccount';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:name" element={<Profile />} />
      </Router>
    </BrowserRouter>
  );
}
