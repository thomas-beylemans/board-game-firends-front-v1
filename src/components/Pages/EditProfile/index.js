import Navbar from '../../Navbar';
import EditProfileInfos from './EditProfileInfos';
import AddGame from './AddGame';
import DeleteGames from './DeleteGames';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';

export default function EditProfile() {


    return (
        <div className="profile">
            <Navbar />
            <div className='profile__container'>
            <EditProfileInfos />
            <AddGame />
            <DeleteGames games={gamesArray} />
            </div>
            <Footer />
        </div>
    );
}
