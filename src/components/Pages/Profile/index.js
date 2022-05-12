import { useDispatch } from 'react-redux';
import { saveUserInfos } from '../../../actions/user';

import Navbar from '../../Navbar';
import ProfileInfos from './ProfileInfos';
import CardGroup from '../../CardGroup';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';
import { useEffect } from 'react';

export default function Profile() {
  const dispatch = useDispatch();

  useEffect (() => {
  const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
        if (loggedUser) {
            dispatch(saveUserInfos(loggedUser.user));
        }
  }, [dispatch]);

  return (
    <div className="profile">
      <Navbar />
      <div className='profile__container'>
      <ProfileInfos />
      <CardGroup array={gamesArray} title={'Ma ludothèque'}/>
      </div>
      <Footer />
    </div>
  );
}
