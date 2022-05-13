import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserInfos } from '../../../actions/user';
import { fetchAPI } from '../../../utils/fetchAPI';

import Navbar from '../../Navbar';
import ProfileInfos from './ProfileInfos';
import CardGroup from '../../CardGroup';
import Footer from '../../Footer';
import './styles.scss';

export default function Profile() {
  const dispatch = useDispatch();

  const [games, setGames] = useState([]);

  const fetchUserInfos = async () => {
    const userInfos = await fetchAPI('dashboard');
    console.log(userInfos);
    setGames(userInfos.user.game);
  }

  useEffect (() => {
  const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
        if (loggedUser) {
            dispatch(saveUserInfos(loggedUser.user));
        }
  fetchUserInfos();
  }, [dispatch]);

  return (
    <div className="profile">
      <Navbar />
      <div className='profile__container'>
      <ProfileInfos />
      <CardGroup array={games} title={'Ma ludothèque'}/>
      </div>
      <Footer />
    </div>
  );
}
