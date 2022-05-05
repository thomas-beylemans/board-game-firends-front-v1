import Navbar from '/var/www/html/APO/projet-6-trouvez-des-joueurs-front/src/components/Navbar/index.js';
import ProfileInfos from './ProfileInfos';
import Games from './Games';
// import './styles.scss';

export default function Profile() {


    return (
        <div className="profile">
            <Navbar />
            <ProfileInfos />
            <Games />
        </div>
    );
}