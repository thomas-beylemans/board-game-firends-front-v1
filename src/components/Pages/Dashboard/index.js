import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAPI } from '../../../utils/fetchAPI';
import { getUserInfos } from '../../../actions/user';
import { Tab } from 'semantic-ui-react';

import Navbar from '../../../components/Navbar';
import Banner from '../../Banner';
import Footer from '../../Footer';
import CardGroupEvents from '../../CardGroupEvents';
import CardGroupGames from '../../CardGroup';
import PlaceHolder from '../../PlaceHolder';

import './styles.scss';

export default function Dashboard() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);

  const fetchUserInfos = async () => {
    setLoading(true);
    const userInfos = await fetchAPI('dashboard');
    setGames(userInfos.user.game);
    setAllEvents(userInfos.user.event);
    setMyEvents(userInfos.user.event.filter(event => event.event_admin.username === userInfos.user.username));
    setLoading(false);
  }

  useEffect(() => {
    dispatch(getUserInfos());
    fetchUserInfos();
  }, [dispatch]);


  const tabPanels = [
    {
      menuItem: 'Mes événements à venir',
      render: () => <Tab.Pane attached>{loading ? <PlaceHolder array={allEvents} title={'Mes événements à venir'} /> : <CardGroupEvents array={allEvents} title={'Mes événements à venir'} />}</Tab.Pane>,
    },
    {
      menuItem: 'Mes événements organisés',
      render: () => <Tab.Pane attached>
        {
          loading ? <PlaceHolder array={myEvents} title={'Mes événements organisés'} />
            : <CardGroupEvents
              array={myEvents}
              title={'Mes événements organisés'}
            />
        }
      </Tab.Pane>,
    },
    {
      menuItem: 'Mes jeux',
      render: () => <Tab.Pane attached>{loading ? <PlaceHolder array={games} title={'Mes jeux'} /> : <CardGroupGames array={games} title={'Mes jeux'} />}</Tab.Pane>,
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
