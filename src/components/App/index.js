import Map from '../Map';

import './styles.scss';

export default function App() {
  // user position defined in the user profile - fetched from the database
  const position = [43.6107, 3.8767];
  // events list fetched from the database - represented as an array of coordinates for last recent events
  const eventsList = [[43.5107, 3.8767], [43.6107, 3.9767], [43.6107, 3.7767]];

  return (
    <div className="app">
      <h1>Hello boardgame world !</h1>
      <Map className={'map__container--large'} position={position} eventsList={eventsList} />
    </div>
  )
}