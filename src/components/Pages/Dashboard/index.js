import { Card, Header, Grid } from 'semantic-ui-react';

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
            <Grid columns={2} stackable className="dashboard__content">
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h2'>Mes événements à venir</Header>
                        <Card.Group
                            itemsPerRow={3}
                            stackable
                            className="cards"
                        >
                            <OneCard></OneCard>
                            <OneCard></OneCard>
                            <OneCard></OneCard>
                        </Card.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2'>Mes événements organisés</Header>
                        <Card.Group
                            itemsPerRow={3}
                            stackable
                            className="cards"
                        >
                            <OneCard></OneCard>
                            <OneCard></OneCard>
                            <OneCard></OneCard>
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h2'>Mes jeux</Header>
                        <Card.Group
                            itemsPerRow={3}
                            stackable
                            className="cards"
                        >
                            <OneCard></OneCard>
                            <OneCard></OneCard>
                            <OneCard></OneCard>
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer />
        </div>
    );
}