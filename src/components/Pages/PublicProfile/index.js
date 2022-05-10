import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../../actions/user';

import Navbar from '../../Navbar';
import ProfileInfos from './ProfileInfos';
import Games from '../../Games';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';

export default function PublicProfile() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      const decodedToken = jwt_decode(loggedUser.accessToken);
      const loggedUserEmail = decodedToken.user.email;
      const loggedUserUsername = decodedToken.user.username;
      const loggedUserId = decodedToken.user.id;
      dispatch(saveUser(loggedUserUsername, loggedUserEmail, loggedUserId));
    }
  }, [dispatch]);

  return (
    <div className="profile">
      <Navbar />
      <div className='profile__container'>
      <ProfileInfos />
      <Games games={gamesArray}/>
      </div>
      <Footer />
    </div>
  );
}
