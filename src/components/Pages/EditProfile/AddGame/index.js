import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Segment, Header, Button, Grid, Input } from 'semantic-ui-react'
import { addGame } from '../../../../actions/game';

import './styles.scss';

export default function AddGame() {
  const dispatch = useDispatch();

  const [gameArray, setGameArray] = useState([]);
  const [gameName, setGameName] = useState('');

  const handleClickAdd = () => {
    const foundGame = gameArray.find(game => game.name === gameName);
    dispatch(addGame(foundGame));
    setGameName('');
  }

  const handleChange = async (e) => {
    const response = await axios.get(`https://api.boardgameatlas.com/api/search?name=${e.target.value}&pretty=true&client_id=GlJMJ8GUHb`);
    const gamesList = response.data.games;
    setGameArray(gamesList);
    setGameName(e.target.value);
  }

  return (
    <div>
      <Segment className="add-game" color='orange' padded>
        <Header as='h2' color='orange'>Ajouter un jeu à ma ludothèque</Header>
        <Grid stackable>
          <Grid.Row textAlign="center" className="add-game">
            <Input label='Nom du jeu' name="game" type="text" placeholder="Taper le nom d'un jeu" list="games" onChange={handleChange} />
            <datalist id="games">
                    {
                      gameArray.map(game => (
                        <option key={game.id} value={game.name} />
                      ))
                    }
                  </datalist>
            <Button onClick={handleClickAdd} color="orange" size='large'>
              Enregistrer
            </Button>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
