import Navbar from '../../Navbar';
import ProfileInfos from './ProfileInfos';
import CardGroup from '../../CardGroup';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';

export default function Profile() {

  return (
    <div className="profile">
      <Navbar />
      <div className='profile__container'>
      <ProfileInfos />
      <CardGroup array={gamesArray}/>
      </div>
      <Footer />
    </div>
  );
}
