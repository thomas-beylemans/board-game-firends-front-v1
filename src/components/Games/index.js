import { Card, Segment, Header, Image } from 'semantic-ui-react';
import './styles.scss';

export default function Games() {


    return (
        <Segment color='orange' padded>
            <Header as='h1' color='orange'>Ludothèque</Header>
            <Card.Group centered >
                <Card>
                    <Image src='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg' />
                    <Card.Content>
                        <Card.Header>Ascension</Card.Header>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src='https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg' />
                    <Card.Content>
                        <Card.Header>Ascension</Card.Header>
                    </Card.Content>
                </Card>                
            </Card.Group>
        </Segment>
    );
}