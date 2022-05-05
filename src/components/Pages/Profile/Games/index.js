import OneCard from '/var/www/html/APO/projet-6-trouvez-des-joueurs-front/src/components/OneCard/index.js'
import { Card } from 'semantic-ui-react';
import './styles.scss';

export default function Games() {


    return (
        <div className="ludo">
            <h1>Ludothèque</h1>
            <Card.Group centered>
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                />
                <OneCard
                    img='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg'
                    title='Ascension'
                />
            </Card.Group>
        </div>
    );

}