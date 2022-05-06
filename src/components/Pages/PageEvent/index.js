import Map from "../../Map";
import OneCardEvent from "../../OneCardEvent";
import { Header, Card } from "semantic-ui-react";

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
    <>
      <Header textAlign="center" as="h1">
        Lorem Ipsum
      </Header>
      <Map
        className={"map__container--large"}
        position={position}
        eventsList={eventsList}
      />
      <Header textAlign="center" color="orange" as="h2">
        Lorem Ipsum
      </Header>

      <Card.Group itemsPerRow={3} stackable>
        <OneCardEvent
          img="https://zupimages.net/up/22/18/zbcp.png"
          title="Nom event"
          date="Date et heure"
          location="Lieu"
          players="Limite de joueurs"
        />
        <OneCardEvent
          img="https://cdn.pixabay.com/photo/2020/02/26/05/45/cards-4880676_960_720.jpg"
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
    </>
  );
}
