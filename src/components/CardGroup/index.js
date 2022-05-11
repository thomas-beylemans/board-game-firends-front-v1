import PropTypes from 'prop-types';
import { Card, Segment, Header, Image } from 'semantic-ui-react';
import './styles.scss';

export default function CardGroup({ array, title }) {
  return (
    <Segment className='games-segment' color='orange' padded>
      <Header as='h1' color='orange'>{title}</Header>
      <Card.Group centered children={array} itemsPerRow={3} stackable>
        {array.map(card => (
          <Card key={card.id}>
            <Image src={card.picture} />
            <Card.Content>
              <Card.Header>{card.name}</Card.Header>
            </Card.Content>
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
};


