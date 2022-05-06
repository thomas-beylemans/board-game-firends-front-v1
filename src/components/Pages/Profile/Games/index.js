import OneCard from '/var/www/html/APO/projet-6-trouvez-des-joueurs-front/src/components/OneCard/index.js'
import { Card, Segment, Header } from 'semantic-ui-react';
import './styles.scss';

export default function Games() {


    return (
        <Segment color='orange' padded>
            <Header as='h1' color= 'orange'>Ludothèque</Header>
            <Card.Group centered='true' >
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