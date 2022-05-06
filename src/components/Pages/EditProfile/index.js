import Navbar from '../../Navbar';
import EditProfileInfos from './EditProfileInfos';
import EditGames from './EditGames';
import Games from '../../Games'
import './styles.scss';

export default function EditProfile() {


    return (
        <div className="profile">
            <Navbar />
            <EditProfileInfos />
            <EditGames />
            <Games />
        </div>
    );
}