import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfos, saveUserInfos } from '../../../actions/user';
import { fetchAPI } from '../../../utils/fetchAPI';

import Navbar from '../../Navbar';
import ProfileInfos from './ProfileInfos';
import CardGroup from '../../CardGroup';
import Footer from '../../Footer';
import './styles.scss';

export default function Profile() {
  const dispatch = useDispatch();

  const [myGames, setMyGames] = useState([]);

  const fetchUserInfos = async () => {
    const userInfos = await fetchAPI('dashboard');
    setMyGames(userInfos.user.game);
  }

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
    const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
    if (loggedUser) {
      dispatch(saveUserInfos(loggedUser.user));
    }
    dispatch(getUserInfos());
    fetchUserInfos();
  }, []);


  
  return (
    <div className="profile">
      <Navbar />
      <div className='profile__container'>
      <ProfileInfos />
      <CardGroup array={myGames} title={'Ma ludothèque'}/>
      </div>
      <Footer />
    </div>
  );
}
