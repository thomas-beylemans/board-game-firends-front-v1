import Navbar from '../../Navbar';
import ProfileInfos from './ProfileInfos';
import Games from '../../Games';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';

export default function Profile() {


  return (
    <div className="profile">
      <Navbar />
      <ProfileInfos />
      <Games games={gamesArray}/>
      <Footer />
    </div>
  );
}
