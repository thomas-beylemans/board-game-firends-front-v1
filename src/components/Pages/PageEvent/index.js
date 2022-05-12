import { fetchAPI } from '../../../utils/fetchAPI';
import { useEffect, useState } from 'react';
import Map from '../../Map';
import OneCardEvent from '../../OneCardEvent';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import {Header, Card} from 'semantic-ui-react';
import './styles.scss';

// user position defined in the user profile - fetched from the database
const position = [43.6107, 3.8767];
// events list fetched from the database - represented as an array of coordinates for last recent events
const eventsList = [{lat: 43.5107, long: 3.8767, name: 'Event 1'}, {lat: 43.6107, long: 3.9767, name: 'Event 2'}, {lat: 43.6107, long: 3.7767, name: 'Event 3'}];

export default function PageEvent() {

// const [name, setName] = useState([]);
// const [date, setDate] =useState([]);
// const [seats, setSeats] =useState([]);
// const [geo, setGeo] = useState('');

// const fetchSelectedEvent = async () => {
//   const selectedEvent = await fetchAPI('events');
//   console.log(selectedEvent,'SELECT')

//   setName(selectedEvent.event[0])
//   setDate(selectedEvent.events.event.start_date)
//   setSeats(selectedEvent.events.event.seats)
//   setGeo(selectedEvent.events.event.geo.city)
//  }

// useEffect(() => {
//   fetchSelectedEvent();
// }, []);

    return (
        <div className="event">
            <Navbar />
            <Header textAlign="center" as="h1">
                Evénements en cours
            </Header>
            <Map
                className={'map__container--large'}
                position={position}
                eventsList={eventsList}
            />
            <div className="event__container">
            <Card.Group className="events" itemsPerRow={3} stackable>
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
            </Card.Group>
            </div>
            <Footer />
        </div>
    );
}
