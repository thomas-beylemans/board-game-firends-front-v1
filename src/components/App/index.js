import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../actions/user';

import Register from '../Pages/Register';
import SignIn from '../Pages/SignIn';

import './styles.scss';

export default function App() {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.user.logged);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      const decodedToken = jwt_decode(loggedUser.accessToken);
      const loggedUserEmail = decodedToken.user.email;
      dispatch(saveUser(loggedUser.username, loggedUserEmail));
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ logged ? <Navigate to="/dashboard" /> : <SignIn /> } />
        <Route path="/register" element={logged ? <Navigate to="/dashboard" /> : <Register /> } />
        <Route path="/dashboard" element={ logged ? <Navigate to="/dashboard" /> : <SignIn /> } />
        <Route path="/profile" element={ logged ? <Navigate to="/profile" /> : <SignIn /> } />
        <Route path="/profile/:username" element={ logged ? <Navigate to="/profile/:username" /> : <SignIn /> } />
        <Route path="/events" element={ logged ? <Navigate to="/events" /> : <SignIn /> } />
        <Route path="/events/:id" element={ logged ? <Navigate to="/events/:id" /> : <SignIn /> } />
        <Route path="/team" element={ logged ? <Navigate to="/team" /> : <SignIn /> } />
        <Route path="/faq" element={ logged ? <Navigate to="/faq" /> : <SignIn /> } />
        <Route path="/terms-of-use" element={ logged ? <Navigate to="/terms-of-use" /> : <SignIn /> } />
        <Route path="*" element={'error'} />
      </Routes>
    </div>
  );
}