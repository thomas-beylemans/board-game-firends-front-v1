import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import { useDispatch } from 'react-redux';
// import { saveUser } from '../../../actions/user';

import Navbar from '../../Navbar';
import ProfileInfos from './ProfileInfos';
import CardGroup from '../../CardGroup';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';

export default function PublicProfile() {
  // const dispatch = useDispatch();  
  // useEffect(() => {
  //   const loggedUser = JSON.parse(localStorage.getItem('user'));
  //   if (loggedUser) {
  //     const decodedToken = jwt_decode(loggedUser.accessToken);
  //     const loggedUserEmail = decodedToken.user.email;
  //     const loggedUserUsername = decodedToken.user.username;
  //     const loggedUserId = decodedToken.user.id;
  //     dispatch(saveUser(loggedUserUsername, loggedUserEmail, loggedUserId));
  //   }
  // }, [dispatch]);


  const [username, setUsername] = useState(null);
  const [city, setCity] = useState(null);
  const [bio, setBio] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [games, setGames] = useState([]);

  const { id } = useParams();

  useEffect(() => {    
      axios.get(`https://boardgamefriends.herokuapp.com/api/v1/profile/${id}`)
        .then((response) => {
          console.log(response.data)
          setUsername(response.data.user.username);
          setCity(response.data.user.geo.city);
          setBio(response.data.user.bio);
          setAvatar(response.data.user.avatar);
          setGames(response.data.games);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          console.log('J\'ai tout récupéré')
        });  
  }, [id]);

  
  
  if (!id) {
    return <Navigate to="/error" replace />;
  }
  return (
    <div className="profile">
      <Navbar />
      <div className='profile__container'>
      <ProfileInfos username={username} city={city} bio={bio} avatar={avatar} games={games}/>
      <CardGroup array={gamesArray}/>
      </div>
      <Footer />
    </div>
  );
}
