import PropTypes from 'prop-types';
import { Card, Segment, Header, Image, Button, Icon } from 'semantic-ui-react';
import './styles.scss';

export default function CardGroup({ array, title, handleDeleteGame }) {
  return (
<Segment className='cardgroup__segment' color='orange' padded>
      <Header as='h1' color='orange'>{title}</Header>
      <Card.Group centered children={array}>
        {array.map(game => (
          <Card key={game.id} className="deletegames-card">
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

CardGroup.propTypes = {
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteGame: PropTypes.func.isRequired,
};


