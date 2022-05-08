import {Card, Image, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';

export default function OneCardEvent({img, title, date, location, players}) {
    return (
        <Card as={Link} to={'/profile'} color="orange">
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Description>
                    <Icon name="game" />
                    {title}
                </Card.Description>
                <Card.Description>
                    <Icon name="clock outline" />
                    {date}
                </Card.Description>
                <Card.Description>
                    <Icon name="map marker alternate" />
                    {location}
                </Card.Description>
                <Card.Description>
                    <Icon name="users" />
                    {players}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

OneCardEvent.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};
