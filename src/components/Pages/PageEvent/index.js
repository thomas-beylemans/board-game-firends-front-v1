import { fetchAPI } from '../../../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from '../../Navbar';
import Map from '../../Map';
import Footer from '../../Footer';
import CardGroupEvents from '../../CardGroupEvents';
import PlaceHolder from '../../PlaceHolder';

import { Header } from 'semantic-ui-react';

import './styles.scss';

// user position defined in the user profile - fetched from the database
const position = [43.6107, 3.8767];
// events list fetched from the database - represented as an array of coordinates for last recent events
const eventsList = [{ lat: 43.5107, long: 3.8767, name: 'Event 1' }, { lat: 43.6107, long: 3.9767, name: 'Event 2' }, { lat: 43.6107, long: 3.7767, name: 'Event 3' }];

export default function PageEvent() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  const fetchSelectedEvent = async () => {
    setLoading(true);
    const selectedEvent = await fetchAPI('events');
    setAllEvents(selectedEvent.events.event);
    setLoading(false);
  }

  useEffect(() => {
    fetchSelectedEvent();
  }, [dispatch]);
  console.log(allEvents)
  return (
    <div className="event">
      <Navbar />
      <Header textAlign="center" as="h1">
        Evénements en cours
      </Header>
      <Map
        className={'map__container--large'}
        position={position}
        eventsList={allEvents}
      />

      <div className="event__container">

        {loading ? <PlaceHolder array={allEvents} /> : <CardGroupEvents array={allEvents} />}

      </div>
      <Footer />
    </div>
  );
}
