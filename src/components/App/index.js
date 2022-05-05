import "./styles.scss";
import { Card } from "semantic-ui-react";
import OneCard from "../OneCard";

export default function App() {
  // user position defined in the user profile - fetched from the database
  const position = [43.6107, 3.8767];
  // events list fetched from the database - represented as an array of coordinates for last recent events
  const eventsList = [
    [43.5107, 3.8767],
    [43.6107, 3.9767],
    [43.6107, 3.7767],
  ];

  return (
    <div className="app">
      <h1>Hello boardgame world !</h1>
      <div className="test">
        <Card.Group itemsPerRow={3} stackable>
          <OneCard
            title="Monopoly à 12"
            owner="Coraline"
            date="5 mai 2022"
            location="Paris"
            img="https://zupimages.net/up/22/18/zbcp.png"
          />
        </Card.Group>
      </div>
    </div>
  );
}
