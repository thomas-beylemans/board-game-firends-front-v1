import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { fetchAPI } from '../../../utils/fetchAPI';
import { saveUserInfos } from '../../../actions/user';
import { Segment } from 'semantic-ui-react'

import Navbar from '../../Navbar';
import ProfileInfos from './ProfileInfos';
import CardGroup from '../../CardGroup';
import Footer from '../../Footer';
import './styles.scss';
import { useDispatch } from 'react-redux';

export default function PublicProfile() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const fetchSelectedUser = async () => {
    const selectedUser = await fetchAPI(`profile/${id}`);
    try {
      setUsername(selectedUser.user.username);
      setCity(selectedUser.user.geo.city);
      setBio(selectedUser.user.bio);
      setAvatar(selectedUser.user.avatar);
      setGames(selectedUser.user.game);
    } catch (error) {
      setError(error)
      // console.log(error)
    }
  }

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
    if (loggedUser) {
      dispatch(saveUserInfos(loggedUser.user));
    }
    fetchSelectedUser();
  }, []);

  let gamesTrue;
  if (games.length > 0) {
    gamesTrue = true;
  }

  if (error) {
    return <Navigate to="/error" replace />;
  }
  return (
    <div className="profile">
      <Navbar />
      <div className='profile__container'>
        <ProfileInfos username={username} city={city} bio={bio} avatar={avatar} />
        {gamesTrue ? <CardGroup title='' array={games} /> : <Segment color='orange' textAlign='center'>Ce joueur n'a pas encore de jeux dans sa ludothèque</Segment>}
      </div>
      <Footer />
    </div>
  );
}
