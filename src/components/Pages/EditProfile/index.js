import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfos } from '../../../actions/user';

import Navbar from '../../Navbar';
import EditProfileInfos from './EditProfileInfos';
import AddGame from './AddGame';
import DeleteGames from './DeleteGames';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';

export default function EditProfile() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfos());
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
