import { Image, Header, Grid, Container } from 'semantic-ui-react'
import './styles.scss';

export default function ProfileInfos() {


    return (
        <Grid className="profile-infos" columns={2} divided padded stackable >
            <Grid.Row>
                <Grid.Column className="infos" >
                    <Container textAlign='center'>
                        <Image src='https://media.istockphoto.com/vectors/game-icon-sets-vector-id1146577830?k=20&m=1146577830&s=612x612&w=0&h=YtIZCEXts0TYwbJyxEIvm93k3JQJi6Cn7-k9KMfQk7M=' size='small' circular centered />
                        <Header as='h1'>Pseudo</Header>
                        <Header as='h3'>Ville</Header>
                    </Container>
                </Grid.Column>
                <Grid.Column className="description" centered>
                    <Header as='h2'>Quelques mots sur moi</Header>
                    <p>Vivamus in posuere velit. Donec eu mi enim. Fusce ut nisi rhoncus, egestas magna quis, commodo nisl. Integer blandit ipsum sed ante porttitor egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tempor fringilla nisi sed ornare. Vestibulum ac ante dapibus, bibendum sem ac, sollicitudin odio. Sed a ornare ex.
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

