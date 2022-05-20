import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos } from '../../../actions/user';
import { fetchAPI } from '../../../utils/fetchAPI';
import { addGame } from '../../../actions/game';
import { saveCity, editUserInfos, saveBio, saveAvatar, saveUserInfos, checkCity } from '../../../actions/user';
import { uploadPicture } from '../../../utils/upload';
import { useNavigate } from 'react-router-dom';
import { findCity } from '../../../utils/findCity';
import { deleteGame } from '../../../actions/game';


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
  const [avatarOk, setAvatarOk] = useState(false);  

  const username = useSelector(state => state.user.username);
  const postcode = useSelector(state => state.user.postcode);
  // const city = useSelector(state => state.user.city);
  const email = useSelector(state => state.user.email);
  const bio = useSelector(state => state.user.bio);
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

  const handleDeleteGame = (e) => {
    dispatch(deleteGame(e.target.value));
    setMyGames(myGames.filter(game => game.id !== e.target.value));
    dispatch(getUserInfos());
    fetchUserGames();
  }

  const handleChange = async (e) => {
    setGameName(e.target.value);
    const response = await axios.get(`https://api.boardgameatlas.com/api/search?name=${e.target.value}&pretty=true&client_id=GlJMJ8GUHb`);
    const gamesList = response.data.games;
    setGameArray(gamesList);
  }

  const handleTextarea = (event) => {
    dispatch(saveBio(event.target.value));
  }

  const handleAvatar = (event) => {
    setPicture(event.target.files[0]);
    setAvatarOk(true)
  }

  const handleChangeCity = (e) => {
    const cityList = []
    axios.get(`https://geo.api.gouv.fr/communes?nom=${e.target.value}&boost=population&fields=code,nom,centre,departement,codesPostaux`)
      .then(res => {
        res.data.map(city => {
          cityList.push(
            {
              key: city.code,
              text: `${city.nom}, ${city.departement.code}`,
              value: `${city.nom}#${city.codesPostaux[0]}#${city.centre.coordinates[0]}#${city.centre.coordinates[1]}`,
            });
        });
        setSuggestedCity(cityList);
      })
  };

  const handleSelectCity = (e, { value }) => {
    setNewCity({
      "geo": {
        "city": value.split('#')[0],
        "postcode": value.split('#')[1],
        "long": value.split('#')[2],
        "lat": value.split('#')[3],
      }
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCity !== '') {
      dispatch(saveCity(findCity(suggestedCity, newCity, postcode)));
    }
    if (picture) {
      uploadPicture(picture)
        .then(res => {
          dispatch(saveAvatar(res));
        })
    }
    dispatch(checkCity(newCity));
    dispatch(editUserInfos())// to dispatch the action to trigger the api patch
    dispatch(saveUserInfos());
    navigate('/profile');
  }

  const handleClickDelete = () => {
    console.log('Je supprime mon compte')
  }

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
    const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
    if (loggedUser) {
      dispatch(saveUserInfos(loggedUser.user));
    }
    dispatch(getUserInfos());
    fetchUserGames();
  }, []);

  
  return (
    <div className="profile">
      <Navbar />
      <div className='profile__container'>
        <EditProfileInfos
          handleChangeCity={handleChangeCity}
          handleTextarea={handleTextarea}
          handleAvatar={handleAvatar}
          handleSubmit={handleSubmit}
          handleClickDelete={handleClickDelete}
          handleSelectCity={handleSelectCity}
          username={username}
          postcode={postcode}
          city={newCity}
          email={email}
          bio={bio}
          avatar={avatar}
          avatarOk={avatarOk}          
          suggestedCity={suggestedCity}
        />
        <AddGame handleChange={handleChange} handleClickAdd={handleClickAdd} gameArray={gameArray} gameName={gameName} />
        <DeleteGames title={'Ma ludothèque'} games={myGames} handleDeleteGame={handleDeleteGame} />
      </div>
      <Footer />
    </div>
  );
}
