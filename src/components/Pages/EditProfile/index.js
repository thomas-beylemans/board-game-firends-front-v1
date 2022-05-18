import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfos } from '../../../actions/user';
import { fetchAPI } from '../../../utils/fetchAPI';
import { addGame } from '../../../actions/game';

import Navbar from '../../Navbar';
import EditProfileInfos from './EditProfileInfos';
import AddGame from './AddGame';
import DeleteGames from './DeleteGames';
import Footer from '../../Footer';
import './styles.scss';

export default function EditProfile() {
  const dispatch = useDispatch();

  const [myGames, setMyGames] = useState([]);
  const [gameArray, setGameArray] = useState([]);
  const [gameName, setGameName] = useState('');


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

  useEffect(() => {
    dispatch(getUserInfos());
    fetchUserGames(); 
  }, []);

    return (
        <div className="profile">
            <Navbar />
            <div className='profile__container'>
            <EditProfileInfos />
            <AddGame handleChange={handleChange} handleClickAdd={handleClickAdd} gameArray={gameArray} gameName={gameName} />
            <DeleteGames title={'Ma ludothèque'} games={myGames} />
            </div>
            <Footer />
        </div>
    );
}
