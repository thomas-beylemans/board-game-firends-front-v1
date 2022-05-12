import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, Image } from 'semantic-ui-react';

import './styles.scss';

export default function Map({
  className, // determines the size of the map (--large / --small)
  position, // user position defined in the user profile - fetched from the database
  eventsList // events list fetched from the database - represented as an array of coordinates for last recent events
}) {

  console.log('eventsList =>', eventsList)
  return (
    <div className="map">
      <MapContainer
        className={className}
        center={position}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Je suis ici !
          </Popup>
        </Marker>
        {
          eventsList.map((event) => {            
            return (
              <Marker key={event.name} position={[event.geo.lat, event.geo.long]}>
                <Popup>
                  <Card>
                    <Image src={event.picture} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header><Link to={`/events/${event.id}`}>{event.name}</Link></Card.Header>
                      <Card.Meta>
                        Organisé par <Link to={`/profile/${event.event_admin.id}`}>{event.event_admin.username}</Link>
                      </Card.Meta>
                      <Card.Description>
                        {event.geo.city}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    {moment(event.start_date).format('Do MMMM YYYY, LT')}
                    </Card.Content>
                  </Card>
                </Popup>
              </Marker>
            )
          })
        }
      </MapContainer>
    </div>
  )
}

Map.propTypes = {
  className: PropTypes.string,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  eventsList: PropTypes.arrayOf(PropTypes.shape({
    geo: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};
