import PropTypes from 'prop-types';
import { Card, Segment, Header, Image, Button, Icon } from 'semantic-ui-react';
import './styles.scss';

export default function DeleteGames({ title, games, handleDeleteGame }) {

  return (
    <Segment className='games-segment' color='orange' padded>
      <Header as='h1' color='orange'>{title}</Header>
      <Card.Group centered children={games}>
        {games.map(game => (
          <Card key={game.id}>
            <Image src={game.picture} />
            <Card.Content>
              <Card.Header>{game.name}</Card.Header>
            </Card.Content>
            <Button color='red' onClick={handleDeleteGame} value={game.id} icon>
              <Icon name='trash alternate' />
            </Button>
          </Card>
        ))}
      </Card.Group>
    </Segment>
  );
};

DeleteGames.propTypes = {
  title: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired,
  handleDeleteGame: PropTypes.func.isRequired,
};


