import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserInfos } from '../../../actions/user';
import { fetchAPI } from '../../../utils/fetchAPI';

import Navbar from '../../Navbar';
import EditProfileInfos from './EditProfileInfos';
import AddGame from './AddGame';
import DeleteGames from './DeleteGames';
import Footer from '../../Footer';
import './styles.scss';

export default function EditProfile() {
  const dispatch = useDispatch();

  const [games, setGames] = useState([]);

  const fetchUserInfos = async () => {
    const userInfos = await fetchAPI('dashboard');
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
            <EditProfileInfos />
            <AddGame />
            <DeleteGames games={games} title={'Ma ludothèque'} />
            </div>
            <Footer />
        </div>
    );
}
