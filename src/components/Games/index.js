import PropTypes from 'prop-types';
import { Card, Segment, Header, Image } from 'semantic-ui-react';
import './styles.scss';

export default function Games({ games }) {
  return (
    <Segment className='games-segment' color='orange' padded>
      <Header as='h1' color='orange'>Ludothèque</Header>
      <Card.Group centered children={games}>
        {games.map(game => (
          <Card key={game.id}>
            <Image src={game.image} />
            <Card.Content>
              <Card.Header>{game.name}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Segment>
  );
};

Games.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};


