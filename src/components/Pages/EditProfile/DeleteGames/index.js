import PropTypes from 'prop-types';
import { Card, Segment, Header, Image, Button, Icon } from 'semantic-ui-react';
import './styles.scss';

export default function DeleteGames({ games }) {

const handleClick = () => {
console.log('Je supprime un jeu')
}

  return (
    <Segment className='games-segment' color='orange' padded>
      <Header as='h1' color='orange'>Ma ludothèque</Header>
      <Card.Group centered children={games}>
        {games.map(game => (
          <Card key={game.id}>
            <Image src={game.picture} />
            <Card.Content>
              <Card.Header>{game.name}</Card.Header>
            </Card.Content>
            <Button icon color='red' onClick={handleClick}>
              <Icon name='trash alternate' />
            </Button>
          </Card>
        ))}
      </Card.Group>
    </Segment>
  );
};

DeleteGames.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
};


