import Navbar from '../../Navbar';
import EditProfileInfos from './EditProfileInfos';
import AddGame from './AddGame';
import Games from '../../Games';
import Footer from '../../Footer';
import './styles.scss';

import gamesArray from '../../../data/games';

export default function EditProfile() {


    return (
        <div className="profile">
            <Navbar />
            <EditProfileInfos />
            <AddGame />
            <Games games={gamesArray} />
            <Footer />
        </div>
    );
}
