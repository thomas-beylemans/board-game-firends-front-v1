import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../actions/user';

import Register from '../Pages/Register';
import SignIn from '../Pages/SignIn';

import './styles.scss';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      dispatch(saveUser(loggedUser.username));
    }
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={'dashboard'} />
        <Route path="/profile" element={'profile'} />
        <Route path="/profile/:username" element={'profile username'} />
        <Route path="/events" element={'events'} />
        <Route path="/events/:id" element={'events id'} />
        <Route path="/team" element={'team'} />
        <Route path="/faq" element={'faq'} />
        <Route path="/terms-of-use" element={'terms-of-use'} />
        <Route path="*" element={'error'} />
      </Routes>
    </div>
  );
}