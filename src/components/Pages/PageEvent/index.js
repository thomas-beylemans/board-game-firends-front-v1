import { fetchAPI } from '../../../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserInfos } from '../../../actions/user';

import Navbar from '../../Navbar';
import Map from '../../Map';
import Footer from '../../Footer';
import CardGroupEvents from '../../CardGroupEvents';
import PlaceHolder from '../../PlaceHolder';

import { Header } from 'semantic-ui-react';

import './styles.scss';


export default function PageEvent() {
  const dispatch = useDispatch();

  const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
  const position = [loggedUser.user.lat, loggedUser.user.long];

  const [loading, setLoading] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  const fetchAllEvents = async () => {
    setLoading(true);
    const selectedEvent = await fetchAPI('events?zoomFactor=10');
    if (selectedEvent.isEventFound) {
      setAllEvents(selectedEvent.event);
      console.log(selectedEvent.event)
    } else {
      setAllEvents([])
    }
    setLoading(false);
  }

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("userInfos"));
    if (loggedUser) {
      dispatch(saveUserInfos(loggedUser.user));
    }
    fetchAllEvents();
  }, []);

  return (
    <div className="event">
      <Navbar />
      <Header textAlign="center" as="h1">
        Les évènements près de chez vous
      </Header>
      <Map
        className={'map__container--large'}
        position={position}
        eventsList={allEvents}
      />
      <div className="event__container">
        {loading ? <PlaceHolder array={allEvents} title="" /> : <CardGroupEvents array={allEvents} title="" />}
      </div>
      <Footer />
    </div>
  );
}
