import PropTypes from 'prop-types';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './styles.scss';

export default function Map({
  className, // determines the size of the map (--large / --small)
  position, // user position defined in the user profile - fetched from the database
  eventsList // events list fetched from the database - represented as an array of coordinates for last recent events
}) {

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
            Vous êtes ici !
          </Popup>
        </Marker>
        {
          eventsList.map((event) => {
            return (
              <Marker key={event.name} position={[event.geo.lat, event.geo.long]}>
                <Popup>
                  {event.name}
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
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};
