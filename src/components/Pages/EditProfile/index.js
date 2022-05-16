import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfos } from '../../../actions/user';
import { fetchAPI, } from '../../../utils/fetchAPI';

import Navbar from '../../Navbar';
import EditProfileInfos from './EditProfileInfos';
import AddGame from './AddGame';
import DeleteGames from './DeleteGames';
import Footer from '../../Footer';
import './styles.scss';

export default function EditProfile() {
  const dispatch = useDispatch();
  
  const [myGames, setMyGames] = useState([]);

  const fetchUserInfos = async () => {
    const userInfos = await fetchAPI('dashboard');
    setMyGames(userInfos.user.game);
  }

  useEffect(() => {
    dispatch(getUserInfos());
    fetchUserInfos();
  }, [myGames]);

    return (
        <div className="profile">
            <Navbar />
            <div className='profile__container'>
            <EditProfileInfos />
            <AddGame />
            <DeleteGames games={myGames} title={'Ma ludothèque'} />
            </div>
            <Footer />
        </div>
    );
}
