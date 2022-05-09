import { Card, Grid } from 'semantic-ui-react';
import OneCard from '../../../OneCard';

export default function CardGroup() {
  return (
    <Card.Group
      centered
      stackable
    >
      <OneCard
        img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
        title='Ascension'
        owner='François'
      />
      <OneCard
        img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
        title='Ascension'
        owner='François'
      />
      <OneCard
        img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
        title='Ascension'
        owner='François'
      />
      <OneCard
        img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
        title='Ascension'
        owner='François'
      />
      <OneCard
        img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
        title='Ascension'
        owner='François'
      />
      <OneCard
        img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
        title='Ascension'
        owner='François'
      />
    </Card.Group>
  );
};
