import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Segment, Header, Image, Icon } from 'semantic-ui-react';
import './styles.scss';

export default function CardGroup({ array, title }) {
  return (
    <Segment className='games-segment' color='orange' padded>
      <Header as='h1' color='orange'>{title}</Header>
      <Card.Group centered children={array} itemsPerRow={3} stackable>
        {array.map(card => (
          <Card key={card.id} as={Link} to={`/events/${card.id}`}>
            <Image src={card.picture} />
            <Card.Content>
              <Card.Header>{card.name}</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <Icon color="orange" name="chess queen" />
                Organisé par {card.event_admin.username}
              </Card.Description>
              <Card.Description>
                <Icon color="orange" name="clock outline" />
                Date et heure {card.start_date}
              </Card.Description>
              <Card.Description>
                <Icon
                  color="orange"
                  name="map marker alternate"
                />
                {/* Lieu {card.event.geo.city} */}
              </Card.Description>
              <Card.Description>
                <Icon color="orange" name="users" />
                Nombre de joueurs {card.seats}
              </Card.Description>
              <Card.Description>
                <Icon color="orange" name="talk" />
                Description {card.description}
              </Card.Description>
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


