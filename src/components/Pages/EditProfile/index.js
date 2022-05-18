import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos } from '../../../actions/user';
import { fetchAPI } from '../../../utils/fetchAPI';
import { addGame } from '../../../actions/game';
import { saveCity, editUserInfos, saveBio, saveAvatar } from '../../../actions/user';
import { uploadPicture } from '../../../utils/upload';
import { useNavigate } from 'react-router-dom';
import { findCity } from '../../../utils/findCity';


import Navbar from '../../Navbar';
import EditProfileInfos from './EditProfileInfos';
import AddGame from './AddGame';
import DeleteGames from './DeleteGames';
import Footer from '../../Footer';
import './styles.scss';

export default function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [myGames, setMyGames] = useState([]);
  const [gameArray, setGameArray] = useState([]);
  const [gameName, setGameName] = useState('');
  const [suggestedCity, setSuggestedCity] = useState([]);
  const [newCity, setNewCity] = useState('');
  const [picture, setPicture] = useState('');

  const username = useSelector(state => state.user.username)
  const postcode = useSelector(state => state.user.postcode)
  const city = useSelector(state => state.user.city)
  const email = useSelector(state => state.user.email)
  const bio = useSelector(state => state.user.bio)
  const avatar = useSelector(state => state.user.avatar);

  const fetchUserGames = async () => {
    const userInfos = await fetchAPI('dashboard');
    setMyGames(userInfos.user.game);
  }

  const handleClickAdd = () => {
    const foundGame = gameArray.find(game => game.name === gameName);
    dispatch(addGame(foundGame));
    setGameName('');
    setMyGames([...myGames, foundGame]);
    dispatch(getUserInfos());
    fetchUserGames(); 
  }

  const handleChange = async (e) => {
    setGameName(e.target.value);
    const response = await axios.get(`https://api.boardgameatlas.com/api/search?name=${e.target.value}&pretty=true&client_id=GlJMJ8GUHb`);
    const gamesList = response.data.games;
    setGameArray(gamesList);
  }

  const handleChangeCity = (e) => {
    axios.get(`https://geo.api.gouv.fr/communes?nom=${e.target.value}&boost=population&fields=code,nom,centre,departement,codesPostaux`)
      .then(res => {
        setSuggestedCity(res.data);
      })
    setNewCity(e.target.value);
  };

  const handleTextarea = (event) => {
    dispatch(saveBio(event.target.value))
  }

  const handleAvatar = (event) => {
    setPicture(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCity !== '') {
    dispatch(saveCity(findCity(suggestedCity, newCity, postcode)));
    dispatch(editUserInfos())// to dispatch the action to trigger the api patch
    }
    if (picture) {
      uploadPicture(picture)
      .then(res => {
       dispatch(saveAvatar(res));
      })
    }
    navigate('/profile');
  }

  const handleClickDelete = () => {
    console.log('Je supprime mon compte')
  }

  useEffect(() => {
    dispatch(getUserInfos());
    fetchUserGames(); 
  }, []);

    return (
        <div className="profile">
            <Navbar />
            <div className='profile__container'>
            <EditProfileInfos
                handleChangeCity={handleChangeCity}
                handleTextArea={handleTextarea}
                handleAvatar={handleAvatar}
                handleSubmit={handleSubmit}
                handleClickDelete={handleClickDelete}
                username={username}
                postcode={postcode}
                city={city}
                email={email}
                bio={bio}
                avatar={avatar}
                suggestedCity={suggestedCity}
                />
            <AddGame handleChange={handleChange} handleClickAdd={handleClickAdd} gameArray={gameArray} gameName={gameName} />
            <DeleteGames title={'Ma ludothèque'} games={myGames} />
            </div>
            <Footer />
        </div>
    );
}
