import OneCard from '../../../OneCard';
import { Card, Segment, Header } from 'semantic-ui-react';
import './styles.scss';

export default function Games() {


    return (
        <Segment color='orange' padded>
            <Header as='h1' color= 'orange'>Ludothèque</Header>
            <Card.Group centered>
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                    owner=''
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                    owner=''
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                    owner=''
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                    owner=''
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                    owner=''
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                    owner=''
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                    owner=''
                />
            </Card.Group>
        </Segment>
    );
}