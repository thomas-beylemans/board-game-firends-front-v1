import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { saveUserInfos } from '../../../actions/user';

import Navbar from '../../Navbar';
import EditProfileInfos from './EditProfileInfos';
import AddGame from './AddGame';
import DeleteGames from './DeleteGames';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';

export default function EditProfile() {

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
            <EditProfileInfos />
            <AddGame />
            <DeleteGames games={gamesArray} title={'Ma ludothèque'} />
            </div>
            <Footer />
        </div>
    );
}
