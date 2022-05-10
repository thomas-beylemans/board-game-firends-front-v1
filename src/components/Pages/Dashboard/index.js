import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../../actions/user';

import { Tab } from 'semantic-ui-react';

import Navbar from '../../../components/Navbar';
import Banner from '../../Banner';
import Footer from '../../Footer';
import Games from '../../Games';

import './styles.scss';
import gamesArray from '../../../data/games';

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      const decodedToken = jwt_decode(loggedUser.accessToken);
      const loggedUserEmail = decodedToken.user.email;
      const loggedUserUsername = decodedToken.user.username;
      const loggedUserId = decodedToken.user.id;
      dispatch(saveUser(loggedUserUsername, loggedUserEmail, loggedUserId));
    }
  }, [dispatch]);


  const tabPanels = [
    {
      menuItem: 'Mes événements à venir',
      render: () => <Tab.Pane attached>"mettre des events"</Tab.Pane>,
    },
    {
      menuItem: 'Mes événements organisés',
      render: () => <Tab.Pane attached>"mettre des events"</Tab.Pane>,
    },
    {
      menuItem: 'Mes jeux',
      render: () => <Tab.Pane attached><Games games={gamesArray} /></Tab.Pane>,
    },
  ]

  return (
    <div className="dashboard">
      <Navbar />
      <Banner />
      <div className="dashboard__content">
        <Tab panes={tabPanels} menu={{ inverted: true, attached: false, tabular: false, color: "orange", stackable: true }}/>
      </div>
      <Footer />
    </div>
  );
}
