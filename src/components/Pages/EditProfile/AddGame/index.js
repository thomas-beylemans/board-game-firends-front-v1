import axios from 'axios';
import { useState } from 'react';
import { Segment, Header, Button, Grid, Dropdown } from 'semantic-ui-react'

import './styles.scss';

export default function AddGame() {

  const [gameArray, setGameArray] = useState([]);

  const handleClickAdd = () => {
    console.log('J\'enregistre mon nouveau jeu')
  }

  const handleChange = async (e) => {
    const response = await axios.get(`https://api.boardgameatlas.com/api/search?name=${e.target.value}&pretty=true&client_id=GlJMJ8GUHb`);
    const gamesList = response.data.games;
    formatGameList(gamesList);
  }

  const formatGameList = (array) => {
    const games = [];
    array.forEach(game => {
      games.push({ key: game.id, text: game.name, value: game.id, picture: game.thumb_url })
    });
    console.log(games);
    return setGameArray(games);
  }

  return (
    <div>
      <Segment className="add-game" color='orange' padded>
        <Header as='h2' color='orange'>Ajouter un jeu à ma ludothèque</Header>
        <Grid stackable>
          <Grid.Row textAlign="center" className="add-game">
            <Dropdown search selection scrolling options={gameArray} onSearchChange={handleChange} />
            <Button onClick={handleClickAdd} color="orange" size='large'>
              Enregistrer
            </Button>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
