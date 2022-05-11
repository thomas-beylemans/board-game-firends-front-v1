import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfos } from '../../../actions/user';

import Navbar from '../../Navbar';
import ProfileInfos from './ProfileInfos';
import CardGroup from '../../CardGroup';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';

export default function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfos());
  }, [dispatch]);

  return (
    <div className="profile">
      <Navbar />
      <div className='profile__container'>
      <ProfileInfos />
      <CardGroup array={gamesArray}/>
      </div>
      <Footer />
    </div>
  );
}
