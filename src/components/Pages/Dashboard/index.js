import {Card, Header, Grid} from 'semantic-ui-react';

import Navbar from '../../../components/Navbar';
import Banner from '../../Banner';
import Footer from '../../Footer';
import OneCard from '../../OneCard';

import './styles.scss';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />
            <Banner />
            <div className="dashboard__content">
                <Grid
                    columns={2}
                    stackable
                    className="dashboard__content__cardgroups"
                >
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h2">Mes événements à venir</Header>
                            <Card.Group
                                stackable
                                className="dashboard__content__cardgroups__cards"
                            >
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                            </Card.Group>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h2">Mes événements organisés</Header>
                            <Card.Group
                                stackable
                                className="dashboard__content__cardgroups__cards"
                            >
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h2">Mes jeux</Header>
                            <Card.Group
                                stackable
                                className="dashboard__content__cardgroups__cards"
                            >
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                                <OneCard
                                    img="https://jeudecarte.net/wp-content/uploads/2019/02/ascension-810x507.jpg"
                                    title="Ascension"
                                    owner="François"
                                />
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}
