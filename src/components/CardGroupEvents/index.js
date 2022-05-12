import moment from 'moment';
import 'moment/locale/fr';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Segment, Header, Image, Icon } from 'semantic-ui-react';
import './styles.scss';

moment.locale('fr');

export default function CardGroupEvents({ array, title }) {

  return (
    <Segment className='cardgroup' color='orange' padded>
      <Header as='h1' color='orange'>{title}</Header>
      <Card.Group centered children={array} itemsPerRow={3} stackable>
        {array.map(card => (
          <Card key={card.id} as={Link} to={`/events/${card.id}`}>
            <Image src={card.picture} className="cardgroup__img" />
            <Card.Content>
              <Card.Header>{card.name}</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <Icon color="orange" name="chess queen" />
                Organisateur : {card.event_admin.username}
              </Card.Description>
              <Card.Description>
                <Icon color="orange" name="clock outline" />
                {moment(card.start_date).format('Do MMMM YYYY, LT')}
              </Card.Description>
              <Card.Description>
                <Icon
                  color="orange"
                  name="map marker alternate"
                />
              {card.geo.city}
              </Card.Description>
              <Card.Description>
                <Icon color="orange" name="users" />
                {card.seats} places disponibles
              </Card.Description>
              <Card.Description>
                <Icon color="orange" name="talk" />
                {card.description}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Segment>
  );
};

CardGroupEvents.propTypes = {
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
};


