import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos } from '../../../actions/user';

import { Tab } from 'semantic-ui-react';

import Navbar from '../../../components/Navbar';
import Banner from '../../Banner';
import Footer from '../../Footer';
import CardGroup from '../../CardGroup';

import './styles.scss';
import PlaceHolder from '../../PlaceHolder';

export default function Dashboard() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);

  const username = useSelector(state => state.user.username);

  const fetchUserGames = async () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem('user'));
    const userInfos = await axios.get('https://boardgamefriends.herokuapp.com/api/v1/dashboard', {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      }
    });
    setGames(userInfos.data.user.game);
    setUpcomingEvents(userInfos.data.user.event);
    const allEvents = userInfos.data.user.event;
    const events = [];
    allEvents.filter(event => {
      if (event.event_admin.username === username) {
        events.push(event);
      }
    });
    setMyEvents(events);
    setLoading(false);
  }

  useEffect(() => {
    dispatch(getUserInfos());
    fetchUserGames();
  }, []);


  const tabPanels = [
    {
      menuItem: 'Mes événements à venir',
      render: () => <Tab.Pane attached>{ loading ? <PlaceHolder array={upcomingEvents} title={'Mes événements à venir'} /> : <CardGroup array={upcomingEvents} title={'Mes événements à venir'} /> }</Tab.Pane>,
    },
    {
      menuItem: 'Mes événements organisés',
      render: () => <Tab.Pane attached>{ loading ? <PlaceHolder array={myEvents} title={'Mes événements organisés'} /> : <CardGroup array={myEvents} title={'Mes événements à venir'} /> }</Tab.Pane>,
    },
    {
      menuItem: 'Mes jeux',
      render: () => <Tab.Pane attached>{ loading ? <PlaceHolder array={games} title={'Mes jeux'} /> : <CardGroup array={games} title={'Mes jeux'} /> }</Tab.Pane>,
    },
  ]

  return (
    <div className="dashboard">
      <Navbar />
      <Banner />
      <div className="dashboard__content">
          <Tab panes={tabPanels} menu={{ inverted: true, attached: false, tabular: false, color: "orange", stackable: true }} />
      </div>
      <Footer />
    </div>
  );
}
