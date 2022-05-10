  import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfos } from '../../../actions/user';

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
    dispatch(getUserInfos());
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
