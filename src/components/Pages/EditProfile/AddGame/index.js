import { Segment, Header, Button, Grid, Input } from 'semantic-ui-react'

import './styles.scss';

export default function AddGame({ handleChange, handleClickAdd, gameArray, gameName }) {

  return (
    <div>
      <Segment className="add-game" color='orange' padded>
        <Header as='h2' color='orange'>Ajouter un jeu à ma ludothèque</Header>
        <Grid stackable>
          <Grid.Row textAlign="center" className="add-game">
            <Input label='Nom du jeu' name="game" type="text" placeholder="Chercher un jeu" list="games" onChange={handleChange} value={gameName} />
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
