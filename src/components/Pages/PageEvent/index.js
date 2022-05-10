import Map from '../../Map';
import OneCardEvent from '../../OneCardEvent';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import {Header, Card} from 'semantic-ui-react';
import './styles.scss';

// user position defined in the user profile - fetched from the database
const position = [43.6107, 3.8767];
// events list fetched from the database - represented as an array of coordinates for last recent events
const eventsList = [
    [43.5107, 3.8767],
    [43.6107, 3.9767],
    [43.6107, 3.7767],
];

export default function PageEvent() {
    return (
        <div className="event">
            <Navbar />
            <Header textAlign="center" as="h1">
                Evénements en cours
            </Header>
            <Map
                className={'map__container--large'}
                position={position}
                eventsList={eventsList}
            />
            <div className="event__container">
            <Header textAlign="center" as="h2">
                Mes événements
            </Header>

            <Card.Group className="events" itemsPerRow={3} stackable>
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
                <OneCardEvent
                    img="https://zupimages.net/up/22/18/zbcp.png"
                    title="Nom event"
                    date="Date et heure"
                    location="Lieu"
                    players="Limite de joueurs"
                />
            </Card.Group>
            </div>
            <Footer />
        </div>
    );
}
